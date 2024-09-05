// Hoisting based on variable declaration and execution


console.log(a);
greet();


var a='hi';

function greet(){
    console.log('hello from aswanth');
}


var add = function(a,b){
    console.log(a+b);
}


function Add(){
    console.log(answer)
    var answer = 2
};
Add()

