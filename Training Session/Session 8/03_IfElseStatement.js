//if--Else Statement

/*
If you want to execute some code if a condition is true and another code if the condition is not true, 

<<Syntax>>
    if (condition)
    {
    code to be executed if condition is true
    }
    else
    {
    code to be executed if condition is not true
    }
*/

var d = new Date();
var time = d.getHours();
if (time < 12) {
  console.log("Good Morning");
} else {
  console.log("Good Afternoon");
}
//
function performance(x, y, action) {
  if (action === "+") {
    console.log(x + y);
  } else {
    console.log("Give proper action");
  }
}
performance(10, 5, "+");
