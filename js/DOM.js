// How to use the DOM
// DISCLAIMER: Take in count this one .js file is not linked in any HTML file, so if you want to test the instructions written in here, do it in your workspace

// Change inner code of any HTML tag
document.body.innerHTML = "<h1>This is a title that will apear at the document body!</h1>";

// Select the first element that matches a given CSS selector
document.querySelector('p'); // This selects the first <p> that finds

// Select an element by its id
document.getElementById('some-given-id');
// You can also apply functions on it
document.getElementById('coding').innerHTML = ("This belongs to the coding id");

// Apply CSS styles
const firstElement = document.getElementById("thisBlue");
// Element.style.property = 'value'
firstElement.style.color = 'blue';

// Create an element and inject it into the HTML doc
const randomParagraph = document.createElement("p");
randomParagraph.id = "someOptionalId";
randomParagraph.innerHTML = "Insert some lorem ipsum in here to make it look better!";
document.body.appendChild(randomParagraph);

// Removing an element from the HTML doc
document.getElementById("some-given-id").hidden = true; // This rather than deleting it hids it
document.body.removeChild("some-given-id");