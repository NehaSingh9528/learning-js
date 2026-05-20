//For these type of functions we have to call them explicitly to execute them. But in IIFE(IIFE - Immediately Invoked Function Expression) we can execute the function without calling it explicitly. It is a function that runs as soon as it is defined.
function greet()
{
    console.log("Hello Neha");
}

greet(); 

//IIFE function
(function greet1()
{
    console.log("Hello Neha");
})(); //First we have to wrap our normal function in parentheses to make it an expression and then we can call it immediately by adding another set of parentheses at the end. This will execute the function immediately without having to call it explicitly.

//Another example of IIFE function
(function (name)
{
    console.log(`Hello : ${name}`);
})("Neha");

//The real world use case of IIFE to execute the function once and only once. This is useful when we want to create a private scope for our variables and functions, so that they are not accessible from the outside. This can help to avoid naming conflicts and keep our code organized. For example, we can use an IIFE to create a module pattern, where we can define our variables and functions inside the IIFE and return an object that exposes only the public API of the module. This way, we can keep our internal implementation details hidden from the outside world and only expose what is necessary.
var counter = (function()
{
    var count = 0;
    return {
        increment: function()
        {
            count++;
        },
        getCount: function()
        {
            return count;
        }
    };
})(); //Here we are creating an IIFE that defines a private variable count and returns an object with two methods: increment and getCount. The increment method increments the count variable, and the getCount method returns the current value of count. Since the count variable is defined inside the IIFE, it is not accessible from the outside, and we can only interact with it through the methods provided by the returned object. This allows us to keep our internal state private and only expose the necessary functionality to the outside world.

counter.increment();
counter.increment();
console.log(counter.getCount()); //Here we are calling the increment method twice to increment the count variable, and then we are calling the getCount method to get the current value of count, which will return 2.  
