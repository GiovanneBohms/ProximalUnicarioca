chrome.webNavigation.onCompleted.addListener((details) => {
  chrome.scripting.executeScript({
    target: { tabId: details.tabId },
    files: ["src/main.js"]
  }).then(() => console.log("✅ Script injetado automaticamente!"));
}, { url: [{ hostContains: "proximal.unicarioca.edu.br" }] });
