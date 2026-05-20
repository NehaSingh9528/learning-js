console.log(1 > 2); // false
console.log(1 < 2); // true
console.log(1 >= 2); // false       
console.log(1 <= 2); // true
console.log(1 == 2); // false 
console.log(1 != 2); // true    
console.log(1 === 2); // false Here, the type of 1 and 2 are the same (number), but their values are different, so it returns false.
console.log(1 !== 2); // true
console.log(1 > 1); // false
console.log(1 < 1); // false
console.log(1 >= 1); // true
console.log(1 <= 1); // true
console.log(1 == 1); // true here, the type of 1 and 1 are the same (number), and their values are also the same, so it returns true.   
console.log(1 != 1); // false
console.log(1 === 1); // true Here, the type of 1 and 1 are the same (number), and their values are also the same, so it returns true.
console.log(1 !== 1); // false
//The difference between == and === is that == checks for value equality, while === checks for both value and type equality.
console.log(1 == '1'); // true Here, the value of 1 and '1' are the same (both represent the number 1), but their types are different (number and string), so it returns true.
console.log(1 === '1'); // false Here, the value of 1 and '1' are the same (both represent the number 1), but their types are different (number and string), so it returns false.
console.log(5 < true)

console.log(5 > null) // Here, null is converted to 0 when compared with a number, so the expression 5 > null is evaluated as 5 > 0, which returns true.
console.log(5 > undefined) // Here, undefined is not converted to a number when compared with a number, so the expression 5 > undefined is evaluated as 5 > NaN, which returns false.

console.log(4 < "car") // Here, the string "car" cannot be converted to a number, so it is treated as NaN (Not a Number). When comparing a number with NaN, the result is always false. Therefore, 4 < "car" evaluates to false.
console.log("cat" > "car") // Here, the comparison is done lexicographically (based on Unicode values). The first characters of both strings are the same ('c'), so the comparison moves to the second characters. The second character of "cat" is 'a', which is similar to the second character of "car". The comparison then moves to the third characters. The third character of "cat" is 't', which has a higher Unicode value than the third character of "car", which is 'r'. Therefore, "cat" > "car" evaluates to true.
console.log("cat" < "car") // Here, the comparison is done lexicographically (based on Unicode values). The first characters of both strings are the same ('c'), so the comparison moves to the second characters. The second character of "cat" is 'a', which is similar to the second character of "car". The comparison then moves to the third characters. The third character of "cat" is 't', which has a higher Unicode value than the third character of "car", which is 'r'. Therefore, "cat" < "car" evaluates to false.
console.log("cat" > "cats"); // Here, the comparison is done lexicographically (based on Unicode values). The first characters of both strings are the same ('c'), so the comparison moves to the second characters. The second character of "cat" is 'a', which is similar to the second character of "cats". The comparison then moves to the third characters. The third character of "cat" is 't', which is similar to the third character of "cats". Since "cat" has no more characters left, it is considered less than "cats". Therefore, "cat" > "cats" evaluates to false.

// == losse equality operator
console.log(0 == null) // Here, null will not be converted to a number when compared with 0. The expression 0 == null evaluates to false because null is only loosely equal to undefined, and not to any other value, including 0.
console.log(0 == undefined) // Here, the expression 0 == undefined evaluates to false because undefined is only loosely equal to null, and not to any other value, including 0.
console.log(null == undefined) // Here, null and undefined are considered equal when using the loose equality operator (==). Therefore, null == undefined evaluates to true.

// === strict equality operator
console.log(0 === null) // Here, the expression 0 === null evaluates to false because 0 is a number and null is an object, so they are of different types.
console.log(0 === undefined) // Here, the expression 0 === undefined evaluates to false because 0 is a number and undefined is a primitive value, so they are of different types.
console.log(null === undefined) // Here, the expression null === undefined evaluates to false because null is an object and undefined is a primitive value, so they are of different types. 
