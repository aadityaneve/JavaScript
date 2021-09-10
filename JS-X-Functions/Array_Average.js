/* Problem
    Write code to calculate the average of an array
    If there are no items in the array it should return 0
    NOTE: Create a function to find the sum of elements in an array and use that function to find out the average 
*/

var arr = [1,2,3,4,5,6,7,8,9,10]

function averageOfArray(arr){
  var sum=0;
  if(arr.length == 0){
    return 0;
  }else{
    for(let i=0;i<arr.length;i++){
    sum+=arr[i];
  }
  console.log("Average of array : "+sum/arr.length);
  }
}

averageOfArray(arr);