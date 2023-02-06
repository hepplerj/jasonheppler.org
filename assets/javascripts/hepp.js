// import accessibleFootnotes from "./accessibleFootnotes.js";
// import enableFloatingFootnotes from "./marginalia.js";
const { littlefoot } = require('littlefoot')
import Headroom from "headroom.js";

// accessibleFootnotes();
// enableFloatingFootnotes();

littlefoot({
    anchorPattern: /fn:/,
});

// Headroom
const header = document.getElementById("header-container");
const headroom  = new Headroom(header, {tolerance : 0,});
headroom.init();

// Hamburger menu 
const menuItems = document.querySelectorAll(".menu")
const hamburger= document.querySelector(".hamburger")

function toggleMenu() {
  if (hamburger.classList.contains("is-active")){
    menuItems.forEach(
      function(menuItem) { 
        menuItem.classList.remove("mobile")
      }
    )
    header.classList.remove("is-open")
    headroom.init();
    hamburger.classList.remove("is-active")
  } else {
    menuItems.forEach(
      function(menuItem) { 
        menuItem.classList.add("mobile")
      }
    )
    header.classList.add("is-open")
    headroom.destroy();
    hamburger.classList.add("is-active")
  }
}

hamburger.addEventListener("click", toggleMenu)

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu)
  }
)
