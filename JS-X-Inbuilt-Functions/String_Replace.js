/* Write a custom function that has the same behaviour of inbuilt String Replace Function */

const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';


function myReplace(str, replaceStr){
  var count = 0;
  var newStr = "";
  for(var i=0;i<p.length;i++){    
    if(p[i] == str[count]){
      count++;
      if(count == str.length){
        for(var j=0;j<replaceStr.length;j++){
          newStr+=replaceStr[j];
        }
        count=0;
      }
    }else{
      newStr+=p[i];
    }
  }
  return newStr;
}

console.log(myReplace("dog","monkey"));