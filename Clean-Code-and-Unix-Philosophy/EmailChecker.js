/* 
  File EmailChecker.js
  Given an string, check if its a valid email.
  If valid, print YES
  If not, print NO
  use the Unix Philosophy Approach
 */


function checkForSymbol(userString){

  for(let i=0;i<userString.length;i++){
    if(userString[i] == "@"){
      return true;
    }
  }
  return false;
}


function checkForDomain(userString){

  var j = 0;
  for(let i=0;i<userString.length;i++){
    j++;
    if(userString[i] == "@"){
      break;
    }
  }

  if(userString[j] == "."){
    return false;
  }
  return true;
}


function charBeforeSymbol(userString){

  for(let i=0;i<userString.length;i++){
    if(userString[i] == "@" && i == 0){
      return false;
    }
  }
  return true;
}


function checkEmailStart(userString){

  if(userString[0] == "."){
    return false;
  }
  return true;
}


function checkDoubleDots(userString){

  for(let i=0;i<userString.length;i++){
    if(userString[i] == "." && userString[i+1] == "."){
      return false;
    }
  }
  return true;
}


function checkDomain(userString){

  var domain = "";
  for(let i=userString.length-4;i<userString.length;i++){
    domain += userString[i];
  }

  if(domain == ".com" || domain == ".net" || domain == ".org"){
    return true;
  }

  return false;
}


function allowedCharacter(userString){

  var characters = "abcdefghijklmnopqrstuvwxyz0123456789_-@.";
  var flag = 0;

  for(let i=0;i<userString.length;i++){
    // Check for valid Characters
    for(let j=0;j<characters.length;j++){
      if(userString[i] == characters[j]){
        flag = 1;
        break;
      }
      flag = 0;
    }  

    if(flag == 0){
      return false;
    }  
  }
  return true;
}


function isEmailValid(userString){

  // checkForSymbol will check for symbol @
  if(checkForSymbol(userString) == true){
    // checkForDomain will check for . after domain
    if(checkForDomain(userString) == true){
      // checkBeforeSymbol will check for character before domain
      if(charBeforeSymbol(userString) == true){
        // checkEmailStart will check email start with dot
        if(checkEmailStart(userString) == true){
          // checkDoubleDots will check for double dots
          if(checkDoubleDots(userString) == true){
            // checkDomain will check .org .com .net
            if(checkDomain(userString) == true){
              // check for character, digit, underscore, dash
              if(allowedCharacter(userString) == true){
                return true;
              }
            }
          }     
        }
      }
    }
  }
  return false;
}


//console.log(isEmailValid("aditya.neve@gmail.com"));

var arr = [
  "mysite@masaischool.com",
  "my.name@masaischool.org",
  "mysite@masai.school.net",

  "masai.school.com",
  "masai@.com",
  "@masai.school.net",
  "name@gmail.b",
  "name@.org.org",
  ".name@masaischool.org",
  "masaischool()*@gmail.com",
  "name..1234@yahoo.com"
];


for(let i=0;i<arr.length;i++){

  if(isEmailValid(arr[i])){
    console.log(`${arr[i]} => Valid`);
    console.log();
  }else{
    console.log(`${arr[i]} => Not Valid`);
    console.log();
  }
}
