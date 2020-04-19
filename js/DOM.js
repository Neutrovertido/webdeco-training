// How to use the DOM

// Change inner code of any HTML tag
document.body.innerHTML = "<h1>This is a title that will apear at the document body!</h1>";

// Select the first element that matches a given CSS selector
document.querySelector('p'); // This selects the first <p> that finds

// Select an element by its id
document.getElementById('some-given-id');
// You can also apply functions on it
document.getElementById('coding').innerHTML = ("This belongs to the coding id");