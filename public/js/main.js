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

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
const menuLinks = document.querySelectorAll(".menu a");

menuToggle?.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  menu?.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});

dropdownToggles.forEach((toggle) => {
  toggle.addEventListener("click", (e) => {
    if (window.innerWidth <= 992) {
      e.preventDefault();
      const dropdown = toggle.parentElement;
      dropdown?.classList.toggle("active");

      dropdownToggles.forEach((otherToggle) => {
        if (otherToggle !== toggle) {
          otherToggle.parentElement?.classList.remove("active");
        }
      });
    }
  });
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 992) {
      menu?.classList.remove("active");
      menuToggle?.classList.remove("active");
      document.body.classList.remove("no-scroll");
    }
  });
});

const style = document.createElement("style");
style.textContent = ".no-scroll { overflow: hidden; }";
document.head.appendChild(style);