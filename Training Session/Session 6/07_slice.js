/*
slice()
--------
--returns selected elements in an array, as a new array.
--selects from a given start (included), up to a (not included) given end
--does not change the original array

<<syntax>>
    array.slice(start, end)


-- start	Optional. > Start position >  Default is 0 > Negative numbers select from the end of the array.
-- end	    Optional. > End position.  > Default is last element. > Negative numbers select from the end of the array.

*/

//Example

var Mydata = [20, 30, 40, 50, 60, 70];

console.log(Mydata.slice(2, 5));
