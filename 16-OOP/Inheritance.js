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

//To inherit the properties and methods of the 'user' class, we can create a new class called 'Admin' that extends the 'user' class. This means that the 'Admin' class will have access to all the properties and methods of the 'user' class, and we can also add additional properties and methods specific to the 'Admin' class. In the constructor of the 'Admin' class, we use the 'super' keyword to call the constructor of the parent class ('user') and pass the necessary parameters to initialize the inherited properties. We can also define new properties or methods in the 'Admin' class as needed.
// The 'Admin' class can then be instantiated to create objects that have both the properties and methods of the 'user' class as well as any additional features defined in the 'Admin' class.
// To inherit the properties of one class 'extends' keyword is not alone is enough, we also need to use 'super' keyword to call the constructor of the parent class and pass the necessary parameters to initialize the inherited properties. This allows us to create a new class that builds upon the existing functionality of the parent class while also adding its own unique features.
class Admin extends user
{
    constructor(name, email, permissions)
    {
        super(name, email);
        this.permissions = permissions;
    }

    getAdminDetails()
    {
        return `${this.name}, ${this.email}, ${this.permissions}`;
    }
}
const admin1 = new Admin('Neha', 'neha@gmail.com', 'read-write');
console.log(admin1); //Here we are creating an instance of the 'Admin' class called 'admin1'. The 'Admin' class extends the 'user' class, which means it inherits all the properties and methods of the 'user' class. In the constructor of the 'Admin' class, we call the 'super' function to invoke the constructor of the parent class ('user') and pass the 'name' and 'email' parameters. We also define an additional property called 'permissions' specific to the 'Admin' class. When we log 'admin1', it will show all the properties including those inherited from the 'user' class.


class superAdmin extends Admin
{
    constructor(name, email, permissions, level)
    {
        super(name, email, permissions);
        this.level = level;
    }

    getSuperAdminDetails()
    {
        //console.log(`${this.name}, ${this.email}, ${this.permissions}, ${this.level}`) //Here we are defining a new method called 'getSuperAdminDetails' in the 'superAdmin' class. This method uses template literals to print the name, email, permissions, and level of the super admin. The 'this' keyword is used to access the properties of the class, which are inherited from the 'Admin' class and the 'user' class. When we create an instance of the 'superAdmin' class and call the 'getSuperAdminDetails' method, it will print all the relevant details of that specific instance.
        console.log(super.getAdminDetails() +`, ${this.level}`); //Here we are using the 'super' keyword to call the 'getAdminDetails' method from the parent class ('Admin') and then appending the 'level' property specific to the 'superAdmin' class. This allows us to reuse the functionality of the parent class while also adding our own unique details for the super admin. When we call 'getSuperAdminDetails', it will print all the relevant information in a structured format.
    }
}

const superAdmin1 = new superAdmin("ishan", "ishan@gmail.com", "full-access", "1");

superAdmin1.getSuperAdminDetails(); //Here we are creating an instance of the 'superAdmin' class called 'superAdmin1'. The 'superAdmin' class extends the 'Admin' class, which in turn extends the 'user' class. This means that 'superAdmin1' has access to all the properties and methods of both the 'Admin' and 'user' classes. In the constructor of the 'superAdmin' class, we call the 'super' function to invoke the constructor of the parent class ('Admin') and pass the necessary parameters to initialize the inherited properties. We also define an additional property called 'level' specific to the 'superAdmin' class. When we call the 'getSuperAdminDetails' method on 'superAdmin1', it will print all the relevant details of that specific instance, including those inherited from both parent classes.
