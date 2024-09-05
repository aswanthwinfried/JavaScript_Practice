// coffee shop scenario using Promise

function placeOrder(drink){
    return new Promise(function(resolve,reject){
        if(drink==='coffee'){
            resolve('Order for Coffee Recieved')
        }
        else{
            reject('Other orders Rejected')
        }
    })
}


function processOrder(order){
    return new Promise(function(resolve){
        console.log('Order is Being Processed')
        resolve(`${order} is served`)
    })
}


// placeOrder('coffee').then(function(orderPlaced){
//     console.log(orderPlaced);
//     let OrderProcessed = processOrder(orderPlaced);
//     return OrderProcessed;
// }).then(function(processOrder){
//     console.log(processOrder);
// }) 

// Solution With Promises  // Chaining of Promise 





// Async Await - keywords
 
// async function serveOrder(){
//     let orderPlaced = await placeOrder('coffee')
//     console.log(orderPlaced)
//     let ProcessedOrder = await processOrder(orderPlaced)
//     console.log(ProcessedOrder)
// }

// For Error Handling

async function serveOrder(){
    try {
        let orderPlaced = await placeOrder('tea')
        console.log(orderPlaced)
        let ProcessedOrder = await processOrder(orderPlaced)
        console.log(ProcessedOrder)   
    } catch (error) {
        console.log(error)
    }
}

serveOrder();