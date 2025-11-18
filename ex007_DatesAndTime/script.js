// Lesson 07 — Dates and Time
// Working with Date objects, timestamps, and custom formatting. Time still wins.

let d;

// --- Current Date and Time ---
d = new Date();
console.log(`${d} is the current date and time`);

// --- Convert to String ---
d = d.toString();
console.log(`${d} is the same date converted to string`);

// --- Specific Date (months start at 0 because logic is optional) ---
d = new Date(2021, 0, 12, 30, 0);
console.log(`${d} is a manually created date`);

// --- Create Dates from Strings ---
d = new Date("2021-07-10T12:30:00");
console.log(`${d} created from ISO-like string`);

d = new Date("07-10-2021 12:30:00");
console.log(`${d} created from local format string`);

d = new Date("2022-07-09");
console.log(`${d} created from YYYY-MM-DD`);

d = new Date("07-10-2022");
console.log(`${d} created from MM-DD-YYYY`);

// --- Current Timestamp ---
d = Date.now();
console.log(`${d} is milliseconds since Unix epoch`);

// --- Get Timestamp from Date Object ---
d = new Date();
console.log(`${d} is a Date object again`);

d = d.getTime();
console.log(`${d} is the timestamp in ms from getTime()`);

// --- Additional Date Methods ---
let x;

// valueOf(): returns the same timestamp as getTime()
x = d.valueOf();
console.log(`${x} is the primitive value (timestamp) of the date`);

// getHours(): hour in local time
x = new Date().getHours();
console.log(`${x} is the current hour`);

// getDate(): day of the month
x = new Date().getDate();
console.log(`${x} is today’s day of the month`);

// getFullYear(): four-digit year
x = new Date().getFullYear();
console.log(`${x} is the current year`);

// --- Custom Format: YYYYMMDD ---
const now = new Date();
const formatted = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}`;
console.log(`${formatted} is today’s date formatted as YYYYMMDD`);

// --- Locale Formatting (Intl API) ---
x = Intl.DateTimeFormat("en-GB").format(now);
console.log(`${x} is the date in en-GB format (DD/MM/YYYY)`);

x = Intl.DateTimeFormat("en-US").format(now);
console.log(`${x} is the date in en-US format (MM/DD/YYYY)`);

x = Intl.DateTimeFormat("el-GR").format(now);
console.log(`${x} is the date in el-GR format (ΗΗ/ΜΜ/ΕΕΕΕ)`);
