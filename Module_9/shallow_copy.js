// shallow copy spread Operator {...}

let firstperson = {
    name:'Adam',
    age:20
}

let secondperson = {...firstperson}; // shallow Copy

secondperson.name ='Steve';

console.log(firstperson);
console.log(secondperson);