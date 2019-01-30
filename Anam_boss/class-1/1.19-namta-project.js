//1.19
/* var a =  +"50";
console.log(typeof a); */

let num = +process.argv[2];

if(!Number.isInteger(num)) {
    console.log("Number is not valid number");
    process.exit();
}

for(let i = 1; i<=10; i++) {
    if(i >= 10) {
        console.log(`${num} X ${i} = ${num * i}`);
    }else {
        console.log(`${num} X 0${i} = ${num * i}`);
    }
}