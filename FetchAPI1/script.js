const URL = "https://dummyjson.com/recipes";
// console.log(URL);

// let promise = fetch(URL);
// console.log(promise);

//1. promises chaining

// fetch(URL)
//     .then(response => {
//         console.log(response);
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     });

//2. async await
const photo = document.querySelector('img');
const getFact = async()=>{

    console.log("getting data....");

    let response = await fetch(URL); // no reloading of page

    console.log(response); // jason object
    // now we have a jason object now we need to convert it into js object(usable data) using jason() method.
    let data = await response.json();
    console.log(data); // js object
    photo.src = data.recipes[0].image;     
}

const btn = document.querySelector('#btn');
btn.addEventListener('click',getFact); // calling the function via event listener






