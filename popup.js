document.getElementById("openDashboard").addEventListener("click", () => {
  chrome.tabs.create({ url: "newtab.html" });
});

document.querySelectorAll(".quick-game").forEach((el) => {
  el.addEventListener("click", () => {
    chrome.tabs.create({ url: "newtab.html" });
  });
});
