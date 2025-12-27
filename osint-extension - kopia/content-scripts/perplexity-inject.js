/**
 * OSINT 2.1 Extension - Perplexity.ai Content Script
 *
 * Injects generated OSINT prompts directly into Perplexity's search interface
 * Premium feature only
 */

// Listen for messages from background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'injectPrompt') {
    injectPromptToPerplexity(request.prompt)
      .then(() => sendResponse({ success: true }))
      .catch(error => sendResponse({ success: false, error: error.message }));
    return true; // Keep channel open for async response
  }
});

/**
 * Inject prompt into Perplexity's search textarea
 * @param {string} prompt - The OSINT prompt to inject
 */
async function injectPromptToPerplexity(prompt) {
  // Wait for Perplexity UI to be fully loaded
  // Perplexity uses a textarea for search input
  await waitForElement('textarea[placeholder*="Ask"]', 10000);

  // Find the textarea
  const textarea = document.querySelector('textarea[placeholder*="Ask"]') ||
                   document.querySelector('textarea');

  if (!textarea) {
    throw new Error('Could not find Perplexity input element');
  }

  // Set the value
  textarea.value = prompt;

  // Trigger input events
  const inputEvent = new Event('input', { bubbles: true });
  textarea.dispatchEvent(inputEvent);

  const changeEvent = new Event('change', { bubbles: true });
  textarea.dispatchEvent(changeEvent);

  // Focus the textarea
  textarea.focus();

  // Auto-resize if needed
  textarea.style.height = 'auto';
  textarea.style.height = textarea.scrollHeight + 'px';

  // Optional: Auto-submit
  // const submitButton = document.querySelector('button[type="submit"]');
  // if (submitButton) {
  //   submitButton.click();
  // }

  console.log('OSINT prompt injected into Perplexity successfully');
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

console.log('OSINT 2.1 - Perplexity content script loaded');
