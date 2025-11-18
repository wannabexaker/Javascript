// Step 1
const library = [
    {
        title: "The Art of Code",
        author: "Giannis Javascriptopoulos",
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: "Debuggin for Ninjas",
        author: "Katerina Pythonidou",
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: "The Secure Developer",
        author: "Totos Csharpopoulos",
        status: {
            own: true,
            reading: false,
            read: false
        }
    }
];

console.log(library)


// Step 2
library.forEach(book => book.status.read = true)

console.log(library)


// Step 3
const {title : firstBook } = library[0];

console.log(firstBook)

const {title : secondBook } = library[1];

console.log(secondBook)


// Step 4
const libraryJSON = JSON.stringify(library);

console.log(libraryJSON)
