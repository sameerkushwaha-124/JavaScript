const cars = ['BMW', 'Volvo', 'Saab', 'Ford'];

// you can also create an array, and then provide the elements:

const bikes = [];
bikes[0] = "Honda";
bikes[1] = "Yamaha";
bikes[2] = "Suzuki";

// Using the JavaScript Keyword new
const array = new Array('a','b','c','d');
console.log(array); // it will print [ 'a', 'b', 'c', 'd' ]
console.log(array[0]); // a
console.log(array[9]); // undefined (no error)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo").innerHTML = fruits.toString();
// document.getElementById("demo").innerHTML = fruits;


// array are special type of objects in js. But, JavaScript arrays are best described as arrays.
// JavaScript does not have built-in support for Arrays with named indexes.
// Objects use names to access its "members".
console.log(fruits[0]); 
console.log(fruits.length);
fruits.sort();
console.log(fruits.sort());
console.log(fruits);
console.log(fruits.reverse());


// adding element to the array..
fruits.push("KIWI");
// another way..
fruits[fruits.length] = 'Pineapple';
console.log(fruits);
fruits[9] = 'Pineapple';
console.log(fruits);


// You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array
// myArray[0] = Date.now;
// myArray[1] = myFunction;
// myArray[2] = myCars;


const points = new Array(6); // creates an array with 6 empty slots
console.log(points);

const p = [6]; // creates an array with 1 element, 6
console.log(p);



// Nested Arrays and Objects
// Values in objects can be arrays, and values in arrays can be objects:
const myObj = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
  };
  for(let i in myObj.cars){
    for(let j in myObj.cars[i].models){
      console.log(myObj.cars[i].models[j]);
    }
  }
