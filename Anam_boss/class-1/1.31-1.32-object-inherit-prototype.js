//object
var a = {
    one:50,
    two: "hey this is mahfuz",
    three: function() {
        console.log(10);
    }
}

a.three(); //call properties as method
console.log(a.one); //call properties

a.extra = 'hey his name is mahfuz'; //add properties into object
console.log(a.extra);

delete a.one; //delete properties from object
console.log(a);



//INHERIT PROPERTY/ PROTOTYPE
var proType = {
    a: 50,
    b: "this is mahfuz", //property = own property and inherit property

}

var d = Object.create(proType);
proType.a = 60;

console.log(d.hasOwnProperty('a')); // 'a' is a inherit property of d but not their own propery

console.log(d.a); //chage the proType property

d.a = 20;
console.log(d.hasOwnProperty('a')); // 'a' is a inherit property of d
