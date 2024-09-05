//creates a loop iterrating over iterable objects
//include: built-in-string,Array etc..

var scores =[60,90,80,75];

//syntax
//score specifies values but in for-in loop it specifies Key
for(var score of scores){
    console.log(score);
}


//method -entries()

let colors = ['Red','White','Green'];

for(var [index,color] of colors.entries()){
    console.log(index +'->'+ color);
}


//string

var str="Aswanth";

for(var c of str){
    console.log(c);
}