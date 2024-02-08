//if statement inside function

/*
If Statement
You should use the if statement if you want to execute some code only if a specified condition is true.

<<Syntax>>
        if (condition)
        {
        code to be executed if condition is true
        }

Note:
"if" is written in lowercase letters. Using uppercase letters (IF) will generate a JavaScript error!*/

// Example 1: Write a "Good morning" greeting if the time is less than 12

var d = new Date();
var time = d.getHours();
if (time < 12) {
  console.log("Good Morning");
}

//

function performance(x, y, action) {
  if (action == "+") {
    console.log(x + y);
  }
}
performance(10, 5, "-");
