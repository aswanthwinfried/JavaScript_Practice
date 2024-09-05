// Polymorphism
// Poly-> many  morph->forms  ism-> method
// we call same named func diff class

class Animal{
    

    sound(){
        console.log(`Animal Make Different Sounds`);
    }
}

class dog{
    

    sound(){
        console.log(`Dog Barks`);
    }
}


class cat{
    

    sound(){
        console.log(`Cat Mews`);
    }
}



let Animal1= new Animal()

let tommy = new dog(); 

let percy = new cat();

Animal1.sound();
tommy.sound();
percy.sound();
