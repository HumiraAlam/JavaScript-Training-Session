/*
map()
-used to get access of each and ebvery elemen of the array
-will return some value
-creates a new array from calling a function for every array element.
-does not change the original array.


**Syntax**

    var new Array = < arrayName > .map(function(currentValue, index, arr), thisValue){
        return <value>
    })


--currentValue > Required > The value of the current element.
--index >	     Optional > The index of the current element.
--arr >	         Optional > The array of the current element.
--thisValue >	 Optional > Default value undefined > A value passed to the function to be used as its *this* value.

*/
//Example

var Mydata = [20, 30, 40, 50, 60, 70];

var newData = Mydata.map(function (element, index) {
  return element - 10;
});
console.log(newData);
