// --- Lesson 22: DOM Selectors & Style Manipulation ---
// Finding, changing, and mildly bullying HTML elements.

// --- Get elements by ID ---
console.log(document.getElementById("app-title"));
console.log("Grabbed the element by ID. JavaScript officially knows it exists.");

// Get attributes
console.log(document.getElementById("app-title").id);
console.log(document.getElementById("app-title").className);

// Set attributes
document.getElementById("app-title").title = "SHOPPING LIST";
document.getElementById("app-title").setAttribute("class", "title");

const title = document.getElementById("app-title");
console.log(title);
console.log("Title element locked and loaded.");

// --- Change text content ---
title.textContent = "Shop Mode Activated";
title.innerText = "Shopping Domination";
title.innerHTML = "<strong>Shopping List</strong>";
console.log("Title text successfully manipulated three different ways for no reason.");

// --- Change styles ---
title.style.color = "red";
title.style.background = "black";
title.style.padding = "10px";
title.style.borderRadius = "10px";
console.log("Applied styles directly with JS. CSS just sighed quietly.");

// --- Query Selector Examples ---
console.log(document.querySelector("h1"));
console.log(document.querySelector("#app-title"));
console.log(document.querySelector(".title"));
console.log(document.querySelector('input[type="text"]'));
console.log(document.querySelector("li:nth-child(2)").innerText);

const secondItem = document.querySelector("li:nth-child(2)");
secondItem.innerText = "Peach Juice";
secondItem.style.color = "orange";
console.log("Second list item renamed and recolored. Power move.");

const list = document.querySelector("ul");
console.log(list);
console.log("List element retrieved. JS is now in control of your groceries.");
