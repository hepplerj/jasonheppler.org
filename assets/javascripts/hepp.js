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
  const e = document.querySelectorAll('input[name="theme-chooser"]'),
    t = Array.from(e),
    n = document.querySelector(".mode-status"),
    o = function (e) {
      let t = e || localStorage.getItem("user-color-scheme");
      t || "auto" === t
        ? (document.documentElement.setAttribute("data-site-theme", t), r(t))
        : r(beep.utils.getCSSCustomProperty("--site-theme"));
    },
    r = function (e) {
      (document.querySelector(
        `input[name="theme-chooser"][value=${e}]`
      ).checked = !0),
        "auto" === e
          ? (document.documentElement.removeAttribute("data-site-theme"),
            (n.innerText = "Color mode is selected automatically."))
          : (n.innerText = `Color mode is now “${e}.”`);
    };
  t.forEach((e) => {
    e.addEventListener("change", function (e) {
      e.preventDefault();
      let t = document.querySelector(
        'input[name="theme-chooser"]:checked'
      ).value;
      localStorage.setItem("user-color-scheme", t), o(t);
    });
  }),
    o(),
    window.addEventListener("storage", function (e) {
      "user-color-scheme" === e.key && o();
    });
}