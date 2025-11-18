// --- Lesson 27: Fetch API ---
// Demonstrates fetching JSON, fetching text, and sending a POST request.
// No magic, no frameworks, only pure fetch(). 
// If something breaks, blame the internet, not the code.


// ----------------------------------------------------
// Fetch JSON File (movies.json)
// ----------------------------------------------------
function loadJSON() {
  fetch('./movies.json')
    .then((res) => res.json())
    .then((data) => {
      console.log('JSON Loaded:');
      console.log(data);
    })
    .catch((err) => console.error('JSON Fetch Error:', err));
}



// ----------------------------------------------------
// Fetch Text File (test.txt)
// ----------------------------------------------------
function loadText() {
  fetch('./test.txt')
    .then((res) => res.text())
    .then((data) => {
      console.log('Text Loaded:');
      console.log(data);
    })
    .catch((err) => console.error('Text Fetch Error:', err));
}



// ----------------------------------------------------
// Create a POST request (Fake API – jsonplaceholder)
// ----------------------------------------------------
function createPost({ title, body }) {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({ title, body }),
    headers: {
      "Content-type": "application/json",
      token: "abc123",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("POST Response:");
      console.log(data);
    })
    .catch((err) => console.error("POST Error:", err));
}



// ----------------------------------------------------
// Demo Calls (feel free to comment these out)
// ----------------------------------------------------

// Load JSON:
loadJSON();

// Load Text:
loadText();

// Create a Post:
createPost({ 
  title: "My Post", 
  body: "This is my Post" 
});
