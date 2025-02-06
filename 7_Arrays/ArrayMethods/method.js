const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.at(-1); // return last indexed element
console.log(typeof fruit); // string
console.log(fruit);


// arr.push() && arr.pop()
console.log("----------------------------------------");
console.log(fruits);
console.log("adding kiwi");
let len = fruits.push("Kiwi"); // it will return the length of the array after adding the element.
console.log(fruits);
console.log("-------------------------------------------");
console.log("removing last indexed value");
const deletedValueLast = fruits.pop(); // remove the last indexed value and return last indexed element.
console.log(fruits);


// arr.shift()
console.log("----------------------------------------")
console.log(fruits);
console.log('removing element from front');
const deletedValueFront = fruits.shift(); // remove the first indexed value and return removed element.
console.log(fruits);
console.log("front deleted value is : "+ deletedValueFront);



// arr.unshift()
console.log("----------------------------------------");
console.log(fruits);
console.log("adding element at front");
len = fruits.unshift("Lemon"); // add element at the front and return the length of the array.
console.log(fruits);


// arr.length
console.log("----------------------------------------")
console.log(fruits);
console.log("array length : " + fruits.length);
console.log("adding element at  index using length property");
fruits[fruits.length] = "PineApple";
console.log(fruits);




// arr.concat()
console.log("----------------------------------------")
console.log(fruits);
console.log("adding array using concat method");
const arr1 = ["a", "b", "c"];
const arr2 = ["d", "e", "f"];
const arr3 = ["g", "h", "i"];
const arr4 = ['j','k'];
const arr5 = arr1.concat(arr2, arr3, arr4);
console.log(arr5);
const str = 'Hello';
const arr = arr1.concat(str); // concat method can also concat string to an array.
console.log(arr);



// arr.copyWithin()
console.log("----------------------------------------")
console.log(fruits);
console.log("copying array using copyWithin method");
fruits.copyWithin(2,0,7); // copyWithin(startIndex, startIndexToCopy, endIndexToCopy)
console.log(fruits);






console.log("----------------------------------------")






console.log("----------------------------------------")








console.log("----------------------------------------")






console.log("----------------------------------------")


