// functions
// -contains a sequence of statements
// -can take an input and give back an output
// -contains code that can be re used
// -code block designed to perform a particular task


// write a simple recipe for making coconut ngege
// -chop 2 medium sized red onion
// -add cooking oil 5l
// -chop 2 big sized tomatoes
// -crush 2 cloves of garlic
// -add salt
// - chop 1 medium sized hoho
// -sprinkle a teaspoon of rosemary
// - mix till sautee
// - add a half cup of water
// -cut your fish into two
// -let the fish simmer on low heat until all water is done
// - add coriander


//UJI PAWA RECIPE
// -add water in a sufuu
// -light the jiko
// -boil the water
// -add some flour
// -Boil the arrowroots and the cassava
// -cut into smaller pieces and blend them
// -add roaseted peanuts, sugar, milk and blend
// -serve in a calabash

console.log ("")




function makeCoconutNgege(){
    // console.log the entire recipe
    console.log("chop 2 medium sized red onion");

}
//declaring a function
//call that function

makeCoconutNgege();


//read on different types of funtions
//IIFE
//A function that runs immediately after being defined.
//Used to avoid polluting the global scope.
//Syntax:
(function() {
    console.log("IIFE executed!");
})();

//ANONYMOUS FUNCTIONS
//A function without a name.
//Typically used as arguments in other functions.

//Syntax:
const greet = function() {
    console.log("Hello!");
};
greet();

//CALLBACK FUNCTIONS
//A function passed as an argument to another function.
//Used for asynchronous operations, event handling, etc.
//Example
function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched!");
        callback();
    }, 2000);
}

fetchData(() => console.log("Callback executed!"));
//HIGHER ORDER FUNCTIONS
// function that takes another function as an argument or returns a function.

//Example (taking a function as an argument)
function operate(num, operation) {
    return operation(num);
}

function square(n) {
    return n * n;
}

console.log(operate(5, square)); // 25



//FIRST CLASS FUNCTIONS
//Functions in JavaScript are treated as values.
//Can be assigned to variables, passed as arguments, and returned from other functions.
//Example:
const sayHello = function() {
    return "Hello!";
};

const message = sayHello;
console.log(message()); // "Hello!"

//ARROW FUNCTIONS
//A concise way to write functions using =>.
//Example:
const add = (a, b) => a + b;
console.log(add(3, 4)); // 7

//HOISTING - you can call a function before declaring it provided you use the function keyword


console.log (greetings);

function greetings() {
    return 'Hello';
}

//Evaluate the foloowing expression


