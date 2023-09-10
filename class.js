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

  */ 
