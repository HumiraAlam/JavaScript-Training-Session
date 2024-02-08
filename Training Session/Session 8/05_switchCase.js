/*
use the switch statement if you want to select one of many blocks of code to be executed.

<<Syntax>>
        switch(n)
        {
        case 1:
        execute code block 1
        break;

        case 2:
        execute code block 2
        break;

        default:
        code to be executed if n is
        different fro
        }
*/

var color = "black";

switch (color) {
  case "red":
    console.log("This is a red color");
    break;
  case "blue":
    console.log("This is blue color");
    break;
  case "green":
    console.log("This is green color");
    break;
  default:
    console.log("Case did not match ");
}
