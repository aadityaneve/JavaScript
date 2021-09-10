/* Write a custom function that has the same behavior of inbuilt Array Join Function */

var elements = ['Fire', 'Air', 'Water'];

function myArrayJoin(str){
  var newStr="";
  for(let i=0;i<elements.length;i++){
    if(elements[i+1] != undefined){
      newStr+=elements[i]+str;
    }else{
      newStr+=elements[i];
    }
    
  }
  return newStr;
}

console.log(myArrayJoin("*"));
console.log(myArrayJoin(","));
console.log(myArrayJoin("_ _"));