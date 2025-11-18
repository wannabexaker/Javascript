// --- Lesson 23: DOM Multiple Selectors ---
// Selecting and manipulating multiple elements like a control freak.

// Select all list items (either by class 'item' or just inside '.items')
const listItems = document.querySelectorAll(".items li");

// Check what we caught
console.log(listItems);
console.log("All list items retrieved. JavaScript is now in charge.");

// Log the second item’s text
console.log(listItems[1].innerText);
console.log("Second item text detected. Prepare for chaos.");

// Change one item’s color
listItems[1].style.color = "red";

// Loop through all items
listItems.forEach((item, index) => {
  item.style.color = "red"; // paint everything red – classic power move

  if (index === 1) {
    item.remove(); // remove second item
    console.log("Removed item at index 1. It wasn’t essential anyway.");
  }

  if (index === 0) {
    // Replace first item content
    item.innerHTML = `Oranges
      <button class="remove-item btn-link text-red">
        <i class="fa-solid fa-xmark"></i>
      </button>`;
    console.log("Modified the first list item. Fresh fruit upgrade complete.");
  }
});

console.log("DOM manipulation complete. HTML now slightly more chaotic.");
