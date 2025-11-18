// Lesson 11 — JSON Basics
// JSON: text pretending to be an object.

// --- 1. Single Object ---
const post = {
  id: 1,
  title: "Post One",
  body: "This is the body",
};

console.log(`${JSON.stringify(post)} is a normal JS object`);

// --- 2. Object → JSON ---
const str = JSON.stringify(post);
console.log(`${str} is post converted to JSON string`);

// --- 3. JSON → Object ---
const obj = JSON.parse(str);
console.log(`${JSON.stringify(obj)} is parsed back to object`);

// --- 4. Array of Objects ---
const posts = [
  { id: 1, title: "Post One", body: "This is the body" },
  { id: 2, title: "Post Two", body: "This is another body" },
];

console.log(`${JSON.stringify(posts)} is an array of objects`);

// --- 5. Array → JSON ---
const str2 = JSON.stringify(posts);
console.log(`${str2} is posts array converted to JSON string`);

// --- 6. Note ---
// JSON files usually live separately, as .json data sources.
// Example: data.json (see below)
