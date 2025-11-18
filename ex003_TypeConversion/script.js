// Always use F12 → Open DevTools Console
// Reason: JS errors never show on the page, only in the console.
// Without it, you have no idea why your code “does nothing”.

// Lesson 03 — Type Conversion
// Because JavaScript can't decide what anything is until it's too late.

let amount = "100"; // String containing digits

// --- String → Number ---
// parseInt: cuts off decimals, assumes base 10 unless you forget
amount = parseInt(amount);

// Unary +: the lazy dev's type converter
amount = +amount;

// Number(): the official, more judgmental version
amount = Number(amount);

// --- Number → String ---
// toString(): classic OOP style
amount = amount.toString();

// String(): same result, slightly louder
amount = String(amount);

// --- String → Decimal Number ---
// parseFloat: tolerates decimals
amount = parseFloat(amount);

// parseInt again: brutally removes them
amount = parseInt(amount);

// --- Number → Boolean ---
// 0 becomes false, everything else lives as true
amount = Boolean(amount);

console.log(amount, typeof amount); // Output the final confusion
