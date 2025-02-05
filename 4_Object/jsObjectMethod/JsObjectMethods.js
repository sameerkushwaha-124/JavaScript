// js object methods..
const person = {
    firstName: 'sameer',
    age:21,
    lastName:'Kushwaha',
    fullName: function(){
        return this.firstName + " " + this.lastName; // this refers to the person object
    }
}

console.log(typeof person.fullName);
console.log(person.fullName());// it will call the function and return the value of the function
console.log(person.fullName);// If you access the fullName property without (), it will return the function definition

// adding function to the object

person.name = function (){
    return (this.firstName +" " + this.lastName).toUpperCase();
}
console.log(person);
console.log(person.name());

document.querySelector('.box').innerText = person.name();


// we can also display properties all using loops;
const animal = {
    name: 'lion',
    age:10,
    color:'yellow',
    weight:200
};
let text = "";
for(let x in animal){
    text = text + x + " : " + animal[x] +"\n";  // person.x will not work (Because x is the loop variable).   
}
// document.querySelector('.box').innerText = text;


// in the forms of array
const array =  Object.values(animal);
document.querySelector('.box').innerText = array;


// Using Object.entries()
text = "";
for ([key,value] of Object.entries(animal)){
    text += key +":" + value+'\n';
}
document.querySelector('.box').innerText = text;

// Using JSON.stringify()
let myString = JSON.stringify(animal);
document.querySelector('.box').innerText = myString;

