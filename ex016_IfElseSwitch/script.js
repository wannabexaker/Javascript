// --- Lesson 16: If, Else & Switch ---
// Conditional logic that explains how your code makes up its mind.

// --- Basic if statements ---
if (true) {
  console.log("Condition is true. Reality still intact.");
}

if (false) {
  console.log("Condition is false. This line was never meant to be seen.");
}

// --- Evaluation Expressions ---
const x = 10;
const y = 5;

console.log(`Evaluating if ${x} >= ${y}...`);

if (x >= y) {
  console.log(`${x} is greater than or equal to ${y}. Numbers behaving properly.`);
} else {
  console.log(`${x} is not greater than or equal to ${y}. Math has left the chat.`);
}

// --- Date-based Conditions ---
const d = new Date(2022, 9, 30, 13, 0, 0); // October 30, 2022
console.log(`Date created: ${d}`);

const hour = d.getHours();
console.log(`Current hour: ${hour}`);

if (hour < 12) {
  console.log("Good Morning. Coffee protocol initiated.");
} else if (hour < 18) {
  console.log("Good Afternoon. Motivation levels unknown.");
} else {
  console.log("Good Night. Ideal time for debugging.");
}

// --- Switch Example ---
const da = new Date(2023, 1, 10, 19, 0, 0); // February 10, 2023
console.log(`Switch testing with date: ${da}`);

const month = da.getMonth();
const hours = da.getHours();
console.log(`Detected month index: ${month}`);
console.log(`Detected hour: ${hours}`);

switch (month) {
  case 0:
    console.log("It is January. New year, same chaos.");
    break;
  case 1:
    console.log("It is February. Short month, long meetings.");
    break;
  case 2:
    console.log("It is March. The weather and your code are unstable.");
    break;
  case 3:
    console.log("It is April. Time to debug in the sunshine.");
    break;
  case 4:
    console.log("It is May. Deadlines bloom beautifully.");
    break;
  case 5:
    console.log("It is June. Half the year gone, no progress made.");
    break;
  case 6:
    console.log("It is July. Too hot to code, too lazy to stop.");
    break;
  case 7:
    console.log("It is August. Vacation plans > production plans.");
    break;
  case 8:
    console.log("It is September. Productivity respawns briefly.");
    break;
  case 9:
    console.log("It is October. Deployments are getting spooky.");
    break;
  case 10:
    console.log("It is November. Everyone’s tired, even the compiler.");
    break;
  case 11:
    console.log("It is December. Wrapping up code like bad gifts.");
    break;
  default:
    console.log("Unknown month. JavaScript lost track of time again.");
}

console.log("Switch evaluation complete. Logic successfully survived.");
