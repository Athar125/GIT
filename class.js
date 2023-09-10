// 3/9/2023
/*
import _name from "./index.js"

console.log(_name);
*/
// 10/9/2023
export {};
// Sync (code work in sequence)
// Async (Timing Function Start) (Time Consuming Conditions)(code work )
// which take time to load but we can control the remaining code that it can excute or not 
/*
console.log ("Start");  // 1
setTimeout(() =>{
console.log("in settimeout");
}, 5000);
console.log("end");   // 2
/////

console.log ("Start");  // 1
function printInFunction() {
    console.log(" in setinterval");
}
setInterval(printInFunction, 5000);
console.log("end");   // 2



function printInFunction() {
    const time = new Date();
    const _time = time.toLocaleTimeString();
    console.log("time:",  _time)
}
    let count = 0;
    let Interval = setInterval(() => {
    printInFunction();
    count++;
    if (count ===6){
        clearInterval(Interval);
    }

 }, 3000 );

    
 let car = {
    model: "Civic",
    brand: "Honda",
 };
 

  class Car {
    model: string = ""
    brand: string = ""
  }

  let car = new Car();

  car.brand = "BMW";
  car.model = "M4 Competition";
  console.log("car", car);

  let car2 = new Car();
  car2.brand = "Honda";
  car2.model = "Civic";
  console.log("car2", car);


class Car {
    model: string = "";
    brand: string = "";
    year: number = 0;
    
    constructor(_model:string, _brand:string, _year:number){
        this.model = _model;
        this.brand = _brand;
        this.year = _year;
    }
  }
  let newCar = new Car("S Class", "Mercedes", 2023);
  let newCar2 = new Car("ABL", "Audi", 2015);

  console.log(newCar);
  console.log(newCar2);
  

  class Teacher {
    name:string =""
    age: number = 0;
    salary:number = 0;
    grade: string = "";
    constructor(_name:string, _age: number, _salary:number, _grade: string){
        this.name = _name;
        this.age = _age;
        this.salary = _salary;
        this.grade = _grade;
    }
  }
  let classTeacher = new Teacher ("Athar", 29, 50000, "A");
  console.log(classTeacher);
  */
// const date = new Date();
// date.getDay()
// function promiseFunc(resolve:, reject:){
// internet code
// const randomNumber: number = Math.random()
// console.log("randomNumber", randomNumber)
// }
