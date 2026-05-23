let num = [1, 2, 3, 4, 5];

let mapValue = num.map((value)=>
{
    return value*2;
})

console.log(mapValue); //Output: [2, 4, 6, 8, 10] because map() creates a new array by applying the provided function to each element of the original array.

let filterValue = num.filter((value)=>
{
    return value>3;
})
console.log(filterValue); //Output: [4, 5] because filter() creates a new array with all elements that pass the test implemented by the provided function.

let reduceValue = num.reduce((value1, value2)=>
{
    return value1+value2;
})
console.log(reduceValue); //Output: 15 because reduce() applies the provided function to each element of the array, reducing it to a single value. In this case, it sums up all the elements of the array. 1 + 2 = 3, 3 + 3 = 6, 6 + 4 = 10, 10 + 5 = 15.

//Here is another example of reduce() to find the maximum value in an array:

let maxValue = num.reduce((max, value)=>
{
    return (value > max) ? value : max;
}, num[0]); 
console.log(maxValue); //Output: 5 because reduce() iterates through the array and compares each value with the current maximum value, updating the maximum value when a larger value is found. In this case, it finds that 5 is the largest value in the array.

