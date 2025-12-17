// alert("Welcome to clculator type - + , - , * , / ");
// let num1 = Number(prompt("Enter first number:"));
// let num2 = Number(prompt("Enter second number:"));
// let operator = prompt("Enter operator (+, -, *, /):");

// if (operator === "+") {
//     result = num1 + num2;
// } 
// else if (operator === "-") 
// {
//     result = num1 - num2;
// } else if (operator === "*") {
//     result = num1 * num2;
// } else if (operator === "/") {
//     result = num1 / num2;
// }


// if (typeof num1 === "string" || typeof num2 === "string" || operator === Number) {
//     alert("Error: Provide correct inputt.");
//     throw new Error("Invalid input type.");
// }
// alert("Result: " + result);


// document.getElementById("content").innerText = +result;

// let name = "Tasos";
// let CountriestoVisit = ["Andorra", "Iceland", "Hungary", "Latvia","Estonia","Lithuania","Portugal","Slovenia"];

// for (let i = 0; i < CountriestoVisit.length; i++) {
//     console.log(CountriestoVisit[i]);
// }
// document.getElementById("content").innerText =CountriestoVisit[Math.floor(Math.random() * CountriestoVisit.length)];



// 17/12/2025
// Exercise 1: Simple Nested Loops

// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 3; j++) {
//         console.log("i is: " + i + ", j is: " + j);
//     }
// }


// // Iterating Over Arrays

// let animals = ["Dog", "Cat", "Elephant", "Parrot", "Tiger"];

// for (let i = 0; i < animals.length; i++) {
//     console.log("Animal at index " + i + ": " + animals[i]);
// }

//Reverse Iteration

for (let i = animals.length - 1; i >= 0; i--) {
    console.log("Animal at index " + i + ": " + animals[i]);
}