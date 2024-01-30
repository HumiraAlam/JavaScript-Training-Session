/*
splice()
--------
--method adds and/or removes array elements.
--method overwrites the original array.

<<syntax>>
    array.splice(index, howmany, item1, ....., itemX)


-- index	    Required. > The index (position) to add or remove items. > A negative value counts from the end of the array.
-- howmany	    Optional. > Number of items to be removed.
-- item1, 
    itemX	    Optional. > New elements(s) to be added.
*/

//Example

var data = [20, 30, 99, 66, 100, 31, 91, 12, 11];

data.splice(3, 3, 333); // removes 3 elements from index 3 and ads new number on index 3

console.log(data);
