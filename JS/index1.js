// Agenda:
// -Introduction to JS.
// -Introduction to Execution Context.
// -Working of JS(Execution Context) -- very important.
// -Variables in JS.
// -Funtions in js.
// -Hoisting.
// -Module Scope
// -Fetch Api
// -Higher Order Function, callback functions - callback hell
// -Map, Filter, and Reduce
// -Asynchronous Functions : Promise , async-await, error handling

// -Introduction to JS: JS is a synchronous single threaded language but we can make it asynchronous using async and await keyword.

// -Execution Context: it is a runtime environment.

// -Working of JS(Execution Context): it is divided into two parts memory block where memory is assigned and thread of execution where code is executed.

// -Variables in JS: There are three ways to define variables in js var, let, const.

// example:

//  var a=1;
//  console.log(a);//1

// //  let b=a++;
// //  console.log(b);//1

// //  let b=++a;
// //  console.log(b);//2

// a++;
// let b=a;
// console.log(b);//2


// //  const c=b++;
// //  console.log(c);//1

// const c=++b;
// console.log(c);//3


// -Funtions in js: There are three ways to define the function using function keyword, using async keyword, and and arrow function.

// var a = 0;

// function increment(){
//     return ++a;
// }
// console.log(increment);//return function
// console.log(increment());//1

// async function decrement(){
//     return --a;
// }
// console.log(decrement());//0

// const print = ()=>{
//     return a;
// }
// console.log(print);//return function
// console.log(print());//0


// -Hoisting:When we call the function before declaration that is called hoisting. When we call variable before initialization we get refrence error.


// console.log(Hoisting());//function is called

// console.log(a);//ReferenceError: a is not defined

// var name = "Rakesh";


// function Hoisting(){
//     return "function is called";
// }




// -Module Scope: it is all about rendering a package or file in different file or package.

// -Fetch Api: fetch() is a function used to call the api.
// example:
// const gitUser =async ()=>{
//     const data = await fetch("https://api.github.com/users");
//     console.log(data.json());
// }
// gitUser();


// -Higher Order Function, callback functions - callback hell
// example:

// const a =()=>{
//     console.log("a is called");
//     b();
// }

// const b =()=>{
//     console.log("a is called");
//     c();
// }

// const c =()=>{
//     console.log("a is called");
// }


// -Map, Filter, and Reduce: These are function for creating a dynamic content on website.
// example:

// const numbers = [1,2,3,4,5,6,7,8,9];

// const data=()=>{
//     numbers.map((num)=>{
//         console.log(num);
//     })
// }

// data();

// const filter = () => {
//     numbers.filter(num => console.log(num % 2));
// };

// const reduce = () => {
//     const sum = numbers.reduce((acc, num) => acc + num, 0);
//     console.log(sum);
// };

// -Asynchronous Functions : Promise , async-await, error handling
// Promise : it is a way to avoid nested function or callback hell.

// example:

// Simulating an asynchronous data fetching function
// const fetchData = async () => {
//     try {
//       // Simulating a successful response
//       const response = await new Promise((resolve, reject) => {
//         setTimeout(() => {
//           const success = true; // Change to false to simulate a failed fetch
//           if (success) {
//             resolve({ data: "Sample data" });
//           } else {
//             reject("Error: Failed to fetch data.");
//           }
//         }, 2000); // Simulate a 2-second fetch time
//       });
  
//       // Log the data if the promise is resolved
//       console.log("Data received:", response.data);
//     } catch (error) {
//       // Handle any errors that occur in the try block
//       console.error(error);
//     }
//   };
  
//   // Calling the async function
//   fetchData();
  











