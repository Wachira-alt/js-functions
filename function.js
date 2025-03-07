// ADD FUNCTION
//parameters (num1, num 2)and arguments(2,)

function add(num1, num2){
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }else{

    return 'A number is required as an argument';
    }
}
function subtract(num1, num2){

    return num1 - num2;
}
function multiply(num1, num2){

    return num1 * num2;
}
function divide(num1, num2){

    return num1 / num2;
}

console.log(`addition: ${add('four', 5)}`);

//a simple iife that takes in two parameters first name and lastnames and outputs both name


(function(firstName, lastName) {
    console.log(`${firstName} ${lastName}`);
})("Dennis", "Wachira");

//A function expression is assigned to a variable. Here’s how you can create totalStudents, which takes femaleStudents and maleStudents as parameters and returns the total count:

const totalStudents = function(femaleStudents, maleStudents) {
    return femaleStudents + maleStudents;
};

console.log(`Total students: ${totalStudents(20, 15)}`);

//examples of different ways of writing a function
function population(country, population){
    return `the total population of a ${country} is ${population}`
}
console.log(population("Kenya", "52 M"))

//converting to an arrow function
const getPopulation = (country, pop) => {
    return `The total population of ${country} is ${pop}`;
};
console.log(getPopulation("India", "1.4 B"));


//simple calculator
function output(num1, operator, num2){
    return operator(num1, num2)
}

console.log(output(5, divide, 2));
//learn (callback functions, high...)