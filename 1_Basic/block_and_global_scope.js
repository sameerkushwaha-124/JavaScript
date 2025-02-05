var a = 100; // Global variable using `var`
let b = 200; // Global variable using `let` (in the global context)
const c = 300; // Global constant

console.log(a, b, c); // Accessible: 100, 200, 300

function test() {
  console.log(a,b,c); // Accessible: 100
}
test();
