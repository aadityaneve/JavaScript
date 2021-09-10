/* Problem
    Given a string swap the case and print the output
    Sample Input - Test
    Sample Output - tEST
    NOTE: Use multiple functions to achieve the result, NOT one single code block 
*/

var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var newStr="";

function swap(str){
  for(let i=0;i<str.length;i++){
    for(let j=0;j<lower.length;j++){
      if(str[i]==upper[j]){
        newStr+=lower[j];
      }else if(str[i]==lower[j]){
        newStr+=upper[j];
      }
    }
  }
  return newStr;
}

console.log(swap("Test"));