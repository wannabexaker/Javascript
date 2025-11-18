// --- Lesson 25: Form Events ---
// How to stop forms from doing their job, just to show off console logs.

const form = document.getElementById("item-form");

// (e) is the event object. It shows up uninvited but knows everything.
function onSubmit(e) {
  e.preventDefault();
  const item = document.getElementById("item-input").value;
  const priority = document.getElementById("priority-input").value;

  if (item === "" || priority === "0") {
    alert("Fill the fields — JS refuses to proceed with nonsense.");
    return;
  }

  console.log("Submitted:", item, priority);
}

// --- Using FormData like a pro ---
function onSubmit2(e) {
  e.preventDefault();

  const formData = new FormData(form);
  const item = formData.get("item");
  const priority = formData.get("priority");

  console.log("FormData captured:", item, priority);

  const entries = formData.entries();

  // Hint: for...of, not for...in — we’re looping values, not keys
  for (let entry of entries) {
    console.log(entry[0] + ": " + entry[1]);
  }
}

// Toggle between the two submit functions if you want
// form.addEventListener('submit', onSubmit);
form.addEventListener("submit", onSubmit2);

// --- Input tracking ---
const itemInput = document.getElementById("item-input");
const heading = document.querySelector("h1");

function onInput(e) {
  heading.textContent = e.target.value;
}

itemInput.addEventListener("input", onInput);

// --- Checkbox state tracker ---
const checkbox = document.getElementById("checkbox");

function onChecked(e) {
  const isChecked = e.target.checked;
  heading.textContent = isChecked ? "Checked" : "Not Checked";
}

checkbox.addEventListener("input", onChecked);
