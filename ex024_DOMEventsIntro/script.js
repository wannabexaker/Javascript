// --- Lesson 24: DOM Events Intro ---
// Teaching the browser how to react when humans get click-happy.

// Select the logo image
const logo = document.querySelector("img");

// --- Event Handlers ---
const onClick = () => console.log("Click event triggered. Minimal effort, maximum satisfaction.");

// Double-click event toggles background color
const onDoubleClick = () => {
  if (document.body.style.backgroundColor !== "purple") {
    document.body.style.backgroundColor = "purple";
    document.body.style.color = "white";
    console.log("Double-click: Activated purple mode. Royal vibes.");
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    console.log("Double-click: Back to vanilla mode.");
  }
};

// Right-click event — because curiosity has consequences
const onRightClick = (e) => {
  e.preventDefault(); // stop default context menu
  console.log("Right-click detected. Trying to cheat the assignment, huh?");
};

// --- Event Listeners ---
logo.addEventListener("click", onClick);
logo.addEventListener("dblclick", onDoubleClick);
logo.addEventListener("contextmenu", onRightClick);
