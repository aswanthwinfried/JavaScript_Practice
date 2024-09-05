// you have to check for even numbers in an array and put them in a seperate array

//Imperative Method
// let numbers = [1,2,3,4,5,6,7];
// let evenarray=[];
// for(let i=0;i<numbers.length;i++){
//     if(numbers[i]%2==0){
//         evenarray.push(numbers[i]);
//     }
// }
// console.log(evenarray)



//Filter
// Filter returns the new array it will return all those elements that matches the specific condition
// if the cond true it will returns the element for that condition and if it is false discard that element

let num = [1,2,3,4,5,6,7,8];
let evennum = num.filter(function(n){
    return n%2==0;
})

console.log(evennum)

///

const transactions = [-1000, 3000, -4000, 2000, -898, 3800, 4500];

let deposited = transactions.filter(function(amount){
    return amount>0;
})

console.log(deposited)
 


