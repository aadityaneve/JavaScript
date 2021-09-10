/* Problem
  Print the sum of all the multiples of 3 from 0 to given limit
*/

var num = 25;
var sum = 0;
var i=0;
while(i<=num){
    if(i%3==0){
        sum+=i;
    }
    i++;
}
console.log(sum);