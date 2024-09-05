//Reduce


//You need to sum of every element in an array
//Imperative Method
 let num =[1,2,3,4,5,6,7];
// let sum=0;
// for(let i=0;i<num.length;i++){
//     sum=sum+num[i];
// }
// console.log(sum);




// Declarative Method
//Reduce 
// Reduce will always return single value
                        // accumulator, Value
let result = num.reduce(function(acc,value){
        let updatedsum = acc + value
        return updatedsum;
},0)

console.log(result);


let mul_res = num.reduce(function(acc,val){
    let multipleval = acc*val;
    return multipleval;
},1)

console.log(mul_res);