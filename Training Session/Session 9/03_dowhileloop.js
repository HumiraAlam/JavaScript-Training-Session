/*
The do...while loop
------------------------
A variant of the while loop. 
This loop will always execute a block of code ONCE, and then it will repeat the loop as long as the specified condition is true. 

This loop will always be executed at least once, even if the condition is false, because the code is executed before the condition is
tested.

<<syntax>>

        do
        {
        code to be executed
        }
        while (var<=endvalue);
*/
function printvalue(){
var x=100;
do {
    console.log(x)  // 100 will execute one time
    x++; // value is now 101
}
while(x<=10); // check condition 101<=10 ?
}
printvalue()