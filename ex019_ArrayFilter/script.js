// --- Lesson 19: Array Filter ---
// Separating the useful from the useless — in data, not people.

// --- Filter even numbers ---
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const numbers2 = [];

numbers.forEach((number) => {
  if (number % 2 === 0) {
    numbers2.push(number);
  }
});

console.log("Even numbers (manual filter):");
console.log(numbers2);

// Using filter like a civilized developer
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log("Even numbers (using filter):");
console.log(evenNumbers);

// --- Company Data Filtering ---
const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company II", category: "Retail", start: 1992, end: 2008 },
  { name: "Company HHH", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Fiv5", category: "Technologia", start: 2009, end: 2014 },
  { name: "Company 6ix", category: "Retail", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 2007 },
  { name: "Company Eight", category: "Technologia", start: 2011, end: 2016 },
  { name: "Company nin9", category: "Consaltand", start: 1981, end: 1996 },
];

// Filter 1 — Category: Retail
const retailCompanies = companies.filter(
  (company) => company.category === "Retail"
);
console.log("Retail Companies:");
console.log(retailCompanies);

// Filter 2 — Early Companies (1980–2005)
const earlyCompanies = companies.filter(
  (company) => company.start >= 1980 && company.end <= 2005
);
console.log("Early Companies:");
console.log(earlyCompanies);

// Filter 3 — Long-running Companies (10+ years)
const longCompanies = companies.filter(
  (company) => company.end - company.start >= 10
);
console.log("Long-running Companies:");
console.log(longCompanies);
