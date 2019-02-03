//pure function
function pure(a, b) {
  let c = a+b;
  return c;
}

console.log(pure(4, 6));


//impair function
function impair(x, y) {
  let m = e + f;
  e = 14;

  return m;
}

let e = 4;
let f = 6;
let m = 21; // m variable will not changed because others m variable is into block

console.log(impair(e, f));
console.log(e);
console.log(f);
console.log(m);


//closing function 
function closefunction() {
  var closeVar = "check me out";

  function referIt() {
    console.log(closeVar);
  }
  return referIt;
}

var newOne = closefunction()
newOne;