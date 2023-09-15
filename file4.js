// This file4 starts from prototype in Object Oriented Programming (OOP).




// What is Prototype?

// Ans: Prototype is the empty space or object provided with every function. "{}"

// Exapmle: 

// function hello(){console.log("hello world")};
// console.log(hello.prototype);


// => We can use this space(prototype).

    
// function createUser(firstName, lastName, email, age, address){
//     const user = Object.create(createUser.prototype);// {}
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     return user;
// }
// createUser.prototype.about = function(){
//     return `${this.firstName} is ${this.age} years old.`;
// }
// createUser.prototype.is18 = function(){
//     return this.age >= 18;
// }
// createUser.prototype.sing =function(){
//     return 'toon na na na la la ';
// }

// const user1 = createUser('harshit', 'vashsith', 'harshit@gmail.com', 9, "my address");
// const user2 = createUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
// const user3 = createUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
// console.log(user1);
// console.log(user1.about());
// console.log(user3.sing());




// New keyword.

// We can use new keyword to perform same task performing by prototype instead of "create.object()" method.
// We will have no need write it.
// We can only use this. keyword and use new keyword before the name of that function, stored in a constant or variable, calling by us.
// New keyword automaticaly return the required function and there is no need to return the values by ourselves.


// function CreateUser(firstName, lastName, email, age, address){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
//     this.address = address;
// }
// CreateUser.prototype.about = function(){
//     return `${this.firstName} is ${this.age} years old.`;
// }
// CreateUser.prototype.is18 = function(){
//     return this.age >= 18;
// }
// CreateUser.prototype.sing =function(){
//     return 'toon na na na la la ';
// }

// const user1 = new CreateUser('harshit', 'vashsith', 'harshit@gmail.com', 9, "my address");
// const user2 = new CreateUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
// const user3 = new CreateUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
// console.log(user1);
// console.log(user1.about());
// console.log(user3.sing());




// HasOwnProperty.


// Ususally we can use for in loop to print the keys of the object.
// But now we have tow objects having keys and linked with each other by using "ceate.object()" property or "New keyword".
// We can print only constructed function keys by using "hasOwnProperty".
// If we dont use hasOwnProperty, then all the keys will print includung prototype keys.

// for(let key in user1){
//     if(user1.hasOwnProperty(key)){
//         console.log(key);
//     }
// }



// More About Prototype.