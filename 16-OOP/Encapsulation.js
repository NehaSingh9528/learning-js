class user
{
    //#password = "12345"; //Here we are defining a property called 'password' in the 'user' class and assigning it a value of "12345". This property is not accessible outside the class, which means it cannot be accessed or modified directly from instances of the 'user' class. This is an example of encapsulation, where we are hiding the internal details of the class and only exposing certain properties or methods to interact with the class. By keeping the 'password' property private, we can ensure that it cannot be tampered with or accessed by unauthorized users, thus enhancing the security of our application.

    #password;
    constructor(name, email, password)
    {
        this.name = name,
        this.email=email;
        this.#password = password;
    }

    checkPassword(pass)
    {
        return this.#password == pass
    }
}
const user1 = new user('Neha', 'neha@gmail.com', '123');
//console.log(user1.password); //Here we are creating an instance of the 'user' class called 'user1'. Since the 'password' property is defined as a private property within the 'user' class, it cannot be accessed directly from outside the class. Therefore, when we try to log 'user1.password', it will result in an error or undefined value, depending on the JavaScript environment. This demonstrates the concept of encapsulation, where we are hiding the internal details of the class and only exposing certain properties or methods to interact with the class. In this case, the 'password' property is hidden and cannot be accessed or modified directly from instances of the 'user' class.
console.log(user1.checkPassword('12345')); //Here we are calling the 'checkPassword' method on the 'user1' instance and passing the string "12345" as an argument. The 'checkPassword' method compares the provided password with the private '#password' property defined in the 'user' class. Since the value of '#password' is "12345", the method will return true, indicating that the provided password matches the stored password. This allows us to verify if the user has entered the correct password without exposing the actual password value, thus maintaining encapsulation and security.


class userHelper
{
    //When we write static before a method in a class, it means that the method belongs to the class itself rather than to any specific instance of the class. This means that we can call the static method directly on the class without needing to create an instance of the class. Static methods are often used for utility functions or helper methods that do not require access to instance-specific data. In the context of the 'userHelper' class, we can define a static method called 'generateId' that can be used to generate unique IDs for users without needing to create an instance of the 'userHelper' class. This allows us to easily generate IDs whenever needed without having to instantiate the class first.
    static generateId()
    {
        return Math.floor(Math.random() * 1000);
    }
}
console.log(userHelper.generateId()); //Here we are calling the static method 'generateId' directly on the 'userHelper' class without creating an instance of the class. The 'generateId' method generates a random number between 0 and 999 by using the 'Math.random()' function and multiplying it by 1000, then rounding it down to the nearest whole number using 'Math.floor()'. When we log the result of 'userHelper.generateId()', it will output a random ID each time we run the code, demonstrating how static methods can be used to perform utility functions without needing to create an instance of the class.