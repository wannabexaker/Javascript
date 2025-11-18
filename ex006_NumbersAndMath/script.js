// Lesson 06 — Numbers and Math
// Numeric objects, formatting, and math functions. Where precision goes to die.

let x;

// --- Number Object ---
const num = new Number(5); // created as object, not primitive. Rarely useful.

// Convert number to string
x = num.toString();
console.log(`${x} is num converted to string`);

// Get string length of the number
x = num.toString().length;
console.log(`${x} is the string length of num`);

// Fixed decimals (pads with zeros if needed)
x = num.toFixed(2);
console.log(`${x} is num with two fixed decimals`);

// Precision defines total digits, not decimals
x = num.toPrecision(5);
console.log(`${x} is num with five significant digits`);

// --- Math Object ---
// Built-in math functions, all pretending to be consistent

x = Math.sqrt(9);
console.log(`${x} is the square root of 9`);

x = Math.round(4.2);
console.log(`${x} is 4.2 rounded to nearest integer`);

x = Math.ceil(4.2);
console.log(`${x} is 4.2 rounded up`);

x = Math.floor(4.9);
console.log(`${x} is 4.9 rounded down`);

x = Math.random();
console.log(`${x} is a random number between 0 and 1`);

x = Math.floor(Math.random() * 100 + 1);
console.log(`${x} is a random integer between 1 and 100`);
