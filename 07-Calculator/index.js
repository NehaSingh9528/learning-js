// let operator = "**";
// let num1 = 5;
// let num2 = 8;

let operator = prompt("Enter the operator(+, -, *, /, %)");
let num1 = prompt("Enter the first number");
let num2 = prompt("enter the second number");

num1 = parseFloat(num1);
num2 = parseFloat(num2);


switch(operator)
{
    case "+" : console.log(num1+num2);
    break;
    case "-" : console.log(num1-num2);
    break;
    case "*" : console.log(num1*num2);
    break;
    case "/" : console.log(num1/num2);
    break;
    case "%" : console.log(num1%num2);
    break;
    default : console.log("Invalid Operator");
}
//If you want to take the user input for the operator and numbers, you can use the prompt() function in JavaScript. Here's an example:

// let operator = prompt("Enter the operator (+, -, *, /, %)");
// let num1 = parseFloat(prompt("Enter the first number"));
// let num2 = parseFloat(prompt("Enter the second number"));