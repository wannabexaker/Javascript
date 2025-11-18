// --- Lesson 21: DOM Intro ---
// Peeking into the browser's soul: the Document Object Model.

console.log(window);
console.log("Window object: everything you never asked for in one place.");

console.dir(window.document);
console.log("Document object: your webpage, but as data.");

console.dir(document.body);
console.log("Document body logged. Yes, this is how JS sees your HTML.");

document.write("Yo, I am JS — invading your HTML like it’s 2003.");
console.log("Used document.write. The web just felt nostalgic.");
