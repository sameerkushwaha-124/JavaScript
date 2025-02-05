// Event Handling..
// 1. inline handling(int HTML Page...)
// 2. in js file via, writing event function on node..
// 3. using eventListner method..

let div = document.querySelector('div');
let val = 0;
div.onmousemove = ()=>{
   console.log('Mouse is moving'+' '+val++);
}


// Event Object
let btn = document.querySelector('button');
btn.onclick = (e)=>{
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX,e.clientY);
}


// EventListners
let btn1 = document.querySelector('.btn1');
btn1.addEventListener('click',()=>{
    console.log('Button is clicked');
});
btn1.addEventListener('click',(evt)=>{
    console.log('evt.target');
    console.log('Button is clicked-2');
});

const handler3 = () =>{
    console.log('Button is clicked-3');
}
btn1.addEventListener('click',handler3);

btn1.addEventListener('click',()=>{
   
    console.log('Button is clicked-4');
});


// Remove EventListner
btn1.removeEventListener('click',handler3); // callback function should be same as the
//  function which is added to the eventListner to remove it..


