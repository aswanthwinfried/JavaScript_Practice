var arr = [12,'Ferrari',true,12.3];
console.log(arr);


// accessing arr

var a=arr[1];
console.log(a);


// replacing arr
arr[1] = "BMW";
console.log(arr);


//len of arr

console.log("Length of arr",arr.length);


//inbuilt array methods

var arr2=[12,14,16,26];

//pop

arr2.pop();
console.log("Popped: ",arr2);

//push

arr2.push(100);
console.log("Pushed: ",arr2);

//shift method

arr2.shift();
console.log("Shifted:", arr2);


//unshift

arr2.unshift(300);
console.log("Unshift:",arr2);