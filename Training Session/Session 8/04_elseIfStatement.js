/*
You should use the if....else if...else statement if you want to select one of many sets of lines to execute.

<<Syntax>>

        if (condition1)
        {
        code to be executed if condition1 is true
        }
        else if (condition2)
        {
        code to be executed if condition2 is true
        }
        else
        {
        code to be executed if condition1 and
        condition2 are not true
        }
*/

//Example
function performOperation(x, y, action) {
  if (action === "+") {
    console.log(x + y);
  } else if (action === "-") {
    console.log(x - y);
  } else if (action === "*") {
    console.log(x * y);
  } else if (action === "/") {
    console.log(x / y);
  } else {
    console.log("Pass Valid Action like + or - or * or /");
  }
}

performOperation(20, 10, "-");

//example: 2

var d = new Date();
var time = d.getHours;
if (time < 12) {
  console.log("Good Morning");
} else if (time > 12 && time < 14) {
  console.log("Good Afternoon");
} else {
  console.log("Good night");
}
