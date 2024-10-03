import accessibleFootnotes from "./accessibleFootnotes.js";
import enableFloatingFootnotes from "./marginalia.js";
import Headroom from "headroom.js";
// const { littlefoot } = require("littlefoot");

accessibleFootnotes();
enableFloatingFootnotes();

// littlefoot({
//   anchorPattern: /fn:/,
// });

// Theme switcher
window.beep = {};
window.beep.utils = {};
const n = beep;
n.utils.domReady = function (e) {
  "interactive" === document.readyState || "complete" === document.readyState ? e() : document.addEventListener("DOMContentLoaded", e);
};
n.utils.getCSSCustomProperty = function (e) {
  let t = window.getComputedStyle(document.documentElement).getPropertyValue(e);
  return t && t.trim();
};
n.utils.hasStorage = function () {
  let e;
  try {
      e = window.localStorage;
      var t = "__storage_test__";
      return e.setItem(t, t),
      e.removeItem(t),
      !0
  } catch (e) {
      return !1
  }
};

if ("localStorage" in window) {
  document.querySelector(".user-toggle").removeAttribute("hidden");
  const inputs = document.querySelectorAll('input[name="theme-chooser"]'),
    themeInputs = Array.from(inputs),
    modeStatus = document.querySelector(".mode-status"),
    applyTheme = function (selectedTheme) {
      let theme = selectedTheme || localStorage.getItem("user-color-scheme") || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      document.documentElement.setAttribute("data-site-theme", theme);
      updateThemeStatus(theme);
    },
    updateThemeStatus = function (theme) {
      document.querySelector(`input[name="theme-chooser"][value=${theme}]`).checked = true;
      if (theme === "auto") {
        document.documentElement.removeAttribute("data-site-theme");
        modeStatus.innerText = "Color mode is selected automatically.";
      } else {
        modeStatus.innerText = `Color mode is now “${theme}.”`;
      }
    };

  themeInputs.forEach((input) => {
    input.addEventListener("change", function (event) {
      event.preventDefault();
      let selectedTheme = document.querySelector('input[name="theme-chooser"]:checked').value;
      localStorage.setItem("user-color-scheme", selectedTheme);
      applyTheme(selectedTheme);
    });
  });

  applyTheme();

  window.addEventListener("storage", function (event) {
    if (event.key === "user-color-scheme") {
      applyTheme();
    }
  });
}