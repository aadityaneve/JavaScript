/* Write a custom function that has the same behavior of inbuilt Array Slice Function */

var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

function mySlice(start, end=animals.length){
  var newArr = [];
  var j=0;

  if(start<0){
    start = animals.length + start;
  }
  if(end<0){
    end = animals.length + end;
  }

  for(let i=start;i<end;i++){
    newArr[j] = animals[i];
    j++;
  }
  return newArr;
}

console.log(mySlice(2));
console.log(mySlice(2, 4));
console.log(mySlice(1, 5));
console.log(mySlice(-2));
console.log(mySlice(2, -1));