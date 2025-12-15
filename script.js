alert("Welcome to clculator type - + , - , * , / ");
let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
let operator = prompt("Enter operator (+, -, *, /):");

if (operator === "+") {
    result = num1 + num2;
} 
else if (operator === "-") 
{
    result = num1 - num2;
} else if (operator === "*") {
    result = num1 * num2;
} else if (operator === "/") {
    result = num1 / num2;
}

alert("Result: " + result);