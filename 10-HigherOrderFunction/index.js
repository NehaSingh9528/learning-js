// HOD function is a function that takes another function as an argument or returns a function as a result
//Example of a function that takes another function as an argument

// function greet(name, callback) //Here we are passing a function as an argument to the greet function
// {
//     console.log(`Hello : ${name}`);
//     callback(); //Here we are calling the callback function after greeting the user
// }

// function askHowAreYou() //This is the callback function that we will pass to the greet function
// {
//     console.log("How are you?");
// }   
// greet("Neha", askHowAreYou); //Here we are calling the greet function and passing the askHowAreYou function as an argument

// //Example of a function that returns another function   
// function multiplier(factor) //This function takes a factor as an argument and returns a new function that multiplies its argument by the factor
// {
//     return function(number) //This is the function that is returned by the multiplier function. It takes a number as an argument and multiplies it by the factor.
//     {
//         return number * factor; //Here we are returning the result of multiplying the number by the factor
//     }
// }

// let double = multiplier(2); //Here we are calling the multiplier function with a factor of 2 and assigning the returned function to the variable double
// console.log(double(5)); //Here we are calling the double function with an argument of 5, which will return 10 (5 multiplied by 2)
// let triple = multiplier(3); //Here we are calling the multiplier function with a factor of 3 and assigning the returned function to the variable triple
// console.log(triple(5)); //Here we are calling the triple function with an argument of 5, which will return 15 (5 multiplied by 3)



function message(text)
{
    console.log(text);
}
function greet(name, message)
{
    console.log(`Hello : ${name}`);
    message("How are you ?");
}
greet("Neha", message);



function number1(value1)
{
    return function number2(value2)
    {
        return value1+value2;
    }
}

let res = number1(2);
let res2 = res(3);
console.log(res2);