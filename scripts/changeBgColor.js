chrome.storage.sync.set("color", ({ color }) => {
  document.body.style.backgroundColor = color;
});