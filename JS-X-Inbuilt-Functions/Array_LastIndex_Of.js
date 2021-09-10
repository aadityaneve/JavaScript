/* Write a custom function that has the same behavior of inbuilt Array LastIndex Of Function */

var animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

function myLastIndexOf(searchElement, fromIndex=animals.length){
  if(fromIndex == -1){
    fromIndex = animals.length;
  }else{
    fromIndex = Math.abs(fromIndex);
  }
  
  for(var i=fromIndex;i>=0;i--){
    if(searchElement == animals[i]){
      return i;
    }
  }
  return -1;
}


console.log(myLastIndexOf("Dodo"));
console.log(myLastIndexOf("Dodo",0));
console.log(myLastIndexOf("Dodo",1));
console.log(myLastIndexOf("Dodo",2));
console.log(myLastIndexOf("Dodo",3));
console.log(myLastIndexOf("Dodo",-1));
console.log(myLastIndexOf("Dodo",-2));
