// This file starts from objects

// const Adil = {name: "Adil", gender: "Male", age: 17};
// console.log(Adil.gender)
// console.log(typeof Adil)

// const AboutMe = {
//     name: "Adil",
//     age: 17,
//     gender: "Male",
//     "My hobbies": ["Gaming", "Coding", "Traveling"]
// }
// console.log(AboutMe["My hobbies"])

// AboutMe.city = "Narowal";
// console.log(AboutMe.city)


// const AboutMe = {
//     name: "Adil",
//     age: 17,
//     gender: "Male",
//     "My hobbies": ["Gaming", "Coding", "Traveling"]
// }
// for(let key in AboutMe){
//     console.log(`${key} : ${AboutMe[key]}`)
//     console.log(key," : ",AboutMe[key])
// }
// console.log(Object.keys(AboutMe))


// const key1 = "objct1"
// const key2 = "objct2"

// const value1 = "myvalue1"
// const value2 = "myvalue2"

// console.log(`${key1} : ${value1}`)
// console.log(`${key2} : ${value2}`)

// const obj = {
//     [key1] : value1,
//     [key2] : value2
// }

// console.log(obj);


// const AboutMe = {
//     name: "Adil",
//     age: 17,
//     gender: "Male",
//     "My hobbies": ["Gaming", "Coding", "Traveling"]
// }
// let { name, age, ...rst} = AboutMe;
// console.log(name);
// console.log(rst);


// const users = [
//     {ID: 1,firstName: 'Adil',lastName: 'Anwar',Gender: 'male'},
//     {ID: 2,firstName: 'Farheen',lastName: 'Anwar',Gender: 'Female'},
//     {ID: 3,firstName: 'Sehar',lastName: 'Anwar',Gender: 'Female'}
// ]

// const [, ,{firstName}] = users;
// console.log(firstName);

// for(let user of users){
//     console.log(user);
// }


// Functions

// function sumOfThisNum(number1, number2){
//     return number1 + number2;
// }

// const returnedResult = sumOfThisNum(3343,572)
// console.log(returnedResult);

// function resultOfCal(num){
//     return num % 2 === 0;
// }

// console.log(resultOfCal(7))

// function FirstChar(string){
//     return string[3];
// }

// console.log(FirstChar("ADIL"));

// function stringindex(array, target){
//     for(let i=0;i<array.length;i++){
//         if(array[i]===target)
//         return i;
//     }
//     return -1;
// }
// const myArray = [3,5,7,35]
// console.log(stringindex(myArray,35));


// Function Expressions

// const FirstChar = function (string){
//     return string[3];
// }
// console.log(FirstChar("ADIL"));

// Arrow Functions

// const stringindex = (array, target) => {
//     for(let i=0;i<array.length;i++){
//         if(array[i]===target)
//         return i;
//     }
//     return -1;
// }
// const myArray = [3,5,7,35]
// console.log(stringindex(myArray,35));


// const FirstChar = string => string[2];
// console.log(FirstChar("ADIL"));

// Functions Inside a Function

// You can put more than one function in a function

// function myFunc(){
//     const func = function(num1, num2){
//         return num1 + num2;
//     }
//     console.log(func(2, 4));
// }
// myFunc();


// Lexical Scope/Environment:

// If we place a var,let or const inside a function and this function is put into a function. After calling the function to print the variable,the parent function will be the lexical environment of that called variable. If the variable called inside of function but the var,let or const value is set outside from all the functions or in the parent function. Then the globle scope will be the lexical environment of the call.


// Block scope and function scope

// var is function scope
// let and const are block scope

// Example
// {
//     let myName = "Adil";
//     const Name = "Adil";
//     console.log(myName);
//     console.log(Name);
// }

// {
//     let myName = "Malik";
//     const Name = "Malik";
//     console.log(myName);
//     console.log(Name);
// }

// Example about var
// {
//     var myName = "Adil";
// }
// console.log(myName);


// Default Parameters

// function defTest(a,b=2){
//     return a + b;
// }

// console.log(defTest(3));


// Rest Parameters

// function restTest(a,b,...c){
//     console.log(`a is ${a}`)
//     console.log(`b is ${b}`)
//     console.log(`c is ${c}`)
// }

// restTest(1,2,4,5,7,8,5);

// function addAll(...numbers){
//     let total = 0;
//     for(let number of numbers){
//         total = total + number
//     }
//     return total
// }
// console.log(addAll(3,3,5,6,5));


// Parameter Destructuring

// const me = {
//     firstName : "Adil",
//     gender : "Male",
//     age : 17
// }

// function forPrinting({firstName, gender, age}){
//     console.log(firstName);
//     console.log(gender);
//     console.log(age);
// }
// forPrinting(me)


// Function returning function

// function iAm(){
//     function hello(){
//         console.log("Hello I am Adil.")
//     }
//     return hello();
// }
// iAm();




// Methods


// For Each Method

// const nums = [3,4,5,2];

// function myFunc(index,number){
//     console.log(`the index is ${index} and number is ${number}`);
// }

// nums.forEach(myFunc)


// Map Method

// const numbers = [3,5,7,43,6,4];

// const func = (number) => {
//     return number*number;
// }

// console.log(numbers.map(func));


// Filter Method

// const filnumbers = [3,5,68,43,6,4];
// console.log(filnumbers.filter((number)=>{
//     return number % 2 === 0;
// }))


// Reduce Method

// const sumValues = [3,6,3,56,46,64];
// console.log(sumValues.reduce((Accumulator, currentValue) => {
//     return Accumulator + currentValue
// }, 0))


// Sort Method

// const values = [3000,5222,6644,9900,45,775,3,2];
// values.sort((a,b)=>{
//     return a-b;
// })
// console.log(values);
// For decending orders, we can use b-a in return


// Find method

// const users = [
//     {userId: 1, Name: "Adil"},
//     {userId: 2, Name: "Farheen"},
//     {userId: 3, Name: "Sehar"},
//     {userId: 4, Name: "AbdulRehman"}
// ]

// const MyUsers = users.find((user)=>user.userId===3);
// console.log(MyUsers);


// Every method

// const numbers = [2,3,4,5,6,7,8,9,10];
// const forResult = numbers.every((number)=>number%2===0);
// console.log(forResult);

// Real life example

// const users = [
//     {userId: 1, price: 7000},
//     {userId: 2, price: 30770},
//     {userId: 3, price: 3500},
//     {userId: 4, price: 23450}
// ]

// const myUser = users.every((user)=>{
//     return user.price<40000
// })
// console.log(myUser);


// Some Method

// const users = [
//     {userId: 1, price: 7000},
//     {userId: 2, price: 30770},
//     {userId: 3, price: 3500},
//     {userId: 4, price: 23450}
// ]

// const myUser = users.some((user)=>{
//     return user.price < 40000
// })
// console.log(myUser);


// Fill Method

// const myArray = [1,2,3,4,5,6,7,8];
// myArray.fill(0, 4, 7);
// console.log(myArray);

// Splice Method

// const myArray = ['item1', 'item2', 'item3'];

// const deletedItem = myArray.splice(1, 2, "inserted item1", "inserted item2")

// console.log("deled items", deletedItem);
// console.log(myArray);