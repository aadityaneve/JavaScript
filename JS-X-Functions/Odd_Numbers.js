/* Problem
    Write a function isOdd which returns a boolean value based the number is odd or not
    Use this function to print the odd numbers from 0 to a given limit(included) 
*/


function isOdd(num){
  for(let i=0;i<=num;i++){
    if(i%2!=0){
      console.log(i);
    }
  }
  if(num%2==0){
    return false;
  }else{
    return true;
  }
}


console.log(isOdd(15));

//console.log(isOdd(15));
