var a=20;
var a=40 // var allows redeclaring variables in same variable name;
let b=30;
b=333; //reassign shoud be allow
// let b=70; // let will not allow redeclaring variable in same variable name
console.log(a);
console.log(b);

// variables declared with let keyword are blocked scope

// if(true){
//     let c=30;
//     console.log(30);
// }
// console.log(c); //Error ReferenceError: c is not defined



// const 
// will not allow redeclared ,reassign
// const always blocked scope

const d=100;
// const d=200;//SyntaxError: Identifier 'd' has already been declared
d=123; //TypeError: Assignment to constant variable.
console.log(d);



