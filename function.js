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

