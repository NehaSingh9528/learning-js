//For loop - Is used when the number of iterations is known beforehand. It consists of three parts: initialization, condition, and increment/decrement. The initialization is executed only once at the beginning of the loop, the condition is evaluated before each iteration, and the increment/decrement is executed after each iteration.
for(let a = 1; a<=10; a++)
{
    console.log(a);
}

//While loop - Is used when the number of iterations is not known beforehand. It executes the block of code as long as the specified condition is true. It is known as a pre-test loop because the condition is evaluated before the block of code is executed.
let b = 1;
while(b<=10)
{
    console.log(b);
    b++;
}

//Do-While loop - Is used when the number of iterations is not known beforehand. It executes the block of code at least once, even if the condition is false. It is known as a post-test loop because the condition is evaluated after the block of code is executed.
let c=1;
do{
    console.log(c);
    c++;
}while(c<=10);

//The difference between number of iterations is known beforehand and not known beforehand is that in the first case, you can use a for loop, while in the second case, you can use a while loop or a do-while loop. 