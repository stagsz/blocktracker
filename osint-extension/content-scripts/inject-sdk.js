/**
 * BrightScope Extension - Unified Inject SDK
 *
 * A robust, provider-agnostic injection system with:
 * - Retry logic with exponential backoff
 * - DOM readiness detection
 * - Multiple selector fallbacks
 * - Success/failure feedback
 * - Provider-specific handling
 *
 * Premium feature only
 */

const BrightScopeInject = (function() {
  'use strict';

  // Provider configurations with multiple fallback selectors
  const PROVIDER_PROFILES = {
    claude: {
      name: 'Claude',
      selectors: [
        'div[contenteditable="true"]',
        'div.ProseMirror[contenteditable="true"]',
        '[data-placeholder="Reply to Claude…"]',
        'div[class*="input"][contenteditable="true"]'
      ],
      inputType: 'contenteditable',
      events: ['input'],
      readyIndicators: [
        'div[contenteditable="true"]',
        'button[aria-label*="Send"]'
      ]
    },
    chatgpt: {
      name: 'ChatGPT',
      selectors: [
        '#prompt-textarea',
        'textarea[data-id="root"]',
        'textarea[placeholder*="Message"]',
        'div[contenteditable="true"][class*="ProseMirror"]'
      ],
      inputType: 'textarea',
      events: ['input', 'change'],
      readyIndicators: [
        '#prompt-textarea',
        'button[data-testid="send-button"]'
      ]
    },
    perplexity: {
      name: 'Perplexity',
      selectors: [
        'textarea[placeholder*="Ask"]',
        'textarea[class*="search"]',
        'div[contenteditable="true"]',
        'input[type="text"][class*="search"]'
      ],
      inputType: 'auto',
      events: ['input', 'change'],
      readyIndicators: [
        'textarea[placeholder*="Ask"]',
        'button[aria-label*="Submit"]'
      ]
    },
    gemini: {
      name: 'Gemini',
      selectors: [
        'div[contenteditable="true"]',
        'rich-textarea div[contenteditable="true"]',
        'textarea[aria-label*="Enter"]',
        '.ql-editor[contenteditable="true"]'
      ],
      inputType: 'contenteditable',
      events: ['input'],
      readyIndicators: [
        'div[contenteditable="true"]',
        'button[aria-label*="Send"]'
      ]
    }
  };

  // Retry configuration
  const RETRY_CONFIG = {
    maxRetries: 3,
    baseDelay: 500,    // ms
    maxDelay: 5000,    // ms
    backoffMultiplier: 2
  };

  /**
   * Detect which provider we're on based on URL
   */
  function detectProvider() {
    const hostname = window.location.hostname;
    if (hostname.includes('claude.ai')) return 'claude';
    if (hostname.includes('openai.com')) return 'chatgpt';
    if (hostname.includes('perplexity.ai')) return 'perplexity';
    if (hostname.includes('gemini.google.com')) return 'gemini';
    return null;
  }

  /**
   * Wait for element with timeout
   */
  function waitForElement(selectors, timeout = 10000) {
    return new Promise((resolve, reject) => {
      // Try each selector immediately
      for (const selector of selectors) {
        const element = document.querySelector(selector);
        if (element && isElementReady(element)) {
          resolve(element);
          return;
        }
      }

      // Set up mutation observer
      const observer = new MutationObserver(() => {
        for (const selector of selectors) {
          const element = document.querySelector(selector);
          if (element && isElementReady(element)) {
            observer.disconnect();
            resolve(element);
            return;
          }
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true
      });

      // Timeout
      setTimeout(() => {
        observer.disconnect();
        reject(new Error(`Input element not found within ${timeout}ms`));
      }, timeout);
    });
  }

  /**
   * Check if element is ready for interaction
   */
  function isElementReady(element) {
    if (!element) return false;
    const style = window.getComputedStyle(element);
    return (
      style.display !== 'none' &&
      style.visibility !== 'hidden' &&
      element.offsetParent !== null &&
      !element.disabled
    );
  }

  /**
   * Wait for page to be fully ready
   */
  async function waitForPageReady(provider, timeout = 15000) {
    const profile = PROVIDER_PROFILES[provider];
    if (!profile) throw new Error(`Unknown provider: ${provider}`);

    const startTime = Date.now();

    while (Date.now() - startTime < timeout) {
      let ready = true;
      for (const selector of profile.readyIndicators) {
        const element = document.querySelector(selector);
        if (!element || !isElementReady(element)) {
          ready = false;
          break;
        }
      }
      if (ready) return true;
      await sleep(200);
    }

    // Even if not all indicators are ready, try anyway
    console.warn('BrightScope: Page readiness timeout, attempting injection anyway');
    return true;
  }

  /**
   * Sleep utility
   */
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Calculate retry delay with exponential backoff
   */
  function getRetryDelay(attempt) {
    const delay = RETRY_CONFIG.baseDelay * Math.pow(RETRY_CONFIG.backoffMultiplier, attempt);
    return Math.min(delay, RETRY_CONFIG.maxDelay);
  }

  /**
   * Inject text into an element
   */
  function injectText(element, text, profile) {
    const inputType = profile.inputType === 'auto'
      ? (element.tagName === 'TEXTAREA' || element.tagName === 'INPUT' ? 'textarea' : 'contenteditable')
      : profile.inputType;

    if (inputType === 'contenteditable') {
      element.textContent = text;
      // Also set innerHTML for rich text editors
      if (element.innerHTML === '') {
        element.innerHTML = text.replace(/\n/g, '<br>');
      }
    } else {
      element.value = text;
      // Auto-resize for textareas
      if (element.tagName === 'TEXTAREA') {
        element.style.height = 'auto';
        element.style.height = element.scrollHeight + 'px';
      }
    }

    // Dispatch events
    for (const eventType of profile.events) {
      const event = new Event(eventType, { bubbles: true, cancelable: true });
      element.dispatchEvent(event);
    }

    // Also dispatch a custom input event for React
    const inputEvent = new InputEvent('input', {
      bubbles: true,
      cancelable: true,
      inputType: 'insertText',
      data: text
    });
    element.dispatchEvent(inputEvent);

    // Focus the element
    element.focus();
  }

  /**
   * Verify injection was successful
   */
  function verifyInjection(element, text, profile) {
    const inputType = profile.inputType === 'auto'
      ? (element.tagName === 'TEXTAREA' || element.tagName === 'INPUT' ? 'textarea' : 'contenteditable')
      : profile.inputType;

    const currentText = inputType === 'contenteditable'
      ? element.textContent
      : element.value;

    // Check if at least 80% of the text was injected (some editors may modify whitespace)
    return currentText.length >= text.length * 0.8;
  }

  /**
   * Show visual feedback toast
   */
  function showFeedback(message, isSuccess) {
    // Remove any existing toast
    const existing = document.getElementById('brightscope-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'brightscope-toast';
    toast.textContent = message;
    toast.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      padding: 12px 20px;
      background: ${isSuccess ? '#28a745' : '#dc3545'};
      color: white;
      border-radius: 8px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 14px;
      font-weight: 500;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      z-index: 999999;
      animation: brightscopeToastIn 0.3s ease;
    `;

    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
      @keyframes brightscopeToastIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `;
    document.head.appendChild(style);

    document.body.appendChild(toast);

    // Remove after 3 seconds
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(20px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  /**
   * Main inject function with retry logic
   */
  async function inject(prompt, options = {}) {
    const provider = options.provider || detectProvider();
    if (!provider) {
      throw new Error('Could not detect AI provider from URL');
    }

    const profile = PROVIDER_PROFILES[provider];
    if (!profile) {
      throw new Error(`Unsupported provider: ${provider}`);
    }

    console.log(`BrightScope: Injecting into ${profile.name}...`);

    let lastError = null;

    for (let attempt = 0; attempt <= RETRY_CONFIG.maxRetries; attempt++) {
      try {
        // Wait for page to be ready
        await waitForPageReady(provider);

        // Find input element
        const element = await waitForElement(profile.selectors, 10000);

        if (!element) {
          throw new Error('Input element not found');
        }

        // Inject the text
        injectText(element, prompt, profile);

        // Small delay to let React/Vue process
        await sleep(100);

        // Verify injection
        if (verifyInjection(element, prompt, profile)) {
          console.log(`BrightScope: Successfully injected into ${profile.name}`);
          showFeedback(`✓ Prompt injected into ${profile.name}`, true);
          return { success: true, provider: profile.name };
        } else {
          throw new Error('Injection verification failed');
        }

      } catch (error) {
        lastError = error;
        console.warn(`BrightScope: Attempt ${attempt + 1} failed:`, error.message);

        if (attempt < RETRY_CONFIG.maxRetries) {
          const delay = getRetryDelay(attempt);
          console.log(`BrightScope: Retrying in ${delay}ms...`);
          await sleep(delay);
        }
      }
    }

    // All retries failed
    const errorMessage = `Failed to inject after ${RETRY_CONFIG.maxRetries + 1} attempts: ${lastError?.message}`;
    console.error('BrightScope:', errorMessage);
    showFeedback(`✗ Injection failed. Please paste manually.`, false);
    throw new Error(errorMessage);
  }

  // Public API
  return {
    inject,
    detectProvider,
    PROVIDER_PROFILES
  };
})();

// Listen for messages from background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'injectPrompt') {
    BrightScopeInject.inject(request.prompt)
      .then(result => sendResponse({ success: true, ...result }))
      .catch(error => sendResponse({ success: false, error: error.message }));
    return true; // Keep channel open for async response
  }

  if (request.action === 'ping') {
    sendResponse({ success: true, provider: BrightScopeInject.detectProvider() });
    return false;
  }
});

// Log when loaded
console.log(`BrightScope Inject SDK loaded for: ${BrightScopeInject.detectProvider() || 'unknown provider'}`);
