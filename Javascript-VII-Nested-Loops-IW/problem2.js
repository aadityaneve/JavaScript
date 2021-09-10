/*  Problem
  Print Prime Numbers from 1 to given limit
*/

for(var i=2;i<=100;i++){
  for(var j=2;j<=i;j++){
    if(i%j==0){
      break;
    }
  }
  if(i==j){
    console.log(i);
  }
}








/*
// PrimeNumber Logic_1
  num=13;
  var flag=0;
  for(var i=2;i<Math.sqrt(num);i++){
    if(num%i!==0){
      flag=1;
        break;
    }else{
      flag=0;
        continue;
    }
  }
  if(flag==1){
    console.log("Yes");
  }else{
    console.log("No");
  }


  // PrimeNumber Logic_2
  var count=0;
  for(var i=2;i<num;i++){
    if(num%i==0){
      count++;
    }
  }

  if(count==2){
    console.log("Prime");
  }
*/