// Lesson 08 — Arrays Complete
// Covers literals, constructors, access, mutation, combination, and modern ES2023 utilities.

let x;

// --- 1. Creating Arrays ---
const numbers = [12, 45, 33, 29, 39, 102];
console.log(`${numbers} created via literal syntax`);

const mixed = [12, "hey", true, null];
console.log(`${mixed} mixes types just because it can`);

const fruits = new Array("apple", "grape", "orange");
console.log(`${fruits} created via constructor (not recommended)`);

// --- 2. Accessing and Measuring ---
x = numbers[0];
console.log(`${x} is the first number`);

x = numbers[0] + numbers[3];
console.log(`${x} is numbers[0] + numbers[3]`);

x = `My fruit is a ${fruits[2]}`;
console.log(`${x} references fruits[2]`);

x = numbers.length;
console.log(`${x} is numbers.length`);

// --- 3. Modifying Elements ---
fruits[2] = "pear";
console.log(`${fruits[2]} replaced the old fruit`);

// --- 4. Common Array Methods ---
const arr = [28, 38, 44, 29, 109];

arr.push(100);
console.log(`${arr} after push(100)`);

arr.pop();
console.log(`${arr} after pop()`);

arr.unshift(99);
console.log(`${arr} after unshift(99)`);

arr.shift();
console.log(`${arr} after shift()`);

arr.reverse();
console.log(`${arr} after reverse()`);

arr.sort(); // sorts lexicographically
console.log(`${arr} after default sort()`);

x = arr.toString();
console.log(`${x} is arr converted to string`);

x = arr.join("*");
console.log(`${x} is arr joined with '*'`);

x = arr.slice(1, 4);
console.log(`${x} is arr.slice(1,4)`);

x = arr.toSorted();
console.log(`${x} is arr.toSorted() — new sorted copy`);

// --- 5. Nested and Combined Arrays ---
const fruits2 = ["apple", "grape", "orange"];
const berries = ["strawberry", "raspberry", "blueberry"];

fruits2.push(berries);
console.log(`${fruits2} after pushing berries inside`);

x = fruits2[3][0];
console.log(`${x} is first element of nested berries array`);

const allFruits = [fruits2, berries];
console.log(`${allFruits} is a 2D array containing fruits2 and berries`);

x = allFruits[1][1];
console.log(`${x} is the second berry`);

// Spread syntax to merge arrays
x = [...fruits2, ...berries];
console.log(`${x} is merged using spread syntax`);

// --- 6. Flattening Nested Arrays ---
const arr2 = [1, 2, [3, 4, 5], 6, [7, 8]];
x = arr2.flat();
console.log(`${x} is flattened arr2`);

// --- 7. Array Utilities ---
x = Array.isArray(fruits2);
console.log(`${x} confirms fruits2 is an array`);

x = Array.from("12345");
console.log(`${x} created from string using Array.from()`);

const a = 1, b = 2, c = 3;
x = Array.of(a, b, c);
console.log(`${x} created from variables using Array.of()`);

// --- 8. Summary ---
// Arrays are ordered, mutable, and can hold anything.
// In short, they're lists pretending to be data structures.
