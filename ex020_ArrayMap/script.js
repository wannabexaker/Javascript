// --- Lesson 20: Array Map ---
// Taking one array and turning it into another, because why not.

// --- Doubling numbers ---
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const doubleNumber = numbers.map((number) => number * 2);
console.log("Double numbers:");
console.log(doubleNumber);

// --- Filter even, then double ---
const evenDouble = numbers
  .filter((number) => number % 2 === 0)
  .map((number) => number * 2);
console.log("Even numbers doubled:");
console.log(evenDouble);

// --- Company Data Mapping ---
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

// Extract company names
const companyNames = companies.map((company) => company.name);
console.log("Company names:");
console.log(companyNames);

// Extract custom company info
const companyInfo = companies.map((company) => {
  return {
    name: company.name,
    category: company.category,
    length: company.end - company.start + " years",
  };
});

console.log("Company info with duration:");
console.log(companyInfo);
