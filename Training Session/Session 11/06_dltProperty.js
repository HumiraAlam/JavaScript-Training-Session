// Delete new property to an object

var myObject = {
    "Full Name": "Humira",
    ID: 543,
    Locations:"Sweden",

}
delete myObject.ID

delete myObject["Full Name"]
console.log(myObject)