/* Parameters and Arguments

==How to give input data to a function of JS?

Parameters:
-variables without scope  statement (var, const, let)
-defined in function definition, inside ()
-used to hold input data in function defination

        function myFunction(parameter1, parameter2){

        }

Arguents:
-Actual input data that are passed to a function 
-can be any tyle of data
-always passed when a function is called

            function myFunction(parameter1, parameter2){

                    }
            myFunction(argument1, argument2)
*/

//Passing values through parameter and arguments in function

function myFunction(a, b) {
  console.log(a - b);
}
myFunction(5, 3);
myFunction(5, 2);
