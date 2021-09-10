/* Given a string in lower case convert it to upper case */
var name = "masai";
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var output = "";

for(var i=0;i<name.length;i++){
  //console.log(name[i]);
  for(var j=0;j<lower.length;j++){
    if(lower[j] == name[i]){
      output+=upper[j];
    }
  }  
}
console.log(output);