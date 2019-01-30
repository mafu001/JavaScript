//1.13 complex logic
var age = 10;
var gender = "male";

if((age >= 18 && gender == "female") || (age >= 26 && gender == "male")) {
    console.log("that's true");
}else {
    console.log("tha's not true");
}

//1.17 for loop
for(let x = 5; x <=100; x +=5) {
    console.log(x);
}





//new1 i want to keep out divided input
let keep = 0;
let target = 21;
let iterator = 2;

while(!keep) {
    let answer = target % iterator;
    if(!answer ) {
        keep = iterator;
    }
    iterator++;
}

console.log(`${target} is Divided by ${keep}`);



//new2
var keep2 = 0;
var target2 = 21;

for(var i = 2; !keep2; i++) {
    let answer2 = target2 % i;

    if(!answer2) {
        keep2 = i;
    }
}

console.log(`${target2} is Divided by ${keep2}`);


//new3
var keep3 = 0;
var target3 = 21;
var target4 = 90;

for(var i = 2; i < target3/2; i++) {

    let answer3 = target3 % i;

    if(answer3) {
        continue;
    }

    let answer4 = target4 % i;

    if(!answer4) {

        keep3 = i;
        break;
    }
}

console.log(`${target3} is Divided by ${keep3}`);