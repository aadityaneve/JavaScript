/* Write a custom function that has the same behavior of inbuilt Array Includes Function */

var arr = ['cat', 'dog', 'bat'];

function myIncludes(searchElement, fromIndex=0){
  for(let i=fromIndex;i<arr.length;i++){
    if(arr[i] == searchElement){
      return true;
    }
  }
  return false;
}

console.log(myIncludes("dog"));
console.log(myIncludes("bat", 1));
console.log(myIncludes("cow"));