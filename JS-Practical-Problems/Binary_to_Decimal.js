/* Problem
    Given any binary number convert it into decimal format
    Sample Input - 10001
    Sample Output - 17 
*/

var binaryNumber = 10001;

function myBinaryToDecimal(binaryNumber){
  var i=0;
  var decimalNumber=0;
  
  while(binaryNumber > 0){
    remanider = binaryNumber % 10;
      decimalNumber += (remanider) * (2**i);
    binaryNumber = parseInt(binaryNumber / 10);
    i++;
  }
  return decimalNumber;
}

console.log(myBinaryToDecimal(binaryNumber));