let myObj ={

}

console.log(myObj)

let person1={
    name:'Raja',
    age:20
}

console.log(person1)
console.log(person1.hasOwnProperty('gender')) //hasOwnProperty('name') True


// constructor fn

function Person(_name,_age){
    this.name = _name
    this.age = _age
}

let person2 = new Person('steve',23)

console.log(person2)

