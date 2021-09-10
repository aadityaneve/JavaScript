/* Given a character in lower case print the upper case character */

var char = "g";

var lower = ["a","b","c","d","e","f","g","h","i","j"];
var upper = ["A","B","C","D","E","F","G","H","I","J"];

for(var i=0;i<lower.length;i++){
  if(lower[i] == char){
    console.log(upper[i]);
    break;
  }
}