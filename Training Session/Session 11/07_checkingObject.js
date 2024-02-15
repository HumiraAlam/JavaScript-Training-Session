//checking object if have property

var myObject = {
    Name: "Humira",
    ID: 543,
    Locations:"Sweden"


}
function checkobj(checkprop){

    if(myObject.hasOwnProperty(checkprop)){
        return myObject[checkprop];
    }
    
    else{
    return "Change Me!";}
}

console.log(checkobj("ID"))
