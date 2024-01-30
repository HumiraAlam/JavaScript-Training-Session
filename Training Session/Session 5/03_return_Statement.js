/*
Return Statement:
----------------------
-return is a statement or instruction in JS
-using return statement, it returns some output from the function
-last line of the function
-return statement will stop the execution of the function 

        function(x,y){
            statement 1
            statement 2
            return <value>/ <variable> / <expression>
        }

*/
function returnValue(num) {
  return num - 1;
}
console.log(returnValue(6));

//another example

function printName(name) {
  var x = name + "Alam";

  return x;
}
var data = printName("Humira ");

console.log(data);

data = printName("Tazima ");
console.log(data);
