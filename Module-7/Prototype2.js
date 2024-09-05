function Person(_name,_age){
    this.name = _name
    this.age = _age

}

Person.prototype.getNameAndAge = function(){
    console.log(`I am ${this.name} and my age is ${this.age}`)
}


let Person1 = new Person('adam',12);

let Person2 = new Person('leo',23);


console.log(Person1);
console.log(Person2)


