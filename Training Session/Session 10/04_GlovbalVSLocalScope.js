//global vs local scope in function

var outWear = "T-Shirt";

function myOutfit (){
    var outWear = "Sweater";
    console.log(outWear);
    
}

myOutfit();
console.log (outWear);