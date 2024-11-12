let port;

chrome.runtime.onConnect.addListener(function (p) {
  console.log("Connected to React app");
  port = p;

  port.onDisconnect.addListener(function () {
    console.log("Disconnected from React app");
    port = null;
  });
});

// Log installation event
chrome.runtime.onInstalled.addListener(() => {
  console.log("React Chrome extension installed!");
});

// Listen for new tabs being created
chrome.tabs.onCreated.addListener((tab) => {
  console.log("New tab created:", tab);

  // Redirect the new tab to a specific URL
  chrome.tabs.update(tab.id, { url: "https://www.youtube.com" });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (port && changeInfo.status === "complete" && tab.url) {
    console.log("Tab fully loaded:", tab.url);

    // Send a message through the port
    port.postMessage({
      type: "NEW_URL",
      url: tab.url,
    });
  }
});