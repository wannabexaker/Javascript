// --- Lesson 15: Function Expressions ---
// Different ways to define functions, all equally valid and confusing.

// --- Function Declaration ---
// Classic form, hoisted, and slightly self-important.
function addDollarSign(value) {
  return "$" + value;
}
console.log(addDollarSign(100));

// --- Function Expression ---
// Anonymous function living inside a variable. Like freelancing.
const addPlusSign = function (value) {
  return "+" + value;
};

console.log(addPlusSign(100));

// --- Arrow Functions ---
// The modern, short, and commitment-free version.
const add = (a, b) => {
  return a + b;
};
console.log(add(3, 4));

// Shorthand version: one-liner without braces or 'return'.
const subtract = (a, b) => a - b;
console.log(subtract(9, 3));

// Returning an object requires parentheses,
// otherwise JavaScript thinks you started a code block.
const createObj = () => ({
  name: "Mike",
});

let x = createObj();
console.log(x.name);
