// 'this' in node (strict)

'use strict'

// console.log(this);


function displayThis(){
    console.log(this);
}

displayThis(); 


let myobj = {
    name:'aswanth',
    age:'20',

    myfun:function(){
        console.log(this);
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