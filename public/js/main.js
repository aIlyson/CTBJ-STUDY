const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownMenu = document.querySelector(".dropdown-menu");

dropdownToggle.addEventListener("click", () => {
  const isVisible = dropdownMenu.style.visibility === "visible";
  dropdownMenu.style.visibility = isVisible ? "hidden" : "visible";
  dropdownMenu.style.opacity = isVisible ? "0" : "1";
});

const tabs = document.querySelectorAll(".tab-title");
const tabPanes = document.querySelectorAll(".tab-pane");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tabPanes.forEach((p) => p.classList.remove("active"));

    tab.classList.add("active");
    const tabId = tab.getAttribute("data-tab");
    const activeTabPane = document.getElementById(tabId);
    if (activeTabPane) {
      activeTabPane.classList.add("active");
    }
  });
});
