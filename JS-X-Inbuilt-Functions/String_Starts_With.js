/* Write a custom function that has the same behavior of inbuilt String StartsWith Function */

var str = "Tommorrow is Saturday."

function myStringStartsWith(userString){
  var newString = "";
  for(let i=0;i<userString.length;i++){
    newString+=str[i];
  }
  if(userString == newString){
    return true;
  }else{
    return false;
  }
}

console.log(myStringStartsWith("Tommorrow "));