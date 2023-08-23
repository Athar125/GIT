"use strict";
// Develop a program that reads a list of grades and uses the splice method to 
// remove failing grades (below 50) from the array
function removeGrade(gradeArray) {
    for (var i = 1; i <= gradeArray.length; i++) {
        if (gradeArray[i - 1] < 50) {
            gradeArray.splice(i - 1, 1);
        }
    }
}
var inputGrade = removeGrade([43, 56, 59, 23, 47, 87, 95, 54, 67, 34, 76]);
console.log(`The list after removing failing grade is ${inputGrade}`);
//  Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
let n = 100;
let sum = 0;
for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}
console.log(`Sum of first ${n} even numbers: ${sum}`);
// Implement a program that uses a for loop to iterate through an array of
// numbers and print only the even numbers.
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 1; i <= arr1.length; i++) {
    if (arr1[i] % 2 === 0) {
        console.log(arr1[i]);
    }
}
// Implement a program that uses a loop to iterate through an array of 
// numbers and remove all the even numbers from them and just leave the odd ones
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11];
let arrOfOddNumbers = [];
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] % 2 !== 0) {
        arrOfOddNumbers.push(arr2[i]);
    }
}
console.log(arrOfOddNumbers);
