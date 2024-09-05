//Problem with var

var a=21;

var a=35;// redeclaration of variable ( it will not allowed in other lang)
console.log(a);


if(a===35){
    var b=40;
    console.log(b);
}
console.log(b);
// variable declared with var keyword are not blocked scope they are functional scope
// it allows to access the value declared in if block it is an one of the security conflict


function test(){
    var c=100;
    console.log(c);
}

test();
console.log(c);//error because it is functional scoped