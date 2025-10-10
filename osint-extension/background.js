/**
 * OSINT 2.1 Extension - Background Service Worker
 *
 * Handles:
 * - Extension installation and updates
 * - Message passing between popup and content scripts
 * - Tab management for AI integration
 * - License key validation coordination
 *
 * Manifest V3 compatible
 */

// Log that service worker is starting
console.log('OSINT 2.1 Background Service Worker starting...');

// Global error handler
self.addEventListener('error', (event) => {
  console.error('Service Worker Error:', event.error);
});

// Extension installation handler
chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    console.log('OSINT 2.1 Extension installed successfully');

    // Set default values in chrome.storage.local
    chrome.storage.local.set({
      isPremium: false,
      licenseKey: null,
      promptHistory: [],
      lastVersionCheck: Date.now()
    });

    // Open welcome page (optional)
    // chrome.tabs.create({ url: 'https://osint21.com/welcome' });
  }

  if (details.reason === 'update') {
    console.log(`OSINT 2.1 Extension updated to version ${chrome.runtime.getManifest().version}`);
  }
});

// Listen for messages from popup or content scripts
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('Background received message:', request);

  // Handle "Open AI with prompt" requests
  if (request.action === 'openAI') {
    handleOpenAI(request.aiProvider, request.prompt)
      .then(result => sendResponse({ success: true, ...result }))
      .catch(error => sendResponse({ success: false, error: error.message }));
    return true; // Keep channel open for async response
  }

  // Handle "Inject prompt into AI page" requests (for premium users)
  if (request.action === 'injectPrompt') {
    handleInjectPrompt(request.prompt)
      .then(result => sendResponse({ success: true, ...result }))
      .catch(error => sendResponse({ success: false, error: error.message }));
    return true;
  }

  // Handle license validation requests
  if (request.action === 'validateLicense') {
    validateLicenseKey(request.licenseKey)
      .then(isValid => sendResponse({ success: true, isValid }))
      .catch(error => sendResponse({ success: false, error: error.message }));
    return true;
  }

  // Handle prompt history save
  if (request.action === 'savePromptHistory') {
    savePromptToHistory(request.prompt, request.metadata)
      .then(() => sendResponse({ success: true }))
      .catch(error => sendResponse({ success: false, error: error.message }));
    return true;
  }
});

/**
 * Open AI provider in new tab and optionally inject prompt
 * @param {string} aiProvider - 'claude' | 'chatgpt' | 'perplexity' | 'gemini'
 * @param {string} prompt - The OSINT prompt to inject
 */
async function handleOpenAI(aiProvider, prompt) {
  const urls = {
    claude: 'https://claude.ai/new',
    chatgpt: 'https://chat.openai.com/',
    perplexity: 'https://www.perplexity.ai/',
    gemini: 'https://gemini.google.com/'
  };

  const url = urls[aiProvider];
  if (!url) {
    throw new Error(`Unknown AI provider: ${aiProvider}`);
  }

  // Copy prompt to clipboard first (always)
  await copyToClipboard(prompt);

  // Open AI provider in new tab
  const tab = await chrome.tabs.create({ url, active: true });

  // Check if user is premium - if so, inject prompt automatically after page loads
  const storage = await chrome.storage.local.get(['isPremium']);
  if (storage.isPremium) {
    // Wait for tab to finish loading, then inject
    chrome.tabs.onUpdated.addListener(function listener(tabId, changeInfo) {
      if (tabId === tab.id && changeInfo.status === 'complete') {
        chrome.tabs.sendMessage(tab.id, {
          action: 'injectPrompt',
          prompt: prompt
        });
        chrome.tabs.onUpdated.removeListener(listener);
      }
    });

    return { message: 'Prompt copied! Injecting into AI chat...', injected: true };
  }

  return { message: `Prompt copied! Paste into ${aiProvider} manually.`, injected: false };
}

/**
 * Inject prompt into currently active AI tab (premium feature)
 * @param {string} prompt - The OSINT prompt
 */
async function handleInjectPrompt(prompt) {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  if (!tab) {
    throw new Error('No active tab found');
  }

  // Check if tab is an AI provider page
  const aiProviders = ['claude.ai', 'chat.openai.com', 'perplexity.ai', 'gemini.google.com'];
  const isAIProvider = aiProviders.some(provider => tab.url.includes(provider));

  if (!isAIProvider) {
    throw new Error('Active tab is not an AI provider page');
  }

  // Send message to content script
  await chrome.tabs.sendMessage(tab.id, {
    action: 'injectPrompt',
    prompt: prompt
  });

  return { message: 'Prompt injected successfully!' };
}

/**
 * Copy text to clipboard
 * @param {string} text - Text to copy
 */
async function copyToClipboard(text) {
  // Simplified clipboard copy - the popup already handles this
  // Background worker just passes the message
  return true;
}

/**
 * Validate license key format and checksum
 * @param {string} licenseKey - License key to validate
 * @returns {Promise<boolean>} - True if valid
 */
async function validateLicenseKey(licenseKey) {
  if (!licenseKey || typeof licenseKey !== 'string') {
    return false;
  }

  // License key format: OSINT-PRO-{UUID}-{checksum}
  const regex = /^OSINT-PRO-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9A-F]{4}$/;
  if (!regex.test(licenseKey)) {
    return false;
  }

  // Extract UUID and checksum
  const parts = licenseKey.split('-');
  const uuid = `${parts[2]}-${parts[3]}-${parts[4]}-${parts[5]}`;
  const checksum = parts[6];

  // Simple checksum validation (can be enhanced later with server-side validation)
  const expectedChecksum = simpleChecksum(uuid);
  const isValid = expectedChecksum.toUpperCase() === checksum.toUpperCase();

  if (isValid) {
    // Store premium status
    await chrome.storage.local.set({ isPremium: true, licenseKey });
    console.log('License key validated successfully');
  }

  return isValid;
}

/**
 * Simple checksum algorithm for license keys
 * @param {string} str - String to checksum
 * @returns {string} - 4-character hex checksum
 */
function simpleChecksum(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  const hex = Math.abs(hash).toString(16).toUpperCase();
  return hex.substring(0, 4).padStart(4, '0');
}

/**
 * Save prompt to history (premium feature - max 100)
 * @param {string} prompt - Generated prompt
 * @param {Object} metadata - Intelligence type, target, timestamp, etc.
 */
async function savePromptToHistory(prompt, metadata) {
  const storage = await chrome.storage.local.get(['isPremium', 'promptHistory']);

  if (!storage.isPremium) {
    throw new Error('Prompt history is a premium feature');
  }

  const history = storage.promptHistory || [];

  // Add new prompt with metadata
  history.unshift({
    id: crypto.randomUUID(),
    prompt,
    metadata,
    timestamp: Date.now()
  });

  // Keep only last 100 prompts
  const trimmedHistory = history.slice(0, 100);

  await chrome.storage.local.set({ promptHistory: trimmedHistory });
}

// Keyboard shortcuts removed - can be added later with proper manifest config
// See: https://developer.chrome.com/docs/extensions/reference/commands/

console.log('OSINT 2.1 Background Service Worker initialized');
