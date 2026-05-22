//Add the element
let tech = ['js', 'react', 'java', 'python'];
console.log(tech.splice(1, 0, 'Go')); //Output: [] Because splice() does not return the updated array. It returns the removed elements. So JavaScript says: Go to index 1 and insert 'Go' without deleting anything.
console.log(tech); //Output: ['js', 'Go', 'react', 'java', 'python']

//Delete the element
tech.splice(2, 1); //Output: [] Because splice() does not return the updated array. It returns the removed elements. So JavaScript says: Go to index 2 and delete 1 element.
console.log(tech); //Output: ['js', 'Go', 'java', 'python']

//Replace the element
tech.splice(2, 1, 'Rust'); //Output: ['java'] Because splice() does not return the updated array. It returns the removed elements. So JavaScript says: Go to index 2 and delete 1 element and insert 'Rust'.
console.log(tech); //Output: ['js', 'Go', 'Rust', 'python']