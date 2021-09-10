/* Given an array of RGB values convert into HEX Color Code
  https://en.wikipedia.org/wiki/Web_colors Check Converting RGB to hexadecimal section
  Sample Input - [100, 121, 93]
  Sample Output - 64795D 
*/

var input = [100, 121, 93];

function rgbToHexa(inputArr){
  var quotient = -1;
  var remainder = 0;
  var num = 0;
  var hexStr = "";
  var finalHexStr = "";

  for(let i=0;i<inputArr.length;i++){
    if(inputArr[i] >= 0 && inputArr[i] <=255){

      num = inputArr[i];
      //console.log(num);
      while(quotient!=0){
        //console.log(num);
        quotient = parseInt(num/16);
        remainder = parseInt(num%16);

        if(remainder == 10){
          hexStr+= "A"; 
        }else if(remainder == 11){
          hexStr+= "B";
        }else if(remainder == 12){
          hexStr+= "C";
        }else if(remainder == 13){
          hexStr+= "D";
        }else if(remainder == 14){
          hexStr+= "E";
        }else if(remainder == 15){
          hexStr+= "F";
        }else{
          hexStr+=remainder;
        }      

        //console.log(hexStr);
        num = quotient;     
      }
        // Resetting quotient to -1
        quotient = -1;

        // Reverse the String
        for(let i=hexStr.length-1;i>=0;i--){
          finalHexStr+=hexStr[i];
          //console.log(hexStr[i]);
        }
        // Adding space for good look
        finalHexStr+=" ";

        // Reset hexStr
        hexStr = "";
        //console.log(finalHexStr);
        //reverse(hexStr);
    }else{
      cosole.log("RGB value should be between 0 to 255.");
    }    
  }
  return finalHexStr;
}

console.log("-------- : RGB To HEX : -------")
console.log("\t\t\t"+rgbToHexa(input));