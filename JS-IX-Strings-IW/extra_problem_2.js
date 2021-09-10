/* Q2. Given any string convert it into upper case
    Masai School
    MASAI SCHOOL 
*/

var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var count = 0;
var i=0,j=0;

var str = "MaSai ScHool is thE besT";
var newStr = "";

for(i=0;i<str.length;i++){
  for(j=0;j<lower.length;j++){
    if(str[i]==lower[j] || str[i]==upper[j]){
      newStr+=upper[j];
      break;
    }else if(str[i]==" "){
      newStr+=" ";
      break;
    }
  }
}
console.log(newStr);