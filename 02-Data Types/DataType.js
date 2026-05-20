//The range of data types in JavaScript is quite extensive, and they can be categorized into two main groups: primitive data types and non-primitive (or reference) data types.

//1. Primitive Data Types:
//- String: Represents a sequence of characters. Example: "Hello, World!"
//- Number: Represents both integer and floating-point numbers. Example: 42, 3.14
//- Boolean: Represents a logical entity that can have two values: true or false. Example: true
//- Null: Represents the intentional absence of any object value. Example: null
//- Undefined: Represents a variable that has been declared but has not been assigned a value. Example: undefined
//- Symbol: Represents a unique identifier. Example: Symbol('description')
//2. Non-Primitive (Reference) Data Types:
//- Object: Represents a collection of properties and methods. Example: { name: "Alice", age: 30 }
//- Array: Represents an ordered list of values. Example: [1, 2, 3, 4, 5]
//- Function: Represents a reusable block of code that performs a specific task. Example: function greet() { console.log("Hello!"); }
  
var a =6;
console.log(a); //a has some range and it comes under number data type. In JavaScript, all numbers are floating-point values, and there is no separate integer type. The number data type can represent both whole numbers and decimal values.
//And the range of numbers in JavaScript is from -(2^53 - 1) to (2^53 - 1) for integers, and it can represent decimal values as well.
//If range is exceeded, it will return Infinity or -Infinity for numbers that are too large or too small, respectively. Additionally, JavaScript has a special value called NaN (Not-a-Number) to represent the result of invalid mathematical operations.
//For example:
//console.log(1 / 0); //Infinity
//console.log(-1 / 0); //-Infinity
//console.log(0 / 0); //NaN 

//And it use round off numbers to the nearest representable value, which can lead to precision issues in some cases. For example:
//console.log(0.1 + 0.2); //0.30000000000000004 
//This is because 0.1 and 0.2 cannot be represented exactly in binary, leading to a small rounding error when they are added together.
//To mitigate precision issues, JavaScript provides the Number.EPSILON constant, which represents the smallest difference between two representable numbers. You can use this constant to compare floating-point numbers for equality, rather than checking for direct equality. For example:
//function areEqual(num1, num2) {
//  return Math.abs(num1 - num2) < Number.EPSILON;
//}
//console.log(areEqual(0.1 + 0.2, 0.3)); //true

//(2^53 - 1) is the maximum safe integer in JavaScript, which is approximately 9.007199254740991e+15. This means that JavaScript can safely represent integers up to this value without losing precision. Beyond this range, JavaScript may not be able to accurately represent integers, and you may encounter issues with precision and rounding errors.
//-(2^53 - 1) is the minimum safe integer in JavaScript, which is approximately -9.007199254740991e+15. This means that JavaScript can safely represent integers down to this value without losing precision. Beyond this range, JavaScript may not be able to accurately represent integers, and you may encounter issues with precision and rounding errors.
//In JavaScript, you can also use the BigInt data type to represent integers larger than (2^53 - 1). BigInt allows you to work with arbitrarily large integers without losing precision. You can create a BigInt by appending 'n' to the end of an integer literal. For example:
//const bigIntValue = 9007199254740991n; // This is the maximum safe integer as a BigInt
//const largerBigIntValue = 9007199254740992n; // This is one more than the maximum safe integer as a BigInt
//console.log(bigIntValue); //9007199254740991n
//console.log(largerBigIntValue); //9007199254740992n
//With BigInt, you can perform arithmetic operations just like with regular numbers, and it will maintain precision even for very large integers. However, keep in mind that BigInt is not interchangeable with the Number type, and you cannot mix them in arithmetic operations without explicit conversion.
//For example:
//const bigIntValue = 9007199254740991n;
//const regularNumber = 10;
//console.log(bigIntValue + regularNumber); // This will throw a TypeError because you cannot mix BigInt and Number types without conversion.
//To perform arithmetic operations between BigInt and Number, you can convert the Number to a BigInt using the BigInt() function. For example:
//const bigIntValue = 9007199254740991n;
//const regularNumber = 10;
//console.log(bigIntValue + BigInt(regularNumber)); //9007199254741001n
//In summary, JavaScript has a wide range of data types, including primitive types like strings, numbers, booleans, null, undefined, and symbols, as well as non-primitive types like objects, arrays, and functions. The number data type in JavaScript can represent both integers and floating-point values, but it has limitations in terms of precision and range. For larger integers, you can use the BigInt data type to maintain precision without losing accuracy.

console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
console.log(Number.MIN_SAFE_INTEGER); //-9007199254740991

console.log(9007199254740991 +1); //9007199254740992
console.log(9007199254740991 +2); //9007199254740992
//As you can see, when we add 1 to the maximum safe integer, it gives us 9007199254740992, which is correct. However, when we add 2 to the maximum safe integer, it still gives us 9007199254740992, which is incorrect. This is because JavaScript cannot accurately represent integers larger than the maximum safe integer, and it rounds them to the nearest representable value, leading to precision issues.
//To avoid this issue, you can use the BigInt data type for integers larger than the maximum safe integer. For example:
const bigIntValue = 9007199254740991n;
console.log(bigIntValue + 1n); //9007199254740992n
console.log(bigIntValue + 2n); //9007199254740993n
//With BigInt, you can accurately represent and perform arithmetic operations on integers larger than the maximum safe integer without losing precision.    
//We can also wrap the number in a BigInt constructor to create a BigInt from a regular number. For example:
const bigIntValueFromNumber = BigInt(9007199254740991);
console.log(bigIntValueFromNumber); //9007199254740991n
//This will create a BigInt with the value of 9007199254740991, which is the maximum safe integer in JavaScript. You can then perform arithmetic operations on this BigInt without losing precision, even for values larger than the maximum safe integer.

console.log(Number.EPSILON); //2.220446049250313e-16
//Epsilon is the smallest difference between two representable numbers in JavaScript. It is used to compare floating-point numbers for equality, rather than checking for direct equality, which can lead to precision issues due to the way floating-point numbers are represented in binary.
//For example, if you want to check if two floating-point numbers are equal, you can use the following function:
function areEqual(num1, num2) {
  return Math.abs(num1 - num2) < Number.EPSILON;
}
// This function checks if the absolute difference between num1 and num2 is less than Number.EPSILON, which means that they are close enough to be considered equal, even if they are not exactly the same due to precision issues.
console.log(areEqual(0.1 + 0.2, 0.3)); //true

const userName = "Alice"; //String data type represents a sequence of characters. It can be created using single quotes, double quotes, or backticks (template literals).
console.log(userName); //Alice

const greeting = `Hello, ${userName}!`; //Using template literals to create a string with embedded expressions.
console.log(greeting); //Hello, Alice!  

const value = `This is a multi-line string. It can span multiple lines without the need for escape characters.`;
console.log(value); //This is a multi-line string. It can span multiple lines without the need for escape characters.   
//It means that you can create strings that span multiple lines without needing to use escape characters like \n for newlines. This can make your code more readable and easier to maintain when working with long strings or strings that contain line breaks.
//For example, you can create a multi-line string like this:
const multiLineString = `This is a multi-line string.
It can span multiple lines.`;
console.log(multiLineString); 
//This is how it will going to be printed:
//This is a multi-line string.
//It can span multiple lines.

const name = 'Alice'; //String data type can also be created using single quotes.
console.log(name); //Alice
//In JavaScript, you can use single quotes, double quotes, or backticks to create strings. The choice of which one to use is mostly a matter of style and convenience. However, there are some differences between them:
//- Single quotes ('') and double quotes ("") are functionally equivalent and can be used interchangeably. The main reason to choose one over the other is to avoid the need for escaping characters. For example, if you want to include a single quote in a string, it's easier to use double quotes to define the string:
//const message = "It's a nice day!"; // No need to escape the single quote

let message = 'It\'s a nice day!'; // Need to escape the single quote with a backslash
console.log(message); //It's a nice day!
//- Backticks (``) are used for template literals, which allow you to embed expressions and create multi-line strings without the need for escape characters. Template literals are especially useful when you want to include variables or expressions within a string:        
const user = 'Alice';
const greetingMessage = `Hello, ${user}!`;      
console.log(greetingMessage); //Hello, Alice!
//In this example, we use backticks to create a template literal that includes the variable user. The expression ${user} is evaluated and replaced with the value of the user variable, resulting in the string "Hello, Alice!" being printed to the console. Template literals provide a convenient way to create complex strings with embedded expressions without needing to concatenate strings or use escape characters.

let isAuthenticated = true; //Boolean data type represents a logical entity that can have two values: true or false.
console.log(isAuthenticated); //true

const a = null; //Null data type represents the intentional absence of any object value. It is often used to indicate that a variable should have no value or that an object is empty.
console.log(a); //null

let b = undefined; //Undefined data type represents a variable that has been declared but has not been assigned a value. It is the default value of uninitialized variables.
let b; //Undefined data type represents a variable that has been declared but has not been assigned a value. It is the default value of uninitialized variables.
console.log(b); //undefined

const userName = Symbol("naman"); //Symbol data type represents a unique identifier. Each time you create a Symbol, it is guaranteed to be unique, even if it has the same description as another Symbol. Symbols are often used as keys in objects to create properties that are not accessible through normal enumeration.
console.log(userName); //Symbol(naman)
const fullname = Symbol("gaurav"); 
console.log(fullname); //Symbol(gaurav)
//In this example, we create two Symbols with the same description "naman" and "gaurav". Even though they have the same description, they are unique and different from each other. When we log them to the console, we see that they are represented as Symbol(naman) and Symbol(gaurav), indicating that they are distinct symbols with their own unique identities.

console.log(userName === fullname); //false
//In this example, we compare the two Symbols userName and fullname using the strict equality operator (===). Since each Symbol is unique, even if they have the same description, the comparison returns false, indicating that userName and fullname are different symbols. This demonstrates that Symbols in JavaScript are guaranteed to be unique, regardless of their descriptions.

