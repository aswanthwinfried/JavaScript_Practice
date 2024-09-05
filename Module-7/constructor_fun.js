// Constructor Functions   // Reduce to create multipleobj

function createCar(_name, _company, _color) {
    this.name=_name;
    this.company=_company;
    this.color=_color;
}//Template

let car1 = new createCar('X4','BMW','Red');
let car2 = new createCar('S-class','Mercedes','White');


console.log(car1);
console.log(car2)