# An array is a special variable, which can hold more than one values.
const cars = ["Saab", "Volvo", "BMW"];
- It is a common practice to declare arrays with the const keyword.

> Arrays are special type of objects. The typeof operator in JavaScript returns "object" for arrays.
- Objects use names to access its "members". In this example, person.firstName returns John


 #  Associative Arrays
// Many programming languages support arrays with named indexes.
// Arrays with named indexes are called associative arrays (or hashes).
// JavaScript does not support arrays with named indexes.
// In JavaScript, arrays always use numbered indexes.   

# Note: If you use named indexes, JavaScript will redefine the array to an object.
<!-- After that, some array methods and properties will produce incorrect results.  -->



##                       Difference between Arrays and Objects

- Arrays are ordered collections of data or other values. 
  Example: const cars = ["Saab", "Volvo", "BMW"];
        here we can see that the order of the cars is important.

- Objects are unordered collections of key-value pairs.
  Example: const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
        here we can see that the order of the properties is not important.

# Accessing Array Elements
- You can access an array element by referring to the index number.
- Indexes start with 0.
- This example refers to the first array element (index 0):
- This example refers to the last array element (index -1):


# When to Use Arrays. When to use Objects.
JavaScript does not support associative arrays.
You should use objects when you want the element names to be strings (text).
You should use arrays when you want the element names to be numbers.

# JavaScript new Array()
JavaScript has a built-in array constructor new Array().
But you can safely use [] instead.
These two different statements both create a new empty array named points:
ExPLE : 
1. const points = new Array();
   const points = [];

These two different statements both create a new array containing 6 numbers:
const points = new Array(40, 100, 1, 5, 25, 10);
const points = [40, 100, 1, 5, 25, 10];

2. The new keyword can produce some unexpected results:
EXAMPLE : const points = new Array(6); // This creates an array with 6 empty slots


# // How to Recognize an Array
<!-- The problem is that the JavaScript operator typeof returns "object": -->
1. 
> To solve this problem ECMAScript 5 (JavaScript 2009) defined a new method Array.isArray():
2. 
> The instanceof operator returns true if an object is created by a given constructor:
const fruits = ["Banana", "Orange", "Apple"];
console.log(fruits instanceof Array);


# Note
Many languages allow negative bracket indexing like [-1] to access elements from the end of an object / array / string.
This is not possible in JavaScript, because [] is used for accessing both arrays and objects. obj[-1] refers to the value of key -1, not to the last property of the object.

The at() method was introduced in ES2022 to solve this problem.