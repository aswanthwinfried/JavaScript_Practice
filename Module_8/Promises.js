// how to produce a promise

let myPromise = new Promise(function(resolve , reject){
    const a=4;
    const b=3;

    setTimeout(()=>{
        if(a===b){
            resolve('The Values are Equal')
        }
        else{
            reject('The Values are Not Equal')
        }
    },2000)
})




// Pending State
// console.log(myPromise)

//fulfilled
//resolve
myPromise.then(function(result){
    console.log(result);
})

//reject

myPromise.catch(function(failedRes){
    console.log(failedRes)
})
