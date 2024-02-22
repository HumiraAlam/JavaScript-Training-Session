// accessing to nested arrays (objects inside array)

var myData = [
    {
        Type: "Flower",
        List:["Rose","Tulip","Sunflower"],
    },

    {
        Type: "Fruits",
        List:["Orange","Mango","Apple"],
    }

];
//want to access "Apple"

var chooseData = myData[1].List[2];  //first access the array, then object using dot notation
console.log(chooseData);
