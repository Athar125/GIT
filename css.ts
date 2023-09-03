// 27/08/2023

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

/*
let arrayOfNames : string[] = ["AZHAR", "ATHAR", "AFTAB", "SAHIL", "MEHTAB"];
  arrayOfNames.forEach(names => {
    console.log([`Your class will be held tonight ${names}!`])
  })
  
*/
// end

// 3/9/2023

// Leetcode

// write a ts program that reshape the input array [2, 4, 10, 20]
// to multiply by 2 and print the new list.
/*
var list:number[] = [2, 4, 10, 20];
var newList:number[] = []

for (let index = 0; index < list.length; index++ ){
    const element = list[index];
    newList.push(element * 2)
}
  */

//  String   Number    Boolean   undefined   null    array

// names, rollno,  session
/*
let names: string[] = ["Athar", "Azhar", "Aftab", "Akash"];
let student1 = ["Athar" 121, "Morning"]
let student2 = ["Azhar" 131, "Evening"]
let student3 = ["Aftab" 134, "Morning"]
*/

// object
/*
let student1 = {
    name: "Athar",
    rollNo: 121,
}
console.log(student1.name)

let student2 = {
    rollNo: 131,
    name: "Azhar",
}
console.log(student2.name)
*/
/*
let student1 = {
    name: "Athar",
    rollNo: 121,
    isActive: false,
}
console.log(student1.name)
*/
/*
let student2 = {
    rollNo: 131,
    name: "Azhar",
    isActive: true,
    Adress: "House Node.12, D type, Fasialabad, Punjab, Pakistan"
    city : ["Fasialabad", "Kohat", "Pindi"]
}
;
console.log(student2.city.push("Lahore"))
console.log(student2.city)
*/
/*
let car;
[
{
    model: "city",
    brand: "Honda",
    isUsed: true,
    modelYear: 2003,
    color: "Silver"
},
{
    model: "city",
    brand: "BMW",
    isUsed: false,
    modelYear: 2023,
    color: "Black"
},
{
    model: "cultus",
    brand: "Suzki",
    isUsed: true,
    modelYear: 2009,
    color: "Gray"
},
{
    model: "corolla",
    brand: "Toyota",
    isUsed: false,
    modelYear: 2013,
    color: "White"
}
]
console.log("car.brand")
*/
/*
type CarType = {
    model: string ,
    brand:string ,
    isUsed: boolean,
    modelYear: number,
    color: string,
}
*/
/*
let car = {
    brand: "HONDA",
    race: () => {
        console.log("RACING")

    }
}
car.race()
*/