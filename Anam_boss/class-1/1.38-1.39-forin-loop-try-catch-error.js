//"for in" loop into array property
var man = {
    name: "mahfuz",
    age: 27,
    gender: "male",

}

for(let item in man) {
    console.log(`my ${item} is ${man[item]}`);
}

//error handle with try catch
try{
    throw new Error("i made error")
}
catch(e) {
    console.log(e.message);
}