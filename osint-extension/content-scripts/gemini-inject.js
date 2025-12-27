/**
 * OSINT 2.1 Extension - Google Gemini Content Script
 *
 * Injects generated OSINT prompts directly into Gemini's chat interface
 * Premium feature only
 */

// Listen for messages from background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'injectPrompt') {
    injectPromptToGemini(request.prompt)
      .then(() => sendResponse({ success: true }))
      .catch(error => sendResponse({ success: false, error: error.message }));
    return true; // Keep channel open for async response
  }
});

/**
 * Inject prompt into Gemini's input textarea
 * @param {string} prompt - The OSINT prompt to inject
 */
async function injectPromptToGemini(prompt) {
  // Wait for Gemini UI to be fully loaded
  // Gemini uses a textarea or contenteditable div
  await waitForElement('textarea, div[contenteditable="true"]', 10000);

  // Try to find textarea first (more reliable)
  let inputElement = document.querySelector('textarea');

  // If no textarea, try contenteditable div
  if (!inputElement) {
    inputElement = document.querySelector('div[contenteditable="true"]');
  }

  if (!inputElement) {
    throw new Error('Could not find Gemini input element');
  }

  // Set the value/text content depending on element type
  if (inputElement.tagName === 'TEXTAREA') {
    inputElement.value = prompt;
  } else {
    inputElement.textContent = prompt;
  }

  // Trigger input events to notify React/Vue
  const inputEvent = new Event('input', { bubbles: true });
  inputElement.dispatchEvent(inputEvent);

  const changeEvent = new Event('change', { bubbles: true });
  inputElement.dispatchEvent(changeEvent);

  // Focus the input
  inputElement.focus();

  // Auto-resize if textarea
  if (inputElement.tagName === 'TEXTAREA') {
    inputElement.style.height = 'auto';
    inputElement.style.height = inputElement.scrollHeight + 'px';
  }

  // Optional: Auto-submit
  // Uncomment if you want to auto-submit the prompt
  // const submitButton = document.querySelector('button[aria-label="Send message"]') ||
  //                      document.querySelector('button[data-tooltip*="Send"]');
  // if (submitButton && !submitButton.disabled) {
  //   submitButton.click();
  // }

  console.log('OSINT prompt injected into Gemini successfully');
}

/**
 * Wait for an element to appear in the DOM
 * @param {string} selector - CSS selector
 * @param {number} timeout - Max wait time in ms
 * @returns {Promise<Element>}
 */
function waitForElement(selector, timeout = 5000) {
  return new Promise((resolve, reject) => {
    const element = document.querySelector(selector);
    if (element) {
      resolve(element);
      return;
    }

    const observer = new MutationObserver((mutations, obs) => {
      const element = document.querySelector(selector);
      if (element) {
        obs.disconnect();
        resolve(element);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    setTimeout(() => {
      observer.disconnect();
      reject(new Error(`Element ${selector} not found within ${timeout}ms`));
    }, timeout);
  });
}

console.log('OSINT 2.1 - Gemini content script loaded');
