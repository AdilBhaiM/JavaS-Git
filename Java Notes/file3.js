// This file starts from MORE USEFULL THINGS.


// Itterable things

// Those forms on which we can apply FOR of loop
// E.g: strings, Arrays


// Array like objects.

// Those forms which has specific lenght and can express by index
// E.g: strings.



// Sets

// const myArray = [6,7,4,3,25,7,8];
// const forUnique = new Set(myArray);
// let length = 0;
// for(let size of forUnique){
//     length++;
// }
// console.log(length);


// Maps ]


// const person = {firstName: "Adil", age: 17, Gender: 'male'};
// console.log(person);

// const infoPerson = new Map();
// infoPerson.set('firstName' , 'Adil');
// infoPerson.set('Age' , 17);
// infoPerson.set('Gender' , 'male');
// console.log(infoPerson.get("Age"));
// console.log(infoPerson);

// for(let [key, value] of infoPerson){
//     console.log(key, value);
// }

// const person1 = {
//     Id: 1,
//     gender: "male",
//     name: "Adil"
// }

// const person2 = {
//     Id: 2,
//     gender: "Female",
//     name: "Farheen"
// }

// const extraInfo = new Map();
// extraInfo.set(person1, {hobby: "Gaming"});
// extraInfo.set(person2, {hobby: "Making up"});
// console.log(extraInfo);
// console.log(extraInfo.get(person1).hobby);
// console.log(extraInfo.get(person2).hobby);


// Cloning of objects ny using [Object.assign({}, "object name required to clone")];


// Optional Chaining

//This thing is usefull when the thing is not existing in the array that is calling to print( ?. )



// const user = {
//     id: 1,
//     firstName: "Adil"
// }

// console.log(user?.id);
// console.log(user?.firstName);






///////////////////////////////////////////////////// Upcomming things are COMPULSARY to REMEMBER.////////////////////////////////////////////////////




/////////////////// OBJECT ORIENTED PROGRAMMING ( OOP ).///////////////////



// Methods


// This method.
// Function Inside Object.


// function personInfo(){
//     console.log(`User name is ${this.firstName} and his age is ${this.Age}.`)
// }

// const person1 = {
//     firstName: "Adil",
//     UserId: 1,
//     Age: 11,
//     About: personInfo
// }

// const person2 = {
//     firstName: "Ali",
//     UserId: 2,
//     Age: 33,
//     About: personInfo
// }

// const person3 = {
//     firstName: "Ahmed",
//     UserId: 3,
//     Age: 24,
//     About: personInfo
// }

// person1.About();



// For this console.log we should place "use strict" before the printing

// console.log(this);



// Call Method.


// We use call method by calling function using .call code for printing value or somthing else.

// function about(hobby, gender){
//     console.log(`My firstName is ${this.firstName} and age is ${this.Age}.`, hobby, gender);
// }

// const person1 = {
//     firstName: "Adil",
//     UserId: 1,
//     Age: 11
// }

// const person2 = {
//     firstName: "Ali",
//     UserId: 2,
//     Age: 33
// }

// const person3 = {
//     firstName: "Ahmed",
//     UserId: 3,
//     Age: 24
// }

// about.call(person1, "gaming", "male");
// about.call(person2, "gaming", "male");
// about.call(person3, "gaming", "male");




// Apply Method

// Apply method is same as call but u can use array for hobby like values instead of separation.

// about.apply(person1, ["gaming", "male"]);
// about.apply(person2, ["gaming", "male"]);
// about.apply(person3, ["gaming", "male"]);




// Bind Method

// Bind is also do same as call and apply but it dont do anything until it has not place in const. By this, bind store its data in it as a function and we also can call this function by callng name of that const.


// const func1 = about.bind(person1, "gaming", "male");
// func1();
// const func2 = about.bind(person2, "gaming", "male");
// func2();
// const func3 = about.bind(person3, "gaming", "male");
// func3();




// Arrow Functions.


// Arrow functions behaive differsent from other functions. They cant use "this." keyword in it and their this pick its value from upper level environment in all over global.

// but we can use one thing to execute this. keyword in the current environment.

// const person = {
//     firstName: "Adil",
//     UserId: 1,
//     Age: 11,
//     about(hobby, gender){
//         console.log(`My firstName is ${this.firstName} and age is ${this.Age}.`, hobby, gender);
//     }
// }

// person.about("gaming", "male");



// Using Function to create two or more objects.

// function createUser(firstName, lastName, email, age, address){
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = function(){
//         return `${this.firstName} is ${this.age} years old.`;
//     };
//     user.is18 =  function(){
//         return this.age >= 18;
//     }
//     return user;
// }

// const user1 = createUser('harshit', 'vashsith', 'harshit@gmail.com', 19, "my address");
// console.log(user1);
// const is18 = user1.is18();
// console.log(is18)
// const about = user1.about();
// console.log(about);





// But there is a problem to print methods that they store in our memory and consume our space with respect to the number of users.

// There is also a solution, We can write these methods out of the funtion and print separately....


// const userMethods = {
//     about : function(){
//         return `${this.firstName} is ${this.age} years old.`;
//     },
//     is18 : function(){
//         return this.age >= 18;
//     }
// }
// function createUser(firstName, lastName, email, age, address){
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = userMethods.about;
//     user.is18 = userMethods.is18;
//     return user;
// }

// const user1 = createUser('harshit', 'vashsith', 'harshit@gmail.com', 9, "my address");
// const user2 = createUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
// const user3 = createUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
// console.log(user1.about());
// console.log(user3.about());






// This method is also not so convenient to do. By this we have to write method reference into the object inside that function. If we forgot to write this refernece then it will give us an error.

// Therefore there was a good solution to write ["Object.create()"] instead of empty paranthesis "{}" to perform these methods without giving reference in that object.



// const userMethods = {
//     about : function(){
//         return `${this.firstName} is ${this.age} years old.`;
//     },
//     is18 : function(){
//         return this.age >= 18;
//     },
//     sing: function(){
//         return 'toon na na na la la ';
//     }
// }
// function createUser(firstName, lastName, email, age, address){
//     const user = Object.create(userMethods);// {}
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     return user;
// }

// const user1 = createUser('harshit', 'vashsith', 'harshit@gmail.com', 9, "my address");
// const user2 = createUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
// const user3 = createUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
// console.log(user1);
// console.log(user1.about());
// console.log(user3.sing());