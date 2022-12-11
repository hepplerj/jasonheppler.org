const SNOWFLAKES = 10;

function init() {
  /* Fill the empty container with freshly driven snow */
  let first = true;
  for (let i = 0; i < SNOWFLAKES; i++) {
    document.body.appendChild(createASnowflake(first));
    first = false;
  }
}

/*
		Receives the lowest and highest values of a range and
		returns a random integer that falls within that range.
	*/
function randomInteger(low, high) {
  return low + Math.floor(Math.random() * (high - low));
}

/*
	   Receives the lowest and highest values of a range and
	   returns a random float that falls within that range.
	*/
function randomFloat(low, high) {
  return low + Math.random() * (high - low);
}

function randomItem(items) {
  return items[randomInteger(0, items.length - 1)];
}

/* Returns a duration value for the falling animation.*/
function durationValue(value) {
  return value + "s";
}

function createASnowflake(is_first) {
  let flakes = ["2746", "2745", "2744", "2733"];
  let superFlakes = [
    "2746",
    "2745",
    "2744",
    "fc7",
    "274b",
    "2749",
    "2747",
    "2746",
    "273c",
    "273b",
    "2734",
    "2733",
    "2732",
    "2731",
    "2725",
  ];
  let sizes = [
    "tiny",
    "tiny",
    "tiny",
    "small",
    "small",
    "small",
    "small",
    "medium",
    "medium",
    "medium",
    "medium",
    "medium",
    "medium",
    "large",
    "massive",
  ];

  /* Start by creating a wrapper div, and an empty span  */
  let snowflakeElement = document.createElement("div");
  snowflakeElement.className = "snowflake " + randomItem(sizes);

  let snowflake = document.createElement("span");
  snowflake.innerHTML = "&#x" + randomItem(flakes) + ";";

  snowflakeElement.appendChild(snowflake);

  /* Randomly choose a spin animation */
  let spinAnimationName =
    Math.random() < 0.5 ? "clockwiseSpin" : "counterclockwiseSpin";

  /* Randomly choose a side to anchor to, keeps the middle more dense and fits liquid layout */
  let anchorSide = Math.random() < 0.5 ? "left" : "right";

  /* Figure out a random duration for the fade and drop animations */
  let fadeAndDropDuration = durationValue(randomFloat(5, 11));

  /* Figure out another random duration for the spin animation */
  let spinDuration = durationValue(randomFloat(4, 8));

  // how long to wait before the flakes arrive
  let flakeDelay = is_first ? 0 : durationValue(randomFloat(0, 10));

  snowflakeElement.style.webkitAnimationName = "fade, drop";
  snowflakeElement.style.webkitAnimationDuration =
    fadeAndDropDuration + ", " + fadeAndDropDuration;
  snowflakeElement.style.webkitAnimationDelay = flakeDelay;

  /* Position the snowflake at a random location along the screen, anchored to either the left or the right*/
  snowflakeElement.style[anchorSide] = randomInteger(0, 60) + "%";

  snowflake.style.webkitAnimationName = spinAnimationName;
  snowflake.style.webkitAnimationDuration = spinDuration;

  /* Return this snowflake element so it can be added to the document */
  return snowflakeElement;
}

window.onload = init;
