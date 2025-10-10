// Minimal test service worker
console.log('Service worker test loaded successfully');

chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed');
});
