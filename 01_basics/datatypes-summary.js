// Primitive datatypes 
// 7Types:- 1.Number 2.String 3.boolean 4.null 5.undefined 6.symbol 7.bigint

const score=100
const scorevalue= 100.3
const outsideTemp = null
const IsloggedIn = false
let userEmail;
const Id =Symbol('123')
const anotherId=Symbol('123')
console.log(Id === anotherId)


const bigint=14587654285487n
// Reference type(Non-primitive):in this type we can directly allocate value in memory
// 1.Array 2.Object 3.Function 

const x=["Rakesh", "Raju", "Radha"] //Array
let myObj={
    name:"Ramkrishna", //Obj
    age : 23,
    mob: 7296031836,
}

const MyFunction = function(){
    console.log("Hello World");
}
console.log(typeof MyFunction)
