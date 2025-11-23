Website Highlight Saver Chrome Extension

A lightweight Chrome extension that allows users to highlight text on any webpage, save those highlights locally, view them in a popup, delete them.

Task Overview

The goal is to build a Chrome extension that:

Lets users select text on any webpage.

Shows a small popup near the selection asking “Save Highlight?”.

Stores all highlights locally using chrome.storage.local.

Displays saved highlights in a scrollable popup when the extension icon is clicked.

Allows deleting individual highlights.

Features

Highlight text on any webpage.

Save highlights locally for later viewing.

Popup interface to manage highlights.

Delete highlights individually.

Installation & Usage

1. Load Extension Locally

Clone or download the repository:

git clone https://github.com/<username>/chrome-extension.git
cd chrome-extension

Open Chrome and go to chrome://extensions/.

Enable Developer mode (top-right).

Click Load unpacked and select the extension folder.

2. Use the Extension

Highlight text on any webpage.

A small popup appears near the selection: click “Save Highlight?”.

Click the extension icon in the toolbar to open the popup.

View all saved highlights:

Text of the highlight

URL of the page

Delete/favorite using the heart icon

File Structure
chrome-extension/
│
├── popup.html # Popup UI
├── popup.js # JS logic
├── popup.css # Styling for popup and cards
├── content.js # Handles text selection and popup near selection
├── manifest.json # Chrome extension configuration
├── icons/ # Optional icons
└── README.md # Project documentation
