// Encapsulation in JavaScript

// keeps function and methods inside the class do not expose out


function Person(_name , _age){
    var name=_name;
    this.age=_age;

    this.getName = function(){
        return name;
    }
}

let person = new Person ('P.Madhan',20)



console.log(person.getName());