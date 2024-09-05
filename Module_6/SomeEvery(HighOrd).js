// some method 
// Some: Conditon Check: To get true or false based on a condition
//it will return true if even 1 or more that 1 element satisfies the condition 

const transactions = [1000, 3000, 4000, 2000, 898, 3800, 4500];
let result = transactions.some(function(n){
    return n>0;
})
console.log(result);



// every (if Every Array Element Satisfies the condition it will return true)

let resultevery = transactions.every(function(n){
    return n>0;
})
console.log(resultevery);
