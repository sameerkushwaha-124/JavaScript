// let pr = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("promise resolve data");
//     },3000)
// });
// console.log("start");
// pr
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })
// console.log("end");



////222

function check(kalmilneaayega){
    let pr = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(kalmilneaayega){
                resolve("party dega");
            }
            else{
                reject("party nai dega");
            }
        },4000)
    });
    return pr;
}
check(true)
    .then((x)=>{
    console.log(x);
    })
    .catch((err)=>{
    console.log(err);
    })