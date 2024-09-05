class Person {
    constructor(_name , _age){
        this.name=_name;
        this.age=_age;
    }

    welcome(){
        console.log(`Welcome ${this.name}`);
    }
}

let person1 = new Person('Aswanth','20')
let person2 = new Person('win','30')

let person3 = new Person('Fried','20')

person1.welcome();

console.log(person1)
console.log(person2)
console.log(person3)