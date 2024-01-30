//combining missing words with return  function

function wordBlanks (myNown, myAdjective, myVerb, myAdverb){

    var result = "";
    result= "My"+ myAdjective + myNown + myVerb + myAdverb;
    return result;
}
console.log(wordBlanks(" dog", " big", " runs", " fast"));