// async function fun(){
//     // let x = "hello";
//     let x = new Promise((resolve, reject) =>{
//         resolve("data is resolved");
//     });
//     return x;
// }
// let y = fun();
// console.log(y);


let pr = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve("data is resolved");
    },3000)
})

// 1 way to fetch data from promise
// pr
// .then((x)=>{
//     console.log(x);
// })
// .catch((err)=>{
//     console.log(err);
// })

//2 way to fetch data but we use await with only async and async will only come with function and out js never stop for anyone so first come start and then it functio come and it await but js not stop so it leaves functioand execute all line after that then it again come and execute it
async function fetchdata(){
    let x = await pr;
    console.log(x);
}
console.log("start");
fetchdata();
console.log("end");