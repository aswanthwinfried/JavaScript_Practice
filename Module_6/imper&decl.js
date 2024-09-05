// Imperative and Declarative way of writing code

// we will be given a number and we have to check that if the sqaure of that number is even or not

// Imperative way of writing code
const a=4;
const asquare=a*a;
let isEven;
if(asquare %2==0){
    isEven=true;
}
else{
    isEven=false;
}
console.log(isEven);


// Declarative way of writing code

const checkforsquare = (x) =>(x*x%2==0 ? true : false)
console.log(checkforsquare(4));