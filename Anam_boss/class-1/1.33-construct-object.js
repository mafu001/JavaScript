
//function declare object
function Wonfunction(name, age) {
    return {
        name, // name:name -> modern javascript allow only name
        age
    }
}

var a = Wonfunction("mahfuz", 27);
var b = Wonfunction("alam", 29);

console.log(a);
console.log(b);


//function declare object with constructor
function Human(name, age, gender) {
    this.name = name, // it's a acceptable system of javascript
    this.age = age,
    this.gender = gender
    // no need to return because 'this' return that auto in javascript
}

var a = new Human("mahfuz", 27, "male");
var b = new Human("mouly", 24, "female");

console.log(a);
console.log(b);