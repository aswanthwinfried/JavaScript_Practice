// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values
// from arrays, or properties from objects, into distinct variables.

let arr = ['Hi','I','am','Aswanth'];
// let a = arr[1]
// let b = arr[2]
//console.log(a);
//console.log(b);

let [a,b,c,d] = arr; //destructuring

console.log(a);//Hi



// Destructuring an Object

let myObj = {
    name:'Madhan.P',
    age:'20',
    gender: 'M',
    address:{
        country:'India',
        state:'TamilNadu'
    }
}

// let {name, age, gender} = myObj; //same key name to destruct obj
// console.log(name);
// console.log(age);
// console.log(gender);

//We change the key name and how we access nested obj address
let {name:n, age:e, gender:g, address:{country:y}} = myObj; //same key name to destruct obj
console.log(n);
console.log(e);
console.log(g);
console.log(y);