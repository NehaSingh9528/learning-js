class User
{
    getRole()
    {
        return "I am a normal user.";
    }
}

class Admin extends User
{
    //Method get overriding is a feature in object-oriented programming where a subclass provides a specific implementation of a method that is already defined in its superclass. In this case, the 'Admin' class is overriding the 'getRole' method that is defined in the 'User' class. By providing its own implementation of the 'getRole' method, the 'Admin' class can return a different string ("I am an admin user.") when the method is called on an instance of the 'Admin' class. This allows us to achieve polymorphism, where the same method name can have different behaviors based on the class of the object we are working with. When we call the 'getRole' method on an instance of the 'Admin' class, it will execute the overridden method in the 'Admin' class instead of the original method in the 'User' class, thus returning a different result. This is a fundamental concept in object-oriented programming that allows for flexibility and extensibility in our code. 
    getRole()
    {
        return "I am an admin user."
    }
}

class SuperAdmin extends Admin
{
    getRole()
    {   
        return "I am a super admin user."
    }
}

const user1 = new User();
console.log(user1.getRole()); //Here we are creating an instance of the 'User' class called 'user1'. When we call the 'getRole' method on 'user1', it will return the string "I am a normal user." This demonstrates polymorphism, where the same method name ('getRole') can have different implementations in different classes. In this case, the 'User' class has its own implementation of the 'getRole' method, which is different from the implementations in the 'Admin' and 'SuperAdmin' classes.

const admin1 = new Admin();
console.log(admin1.getRole()); //Here we are creating an instance of the 'Admin' class called 'admin1'. When we call the 'getRole' method on 'admin1', it will return the string "I am an admin user." This demonstrates polymorphism, where the same method name ('getRole') can have different implementations in different classes. In this case, the 'Admin' class has its own implementation of the 'getRole' method, which is different from the implementations in the 'User' and 'SuperAdmin' classes.          

const superAdmin1 = new SuperAdmin();
console.log(superAdmin1.getRole()); //Here we are creating an instance of the 'SuperAdmin' class called 'superAdmin1'. When we call the 'getRole' method on 'superAdmin1', it will return the string "I am a super admin user." This demonstrates polymorphism, where the same method name ('getRole') can have different implementations in different classes. In this case, the 'SuperAdmin' class has its own implementation of the 'getRole' method, which is different from the implementations in the 'User' and 'Admin' classes. This allows us to use the same method name to achieve different behaviors based on the class of the object we are working with.     

