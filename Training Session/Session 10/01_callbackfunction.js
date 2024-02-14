/*A JavaScript callback is a function which is to be executed after another function has finished execution.

A callback is a function passed as an argument to another function. 

Then the argumented function is called a callback function

          function fn(){


          }
          fn(function(){})
*/

//Example 1

function f1() {
  console.log("f1 is called");
}

function f2(f) {
  console.log(f);
  f();
}

f2(f1); //f2 is a heigher order function, f1 is a call back function

//Example 2

function fn(x) {
  x();

  x();

  x();
}

fn(function () {
  console.log("i am callback function");
});
