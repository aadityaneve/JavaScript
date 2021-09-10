/* Write a function to replace spaces in a given string with - */

function replaceString(string, r){
  var newString = "";
  for(let i=0;i<string.length;i++){
    if(string[i] == " "){
      newString+=r;
    }else{
      newString+=string[i];
    }
  }
  return newString;
}

console.log(replaceString("My name is Aditya.","*"));