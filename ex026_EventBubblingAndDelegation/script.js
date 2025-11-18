// --- Lesson 26: Event Bubbling & Delegation ---
// Demonstrating how events climb the DOM tree, and how to stop them.

const button = document.querySelector("form button");
const div = document.querySelector("form div:nth-child(2)");
const form = document.querySelector("form");

// --- Event Bubbling ---
button.addEventListener("click", (e) => {
  alert("Button was clicked");
  e.stopPropagation(); // stops the event from reaching parent elements
});

div.addEventListener("click", (e) => {
  alert("Div was clicked");
  e.stopPropagation();
});

form.addEventListener("click", (e) => {
  alert("Form was clicked");
  e.stopPropagation();
});

document.body.addEventListener("click", (e) => {
  alert("Body was clicked");
  e.stopPropagation();
});

// --- Event Delegation ---
const list = document.querySelector("ul");

// Highlight item on hover
list.addEventListener("mouseover", (e) => {
  if (e.target.tagName === "LI") {
    e.target.style.color = "red";
  }
});

// Restore color when mouse leaves the <li>
list.addEventListener("mouseout", (e) => {
  if (e.target.tagName === "LI") {
    e.target.style.color = "black";
  }
});

// Remove item on click
list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.remove();
    console.log(`Removed: ${e.target.textContent}`);
  }
});
