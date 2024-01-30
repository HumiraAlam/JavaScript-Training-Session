//Understanding undefined value Returned from a function

function f1(a, b) {
  var x = 100;

  var y;

  console.log(x);
  console.log(y);
  console.log(a, b);
}
f1("Humira", "Alam");

// another exmple

function f2(a, b) {
  console.log(a, b);
}
f2(100, 200);
f2(100, 200, 300);
f2(100);
