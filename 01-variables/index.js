// var num = 5;
// console.log(num);

if(true)
{
    var n1 = 6; //var keyword has function scope, so it is accessible outside the block as well. Var is hosted, which means it can be accessed before its declaration, but it will be undefined until the declaration is reached. 
    let n2 = 6; //let keyword has block scope, so it is not accessible outside the block
    const n3 = 7; //const keyword also has block scope, so it is not accessible outside the block

    console.log(n2);
    console.log(n3);
}else
{

}
console.log(n1);

console.log(host);
var host = "localhost"; //var is hosted, so it can be accessed before its declaration, but it will be undefined until the declaration is reached.
let host2 = "localhost"; //let is not hosted, so it cannot be accessed before its declaration.
const host3 = "localhost"; //const is not hosted, so it cannot be accessed before its declaration.

var a =10;
var a =20; //var allows redeclaration, so this will not throw an error and will overwrite the previous value of a.
console.log(a); //20

let b = 10;
// let b = 20; //let does not allow redeclaration, so this will throw an error.
console.log(b); //10

const c = 10;
// const c = 20; //const does not allow redeclaration, so this will throw an error.
console.log(c); //10

var d = 10;
d = 20; //var allows reassignment, so this will not throw an error and will overwrite the previous value of d.
console.log(d); //20

let e = 10;
e = 20; //let allows reassignment, so this will not throw an error and will overwrite the previous value of e.
console.log(e); //20        

const f = 10;
// f = 20; //const does not allow reassignment, so this will throw an error.
console.log(f); //10    

