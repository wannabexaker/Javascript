// Lesson 13 — Functions
// Because sometimes repeating yourself is too much work, even for JavaScript.

// --- 1. Define a function ---
// Functions: little reusable blocks that pretend to organize your code.
function sayHello() {
  console.log("Hello JavaScript");
}

// --- Call it ---
// Because defining a function and never calling it is peak human behavior.
sayHello();

// --- 2. Function with parameters ---
// Parameters: the illusion of flexibility.
function add(num1, num2) {
  console.log(num1 + num2);
}

// --- Call it with actual numbers ---
add(5, 10); // Output: 15. Math still works.

// --- 3. Function with return ---
// `return` ends the function immediately. Everything after it is ignored. Like your weekend plans.
function subtract(num1, num2) {
  return num1 - num2;
  console.log("After the return"); // Never runs. Ever.
}

const result = subtract(10, 2);
console.log(result); // 8, unless JavaScript feels creative today.

// --- 4. Default parameters ---
// If the user forgets to pass something, you can pretend you planned for that.
function registerUser(user = "Bot") {
  // Default value: "Bot". No crash, just quiet judgment.
  return user + " is registered";
}

console.log(registerUser()); // "Bot is registered"

// --- 5. Rest parameters ---
// Collects all arguments into one array. Great for people who don’t know when to stop adding numbers.
function sum(...numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5, 6, 7)); // 28, assuming basic arithmetic holds.

// --- 6. Object as parameter ---
// Descriptive, readable, and one typo away from total chaos.
function loginUser(user) {
  return `The user ${user.name} with the id of ${user.id} is logged in`;
}

const user = {
  id: 1,
  name: "John",
};

console.log(loginUser(user)); // Because John always logs in first.
