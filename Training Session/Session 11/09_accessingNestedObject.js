//accessing nested object
var myStorage= {
    "car":{
        "inside":{
            "glove box":"maps",
            "seat":"crumbs"
        },
        "outside":{
            "trunk":"jack"
        }
    }
}
var gloveboxContents= myStorage.car.inside["glove box"]
console.log(gloveboxContents)