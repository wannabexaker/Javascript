// Lesson 09 — Objects Basics
// Declaring, modifying, and extending plain objects. JavaScript’s favorite container for chaos.

let x;

// --- 1. Object Declaration ---
const person = {
  name: "Giannis Javascripoulos",
  age: 31,
  isAdmin: true,
  address: {
    street: "123 Street",
    city: "Athens",
    state: "Attiki",
  },
  hobbies: ["music", "sports"],
};

console.log(`${JSON.stringify(person)} is the person object`);
console.log(person.address);               // nested object access
console.log(person.address.state);         // single property access

// --- 2. Property Deletion ---
delete person.age;
console.log(`${JSON.stringify(person)} after deleting age`);

// --- 3. Adding New Properties ---
person.hasChildren = true;
console.log(`${JSON.stringify(person)} after adding hasChildren`);

// --- 4. Adding Methods ---
person.greet = function () {
  console.log("Hello, and byebye");
};

console.log(`person.greet() added as a method`);
person.greet();

// --- 5. Reference Example ---
x = person.name;
console.log(`${x} is the person's name`);

// --- 6. Note ---
// Objects can be expanded, reduced, or mutated at will. Encapsulation is optional here.