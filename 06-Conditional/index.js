let age =19;
let isAllowed = "with parents" // Here, the variable isAllowed is assigned the string value "with parents". This variable can be used to indicate whether a person is allowed to do something with the presence of their parents.

// if(age<18)
// {
//     console.log("You are elogible to vote");
// }
// else if(isAllowed === "with parents")
// {
//     console.log("You are eligible to vote with your parents");
// }
// else
// {
//     console.log("You are not eligible to vote");
// }

age<18?console.log("You are elogible to vote"):isAllowed === "with parents"?console.log("You are eligible to vote with your parents"):console.log("You are not eligible to vote"); // Here, the ternary operator is used to check if the age is greater than 18. If the condition is true, it will log "You are eligible to vote". If the condition is false, it will log "You are not eligible to vote".  

