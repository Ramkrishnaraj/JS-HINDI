let score="23abc"
 
console.log(typeof score);
console.log(typeof(score));

let valueInNumber=Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber)

// 23 => number
// "23" => string
// "23abc" => NaN
// null => object
// undefined => undrfined

let IsLoggedIn=1
let booleanIsLoggedIn = Boolean(IsLoggedIn)
console.log(booleanIsLoggedIn);

// 1=true; 0=false
// "" =>false
// "Radha" =>true