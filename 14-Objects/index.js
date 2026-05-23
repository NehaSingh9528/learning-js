//There are 2 ways to create objects in JavaScript

//1. Object Literal Syntax
let person = {
    age : 23,
    name : "Neha",

    //Method is a function that is defined as a property of an object. It is a behavior that an object can perform. In JavaScript, we can define methods within an object using the object literal syntax.
    walk(){
        console.log("Person is walking");
    },

    //Here is another method defined using a different syntax:
    speak:function(){
        console.log("Person is speaking");
    }
}
console.log(person); //Output: { age: 23, name: 'Neha' } because the object literal syntax allows us to create an object by defining its properties and values directly within curly braces.
//In this example, we have created an object named 'person' with properties 'age' and 'name', and methods 'walk' and 'speak'.
//We can access the properties and methods of the object using dot notation:
console.log(person.name); //Output: Neha because we are accessing the 'name' property of the 'person' object using dot notation.
person.walk(); //Output: Person is walking because we are calling the 'walk' method of the 'person' object using dot notation.
person.speak(); //Output: Person is speaking because we are calling the 'speak' method of the 'person' object using dot notation.       
//Noramlly we call say this function as a method of the object because it is defined within the object and can be called using the object's name followed by the method name.

person.skill = "Coding"; //We can also add new properties to an existing object using dot notation.
console.log(person); //Output: { age: 23, name: 'Neha', walk: [Function: walk], speak: [Function: speak], skill: 'Coding' } because we have added a new property 'skill' to the 'person' object with the value 'Coding'. Now the object has an additional property along with its existing properties and methods.

delete person.skill; //We can also delete properties from an object using the delete operator.
console.log(person); //Output: { age: 23, name: 'Neha', walk: [Function: walk], speak: [Function: speak] } because we have deleted the 'skill' property from the 'person' object using the delete operator. Now the object no longer has the 'skill' property, but it still retains its existing properties and methods.

let cat = {
    name : "Bhuro",
    age:2,
    energy : "Positive",

    walk(){
        //We have to use 'this' keyword to access the properties of the object within its methods. 'this' refers to the current object that is executing the method. In this case, 'this.name' refers to the 'name' property of the 'cat' object.
        console.log(this.name + " is walking");
    },

    sleep : function()
    {
        console.log("She loves to sleep beside Neha");
    }
}
// console.log(cat);  //Output: { name: 'Bhuro', age: 2, energy: 'Positive', walk: [Function: walk], sleep: [Function: sleep] } because we have created an object named 'cat' with properties 'name', 'age', and 'energy', and methods 'walk' and 'sleep' using the object literal syntax. The object contains all the defined properties and methods as part of its structure.
// console.log(cat.walk()); //Output: Bhuro is walking because we are calling the 'walk' method of the 'cat' object using dot notation. The method uses the 'name' property of the 'cat' object to print a message indicating that Bhuro is walking.
// console.log(cat.sleep()); //Output: She loves to sleep beside Neha because we are calling the 'sleep' method of the 'cat' object using dot notation. The method prints a message indicating that the cat loves to sleep beside Neha.

for(let i in cat)
{
    //console.log(i); //Output: name, age, energy, walk, sleep because the for...in loop iterates over the enumerable properties of the 'cat' object and logs each property name to the console.
    console.log(cat[i]); //Output: Bhuro, 2, Positive, [Function: walk], [Function: sleep] because the for...in loop iterates over the enumerable properties of the 'cat' object and logs the value of each property to the console using bracket notation (cat[i]).
}

//2. With new keyword and constructor function
function Person(name, age)
{
    this.name = name;
    this.age = age;
    this.walk = function(){
        console.log(this.name + " is walking");
    }       
}

let person1 = new Person("Neha", 23);
console.log(person1); //Output: Person { name: 'Neha', age: 23, walk: [Function] } because we have created a constructor function named 'Person' that takes 'name' and 'age' as parameters and assigns them to the properties of the object being created. We then create a new instance of the 'Person' object using the 'new' keyword and pass the arguments "Neha" and 23 to the constructor function. The resulting object has the properties 'name', 'age', and a method 'walk' defined within it.
person1.walk(); //Output: Neha is walking because we are calling the 'walk' method of the 'person1' object using dot notation. The method uses the 'name' property of the 'person1' object to print a message indicating that Neha is walking.

let person2 = new Person("Rahul", 30);
console.log(person2); //Output: Person { name: 'Rahul', age: 30, walk: [Function] } because we have created another instance of the 'Person' object named 'person2' using the 'new' keyword and passed the arguments "Rahul" and 30 to the constructor function. The resulting object has the properties 'name', 'age', and a method 'walk' defined within it, similar to the 'person1' object but with different values for the properties.
person2.walk(); //Output: Rahul is walking because we are calling the 'walk' method of the 'person2' object using dot notation. The method uses the 'name' property of the 'person2' object to print a message indicating that Rahul is walking.

//In this example, we have created a constructor function named 'Person' that takes 'name' and 'age' as parameters and assigns them to the properties of the object being created. We also define a method 'walk' within the constructor function that uses the 'name' property to print a message when called. We then create two instances of the 'Person' object, 'person1' and 'person2', with different values for the properties. Each instance has its own set of properties and methods defined by the constructor function.
//The constructor function allows us to create multiple objects with similar properties and methods without having to define them individually for each object. It provides a blueprint for creating objects and helps in organizing code efficiently when dealing with multiple instances of the same type of object.
//In summary, we can create objects in JavaScript using object literal syntax or constructor functions. Object literal syntax allows us to define properties and methods directly within curly braces, while constructor functions provide a blueprint for creating multiple objects with similar properties and methods. Both approaches allow us to organize and structure our code effectively when working with objects in JavaScript.