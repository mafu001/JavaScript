//CONTEXT of object
var objectContext = {

    first: 20,
    second() {
        console.log(`i have ${this.first} taka left`)
    }
}

// objectContext.second();

var newVariable = objectContext.second;

// newVariable();
newVariable.call(objectContext);


//ARRAY
var newArray = [
    "alu",
    "potol",
    "jhingga"
]

console.log(newArray[2]);

console.log(newArray.indexOf("potol"));
var arrayLength = newArray.length;

for(let i = 0; i < arrayLength; i++) {
    console.log(newArray[i]);
}


//ARRAY PUSH, POP, UNSHIFT, SHIFT
var math = [
    "one",
    "two",
    "three"
]


math.push("four");      // new data add in last position
console.log(math);

math.pop();     // new data remove from last position
console.log(math);

math.unshift("zero");       // new data add in first position
console.log(math);

math.shift();       // new data remove from first position
console.log(math);



// Object use with array
var man = {
    name : "mahfuz",
    age : 27,
    talk() {
        console.log('Hey my friend');
    }
}

console.log(man["name"]);
man["talk"]();