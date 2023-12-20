const Symb = Symbol("Key1")

// object laterls...
const jsUser={
    Name: "Mr. Ramkrishna",
    "Full Name":"Ramkrishna Mahto",  
    Age: 23,
    [Symb]:"MyKey1",
    Mob: 7296031836,
    Email:"rkraj@google.com",
    LoggedIn: false,
    LastLoggedIn:["Monday","Saturday"]

}
// console.log(jsUser.Email)        //we can access by . value & [" "] 
// console.log(jsUser["Email"])
// console.log(jsUser["Full Name"]) //we can not access by . value
// console.log(jsUser.Symb)
// console.log(typeof jsUser.Symb)
// console.log(jsUser[Symb])



jsUser.Email="191fa0584@microsoft.com"
// console.log(jsUser)
// Object.freeze(jsUser)
jsUser.Email="sweety1203@mail.com"
// console.log(jsUser)


jsUser.gretting=function(){
    console.log("Hello Good Morning!")
}
console.log(jsUser.gretting())


jsUser.grettingtwo=function(){
    console.log(`Very Good Morning Sir, ${this.Name}`)  //first Change string to bactics or Srting Interpolation
}
console.log(jsUser.grettingtwo())
