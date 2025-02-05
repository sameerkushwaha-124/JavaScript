//  DataType : premitive and non-premitive
//  Premitive : Number, String, Boolean, Symbol, Undefined, Null, BigInt.
//  Non-Premitive : Object, Array, Function.


let a = 5;
console.log(typeof a); // number

let b = true;
console.log(typeof b); // boolean

let arr = [1, 2, 3, 4, 5];
console.log(typeof arr); // object

let obj = { name: 'John', age: 34 };
console.log(typeof obj); // object


let c;
console.log(typeof c); // undefined

let d = null;
console.log(typeof d); // object

let e = 'Hello';
console.log(typeof e); // string

// const val;
// console.log(val); // SyntaxError: Missing initializer in const declaration

// console.log(value); // ReferenceError: value is not defined

