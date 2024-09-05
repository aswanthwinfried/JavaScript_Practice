// Classical Inheritance
// Methods of Properties from base class can be put down or can be passed into derived class

// parent{
//     Properties
// }

// child1{
//     ask Propertice(inherited) from parent class
// }


class Person{
    constructor(_name,_age){
        this.name =_name;
        this.age=_age;
    }

    welcome(){
        console.log(`Welcome ${this.name}`)
    }
}


class Teacher extends Person{
    constructor(_name,_age,_classStrength){
        super(_name,_age)
        this.classStr = _classStrength
    }

    test(){
        super.welcome();
    }
}

class Students extends Person{
    constructor(_name,_age,_cgpa){
        super(_name,_age)
        this.cgpa = _cgpa;
    }
}


let person1 = new Person('Aswnth',23);
console.log(person1)

let teacher = new Teacher("Aswant",34,55)
console.log(teacher)
teacher.test()

let student = new Students('Aswnth', 20 ,9.19)
console.log(student)