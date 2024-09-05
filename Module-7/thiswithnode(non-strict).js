//'this' with node js (non strict mode)

console.log(this);  //return Empty Obj


function displayThis(){
    console.log(this);
}

displayThis(); // return global object



let myobj = {
    name:'aswanth',
    age:'20',

    myfun:function(){
        console.log(this.name);
    }// fun inside of obj is Method
}

myobj.myfun();




let myobj2 = {
    name:'aswanth',
    age:'20',

    myfun2:function(){
        function myfun3(){
            console.log(this);
        }
        myfun3();
    }
}

myobj2.myfun2();
