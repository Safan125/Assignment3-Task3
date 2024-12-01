// first problem:

function evenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}
// here I used the filter method to filter the even numbers ie. just put them in the new array
// try it
console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [2, 4, 6, 8, 10]

// second problem:

function largestNumber(arr) {
  return Math.max(...arr);
}
// here I used the Math.max method to get the largest number in the array by destructuring the array instead of passing each element as an argument

// try it
console.log(largestNumber([1456, 24, 352, 4245, 5932, 62, 723, 843])); // 5932

// third problem:

function reverseString(str) {
  return str.split('').reverse().join('');
}
// here I used the split method to split the string into an array of characters, then I used the reverse method to reverse the array, and finally, I used the join method to join the array back to a string

// try it
console.log(reverseString('Hello')); // olleH

// fourth problem:

function removeDuplicates(arr) {
  return [...new Set(arr)];
}
// here I used the Set object to remove the duplicates, then I used the spread operator to convert the Set object back to an array

// try it
console.log(removeDuplicates([1, 2, 3, 4, 2, 3, 5, 6, 7, 8, 9, 1])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]