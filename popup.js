const container = document.getElementById("highlights-container");

function renderHighlights() {
  chrome.storage.local.get({ highlights: [] }, (data) => {
    container.innerHTML = ""; // Clear previous highlights

    data.highlights.forEach((h, index) => {
      // Create highlight container
      const div = document.createElement("div");
      div.className = "highlight-card";

      // Create text span
      const textSpan = document.createElement("span");
      textSpan.className = "highlight-text";
      textSpan.textContent = h.text;

      // Create URL span
      const urlSpan = document.createElement("span");
      urlSpan.className = "highlight-url";
      urlSpan.textContent = new URL(h.url).hostname;

      // Create delete button
      const deleteBtn = document.createElement("span");
      deleteBtn.className = "delete-btn";
      deleteBtn.textContent = "✖";
      deleteBtn.addEventListener("click", () => deleteHighlight(index));

      // Append elements to the container div
      div.appendChild(textSpan);
      div.appendChild(urlSpan);
      div.appendChild(deleteBtn);

      // Append to main container
      container.appendChild(div);
    });
  });
}

function deleteHighlight(index) {
  chrome.storage.local.get({ highlights: [] }, (data) => {
    const highlights = data.highlights;
    highlights.splice(index, 1); // Remove highlight
    chrome.storage.local.set({ highlights }, renderHighlights);
  });
}

// Initial render
renderHighlights();
