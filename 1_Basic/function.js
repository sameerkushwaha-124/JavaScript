function fun(){
    console.log("inside the function")

}

var a = fun;
console.log(a);  // both are same
console.log(fun); // 

// var y = function outer(){
//     console.log("inside outer function")
// }
// console.log(y) 
// console.log(outer)


var prime = ()=>{
    console.log("funtion..");
}

console.log(prime);
