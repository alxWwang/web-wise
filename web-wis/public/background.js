// background.js

let connectedPorts = [];

// Handle long-lived connections
chrome.runtime.onConnect.addListener((port) => {
  console.log("Connected port:", port);
  connectedPorts.push(port); // Keep track of connected ports

  port.onDisconnect.addListener(() => {
    console.log("Port disconnected");
    connectedPorts = connectedPorts.filter((p) => p !== port);
  });

  port.onMessage.addListener((message) => {
    console.log("Message received on port:", message);

    if (message.type === "NEW_URL") {
      port.postMessage({ type: "RESPONSE", message: "Background is active" });
    }
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

// Listen for tab updates
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url) {
    console.log("Tab fully loaded:", tab.url);

    // Send a message with the new tab URL via connected ports
    connectedPorts.forEach((port) => {
      port.postMessage({
        type: "NEW_URL",
        url: tab.url,
      });
    });
  }
});
