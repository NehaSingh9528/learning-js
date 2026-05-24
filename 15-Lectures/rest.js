const array = [1, 2, 3, 4, 5];

const [first, second] = array; //In this example, we are using array destructuring to extract the first two elements of the 'array' into separate variables 'first' and 'second'. The value of 'first' will be 1 and the value of 'second' will be 2.
//But what if I want to extract the rest of the elements in the array into a new array? This is where the rest operator comes in handy.

const [firstElement, secondElement, ...rest] = array; //In this example, we are using array destructuring to extract the first two elements of the 'array' into separate variables 'firstElement' and 'secondElement'. The rest of the elements in the array are collected into a new array called 'rest' using the spread operator (...). The value of 'firstElement' will be 1, the value of 'secondElement' will be 2, and the value of 'rest' will be [3, 4, 5].
console.log(firstElement, secondElement); //Output: 1 2
console.log(rest); //Output: [3, 4, 5]

function userInfo(name, age, ...hobbies) { //In this example, we are defining a function called 'userInfo' that takes in three parameters: 'name', 'age', and '...hobbies'. The 'name' and 'age' parameters will capture the first two arguments passed to the function, while the '...hobbies' parameter will use the rest operator to collect any additional arguments into an array called 'hobbies'. When we call the function with the arguments "neha", 23, "Sketching", "Reading", and "Traveling", the value of 'name' will be "neha", the value of 'age' will be 23, and the value of 'hobbies' will be ["Sketching", "Reading", "Traveling"]. The function can then use these values to perform any desired operations, such as logging the user's information or processing the hobbies in some way.
    console.log(hobbies); //Output: ["Sketching", "Reading", "Traveling"]
    console.log(`Name: ${name}, Age: ${age}, Hobbies: ${hobbies.join(", ")}`);
}

userInfo("neha", 23, "Sketching", "Reading", "Traveling")