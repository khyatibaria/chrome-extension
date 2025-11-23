# Website Highlight Saver Chrome Extension

A lightweight Chrome extension that allows users to **highlight text on any webpage**, save those highlights locally, view them in a popup, and delete them.

---

## Task Overview

The goal is to build a Chrome extension that:

- Lets users select text on any webpage.
- Shows a small popup near the selection asking **“Save Highlight?”**.
- Stores all highlights locally using `chrome.storage.local`.
- Displays saved highlights in a **scrollable popup** when the extension icon is clicked.
- Allows deleting individual highlights.

---

## Features

- **Highlight text** on any webpage.
- **Save highlights locally** for later viewing.
- **Popup interface** to manage highlights.
- **Delete highlights** individually using a heart icon.

---

## Installation & Usage

### 1. Load Extension Locally

1. Clone or download the repository:

```bash
git clone https://github.com/khyatibaria/chrome-extension.git
cd chrome-extension
```

2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode** (top-right).
4. Click **Load unpacked** and select the extension folder.

---

### 2. Use the Extension

1. Highlight text on any webpage.
2. A **small popup** appears near the selection: click **“Save Highlight?”**.
3. Click the **extension icon** in the toolbar to open the popup.
4. View all saved highlights:

   - Highlighted text
   - URL of the page
   - Delete the highlighted text

---

## File Structure

```
chrome-extension/
│
├── popup.html       # Popup UI
├── popup.js         # JS logic
├── popup.css        # Styling for popup and cards
├── content.js       # Handles text selection and popup near selection
├── manifest.json    # Chrome extension configuration
├── icons/           # Optional icons
└── README.md        # Project documentation
```
