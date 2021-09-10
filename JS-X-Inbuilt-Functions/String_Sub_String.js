/* Write a custom function that has the same behavior of inbuilt String Substring Function */

var str = "Tomorrow is Holiday.";

function mySubString(start, end){
  var newStr = "";
  for(let i=start;i<=end;i++){
    newStr+=str[i];
  }
  return newStr;
}

console.log(mySubString(1, 10));