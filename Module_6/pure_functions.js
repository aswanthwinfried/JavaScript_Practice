// Pure Functions and Side Effects

// What is a Pure function?
// A pure function is a function which:
// . Given the same input, always returns the same output.
// . Produces no side effects.






//Impure Function
var a=10; //external factor ( dont't use external factor that will affect your code);
function add(x){
    console.log(x+a);
    a++;
}
add(2);

//Pure Function
function addPure(x,a){
    //console.log(x+a); //external resource // it will not a part of func
    return x+a;
}//pure functions

console.log(addPure(4,5));    //console.log side effect when we use inside the function

