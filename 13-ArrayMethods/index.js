let number = [1, 2, 3, 4, 5];

//Array methods are built-in functions that can be used to manipulate arrays in JavaScript. They provide a convenient way to perform common operations on arrays, such as adding or removing elements, sorting, filtering, and more. Here are some commonly used array methods:
//1. push() - Adds one or more elements to the end of an array and returns the new length of the array.
number.push(6);
console.log(number); //Output: [1, 2, 3, 4, 5, 6]

//2. pop() - Removes the last element from an array and returns that element. This method changes the length of the array.
let lastElement = number.pop();
console.log(lastElement); //Output: 6
console.log(number); //Output: [1, 2, 3, 4, 5]

//3. shift() - Removes the first element from an array and returns that element. This method changes the length of the array.
let firstElement = number.shift();
console.log(firstElement); //Output: 1
console.log(number); //Output: [2, 3, 4, 5]

//4. unshift() - Adds one or more elements to the beginning of an array and returns the new length of the array.
number.unshift(7);
console.log(number); //Output: [7, 2, 3, 4, 5]

//5. indexOf() - Returns the first index at which a given element can be found in the array, or -1 if it is not present.
let index = number.indexOf(3);
console.log(index); //Output: 2

//6. slice() - Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). The original array will not be modified.
let slicedArray = number.slice(1, 4);
console.log(slicedArray); //Output: [2, 3, 4]
console.log(number); //Output: [7, 2, 3, 4, 5]

//7. splice() - Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. This method modifies the original array.   
number.splice(2, 1, 8); //Here we are removing 1 element at index 2 and adding the element 8 at the same index. These three parameters are start index, number of elements to remove, and the element to add.
console.log(number); //Output: [7, 2, 8, 4, 5]
 