/*
<<The for Loop>>

The for loop is used when you know in advance how many times the script should run.

<<Syntax>>
    for (var=startvalue;  var<=endvalue/condition;  var=var+increment/var-decrement)
    {
    code to be executed
    }
*/
//Example: print values 1-10


function printValue(){
    for(var i=1; i<=10; i++ ){
        console.log(i)
    
    }
}
printValue()        // can do this without function