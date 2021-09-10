/* Write code to find the absolute difference of two numbers
    Sample Input-1 12,4
    Sample Output-1 8
    Sample Input-2 4,18
    Sample Output-2 14 
*/

function difference(a,b){
  return a-b;
}

function absoluteValue(a,b){
  if(a>b){
    return a-b;
  }else{
    return b-a;
  }
}

console.log(difference(5,2));

console.log(absoluteValue(2,5));