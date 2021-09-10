/* Write a function to check if the char is a small case or not */

function isSmallCase(char){
  var lower = "abcdefghijklmnopqrstuvwxyz";
  for(let i=0;i<lower.length;i++){
    if(char==lower[i]){
      return true;
    }else{
      return false;
    }
  }
}

console.log(isSmallCase("b"));