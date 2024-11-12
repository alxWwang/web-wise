let port = null;
let extensionWindowId = null; // To track the extension window
let isExtensionOpen = true;  // Flag to prevent reopening the extension window

// Listen for connections from the React app
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

// Define the listener function for tab updates
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

// Message listener
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // Ignore messages sent from the extension's own pages
  if (request.action === 'openExtension') {
    if (isExtensionOpen) {
      // Extension window is already open, do not open it again
      console.log("Extension window is already open.");
      sendResponse({ status: 'already_open' });
      return;
    }
    isExtensionOpen = true;

    console.log("Opening extension window...");
    chrome.windows.create(
      {
        url: chrome.runtime.getURL('index.html'),
        type: 'popup',
        width: 400,
        height: 600,
      },
      function (window) {
        // Store the window ID
        extensionWindowId = window.id;
        sendResponse({ status: 'opened' });
      }
    );
    // Return true to indicate you wish to send a response asynchronously
    return true;
  }
});

// Listener for window removal to reset the state when the extension window is closed
chrome.windows.onRemoved.addListener(function (windowId) {
  if (windowId === extensionWindowId) {
    console.log("Extension window closed.");
    extensionWindowId = null;
    isExtensionOpen = false;
  }
});

chrome.windows.create(
  {
    url: chrome.runtime.getURL('index.html'),
    type: 'popup',
    width: 400,
    height: 600,
  },
  function (window) {
    // Store the window ID
    extensionWindowId = window.id;
    sendResponse({ status: 'opened' });
  }
);
