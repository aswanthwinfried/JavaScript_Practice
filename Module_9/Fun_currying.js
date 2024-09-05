// Function Currying

let sum = function(x,y){
    console.log(x+y)
}
sum(2,3)


let sumCurried = function(x){
    return function(y){
        console.log(x+y);
    }
}

let sumTwoNum = sumCurried(2)
 sumTwoNum(3)
