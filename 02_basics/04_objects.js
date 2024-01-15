// Singleton Object
// const tinderuser=new Object()
const tinderuser= {}
tinderuser.id=123
tinderuser.name="Ramkrishna"
tinderuser.mob=7296031836
tinderuser.IsLoggedIn=false
// console.log(tinderuser)
const regularUser={
    email:"trfhf@gmailcom",
    fullname:{
        Userfullname:{
        firstname:"Ramkrishna",
        lastname:"Mahto"

    }
}
}
// console.log(regularUser.fullname)
// console.log(regularUser.email)
// console.log(regularUser.IsLoggedIn)
// console.log(regularUser.fullname.Userfullname.firstname)
 
const obj1={1:"a", 2:"b"}
const obj2={3:"c", 4:"d"}
const obj3={4:"e", 5:"f"}
const obj4=Object.assign({},obj1,obj2,obj3)
// const obj5={obj1, obj2}
// console.log({},obj5);
const obj6={...obj1, ...obj2}
// console.log(obj4);
// console.log(obj6);

const user=[                 //Array of object comes from database..
    {
        id:1,
        email:"r@gmail.com"
    },
    {
        id:1,
        email:"r@gmail.com"
    },
    {
        id:1,
        email:"r@gmail.com"
    }
]
// console.log(user);
// user[1].email
// console.log(tinderuser);
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));
// console.log(tinderuser.hasOwnProperty('IsLoggedIn'));


const course={                              //Destructuring of Objects
    coursename:"JavaScript",
    price:"999",
    courseTeacher:"Ramkrishna"
}
// course.courseTeacher
const{courseTeacher:Teacher}=course
console.log(Teacher)

