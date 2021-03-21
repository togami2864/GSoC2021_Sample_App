chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  document.dispatchEvent(new CustomEvent('customEvent', { detail: request }));
  sendResponse('ok');
});
