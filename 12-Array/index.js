//There are two ways to create an array in JavaScript. The first way is to use the Array constructor, and the second way is to use array literal syntax.

//Using the Array constructor:
//let array1 = new Array(1, 2, 3, 4, 5);

//Using array literal syntax:
let array = [1, 2, 3, 4, 5];

//You can access elements in an array using their index. The index of the first element is 0, the second element is 1, and so on.
//Let's next see how to store multiple values of different datat types in an array. In JavaScript, arrays can hold values of any data type, including numbers, strings, objects, and even other arrays. Here's an example of an array that contains different data types:
let mixedArray = [42, "Hello", { name: "Alice" }, [1, 2, 3], true, function(){console.log("Hello")}];
//In this example, mixedArray contains a number (42), a string ("Hello"), an object ({ name: "Alice" }), another array ([1, 2, 3]), a boolean (true), and a function (function(){console.log("Hello")}). You can access and manipulate these values just like you would with any other array.
//For example, you can access the string "Hello" using its index:
console.log(mixedArray[1]); // Output: "Hello"
//You can also access the function and invoke it:
mixedArray[5](); // Output: "Hello"
 
//Find the length of an array using the length property:
console.log(mixedArray.length);

//If you want to iterate over the elements of an array, you can use a for loop or the forEach method. Here's an example using a for loop:
for(let i =0; i<mixedArray.length; i++)
    {
        console.log(mixedArray[i]);
    }