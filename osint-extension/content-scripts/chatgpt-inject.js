/**
 * OSINT 2.1 Extension - ChatGPT Content Script
 *
 * Injects generated OSINT prompts directly into ChatGPT's chat interface
 * Premium feature only
 */

// Listen for messages from background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'injectPrompt') {
    injectPromptToChatGPT(request.prompt)
      .then(() => sendResponse({ success: true }))
      .catch(error => sendResponse({ success: false, error: error.message }));
    return true; // Keep channel open for async response
  }
});

/**
 * Inject prompt into ChatGPT's input textarea
 * @param {string} prompt - The OSINT prompt to inject
 */
async function injectPromptToChatGPT(prompt) {
  // Wait for ChatGPT UI to be fully loaded
  // ChatGPT uses a textarea with id="prompt-textarea"
  await waitForElement('#prompt-textarea', 10000);

  // Find the textarea
  const textarea = document.querySelector('#prompt-textarea');

  if (!textarea) {
    throw new Error('Could not find ChatGPT input element');
  }

  // Set the value
  textarea.value = prompt;

  // Trigger input events to notify React
  const inputEvent = new Event('input', { bubbles: true });
  textarea.dispatchEvent(inputEvent);

  const changeEvent = new Event('change', { bubbles: true });
  textarea.dispatchEvent(changeEvent);

  // Focus the textarea
  textarea.focus();

  // Auto-resize the textarea (ChatGPT has auto-resize)
  textarea.style.height = 'auto';
  textarea.style.height = textarea.scrollHeight + 'px';

  // Optional: Auto-submit
  // const submitButton = document.querySelector('button[data-testid="send-button"]');
  // if (submitButton && !submitButton.disabled) {
  //   submitButton.click();
  // }

  console.log('OSINT prompt injected into ChatGPT successfully');
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

console.log('OSINT 2.1 - ChatGPT content script loaded');
