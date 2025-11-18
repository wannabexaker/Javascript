// Lesson 05 — Strings and Templates
// Text handling, template literals, and string methods. No magic, just concatenation.

// --- Basic Concatenation ---
let x;
const name = "John";
const age = 31;

x = "Hello, my name is " + name +
    " and I am " + age +
    " years old.";

console.log(x);

// --- Template Literals ---
// Backticks allow embedded expressions and multi-line strings
x = `My name is ${name}
and I am ${age} years old`;

console.log(x);
console.log(x, typeof x, x.length);

// --- String Object and Methods ---
const S = new String("hello world"); // rarely used, but instructive
console.log(S);

let X = S.toUpperCase();      // SHOUTS
console.log(X);

X = S.toLowerCase();          // whispers
console.log(X);

X = S.substring(2, 5);        // slice of life
console.log(X);

X = S.replace("world", "john"); // basic find/replace
console.log(X);

X = S.split("");              // array of single characters
console.log(X);
