/* Create a function to check if a number is Prime or Not */

function isPrime(num){
  var count=0;
  for(let i=0;i<=num;i++){
    if(num%i==0){
      count++;
    }
  }
  if(count==2){
    return "Prime";
  }else{
    return "Not Prime";
  }
}

console.log(isPrime(9));