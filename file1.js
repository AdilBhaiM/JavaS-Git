// let firstName = "adil";
// firstName = "anwar";
// console .log(firstName);

// var myName = "mister";
// var myName = "adil";
// console.log(myName);

// var myName = "mister";
// myName = "adil";
// console.log(myName);

// const myDreams = ".....";
// console.log(myDreams);

// let forTrim = "    malik    ";
// forTrim = forTrim.trim();
// console.log(forTrim);

// a  d  i  l  a  n  w  a  r
// 0  1  2  3  4  5  6  7  8

// let values = "adil anwar";
// console.log(values.length);

// let values = "adil anwar";                                           
// console.log(values[4]);         // let forUpper = "adil anwar";  
                                   // forUpper = forUpper.toUpperCase();
// let values = "adil anwar";      // console.log(forUpper.toUpperCase());
// console.log(values[7]);

// let forUpper = "adil anwar";
// console.log(forUpper.toUpperCase());

// let forUpper = "Adil Anwar";
// console.log(forUpper.toLowerCase());

// start index
// end index

// let firstName = "adil anwar";
// firstName = firstName.slice(0,7);
// console.log(firstName);

// let age = 18;
// let name = "adil";
// console.log(typeof age);
// console.log(typeof name)

// convert numbers into strings

// age = age + "";
// console.log(typeof age);

// let forString =  + "45";
// console.log(typeof forString);

// let string = "56";
// string = Number(56);
// console.log(string);

// let string1 = "Adil";
// let string2 = "Malik";

// let newOne = string1 + " " + string2;
// console.log(newOne)

// let string1 = "18";
// let string2 = "10";

// let newOne = +string1 + +string2;
// console.log(newOne)

// let name = "Adil";
// let age = "17";

// let aboutMe = `My anme is ${name} and my age is ${age}`;
// console.log(aboutMe)

// let winningNumber = 20;
// let userGuess = +prompt("guess a number");

// if(userGuess === winningNumber){
// console.log("You win");
// }else{
//     if(userGuess <= 10){
//         console.log("Your Guess is too Low.");
//     }
//     if(userGuess >= 30){
//         console.log("Your Gues is too High.");
//     }
// }
// console.log(typeof userGuess, userGuess);

// let day = 5;

// switch (day){
//     case 0:
//         console.log("Sunday");
//         break;
//     case 1:
//         console.log("Monday");
//         break
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     default:
//         console.log("You are dead");
// }

// let j = 0;

// while(j<=4){
//     console.log(j);
//     j++;
// }

// console.log(`our bigger and current value of j is ${j}`)




// for(let u = 0; u<=9; u++){
//     console.log(u);
// }

// console.log("the Value of u is " + "u");   // will not give us an output bcz of "let"



// for(var u = 0; u<=9; u++){
//     console.log(u);
// }

// console.log("the Value of u is " + u);


// for(let  x=1;x<=14;x++){
//     if(x===7){
//         continue;
//     }
//     console.log(x)
// }

// console.log("Helo I am Adil Here")



// for(let  x=1;x<=14;x++){
//     if(x===7){
//         break;
//     }
//     console.log(x)
// }

// console.log("Helo I am Adil Here")



// let o = 15;

// do{
//     console.log(o);
//     o++;
// } while(o<=14)

// console.log("The real value of o is " + o);

// arrays

// let fruits = ["Apple", "Mangos", "Graps"];
// console.log(fruits);

// let fruits = ["Apple", "Mangos", "Graps"];
// console.log(fruits[1]);

// let fruits = ["Apple", "Mangos", "Graps"];
// fruits.push("banana");
// console.log(fruits);

// let fruits = ["Apple", "Mangos", "Graps"];
// console.log(fruits)
// let popedFruit = fruits.pop();
// console.log(fruits)
// console.log("My Fav Fruit is", popedFruit);


// let fruits = ["Apple", "Mangos", "Graps"];
// console.log(fruits);

// fruits.unshift("banana");
// console.log(fruits);


// let fruits = ["Apple", "Mangos", "Graps"];
// console.log(fruits);

// fruits.shift();
// console.log(fruits);

// let shiftFruit = fruits.shift();
// console.log(fruits);
// console.log("My Fav Fruit is", shiftFruit);


// let num1 = 8;
// let num2 = num1;
// num1++;
// console.log(num1);
// console.log(num2);

// let array1 = ["ironman", "superman", "spiderman"]
// let array2 = array1;
// array1.push("CaptainAmerica");
// console.log(array1);
// console.log(array2); 

// let array1 = ["ironman", "superman", "spiderman"]
// let array2 = array1.slice(0);
// let array2 = [].concat(array1);
// let array2 = [...array1]
// array1.push("CaptainAmerica");
// console.log(array1);
// console.log(array2); 


// let array1 = ["ironman", "superman", "spiderman"]
// let array2 = array1.slice(0);
// let array2 = [].concat(array1);
// let array2 = [array1].concat(["antman", "THOR"])
// array1.push("CaptainAmerica");
// console.log(array1);
// console.log(array2); 

// const fruits = ["Apple", "Mangos", "Graps", "pineapple"];
// // let i = fruits.length;
// for(let i=0; i < fruits.length;i++){
//     console.log(fruits[i])
// }


// let j = 0;
// while(j<=fruits.length-1){
//     console.log(fruits[j]);
//     j++;
// }

// const fruits = ["Apple", "Mangos", "Graps", "pineapple"];
// for(let fruit of fruits){
//     console.log(fruit)
// }


// const fruits = ["Apple", "Mangos", "Graps", "pineapple"];
// let [newArray, myNewArray, ...restOfTheArray] = fruits
// console.log(newArray)
// console.log(myNewArray)
// console.log(restOfTheArray)