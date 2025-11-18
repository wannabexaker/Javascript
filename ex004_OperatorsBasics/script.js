// Lesson 04 — Operators Basics
// Arithmetic, concatenation, and comparisons. The usual suspects.

let x;

// --- Arithmetic ---
x = 5 + 5;         // addition
console.log(x);

x = 5 - 5;         // subtraction
console.log(x);

x = 5 * 5;         // multiplication
console.log(x);

x = 5.4 / 3.2;     // division with decimals
console.log(x);

x = 7 % 5;         // remainder
console.log(x);

// --- Concatenation ---
x = "Hello" + " " + "World"; // old-school string merge
console.log(x);

// --- Exponentiation ---
x = 2 ** 3;        // 2³ = 8
console.log(x);

// --- Increment / Decrement ---
x = 1;
console.log(x);

x = x + 1;         // manual increment
console.log(x);

x--;               // postfix decrement
console.log(x);

x = 1;
console.log(x);

x++;               // postfix increment
console.log(x);

x--;               // back to 0, balance restored
console.log(x);

// --- Assignment Operators ---
x = 10;
console.log(x);

x += 5;            // add and assign
console.log(x);

x -= 5;            // subtract and assign
console.log(x);

// --- Comparison Operators ---
x = (2 == '2');    // true, weak comparison (ignores type)
console.log(x);

x = 2 === '2';     // false, strict comparison
console.log(x);

x = 2 != '2';      // false, weak inequality
console.log(x);

x = 2 !== '2';     // true, strict inequality
console.log(x);
