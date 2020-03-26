// JavaScript Documentation by Neutrovertido
// Please run it on a NodeJS console to avoid discomfort from using the browser one

// Print values
// To console (console.log(value); console.log("...${variable}...");)
// To Document (HTML current file) (document.write(value))
// Popup window (alert("Value"))
console.log("Hello!"); // Here we print a String type value that says Hello!

// Ask for values
// Popup window prompt("Enter some data here:")

// Variables
/* Types: 
String('Words'),
Integer(12),
Boolean(true/false)
Float(3.99)
NULL(null)
undefined results from using a variable without a value
NaN(Not a number) results from asking for an operation to something that is not a Integer or Float type
*/
// To declare a variable:
// var variable = value; var variable; It's used to assign a variable
// let variable = value; let variable; Same as var;
// const variable = value; const variable; Assigns a value that cannot be changed later on
var stringtypevariable = "Words";
let integertypevariable = 12;
const booleanconstant = false;
console.log(
    `A string is ${stringtypevariable}. An integer is ${integertypevariable}. A boolean is ${booleanconstant}`
);

/* Operations:
These operations can be directly printed on
Sum: +, It's also used to concatenate
Substraction: -
Multiplication: *
Division: /
Residual: %
*/
console.log("Concatenate" + " " + "this!");
console.log(44 + 55 - (37 * 52) / 11);

/* Conditionals:
w/If statement:
if(condition){
    instructions;
} else if (condition){
    instructions;
} else {
    intructions;
}

w/Switch
switch(variable){
    case value:
        instructions;
        break;
    case value2:
        instructions;
        break;
    default:
        instructions;
        break;
}

w/Third conditional
condition ? instructions_if_true : instructions_if_false;

Conditional Operators:
<,>,<=,>=,==,===(strict),!=,&&(and),||(or),!(not)
*/
let singularity = 5;
if (singularity === 5) {
    console.log("Singularity is a thing!");
} else if (singularity > 5) {
    console.log("Singularity is not a big deal!");
} else {
    console.log("Singularity ain't a thing!");
}
singularity = 1;
switch (singularity) {
    case 1:
        console.log(":)");
        break;
    case 0:
        console.log(":(");
        break;
    default:
        console.log(":/");
        break;
}
singularity ? console.log("It is true!") : console.log("It is false!");

/* Functions:
A function is a set of instructions that can be called when it's needed. It can handle parameters and/or be anonymous. And it can be used with return values.

Normal Function:
function name(param1, param2,...){
    instructions;
}
Call of a function:
function name(params);

Anonymous functions 1:
const variable = function(params){
    instructions;
NOTE: for arrow type functions is recommended to put on the () no matter how many params there are (0-N);
}
Anonymous functions 2:
const variable = (params) =>{
    instructions;
}
Call:
variable(params);

Return Function:
const variable = (params) => instructions;
This one returns the value of the instructions
*/
function tellmehi() {
    console.log("Hi!");
}
tellmehi();

function add(add1, add2) {
    return add1 + add2;
}
console.log(add(5, 7));

const conca = function (str1, str2) {
    console.log(str1 + str2);
};
conca("Hello ", "Friend!");

const sumnot = (sumnot1, sumnot2) => {
    console.log(sumnot1 - sumnot2);
};
sumnot(7, 8);

const rsumnot = (rsumnot1, rsumnot2) => rsumnot1 + rsumnot2;
console.log(rsumnot(8, 9));

/* Scope:
The scope is the context where the variable can be used, there are global variables and local variables.
When we talk about local variables we are referring to the block of code where it is inside, that block and the child blocks from that can access the variable, although the father ones cannot.
*/

let scopevar1 = 10; // This variable can be accessed globally since it's defined in the main block of code
if (scopevar1 > 9) {
    let msg = "Inside outside"; // This one can only be accessed from the if statemente and the child blocks but not the main block
    console.log(msg);
}
// To use the same variable but with different scopes it's necessary to redefine it inside the local block of code
let scopevar2 = "Outside Scope";
if (scopevar2 === "Outside Scope") {
    let scopevar2 = "The inside scope doesn't affect the outside one!";
    console.log(scopevar2);
}
console.log(scopevar2);

/* Arrays:
var array = ['1',2,3.0,...];
array.pop() Removes the last item
array.length Tells the quantity of items in an array
array.push(i1,i2,...) Adds items to the end of an array
array.shift() Mutates the array in ascendent order
array.unshift() Adds items to the start of an array
array.slice(range1, range2) Returns a range of values in an array
array.indexOf(value_that_you_want_to_know) Return the position of a value
*/
let arreg10 = ["First", "Second", "Third"];
console.log(arreg10); // Prints the whole array
console.log(arreg10[0]); // Prints a specific element of an array[0-N]
console.log(arreg10.length);
arreg10.push("Fourth", "Fifth", "Sixth");
console.log(arreg10);
arreg10.pop();
console.log(arreg10);

/* Multi-Dimensional Arrays
An array can contain other arrays, for each array you can tell that it increases the quantity of dimensions 
*/
var dimensionQ = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(dimensionQ);
console.log(dimensionQ[2][1]);

/* Loops
for (let i=0; i<N; i++){}
for (let i=100; i>0; i--){}
while(condition){}
do{}while(condition);
break; It´s used to break the loop if needed (it's also used in switch)
Also loops can hold other loops inside them
*/

for (let i = 0; i < 4; i++) {
    console.log("This is the time #" + (i + 1));
}

let repetition = 5;
while (repetition < 7) {
    console.log("To stop there is no time");
    repetition++;
}

do {
    repetition--;
} while (repetition != 0);

for (let i = 15; i > 0; i--) {
    if (i === 5) {
        console.log("Break here!");
        break;
    }
}

for (let x = 0; x > 4; x++) {
    for (let y = 0; y > 4; y++) {
        console.log(`(${x} , ${y})`);
    }
}

/* Iterators
These are methods that allow you to execute functions with array elements (all of these functions have to use RETURN)
All of the functions of the respective iterator MUST use a parameter which is passed by the array itself when the iterator is used
The functions can be defined or be anonymous
array.forEach(function); Passes each element of an array so that it can be used in a function
array.map(function); Same as forEach, but creating a new array in the process
array.filter(function()); Creates a new array in which only the elements that return true to a condtition are in
array.findIndex(function); similar to indexOf. but with callback functions (used when you need to find a certain condition instead of a value)
array.reduce(function); Operates with an array by taking values two by two and accumulating the return. You can also give it a starting value
array.some(function); Tests if at least 1 element returns true from the condition given
array.every(function); Same as some, but every element must return true from the condition
*/

let each4 = [5, 3, 2, 9, 7];
function currentElement(temp) {
    console.log(`The current element is: ${temp}`);
}
each4.forEach(currentElement);

console.log("Map output next!");
const plus5Each = each4.map(temp => temp + 5);
plus5Each.forEach(currentElement);

console.log("Only even numbers this time!");
const evenEach5 = plus5Each.filter(temp => temp % 2 === 0);
evenEach5.forEach(currentElement);

console.log("Now the location of the first uneven number!");
const unevenEach = plus5Each.findIndex(temp => temp % 2 != 0);
console.log(`The location is: [${unevenEach}]`);

console.log("Accumulating the plus5 array...");
const sumOfEach = plus5Each.reduce((value1, value2) => value1 + value2);
console.log(sumOfEach);

console.log("Accumulating the plus5 array with a starting value of 10...");
const sumOfEachStarted = plus5Each.reduce((value1, value2) => {
    return value1 + value2;
}, 10);
console.log(sumOfEachStarted);

const isAnyOfThem1 = plus5Each.some(value => value === 1);
console.log(`Is any of them 1: ${isAnyOfThem1}`);

const areBiggerThan0 = plus5Each.every(value => value > 0);
console.log(`Are all the numbers bigger than 0: ${areBiggerThan0}`);

/* Objects 
Objects are key and value variables
var Object - {value1: 'actual_value', 'value 2': 'actual_value_2};
To access a value it's necessary to use the . notation or bracket notation
var variable = Object.property;
To update a value you must use any notation and = to assign the value
To delete a property you must use the delete operator (delete Object.property)
It's also possible to declare a function inside of an Object and to reference: Object
The objects can also hold another objects inside them
It's also possible to asign the direct memory vale of an object by using a function which receives the object as a parameter (making possible to even change the value of a constant)
It's possible to iterate properties inside an object with the for...in loop
You cannot use arrow functions with the this keyword since they assign this to the callback itself
The'this' keyword is used to reference an object whilst using a functions which is defined in itself
You can define a variable with _ before the name to indicate it shouldn't be altered
*/

var persona = {
    alive: true,
    name: 'James',
    age: 17,
    'random message': 'Hello friend!',
    saludar() {
        console.log("Hola!");
    },
    health: {
        canSee: true,
        canHear: true,
        canTaste: true,
        canFeel: true,
        canTalk: true
    }
}

var personaLiving = persona.alive;
personaLiving ? console.log("Alive") : console.log("Not alive");

var personaMsg = persona['random message'];
console.log(personaMsg);

persona.age = 21;

delete persona['random message'];

persona.saludar();

if (persona.health.canSee) {
    console.log("Able to see!");
} else {
    console.log("Unable to see!");
}

const unname = obj => {
    obj.name = null;
}

unname(persona);

console.log(persona);

for (var healthVal in persona.health) {
    console.log(`${healthVal}: ${persona.health[healthVal]}`);
};

const rainbow = {
    multicolor: true,
    visible: false,
    status() {
        return `The status of multicolor is: ${this.multicolor} and the status of visible is: ${this.visible}`;
    }
};
console.log(rainbow.status());

// Getters and setters
const cyborg = {
    _original: "human",
    _hp: 500,
    get hp() {
        if (typeof this._hp === "number") {
            return `Current level of HP: ${this._hp}`;
        } else {
            return `Existencial error! Accidentally HP mutated from dimensions!`;
        }
    },
    set hp(_novel) {
        if (typeof this._hp === "number") {
            this._hp = _novel;
        } else {
            console.log("Failure! Number expected at setting hp!");
        }
    }
}
console.log(cyborg.hp);
cyborg.hp = 200;


// Object Factories
// These are methods that allow you to make objects by passing parameters
const carFabrik = (brand, color) => {
    return {
        brand: brand, // Since ES6 it's possible to just do: brand, color, about(){...}
        color: color,
        about(){
            console.log(`The brand of the car is ${brand} and the color of the car is ${color}.`);
        }
    }
}

let tunneableCar = carFabrik("BMW","black");
tunneableCar.about();

function tankFabrik(model, nation) {
    return {
        model,
        nation,
        shoot() {
            console.log(`The ${model} shoots a projectile and destroyed the enemy!`);
        },
        celebrate() {
            console.log(`${nation} celebrates for their victory!`);
        }
    }
}

const panzer = tankFabrik("Panzerkampfwagen","Germany");
panzer.shoot();
panzer.celebrate();

// Object destructural reference
// You can call an object property by using {} syntax
const {nation} = panzer;
console.log(nation);

// Object methods
/*
Object.keys(object); returns the keys
Object.entries(object); returns the keys and the values in a two-dimension array
Object.assign({new_properties}, father_object); returns a new object with new properties in it
*/

console.log(Object.keys(panzer));
console.log(Object.entries(panzer));

const panzerV2 = Object.assign({rocketLauncher: true, advancedRadar: true}, panzer);