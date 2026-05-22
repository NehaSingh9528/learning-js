let num = [1, 2, 3, 4, 5];
for(let i =0; i<num.length; i++)
{
    console.log(num[i]);
}

for(let i of num)
{
    console.log(i);
}

console.log(typeof(num)); //Output: object

for(let i in num)
{
    console.log(i); //Output: 0, 1, 2, 3, 4 because for...in loop iterates over the enumerable properties of an array, which are the indices in this case.
}

for(let i in num)
{
    console.log(num[i]); //Output: 1, 2, 3, 4, 5 because num[i] accesses the value at index i in the array.
}