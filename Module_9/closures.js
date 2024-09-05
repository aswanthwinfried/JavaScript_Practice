//Closures in JavaScript // It have access within its outer Scope

// function test(){
//     let a=20;
//     function test1(){
//         console.log(a);  // it contains acces of a in outside of functon
//     }
//     return test1;
// }

// let fun = test();
// console.log(fun);

// fun()


// Closures with nested functions

function greet(){
    let name = 'steve'

    function displayName(){
        console.log('Hi '+name)
        let age = 25

        function displayAge(){
            console.log('My age is : '+age);
        }
        return displayAge
    }

    return displayName
}

let g1 = greet()

// g1(); displayName 

let g2 = g1()
// console.log(g2)
g2() //display age