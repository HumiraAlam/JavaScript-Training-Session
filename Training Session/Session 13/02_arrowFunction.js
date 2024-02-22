//use arrow function to write concise anonymouse functions

/*
var magic = function(){
    return new Date();
};

*/


//replacing the above code with arrow function

var magic = () => new Date();

console.log(new Date())
    
//Arrow function with parameters

var myConcat = (arr1,arr2) =>  arr1.concat(arr2);

console.log(myConcat([1,2], [3,4,5]));
