//Write a function to determine if a number is (+)ve or (-)Ve

function num(x) {
  if (x > 0) {
    console.log("positive");
  } else if (x < 0) {
    console.log("Negetive");
  } else {
    console.log("Undefined");
  }
}
num(-2);

//Write a function to determine if a number is even or odd

function evenOdd(x) {
  if (x % 2 === 0) {
    console.log(x, " is a even Number");
  } else {
    console.log(x, " is a odd Number");
  }
}
evenOdd(22);
// show designation'

function mydesignation(x) {
  if ((x >= 18) && (x <= 20)) {
    console.log("Junior Developer");
  } else if ((x >= 21) && (x <= 24)) {
    console.log("Senior Developer");
  } else if ((x >= 25) && (x <= 30)) {
    console.log("Ast Manager");
  } else if (x >= 31) {
    console.log("Manager");
  } else {
    console.log("Undefined");
  }
}
mydesignation(25);

// Calculator using Switch case

function calculator(x, y, action) {
  switch (action) {
    case "+":
      console.log(x + y);
      break;

    case "-":
      console.log(x - y);
      break;

    case "*":
      console.log(x * y);
      break;

    case "/":
      console.log(x / y);
      break;
  }
}
calculator(2, 3, "*");
