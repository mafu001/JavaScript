//function propertys
function func(a, b) {
    console.log("hey, this is mahfuz");
    console.log(this);
    console.log(a);
    console.log(b);
}

var newFuncProperty = func.bind(7);
newFuncProperty(2, 3); // change this with bind

func.apply("mahfuz", [10, 12]); // change this with apply
func.call("Alam", 20, 22);    // change this with call


//Higher order function
function hiOrFunc(type) {
    if(type === 'plus') {
        return (a, b) => a+b;
    }else if(type === 'minus') {
        return (a, b) => a-b;
    }
}

var keep = hiOrFunc('minus');
console.log(keep(10, 5));