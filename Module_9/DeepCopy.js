let firstperson = {
    name:'Adam',
    age:20,

    address:{
        city:'Lucknow',
        state:'UP'
    }
}

let secondperson=JSON.parse(JSON.stringify(firstperson))

secondperson.address.city = 'Delhi';

console.log(firstperson)
console.log(secondperson)
