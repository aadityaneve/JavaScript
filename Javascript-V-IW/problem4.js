/* Problem
  Print the average of even numbers from 1 to 100 (both included)
*/

var num = 100;
var total = 0;
var noCount = -1;
var i = 0;
while(i<=num){
    if(i%2==0){
        noCount++;
        total+=i;
    }
    i++;
}
console.log("Average of even numbers : "+total/noCount);