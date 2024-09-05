//Find returns the first element of an array that satisfy the condition
// Find
const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];


let firstWithDrawl = transactions.find(function(n){
    return n<0;
})

console.log("FirstWithdrawl",firstWithDrawl)

//findIndex

let firstWithDrawlIndex = transactions.findIndex(function(n){
    return n<0;
})
console.log("firstWithDrawlIndex",firstWithDrawlIndex)