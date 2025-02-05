// higher order funtion..

function fun(){     // 
   b()
    var a = 10;
    return a;

}
var b = ()=>{   // call back funtion.. or accepting function..
    console.log("insider b funtion"); 
}

var y = fun(b);  // higher order funtion

console.log(y);







