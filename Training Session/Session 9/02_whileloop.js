/*
While Loop
-----------
The while loop is used when you want the loop to execute and continue executing while the specified condition is true.

<<syntax>>

        while (var<=endvalue)
        {
        code to be executed
        }
Note: The <= could be any comparing statement.

*/

function printvalues(){
var x=100;    //if x=100 or grater than 10 , it will not execute
while (x<=10){
        console.log(x);
        x++;

}
}
printvalues()