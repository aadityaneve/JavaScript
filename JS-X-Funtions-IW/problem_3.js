/* Use the same function to print Non-Primes from 2 to a given limit */

function isPrime(num){
  var count=0;
  for(let i=0;i<=num;i++){
    count=0;
    for(let j=0;j<=num;j++){
      if(i%j==0){
        count++;
      }
    }    
    if(count!=2){
      console.log(i);
    }
  }  
}

isPrime(99);