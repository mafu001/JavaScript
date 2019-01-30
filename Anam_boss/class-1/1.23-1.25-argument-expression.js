
//Argument of function
function newOne(a, b) {
  if(!(a && b)) {
    return 0;
  }

  let ans = (arguments[0] + b);
  return ans;
}

console.log(newOne(10, 5));

//function expression
var add = function(a, b) {
  return a+b;
}

console.log(add(10, 7));


//hoisting of function declaration
console.log(mew(12, 13));

function mew(a, b) { //hoisting run it fast then declare
  return a+b;
}


// but expression not like that, it just declare hoisting var = hi not value
var hi = function(a, b) {
  return a+b;
}

console.log(hi(12, 13));