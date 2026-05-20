// console.log(4+2); // Addition
// console.log(4-2); // Subtraction
// console.log(4*2); // Multiplication
// console.log(4/2); // Division
// console.log(4%2); // Modulus
// console.log(4**2); // Exponentiation        

console.log(4+2); // Both numbers data type are same here so it will perform addition and give output 6. But what if one no. is String type and other is number type then it will perform concatenation and give output as 42. So in JavaScript, the operator will perform different operations based on the data types of the operands. This is known as operator overloading.

console.log("4"+2); // Here "4" is a string and 2 is a number, so it will perform concatenation and give output as "42".
//We also call it type coercion, where JavaScript automatically converts one data type to another to perform the operation. In this case, it converts the number 2 to a string "2" and then concatenates it with "4" to produce "42".

console.log(2+2+'4'); // Here it will first perform addition of 2+2 which gives 4 and then it will perform concatenation of 4 and '4' which gives "44". So the output will be "44".

console.log('4'+2+2); // Here it will first perform concatenation of '4' and 2 which gives "42" and then it will perform concatenation of "42" and 2 which gives "422". So the output will be "422".

console.log(2+2*'4'); // Here it will first perform multiplication of 2 and '4' which gives 8 and then it will perform addition of 2 and 8 which gives 10. So the output will be 10. This is because the multiplication operator has higher precedence than the addition operator, so it is evaluated first.
//Here the string '4' is coerced to the number 4 for the multiplication operation, resulting in 2 * 4 = 8. Then, the addition operation is performed with the result of the multiplication, giving 2 + 8 = 10.

console.log(2+2-'4'); //Here + and - operators have same precedence but they are evaluated from left to right. So it will first perform addition of 2 and 2 which gives 4 and then it will perform subtraction of 4 and '4' which gives 0. So the output will be 0. This is because the string '4' is coerced to the number 4 for the subtraction operation, resulting in 4 - 4 = 0.

let c = '4';
let b= '6';

console.log(+'4' + +'6'); // Here the unary plus operator is used to convert the string '4' and '6' to numbers before performing the addition. So it will first convert '4' to 4 and '6' to 6 and then it will perform addition of 4 and 6 which gives 10. So the output will be 10.

let a = 4;
a=a+1;
console.log(a); // Here we are adding 1 to the value of a and then assigning the result back to a. So it will first perform addition of 4 and 1 which gives 5 and then it will assign the value 5 to a. So the output will be 5.
 
a++; //Post-increment operator
console.log(a); // Here we are using the increment operator to add 1 to the value of a. So it will first add 1 to the value of a which gives 6 and then it will assign the value 6 to a. So the output will be 6.

++a; //Pre-increment operator
console.log(a); // Here we are using the pre-increment operator to add 1 to the value of a. So it will first add 1 to the value of a which gives 7 and then it will assign the value 7 to a. So the output will be 7. The difference between post-increment and pre-increment is that in post-increment, the original value of a is used in the expression before it is incremented, while in pre-increment, the value of a is incremented before it is used in the expression.

