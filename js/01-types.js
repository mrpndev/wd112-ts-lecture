// ? TypeScript
/*
    * TypeScript was developed to bridge the gap between JS, which started primarily as a client-side scriptling language, and OOP such as C#, Java, Python, etc.

    * TypeScript brings safety to JS. Data types enable practices such as static-checking before run-time.

    * Static checking - detecting errors in our codebase before running the code.

    * TS is a superset of JS. This means that it has acess to additional methods. It also compiles to plain JS before executing. This also means that there are rules how different kinds of values can be used.

    * Static Type Checking - ability to identify problems before our code runs.

    * TS always points out any compile errors at the time of development. This means less errors at run-time.

    * Syntax errors must be fixed in their entirety before we run the code.

*/
/*
    ! TYPES

    * Allow us to give our variables a specific data type. Any data type other than the implicit results in an error.

    * We must declara data type during variable declaration
*/
var x = 7;
// x = "Kiersten"
// console.log(x)
// ! Error - default type is number but we reassign value to str
var instrName = "Paul Niemczyk";
instrName = "John";
console.log(instrName);
// It works. Default type is string (declared & initialized)
// ! BAD PRACTICE - Why use TS if you're not gonna declare data type?!
// Setting Data Type Syntax
// let varName: data_type = value
var username;
var password = "dbLocal";
var instrID = 5;
// console.log(username) // ! Error - variable has no value assigned. It's undefined which is a data type itself.
username = "pniemczyk";
console.log(username);
// ? Primitive Data Types
// String
var companyName;
companyName = "Eleven Fifty Academy";
// Number
var age = 7;
// Boolean
var isStudent = false;
// ? Arrays
var studentList = ["Kiersten", "Dean", "Andrew", "Connor"];
console.log(typeof studentList);
var studentScores = [100, 50, 85, 103];
studentScores.unshift(81); // Arr methods work the same
console.log(studentScores[2]); // Accessing indices works the same
console.log(studentScores);
// Any
/*
    * A way to toggle off type checking
    * It allows the use of any data type
*/
var apiData = 12345;
console.log(apiData, "Data Type: ".concat(typeof apiData));
apiData = "12345";
console.log(apiData, "Data Type: ".concat(typeof apiData));
// ! THIS IS A TERRIBLE PRACTICE! DON'T USE IT!
// Void
/*
    * Has no data type at all
    * Complete opposite of any
    * Used to return type of functions that do not return a value
*/
function myFuncThatSaysHelloAndIsVeryLong() {
    console.log("I wonder what this will print to the console...");
}
myFuncThatSaysHelloAndIsVeryLong();
// Null and Undefined
var undefinedVariable = undefined;
console.log(undefinedVariable, typeof undefinedVariable);
var nullVariable = null;
console.log(nullVariable, typeof nullVariable);
// Tuples
/*
    * Allow you to create an array with multiple different types
    * Can have fixed number of items in an array but they can be differnt types
*/
// Declaring a tuple
var usernameAndID; // can have > 2
usernameAndID = ["pniemczyk", 1];
console.log(usernameAndID);
// Enums
/*
    * Allow us to give names to numeric values
    * The values can be changed unlike arrays
    * Glorified objects?
*/
var WeaponType;
(function (WeaponType) {
    WeaponType[WeaponType["Sword"] = 0] = "Sword";
    WeaponType[WeaponType["Saber"] = 1] = "Saber";
    WeaponType[WeaponType["Spear"] = 2] = "Spear";
})(WeaponType || (WeaponType = {}));
var weapon = WeaponType.Saber;
console.log(weapon);
var HogwartsTrifecta;
(function (HogwartsTrifecta) {
    HogwartsTrifecta[HogwartsTrifecta["Harry"] = 2] = "Harry";
    HogwartsTrifecta[HogwartsTrifecta["Hermonie"] = 5] = "Hermonie";
    HogwartsTrifecta[HogwartsTrifecta["Ron"] = 7] = "Ron";
})(HogwartsTrifecta || (HogwartsTrifecta = {}));
var harryPotter = HogwartsTrifecta.Harry;
console.log(harryPotter);
// Union Types
/*
    * Allow us to have more flexibility with our variables.
    * Better than 'any' because we're still declaring options rather than letting everything through
*/
var favoriteShow;
favoriteShow = "Suits";
favoriteShow = "Grand Tour";
favoriteShow = null;
// favoriteShow = 2
console.log(favoriteShow);
// Functions
// JS Function
/*
    * Basic JS function allows us to run ANYTHING through it
*/
function jsFunction(firstParameter) {
    return firstParameter;
}
console.log(jsFunction([]));
// Annotations
function addNums(num1, num2) {
    return "The answer is ".concat(num1 + num2);
}
console.log(addNums(2, 3));
console.log(addNums("TacoBell", ["Hi", "Bye", "random fever stuff"]));
function addNumsTS(num1, num2) {
    return num1 + num2;
}
console.log(addNumsTS(2, 5)); // works
// console.log(addNumsTS(3, "5")) // does not work because parameter data types are supposed to be numbers ONLY
// Return Types
function numGenerate() {
    return 5;
}
function addNumsStrictReturnTS(num1, num2) {
    return num1 + num2 + numGenerate();
}
console.log(addNumsStrictReturnTS(2, 5));
console.log(typeof addNumsStrictReturnTS(2, 5));
// Challenge
/*
    * Create a fx with a return of boolean
    * Fx takes str username and str password
    * Fx checks if username is set to elevenfiftyuser & password set to Letmein1234!
    * If both are true, function returns true
    * Else, false
    ! 10 mins 11:47

*/
function boolin(username, password) {
    if (username === "elevenfiftyuser" && password === "Letmein1234!") {
        return true;
    }
    else {
        return false;
    }
}
console.log(boolin("elevenfiftyuser", "Letmein1234!"));
// Optionals
/*
    * Allow flexibility in our parameters
    * Allows an argument to be left out if needed
    * Declared using a question mark after
    * Optional parameters must go after all required params
*/
function addNumbersWithOptional(num1, num2, someString) {
    console.log(someString);
    return num1 + num2;
}
console.log(addNumbersWithOptional(1, 2, "Our optional"));
//# sourceMappingURL=01-types.js.map