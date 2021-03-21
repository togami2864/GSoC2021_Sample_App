chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  document.dispatchEvent(new CustomEvent('csEvent', { detail: request }));
  sendResponse('ok');
});
