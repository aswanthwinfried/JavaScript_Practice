let arr = [ 
    {name:'A',age:13,gender:'M'},
    {name:'B',age:23,gender:'M'},
    {name:'C',age:43,gender:'F'},
    {name:'D',age:15,gender:'M'},
    {name:'E',age:12,gender:'F'},
    {name:'F',age:14,gender:'M'},
]

//  Chaining is a process taking an method from one method and passing to another method

//Age of all the Men(Males)

// let males = arr.filter(function(obj){
//    return obj.gender == 'M';
// })

// let agesofmales = males.map(function(male){
//     return male.age;
// })

// console.log(males)
// console.log(agesofmales)


let males = arr.filter(function(obj){
    return obj.gender == 'M';
 }).map(function(male){
    return male.age;
 })
 console.log(males)

 // Problem From the transaction array filter out positive elements and calculate the total amount
 // USe filter and reduce to achieve this

 const transactions = [1000, -3000, -4000, 2000, -898, 3800, -4500];

 let posElem = transactions.filter(function(pos){
    return pos>0;
 }).reduce(function(acc,val){
    let res = acc+val;
    return res;
 },0)

 console.log(posElem)