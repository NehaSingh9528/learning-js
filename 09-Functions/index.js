function hello() //function declaration
{
    console.log("I'm a function");
}

hello(); //function call

//Now if we want to pass some data to the function, we can use parameters and arguments

function greet(name) //name is a parameter
{
    console.log("Hello, How are you," + name);
}
greet("Neha"); //Neha is an argument

//We can also use template literals to make it more readable

function greet1(name) //name is a parameter
{
    console.log(`Hello : ${name}`); //If we are using template literals, we need to use backticks instead of single or double quotes
}

greet1("Neha"); //Neha is an argument

//Function with multiple parameters

function add(a, b) //a and b are parameters
{
    return a + b; //returning the sum of a and b
}
let res = add(5, 3); //Calling the function with arguments 5 and 3    
console.log(res); //Output: 8

//Different ways to define a function in JavaScript --

//1. Function expression
let hello = function()
{

}

//2. Arrow function
let hello = () => //Here we are using an arrow function, which is a shorter syntax for writing functions in JavaScript. First we declare a variable hello and assign it an anonymous function using the function expression syntax. Then we can call the function using the variable name hello().
{

}
