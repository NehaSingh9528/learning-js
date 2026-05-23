let person = {
    age : 23,
    name : "Neha",

    walk(){
        console.log("Person is walking", this.name);
    },

    speak:function(){
        console.log("Person is speaking");
    }
}
//There are two ways in which objects can inherit properties and methods from other objects in JavaScript: through the prototype chain and through constructor functions.

//1. Prototype Chain
//Example of prototype chain inheritance: 
//In JavaScript, every object has a hidden property called [[Prototype]], which is a reference to another object. This allows objects to inherit properties and methods from their prototype. When we try to access a property or method on an object, JavaScript first looks for it on the object itself. If it doesn't find it there, it looks for it on the object's prototype, and so on up the prototype chain until it finds the property or method or reaches the end of the chain (null).

let person2 = {}
person2.__proto__ = person ; //We can also set the prototype of an object using the __proto__ property. In this case, we are setting the prototype of 'person2' to be 'person', which means that 'person2' will inherit the properties and methods of 'person'.

console.log(person2); //Output: {} because 'person2' is an empty object that has been created without any properties or methods of its own. However, it has access to the properties and methods of 'person' through the prototype chain.
person2.walk(); //Output: Person is walking Neha because 'person2' inherits the 'walk' method from 'person' and uses its own 'name' property. In this case, since 'person2' does not have its own 'name' property, it accesses the 'name' property from 'person' through the prototype chain, which is "Neha". Therefore, when we call 'person2.walk()', it prints "Person is walking Neha" to the console.

//2. Usine setPrototypeOf() method
let person3 = {}
Object.setPrototypeOf(person3, person); //We can also set the prototype of an object using the Object.setPrototypeOf() method. In this case, we are setting the prototype of 'person3' to be 'person', which means that 'person3' will inherit the properties and methods of 'person'.
console.log(person3); //Output: {} because 'person3' is an empty object that has been created without any properties or methods of its own. However, it has access to the properties and methods of 'person' through the prototype chain.
person3.speak(); //Output: Person is speaking because 'person3' inherits the 'speak' method from 'person' through the prototype chain. When we call 'person3.speak()', it executes the 'speak' method defined in 'person', which prints "Person is speaking" to the console.