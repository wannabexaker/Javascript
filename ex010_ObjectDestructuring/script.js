// Lesson 10 — Object Destructuring
// Shortcut syntax for object creation, and extracting values the lazy way.

// --- 1. Object Property Shorthand ---
const firstName = "Giannis";
const lastName = "Javascriptopoulos";
const age = 31;

// Same property names can be referenced directly
const person = { firstName, lastName, age };
console.log(`${person.firstName} is the firstName`);
console.log(`${person.lastName} is the lastName`);

// --- 2. Object Destructuring ---
const todo1 = {
  id1: 1,
  title1: "Take a break",
  user1: {
    name1: "Gianni",
  },
};

// Pull selected properties directly into variables
const { id1, title1 } = todo1;
console.log(`${id1} is id1 from todo1`);
console.log(`${title1} is title1 from todo1`);
console.log(`${todo1.user1.name1} is nested property user1.name1`);

// --- 3. Array Destructuring ---
const numbers = [23, 67, 33, 49, 52];

// first → 23, second → 67, rest → [33,49,52]
const [first, second, ...rest] = numbers;
console.log(`${first} is first, ${second} is second, ${rest} is the rest`);

// --- 4. Notes ---
// Destructuring saves typing and looks clever until you forget what you named things.
