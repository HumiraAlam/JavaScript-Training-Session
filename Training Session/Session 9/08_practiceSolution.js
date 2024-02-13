//print only the even numvers from 1-20

function evenNum(initialValue, endValue){
    
    for (var x= initialValue; x<=endValue; x++){
        if(x%2 ==0){
            console.log(x);
        }
        

    }
}
evenNum(1,20)

//print only the odd numvers from 51-70

function oddNumbers(initialValue, endValue){
    for(var a=initialValue; a<=endValue; a++){
        if(a%2!==0){
            console.log(a);
        }

    }

}
oddNumbers(51,70)

//print 1 to 10 in reverse order

function reversevalue(s,e){
    for(var i= s; i>=e; i--)
    console.log(i);
    


}
reversevalue(10,1)