// setInterval

function hello(){
    console.log('Hello from setInterval');
}

let timer = setInterval(hello , 1000) // it runs infinity so we want to control it using below steps

setTimeout(function(){
    clearInterval(timer)
},3000)