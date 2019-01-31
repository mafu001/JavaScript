//IIFE (Immediately Invoked Function Expression) for scope
(function() {
  var k = 35;
  console.log(k);
})()

!function() {
  var k = 35;
  console.log(k);
}()

+function() {
  var k = 35;
  console.log(k);
}()



//arrow function without argument
var b = () => 4;
console.log(b());

//arrow function with single argument
var b = a => a+23;
console.log(b(4));

//arrow function with double argument
var b = (a, b , c) => {
  let d = a+2;
  let e = d+b;
  return e+4+c;
};
console.log(b(4, 6, 8));

