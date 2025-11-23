(() => {
  let popup = null;
  let hideTimeout;

  //Create popup element
  function createPopup(text, x, y) {
    removePopup(); // Remove existing popup

    popup = document.createElement("div");
    popup.innerHTML = `<span style="margin-right:4px;">💜</span> Save Highlight`;

    // Apply modern styling
    Object.assign(popup.style, {
      position: "absolute",
      background: "linear-gradient(135deg, #a18cd1, #fbc2eb)",
      color: "#000",
      padding: "6px 12px",
      borderRadius: "12px",
      boxShadow: "0 6px 15px rgba(0,0,0,0.25)",
      cursor: "pointer",
      zIndex: 9999,
      opacity: 0,
      transform: "scale(0.8)",
      transition: "transform 0.2s ease, opacity 0.2s ease",
    });

    // Position popup near selection
    popup.style.top = `${y + window.scrollY - 30}px`;
    popup.style.left = `${x + window.scrollX}px`;

    document.body.appendChild(popup);

    // Animate in
    requestAnimationFrame(() => {
      popup.style.opacity = 1;
      popup.style.transform = "scale(1)";
    });

    // Click to save highlight
    popup.addEventListener("click", () => saveHighlight(text));
  }

  // Remove popup safely
  function removePopup() {
    if (popup) {
      popup.style.opacity = 0;
      popup.style.transform = "scale(0.8)";
      setTimeout(() => popup && popup.remove(), 200); // smooth fade-out
      popup = null;
      clearTimeout(hideTimeout);
    }
  }

  // Save highlight to local storage
  function saveHighlight(text) {
    if (!text) return;
    chrome.storage.local.get({ highlights: [] }, (data) => {
      const highlights = data.highlights;
      // Avoid duplicate highlights on same page
      const exists = highlights.some(
        (h) => h.text === text && h.url === window.location.href
      );
      if (!exists) {
        highlights.push({ text, url: window.location.href });
        chrome.storage.local.set({ highlights });
      }
    });
    removePopup();
  }

  // Listen for text selection
  document.addEventListener("mouseup", () => {
    const selection = window.getSelection().toString().trim();
    if (!selection) return;

    const range = window.getSelection().getRangeAt(0);
    const rect = range.getBoundingClientRect();

    createPopup(selection, rect.right, rect.top);
  });

  // Remove popup on click outside
  document.addEventListener("mousedown", (e) => {
    if (popup && !popup.contains(e.target)) removePopup();
  });
})();
