// Typescript shares Javascript syntax since it's a fork of it.
// Why is it useful? 
// Because of the types conditions you can achieve, you can make an (almost) bug free program!
// It helps catching some errors so that you can make a cleaner program
// For example, using a string on a variable or function which was intended to do so will return an error here if you give it the proper conditions
// And how is making more errors more useful?
// Well, the thing is that you have to compile it to a .js, so if there are any possible errors then you will know when and where
// And by knowing that you can FIX the whole thing, so yeah, pretty powerful isn't it?
console.log("Hello my typescript fellow!");

async function sayBlyat(){
    return "blyat";
}

// Strong-type code
// Implicit auto assigns the variable a type, Explicit it's defined without giving it a value
// Implicit:
let lucky = 23; // Implicitly is strong-typed as number
// lucky = 'vodka'; So if you try to assign it will return an error, such thing is basically unachievable in pure javascript
// You can also assign it as any value by doing:
let duodecima:any = 12;
// So now we can assign it any value, although this is not recommended
duodecima = 'Twelve';

// Explicit:
// If you don't give it a value then it will auto assign the variable to :any
// let country is the same as let country:any
let country:string;


// We can also define our OWN types by doing:
type Style1 = string;
let randomWord: Style1; // As you can see we can assign a variable the type that we just created

// But we can tell the type to only accept specific values, and even to accept various types!
type Style2 = 'hello' | 'goodbye' | 12;
var salute12: Style2;
// salute12 = 'hola' // This will return error
salute12 = 'hello';

// Heck! You can even forge the shape of an object by using interface
interface human {
    firstName: string;
    lastName: string;
}

const ironman:human = {
    firstName: "Elon",
    lastName: "Musk"
    //If we were to add a property in here that isn't defined in the interface, then it will return error since the property is defined as strict
}

// They are strict by default, which means you have to use all properties and you cannot add other one in the object
// To avoid strictism you must add the following property: 

interface colorPresence {
    red: boolean;
    green: boolean;
    blue: boolean;
    [key: string]: any 
}

// So now we can add other properties to an Object with the type of colorPresence
let keyboard = {
    red: true,
    green: true,
    blue: false,
    hexcolor: "#121200"//See?
}

// Functions
// Functions' types can be assigned to the parameters and the return value
// function name (param1:type, param2:type,...):type_of_return {}
function quantumify(x:number, y:number):string {
    return Math.pow(x, y).toString(); // If we were to remove the .toString() then it will return error since the return value has to be string
}

// If you need a function with no return value, you must assign the type of void
function justASimplePrint(x:string):void {
    console.log(x);
}

justASimplePrint("It just works!");

// Arrays
// The most simple way:
const arr: string[] = [];

arr.push("Hello")
//Ths will return error >> arr.push(12);

// Custom array types
type theList = [string, number, boolean];

// Custom array types WITH OPTIONAL VALUES!!!
type bestList = [string?, number?, boolean?];

// This would return an error later on >> const arr2: theList[] = [];
// So we will use this one instead, since its optional
const arr2: bestList = [];
arr2.push("Element1");

// Classes
class Observable<T> {
    constructor(public value: T){}
}

let x: Observable<number>;
let y: Observable<Style2>;
let z = new Observable(23);