let array = [1, 2, 3, 4, 5];
// const first = array[0];
// const second = array[1]; //In this example, we are using traditional array indexing to extract the first two elements of the 'array' into separate variables 'first' and 'second'. The value of 'first' will be 1 and the value of 'second' will be 2.
// console.log(first, second); //Output: 1 2


//Destructuring assignment allows us to unpack values from arrays or properties from objects into distinct variables. It provides a more concise and readable syntax for extracting values from complex data structures.

//Array Destructuring
const[first, second, third] =array; //In this example, we are using array destructuring to extract the first three elements of the 'array' into separate variables 'first', 'second', and 'third'. The values of these variables will be 1, 2, and 3 respectively.
console.log(first,second,third); //Output: 1 2 3

//Object Destructuring
const person = {
    name : "Neha",
    age : 23
}

const {name, age} = person; //In this example, we are using object destructuring to extract the 'name' and 'age' properties from the 'person' object into separate variables 'name' and 'age'. The value of 'name' will be "Neha" and the value of 'age' will be 23.
console.log(name, age); //Output: Neha 23





//const [firstElement, secondElement, ...rest] = array; //In this example, we are using array destructuring to extract the first two elements of the 'array' into separate variables 'firstElement' and 'secondElement'. The rest of the elements in the array are collected into a new array called 'rest' using the spread operator (...).

//Destructuring basically used to unpack values from arrays or properties from objects into distinct variables. It provides a more concise and readable syntax for extracting values from complex data structures. It can be used with arrays, objects, and even function parameters to make code cleaner and more efficient.
