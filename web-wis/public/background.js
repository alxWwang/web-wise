
chrome.runtime.onInstalled.addListener(() => {
    console.log("React Chrome extension installed!");
  });
  
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
if (message.type === "GREET") {
    sendResponse({ greeting: "Hello from background script!" });
}
});

// background.js

// Listen for new tabs being created
chrome.tabs.onCreated.addListener((tab) => {
    console.log("New tab created:", tab);
  
    // Example: Redirect the new tab to a specific URL
    chrome.tabs.update(tab.id, { url: "https://www.youtube.com" });
  });

  // Optionally, listen for tab updates if you need to handle events after loading
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete") {
    console.log("Tab fully loaded:", tab.url);
    chrome.runtime.sendMessage({
        type: "NEW_URL",
        url: tab.url
    })
  }
});
  

  