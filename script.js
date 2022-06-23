
alert("Welcome to a Basic Two-Input Arithmetic Calculator. \nFollow all the required instructions. \nKindly input the required information. ");
alert("This calculator can only perform basic operations like Addition(+), Subtraction(-), Multiplication(*), & Division(/)")

let firstNumber = parseFloat(prompt("Enter the first number: "));
let operator = prompt("Choose an operation to perform; ('+' for Add), ('-' for Subtract),\n('*' for Multiply), ('/' for Divide) ");
let secondNumber = parseFloat(prompt("Enter the second number: "));

arithmeticOperation(firstNumber, operator, secondNumber);

function add(firstNumber, secondNumber) {
    let result = firstNumber + secondNumber;
    alert(firstNumber +  " + " + secondNumber + " = " + result);
}
function subtract(firstNumber, secondNumber) {
    let result = firstNumber - secondNumber;
    alert(firstNumber + " - " + secondNumber + " = " + result);
}
function multiply(firstNumber, secondNumber) {
    let result = firstNumber * secondNumber;
    alert(firstNumber + " * " + secondNumber + " = " + result);
}
function divide(firstNumber, secondNumber) {
    let result = firstNumber / secondNumber;
    alert(firstNumber + " / " + secondNumber + " = " + result);
}

function arithmeticOperation(firstNumber, operator, secondNumber) {
    if (operator === "+") {
        add(firstNumber, secondNumber);
    }
    else if (operator === "-") {
        subtract(firstNumber, secondNumber);
    }
    else if (operator === "*") {
        multiply(firstNumber, secondNumber);
    }
    else if (operator === "/") {
        divide(firstNumber, secondNumber);
    }
    else {
        alert("Invalid Input! Enter a valid Operator.");
    }
}


