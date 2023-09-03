"use strict";
// map => return same lenght array
// filter => return same lenght or less
// forEach => return nothing
/*
let numbers:number[] = [2, 4, 3, 12, 4, 5, 6, 7, 100, 100033,]
// even odd odd
let updateArray = numbers.map((number)=> {
    if (number % 2=== 0){
        return "even";
    } else {
        return "odd"
    }
})
console.log(updateArray);
*/
/*
let numbers:number[] = [2, 4, 3, 12, 4, 5, 6, 7, 100, 100033,]
let oddNumbers = numbers.filter((item)=>{
    if (item % 2 !== 0){
        return true
    }
})

console.log(oddNumbers);
console.log("original Array", numbers )
*/
/*
let numbers:number[] = [2, 4, 3, 123, 49, 56, 69, 76, 60, 85,]
let newArray = numbers.forEach((data) =>{
    console.log(data)
})
console.log(newArray)
*/
/*
let numbers:number[] = [2, 5, 30, 123, 49, 56, 69, 76, 67, 80,]
for (let i = 0; i < numbers.length; i++){
    if (numbers[i] % 2 === 0){
        numbers.splice(i, 1);
    }
}
console.log(numbers)
*/
/*
let numbers:number[] = [2, 5, 30, 123, 49, 56, 69, 76, 7, 80,]
let updateArray = numbers.filter((data) =>{
    if (data < 45) {
        return true;
    }
})
console.log(updateArray);
*/
let arrayOfNames = ["AZHAR", "ATHAR", "AFTAB", "SAHIL", "MEHTAB"];
arrayOfNames.forEach(names => {
    console.log([`Your class will be held tonight ${names}!`]);
});
// end
