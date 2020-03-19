// JavaScript Documentation by Neutrovertido

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
function tellmehi(){
    console.log("Hi!");
}
tellmehi();

function add(add1, add2){
    return add1 + add2;
}
console.log(add(5, 7));

const conca = function(str1, str2){
    console.log(str1 + str2);
}
conca("Hello ","Friend!");

const sumnot = (sumnot1, sumnot2) =>{console.log(sumnot1 - sumnot2)}
sumnot(7,8);

const rsumnot = (rsumnot1, rsumnot2) => rsumnot1 + rsumnot2;
console.log(rsumnot(8,9));