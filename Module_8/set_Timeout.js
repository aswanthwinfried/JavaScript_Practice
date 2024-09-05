// setTimeout and setInterval
// setTimeout(cb, 2000)
//setTimeout is an Asynchronous


console.log('Before');

function greet(){
    console.log('Hello from setTimeout')
}

setTimeout(greet , 5000)

console.log('After')