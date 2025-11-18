// --- Lesson 17: Loops & Iterations ---
// Doing the same thing repeatedly until logic, patience, or RAM gives up.

// --- Basic for loop ---
for (let i = 0; i <= 10; i++) {
  if (i === 7) {
    console.log("7 is my lucky number — statistically, it’s not.");
  } else {
    console.log("Number " + i);
  }
}

// --- Break example ---
for (let i = 0; i <= 20; i++) {
  if (i === 15) {
    console.log("Breaking the loop at 15. Commitment issues.");
    break;
  }
  console.log(i);
}

// --- Continue example ---
for (let i = 0; i <= 20; i++) {
  if (i === 15) {
    console.log("Skipping 15. It knows what it did.");
    continue;
  }
  console.log(i);
}

// --- While / Do-While loops ---
let i = 0;

// DONT RUN THIS ONE IT’LL RUN FOREVER
// while (i <= 20) {
//   console.log("Number " + i);
// }

do {
  console.log("Number " + i);
  i++;
} while (i <= 20);
console.log("Do-while loop complete. Against all odds, it stopped.");

// --- Loop through arrays ---
const items = ["book", "table", "chair", "kite"];
const users = [{ name: "Giannis" }, { name: "Katerina" }, { name: "Totos" }];

for (const item of items) {
  console.log(item + " — household item or emotional support object?");
}

for (const user of users) {
  console.log(user.name + " just logged in to read errors again.");
}

// --- Loop through object properties ---
const colorObj = {
  color1: "red",
  color2: "blue",
  color3: "green",
  color4: "purple",
};

for (const key in colorObj) {
  console.log(`${key}: ${colorObj[key]} — someone's favorite color, probably.`);
}
