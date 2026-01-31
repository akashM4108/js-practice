// var a = [1, 2, 3, 5, 8, 9, 6, 52, 65];
// a.forEach(function (val) {
//     console.log(val + 2);
// });

// var obj = {
//     name: "akash",
//     city: "kolkata",
//     pin: "700113"
// }
// for (var key in obj) {
//     console.log(key, obj[key]);
// }

// var a=5;
// do{
//     console.log("hey");
//     a++;
// }
// while(a<2);

// setTimeout(function(){
//     console.log("2 sec bad cahalana");
// }, 2000);

// var a={
//     name:"akash",
//     city: "kolkata",

// }
// delete a.name;
// delete a.city;
// console.log(a);
// var a = 10;

// console.log(b);
// let b = 20;


// let a = 12;
// let b = 50;

// if(a>6 && b<0){
//     console.log("true");
// }else{
//     console.log( "false");
// }

// let score = 66;
// let grad = score >= 69 ? "a" : score <= 44 ? "b" : false;
// console.log(grad);

// let x=9;
// let score = x++ + ++x;
// console.log(score);

// print 1-100 using for loop

// for (let i = 1; i < 101; i++) {
//     console.log(i);
// }

// for (let i = 1; i = 20; i++) {
//     console.log(i);
//     if (i === 5)
//         break;
// }


// Print numbers from 1 to 10 using a for loop.

// for (let i = 1; i < 11; i++) {
//     console.log(i);
// }

// Q2. Print numbers from 10 to 1 using a while loop.

// let i =10;
// while (i>0) {
//     console.log(i);
//     i--;
// }

// Q3. Print even numbers from 1 to 20 using a for loop.

// for(let i=1; i<21;i++){
//       if(i%2===0)
//     console.log(i);

// }

// let i=2;
// while(i<14){
//      if(i%2===0){
//         console.log(i);
//      }
//     i++;
// }


// Q4. Print odd numbers from 1 to 15 using a while loop.

// let i=1;
// while (i < 16) {
//     if (i % 2 === 1) {
//         console.log(i);
//     }
//     i++;
// }

// Q5. Print the multiplication table of 5 (i.e., 5 x 1 = 5... 5 × 10 = 50)

// for (let i = 1; i <= 10; i++) {
//     console.log(`5 * ${i} = ${5 * i} `);
// }


// Q6. Find the sum of numbers from 1 to 100 using a loop.

// let sum = 0;
// for (let i = 1; i <= 101; i++) {

//     sum = sum + i;
// }
// console.log(sum);


// Q7. Print all numbers between 1 to 50 that are divisible by 3.

// for (let i = 1; i < 51; i++) {
//     if (i % 3 === 0) {
//         console.log(i);
//     }
// }


// let i = 1;
// while (i < 51) {

//     if (i % 3 === 0) {
//         console.log(i);
//     }
//     i++;
// }
// Q8. Ask the user for a number and print whether each number from

// let val = prompt("give me a number");
// for (let i = 1; i < val; i++) {
//     if (i % 2 === 0) {
//         console.log(` ${i} is even`);
//     }
//     else {
//         console.log(` ${i} is odd`);
//     }
// }


// function adch(j,k,...val){
//        console.log(j,k,val);
// } 
// adch(1,2,8,6,92);



// function getScore(...score){
//       let total=0;
//      score.forEach(function(val){
//       total = total+val;

//      });
//      return total;

// }
//  console.log(getScore(2,4,6,9,74));


//  function chackage(age){
//       if(age<18) return "valid";
//       return "unvalid";
//  }
// console.log(chackage(1));


// function avc(val){
//    val();
// }
// avc(function(){
//      console.log("heyy");
// })

//BMI calculatar 

// function bmi( weight , height){
//     return weight= (height*height);
// }
// console.log(bmi(25,2.5));


// function discountcal(discount) {

//      return function (price) {
//           return price - price * (discount / 100);

//      };
// }
// let discounter = discountcal(10);
// console.log(discounter(200));



// function counter(){
//       let count = 0;
//      return function(){
//     console.log(count);
//     count ++;
//     return count;

//    }

// }
// let c= counter()
// console.log(c());

// let marks = [52, 2, 5, 58, 65, 12];
// marks.push(22222);

//   const user={ 
//           name: "akash marik",
//           location:{
//             city: "kolkata",
//             pin:700113,
//             address:{
//                 po: "sodpur",
//                 jk: 5227,
//             },
//           },
//   };
//   let {po,jk}= user.location.address;

// let obj={
//     name:"akash",
//     age: 22,
//     email:"akash554@gmail.com",
// }
// for (let key in obj){
//    console.log( key ,obj[key]);
// }



// let all = {
//     name: "akash",
//     age: 22,
//     email: "akash554@gmail.com",
//     location: {
//         city: "pune",
//         pin: 225225,
//     }

//  }
// Object.entries(all).forEach(function (val) {
//     console.log(val[0] + ":" + val[1]);
// });

// let Newall =JSON.parse(JSON.stringify(all));




//   let {pin}=obj.location;

// let {"marik-sad" : jk } = obj ;


//Declare your name and city using const , and your age using let .

// const name = "akash";
// const city = "kolkata";
// const age = "22";
// let x = 5;
//   x = 10;
//   console.log(count);
// var count = 42;

//Create a const object and add a new key to it — does it work?

// const obj={
//      name: "akash";
// }

//Try accessing a let variable before declaring it — what error do you see?

//  console.log(course);

// let course = "B.Tech";


// //Change a const array by pushing a value. Will it throw an error?

// const arr=[1,2,5,6];
// arr.push(4);

// let age = 20, hasID = true;
// if (age >= 18 && hasID) {
//  console.log("Allowed");
// }

// let score="39";
// let result= score<40?"pass":"fail";
// console.log(result);
// let str = "42";
// let num = +str;
// console.log(num);

// let age = 17;
// let msg = age >= 18 ? "Adult" : "Minor";

// let marks = 52;
// if(marks>=72 && marks<=82){
//     console.log("excelent");
// }else if(marks>=62 && marks<=72){
//     console.log("good");
// }else if(marks>=52 && marks<=62){
//     console.log("average");
// }else if(marks>=40 && marks<=52){
//     console.log("pass");
// }else{
//     console.log("fail");
// }


// let data = 52;

// switch (data) {
//     case 450: {
//         console.log("fsf");

//     }
//     case 50: {
//         console.log("fsf");

//     }
//     case 52: {
//         console.log("fsf");

//     }

// }

// function checkAge(age) {
//  if (age < 18) return "Denied";
//  return "Allowed";
// }
// console.log(checkAge(52));

// function abcd (age){

//     if(age>=18) return "allowed";
//      return "not allowed";
// }
// console.log(abcd(18));

// //Print numbers 1 to 10
// //Use a for loop to print numbers from 1 through 10.

// for(let i = 1; i<21; i++){
//     console.log(i);
// }

// // Print even numbers from 0 to 20
// // Only print even numbers using a for loop (hint: % operator).

// for (let i = 0; i<21; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }


// Sum numbers 1 to 100

//  let total= 0;
//  for(let i=1;i<=100;i++){
//     function score(val){
        

//     }
//  }


// let abcd= 12;

// function abkcd(){
//      console.log(abcd);
// }
// abkcd();






// Write a loop that calculates the sum of numbers from 1 to 100.
let i= 1;
while( i<105){
    i++;
    console.log(i);
}



// Multiplication table
// Use a for loop to print the multiplication table of 5 (1×5, 2×5, … up to 10×5).

// 🔄 While Loop

// Countdown with while
// Use a while loop to count down from 10 to 1.

// Print even numbers with while
// Print even numbers less than 20 using a while loop.

// Break out early
// Print numbers 1 to 10, but exit early when the number equals 6 using break.

// 🔁 Do…While Loop

// Run at least once
// Ask the user (or simulate) for a number, then use a do…while loop to keep prompting until they enter a number > 10.

// Print at least once
// Use do…while to print numbers from 1 to 5 (ensuring it runs at least once).

// 🧩 Looping Over Arrays / Objects

// Array iteration with for…of
// Given an array like [2, 4, 6, 8], print each item using a for…of loop.

// Object properties with for…in
// Given an object {a: 1, b: 2, c: 3}, use for…in to print keys and values.

// Double and filter (slightly more logic)
// Use for…of to double each number in [5, 8, 10, 20] and only print those greater than 15.





