//in js obj are key value pairs

var person={
    firstname:"Aswanth",
    secondname:"S",
    age:19,
    ownsBike:false
}

console.log(person);

// access obj using dot notation

console.log(person.age); //19

// bracket Notation 

console.log(person['firstname']);  //Aswanth


var myself={
    firstname:"Aswanthwin",
    lastname:"Fried",
    age:19,

    friends:['Raja','Nis','PM','Azar'],
    ownedbike:true,

    address:{
        state:'TamilNadu',
        city:{
            name:"Chennai",
            pincode:"123456"
        }
    }
}

console.log(myself.friends[2]); //PM

console.log(myself.address.city.name);  //Chennai

myself.ownedbike=false;
console.log(myself.ownedbike)

delete myself.age;
console.log(myself);
