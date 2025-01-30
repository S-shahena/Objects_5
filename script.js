
// object

const person = {
    fName: "shahena",
    lName: "Akter",
    id:     "021",
    batch: "1st",
    Student: "95icno "

}
console.log(person);

person.totalStudent = 27;
console.log(person);
person.gruoupCreator = "Millat Mero";
console.log(person);
person["groupAdmin"]= "Abdul Hannan";
console.log(person);
console.log(person.fName, "Akter");


const allOfStudents = {

    student1:{
        fName: "naimul",
        lName: "Alam",
        id   : "001",
        batch: "1st",
        student: "95icon",
    },
    student2:{
        fName: "Prodip",
        lName: "Komar",
        id   : "002",
        batch: "1st",
        student: "95icon",
    },
    student3:{
        fName: "Nabiul Islam",
        lName: "Nabin",
        id   : "003",
        batch: "1st",
        student: "95icon",
    },
    student4:{
        fName: "Farzana ",
        lName: "Yesmin",
        id   : "004",
        batch: "1st",
        student: "95icon",
    },
    student5:{
        fName: "Abu Samaun",
        lName: "Dip",
        id   : "005",
        batch: "1st",
        student: "95icon",
    }
    
}
console.log(allOfStudents);
console.log(allOfStudents.student1);

console.log(allOfStudents.student1.fName);
console.log(allOfStudents["student2"]["fName"], "Bangldesh");

allOfStudents.student6 = {
    fName: "Khalid",
    lName: "saifulla",
    id   : "005",
    batch: "1st",
    student: "95icon",
}

console.log(allOfStudents);
// Access to Built-in Methods:
console.log(Object.keys(allOfStudents));
console.log(Object.values(allOfStudents));
console.log(Object.entries(allOfStudents));



// problem 
// const sh =(mh1, mh2)=>{

// return mh1["one"] * mh2["two"];

// }
// const ma= sh(ms, ns);
// console.log(ma);

// const ms ={
//     one: 5,
//     two: 2
// };
// const ns ={
//     one: 3,
//     two: 4
// };



// problem invocation function

// (function(a, b){
//     return a * b;
// }
// let c = (5, 5)

// )




// const y = { 
//   a:  function x(){
// console.log(this)
// }

// }
// y.a()



// const person = {
//     fulName: function(a, b){
//       return  this.firstName + this.lastName+ a + b  ;
//     }
// }


// const person1 ={
//     firstName: ' shahena',
//     lastName: " Akter"
// }

// const person2 ={
//     firstName: 'shahena',
//     lastName: "Akter"
// }

// console.log( person.fulName.apply(person1, [" Dhaka ", "bangladesh"]) )

// const person3 ={
//     p1:{
        
//     },

//     p2:{

//     },
//     p3:{

//     },
//     p4:{

//     },

// }





// const toWalk = 'Ban ';

// function toSleep(p1, p2, p3){
//     let total = p1+p2*p3;
// // console.log(toWalk + 'toSleep ' + total);
// return total;
// }
// toSleep();
// let result = toSleep("bang", 12, 15);
// let totalResult = 54 + 22 + result;
// console.log(totalResult);

// let toWrite = function(){
// console.log( toWalk + "toWrite");
// }
// toWrite()

// const toRead = (p4, p5, p6)=>{
// let read = toWalk + "shahena";
// let read2 = p4 + p5 + p6;
// let totalRead = read + read2 ;
// return totalRead;
// }
// const bs = toRead("12", "bangladesh", toSleep()) + "saju";
// const bs2 = bs + "shorifa ";
// console.log(bs2);



// function a(){

// }
// a();

// function expresion

// const b = function(){

// }
// b()

// self invocation

// (function(){

// }());

// array function

// const c =()=>{
    
// }

// const a =()=>{

// }
// const b =()=>{}
// const c =()=>{

// }
// const d =()=>{

// }
// const e =()=>{


// }



// // const f =(a, b)=>{
// //     let c = b - a;
// //     console.log(c);
// // return a * b
// // }
// // const r = f(4, 7);
// // console.log(r);



// const g = function(){

// }
// g();
// const h = function(){

// }
// h();



// const l =(x, y = 20)=>{
// return x * y;
// }
// const o = l(8, 4);

// console.log(o);

// const q = 3 + 7;

// const m = (a, c = 8, d, n ) =>{
// return a * c + d + n;

// }

// const i = l(5, 10) * 2;


// const n = m(5, 5, i, q );
// console.log(n);

