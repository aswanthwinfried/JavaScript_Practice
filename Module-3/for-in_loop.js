// for-in allows you to loop through the properties of Object

var colors = {
    primary:"Blue",
    secondary:'Red',
    teritiary:"White"
}

//syntax

for(var color in colors){
    console.log(color + '->' + colors[color]);
}



var colorsArray = ['Yellow','Green','Orange','Red'];

for(var color in colorsArray){
    console.log(color+'->'+colorsArray[color]);
}