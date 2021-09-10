/* Write a custom function that has the same behavior of inbuilt String Trim Start Function */

var greeting = "     Hello World !    .   ";

function myTrimStart(greeting){
  var newStr="";
  for(let i=0;i<greeting.length;i++){
    if(greeting[i] != " "){
      for(;i<greeting.length;i++){
        newStr+=greeting[i];
      }
      break;      
    }
  }
  return newStr;
}
//console.log(greeting.indexOf("!"));
console.log(myTrimStart(greeting));