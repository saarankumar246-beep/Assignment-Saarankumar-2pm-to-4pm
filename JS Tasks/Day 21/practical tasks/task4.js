const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combined = array1.concat(array2); // using concat

const combined1 = [...array1, ...array2]; // using spread syntax

console.log(combined);
console.log(combined1);