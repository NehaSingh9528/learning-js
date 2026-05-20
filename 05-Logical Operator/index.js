// true && true; // true
// true && false; // false
// false && true; // false
// false && false; // false   

// true || true; // true
// true || false; // true
// false || true; // true
// false || false; // false        


let a = 5>2 && 5>3; // Here, the expression 5>2 evaluates to true and the expression 5>3 also evaluates to true. Since both expressions are true, the overall expression a will be assigned the value true.
console.log(a); // true

let b = 5>2 || 5>3; // Here, the expression 5>2 evaluates to true and the expression 5>3 also evaluates to true. Since at least one of the expressions is true, the overall expression b will be assigned the value true.
console.log(b); // true 

let c = 5>2 && 5<3; // Here, the expression 5>2 evaluates to true but the expression 5<3 evaluates to false. Since one of the expressions is false, the overall expression c will be assigned the value false.
console.log(c); // false    

let d = 5 && 0; // Here, the number 5 is considered a truthy value, while the number 0 is considered a falsy value. In a logical AND operation, if the first operand is truthy, the result will be the second operand. Since 5 is truthy, the result of the expression 5 && 0 will be 0.
console.log(d); // 0

let gm = 0 && 5; // Here, the number 0 is considered a falsy value, while the number 5 is considered a truthy value. In a logical AND operation, if the first operand is falsy, the result will be the first operand. Since 0 is falsy, the result of the expression 0 && 5 will be 0.
console.log(gm); // 0

let e = 5 || 0; // Here, the number 5 is considered a truthy value, while the number 0 is considered a falsy value. In a logical OR operation, if the first operand is truthy, the result will be the first operand. Since 5 is truthy, the result of the expression 5 || 0 will be 5.
console.log(e); // 5

let f = 0 || 5; // Here, the number 0 is considered a falsy value, while the number 5 is considered a truthy value. In a logical OR operation, if the first operand is falsy, the result will be the second operand. Since 0 is falsy, the result of the expression 0 || 5 will be 5.
console.log(f); // 5

const g = 4;
console.log(!g); // Here, the number 4 is considered a truthy value. The logical NOT operator (!) negates the truthiness of the operand. Since 4 is truthy, !4 will evaluate to false.

const h = 0;
console.log(!h); // Here, the number 0 is considered a falsy value. The logical NOT operator (!) negates the truthiness of the operand. Since 0 is falsy, !0 will evaluate to true. 

console.log(!!g); // Here, the number 4 is considered a truthy value. The first logical NOT operator (!) negates the truthiness of the operand, resulting in false. The second logical NOT operator (!) negates the result again, resulting in true. Therefore, !!4 will evaluate to true.

console.log(!!h); // Here, the number 0 is considered a falsy value. The first logical NOT operator (!) negates the truthiness of the operand, resulting in true. The second logical NOT operator (!) negates the result again, resulting in false. Therefore, !!0 will evaluate to false.  

const z = null;
const y= 5;

console.log(z ?? d); // Here, the nullish coalescing operator (??) checks if the value of z is null or undefined. Since z is null, the operator returns the value of d, which is 0. Therefore, the expression z ?? d evaluates to 0.
console.log(y ?? d); // Here, the nullish coalescing operator (??) checks if the value of y is null or undefined. Since y is 5, which is neither null nor undefined, the operator returns the value of y. Therefore, the expression y ?? d evaluates to 5.