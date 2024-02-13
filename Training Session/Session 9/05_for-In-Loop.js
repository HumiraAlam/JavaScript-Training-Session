//for loop with in operator

//it is used to iterate object
//It will give the access of property key
/*  

<<Syntax>>

    for (var <variable name>  in  <object-name>){

    }
*/

var info = {
    id: 101,
    name: "Humira Alam",
    city: "Gothenburg",
    gender: "female",
  };

 
  
  for (var props in info) {
    console.log(props, ":", info[props]);
  }