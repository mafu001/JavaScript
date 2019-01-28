// some properties of string
var a = "thanks";

console.log(a.charAt(1)); // what's the string of index 1
console.log(a.charCodeAt(1)); //define ascii code

console.log(a.indexOf("a")); //what's the first index of "a"
console.log(a.match("nk")); //for find string

console.log(a.replace("n", "a")); //n replace by a
console.log(a); //but method a wasn't changed

console.log(a.length); //it define string length

console.log(a.toUpperCase()); //it define Upper Case string
console.log(a.toLowerCase()); //it define Lower Case string

var b = " Hey, Good Boy.. ";
console.log(b.trim().toLowerCase()); // trim first, last and lowercase the string

var c = ("abcd" === "abcd");
console.log(c); //That's make a compair

