//Call Apply and Bind

let Person1 = {
    firstname:"Aswanth",
    lastname:"Winfried",
    age:20,
}

let printdetails = function(city){
    console.log(`Hi Iam ${this.firstname} ${this.lastname} and iam ${this.age} years old iam from ${city}`)
}



let Person2 = {
    firstname:"Leo",
    lastname:"Aandrew",
    age:20,

}

// call
// Person1.printdetails.call(Person2) //borrowing the function from person1 (another obj)
// printdetails.call(Person2, 'New York')

// Apply
// printdetails.apply(Person2, ['New York']) //arguments must be in the form of array

// Bind
// let my_fn = printdetails.bind(Person2, 'New York') // it stores the function particular variable
// console.log(my_fn)

// my_fn()


// Person1.printdetails();
// Person2.printdetails();