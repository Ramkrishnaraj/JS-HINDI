const friend =["Rahul", "Muskan", "Kamal"]
const friend1=["Kishor", "Mortal", "Radha" ]
// friend.push(friend1);
// console.log(friend);
// console.log(friend[3]);
const x=friend.concat(friend1);
// console.log(x)


// *****Spread opertor******
const y=[...friend , ...friend1]
// console.log(y);

const A=[1,2,3,[4,5,6],7,[8,9,10]]
const B = A.flat(Infinity)
console.log(B);

console.log(Array.isArray("Ramkrishna"))
console.log(Array.from("Ramkrishna"))
console.log(Array.from({Name:"Ramkrishna"}))

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));


