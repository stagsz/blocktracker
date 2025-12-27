/**
 * OSINT 2.1 Extension - Claude.ai Content Script
 *
 * Injects generated OSINT prompts directly into Claude's chat interface
 * Premium feature only
 */

// Listen for messages from background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'injectPrompt') {
    injectPromptToClaude(request.prompt)
      .then(() => sendResponse({ success: true }))
      .catch(error => sendResponse({ success: false, error: error.message }));
    return true; // Keep channel open for async response
  }
});

/**
 * Inject prompt into Claude's input textarea
 * @param {string} prompt - The OSINT prompt to inject
 */
async function injectPromptToClaude(prompt) {
  // Wait for Claude UI to be fully loaded
  await waitForElement('div[contenteditable="true"]', 10000);

  // Find the contenteditable div (Claude's input)
  const inputElement = document.querySelector('div[contenteditable="true"]');

  if (!inputElement) {
    throw new Error('Could not find Claude input element');
  }

  // Set the text content
  inputElement.textContent = prompt;

  // Trigger input event to notify Claude's React component
  const inputEvent = new Event('input', { bubbles: true });
  inputElement.dispatchEvent(inputEvent);

  // Focus the input
  inputElement.focus();

  // Optional: Auto-submit (user preference)
  // const submitButton = document.querySelector('button[aria-label="Send Message"]');
  // if (submitButton) {
  //   submitButton.click();
  // }

  console.log('OSINT prompt injected into Claude successfully');
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

console.log('OSINT 2.1 - Claude content script loaded');
