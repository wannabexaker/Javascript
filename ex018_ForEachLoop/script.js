// --- Lesson 18: forEach Loop ---
// The polite way to make arrays do your bidding.

// --- Basic array iteration ---
const socials = ["Twitter", "LinkedIn", "Facebook", "Instagram"];

// For each item in the array, run the provided function
socials.forEach(function (item) {
  console.log(item);
});

// Same thing, but shorter and cooler
socials.forEach((item) => console.log(item));

// Or with a named function, because readability still matters (sometimes)
function logSocials(social) {
  console.log(social);
}
socials.forEach(logSocials);

// --- Array of Objects ---
const socialObj = [
  { name: "Twitter", url: "http://twitter.com" },
  { name: "Facebook", url: "http://facebook.com" },
  { name: "LinkedIn", url: "http://linkedin.com" },
  { name: "Instagram", url: "http://instagram.com" },
];

// For each object, show the URL in the console
socialObj.forEach((item) => console.log(item.url));

console.log("Loop complete. Every social network has been judged equally.");
