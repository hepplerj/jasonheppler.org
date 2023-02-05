import accessibleFootnotes from "./accessibleFootnotes.js";
import enableFloatingFootnotes from "./marginalia.js";
const { littlefoot } = require('littlefoot')
import Headroom from "headroom.js";

// accessibleFootnotes();
// enableFloatingFootnotes();
littlefoot({
    anchorPattern: /fn:/,
});

// grab an element
const header = document.getElementById("header-container");
// construct an instance of Headroom, passing the element
const headroom  = new Headroom(header, {tolerance : 0,});
// initialise
headroom.init();