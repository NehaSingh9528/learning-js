// class apple 
// {
//     camera = 50mp,
//     battery = 5000mAh,

//     getDetails()
//     {

//     }
// }

// const smartphone = new apple();
// console.log(smartphone);

//Here in this example, we are defining a class called 'user' with a method called 'getdetails'. The 'getdetails' method is designed to print the name and email of the user. We then create an instance of the 'user' class called 'user1' using the 'new' keyword. This allows us to access the properties and methods of the 'user' class through the 'user1' instance.
// class user
// {
//     getdetails()
//     {
//         console.log("naman", "neha@gmail.com") //It's static data, we can directly print it without using 'this' keyword. If we want to use dynamic data, we can use 'this' keyword to access the properties of the class.
//     }
// }

// const user1 = new user(); //In this example, we are creating a new instance of the 'user' class and assigning it to the variable 'user1'. The 'new' keyword is used to create an instance of the class, which allows us to access its properties and methods. Since the 'user' class does not have any properties or methods defined, 'user1' will be an empty object. However, we can still use 'user1' to add properties or call methods if we define them in the future.


class user
{
    constructor(name, email)
        {
            this.name = name,
            this.email=email;
        }

    getDetails()
    {
        console.log(`${this.name} ${this.email}`) //Here we are using template literals to print the name and email of the user. The 'this' keyword is used to access the properties of the class, which are defined in the constructor. When we create an instance of the 'user' class and call the 'getDetails' method, it will print the name and email of that specific instance.
    }
}

const user1 = new user('neha', 'neha@gmail.com');
const user2 = new user('naman', 'naman@gmail.com');
user1.getDetails(); //Here we are calling the 'getDetails' method on the 'user1' instance. This will execute the code inside the 'getDetails' method and print the name and email of 'user1' to the console. The output will be: "neha