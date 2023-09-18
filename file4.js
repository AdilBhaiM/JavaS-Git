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

// It was about arrays.






// Classes

// Classes use hoti hain function ki jagah or ye property return khud hi kr deeta ha or empty object bnana ki bhi koi zarorat ni hoti..


// class createUser{
//      constructor(firstName, lastName, email, age, address){
//      this.firstName = firstName;
//      this.lastName = lastName;
//      this.email = email;
//      this.age = age;
//      this.address = address;
//      }

//      about(){
//      return `${this.firstName} is ${this.age} years old.`;
//      }
//      is18(){
//          return this.age >= 18;
//      }
//      sing(){
//      return 'toon na na na la la ';
//      }
// }
// const user1 = new createUser('harshit', 'vashsith', 'harshit@gmail.com', 9, "my address");
// const user2 = new createUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
// const user3 = new createUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
// console.log(user1);
// console.log(user1.about());
// console.log(user3.sing());




// Extends property is used in classes that prevent us to not write content in classes except the main class.

// class Animal {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     eat(){
//         return `${this.name} is eating`;
//     }

//     isSuperCute(){
//         return this.age <= 1;
//     }

//     isCute(){
//         return true;
//     }
// }

// class Dog extends Animal{
    
// } 

// const tommy = new Dog("tommy", 3);
// console.log(tommy);
// console.log(tommy.isCute());




// Super Keyword

// Super keyword is used in other classes to take values from main or extended class.


// class Animal {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     eat(){
//         return `${this.name} is eating`;
//     }

//     isSuperCute(){
//         return this.age <= 1;
//     }

//     isCute(){
//         return true;
//     }
// }

// class Dog extends Animal{
//     constructor(name, age, speed){
//         super(name,age);
//         this.speed = speed;
//     }

//     run(){
//         return `${this.name} is running at ${this.speed}kmph`
//     }
// } 
// // object / instance 
// const tommy = new Dog("tommy", 3,45);
// console.log(tommy.run());





// Getter and Setter

// Is me do chezien han. Aik get ha jo func ke name se pehla likh deta han or is se hmara pas aik value call krna se dono values call ho ke method print ho jay ga.

// Is me ham aik value ke set krna k bad uski value ko change kr k alehda se print krna sikhien ga..


// class Person{
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     get fullName(){
//         return `${this.firstName} ${this.lastName}`
//     }
//     set fullName(fullName){
//         const [firstName, lastName] = fullName.split(" ");
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }


// const person1 = new Person("harshit", "sharma", 5);
// console.log(person1.fullName);
// console.log(person1.fullName);
// person1.fullName = "mohit vashistha";
// console.log(person1);
 




////////////////////////////////////////// How do JavaScript work? ////////////////////////////////////////////


// Code likkhna ke bad hmara code pehla memory me store hota ha or phir wo global memory me store hona ke bad execute hota ha.
// Execute bhi sequence se hi hota ha.
// Agar koi Error ho code me to wo koi bhi code execute ni krta bs wo error show kr deta ha.


// JavaScript wase to asl me sychronus hoti ha pr us ko Asynchronus browser bnata ha uski synchronus nature ka mtlb ha k javascript sb se pehla wale code ko create krta ha or jb tk wo execute na ho jay dosra code tk wo ni pohnchta isi lya ye synchronous ha pr browser isko Asynchronous bnata ha wo kia ha???...Ye ham Asynch Nature Topic me dekhien ga.


// Hoisting....

// jb code create hota ha to wo pehla global memory me store hota ha or phir hi bad me uski global execution ke doran value set hoti ha.

//