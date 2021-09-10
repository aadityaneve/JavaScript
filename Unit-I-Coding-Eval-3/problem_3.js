/* 
  Write a function that takes two params (two strings) and returns a boolean
  The function should perform the given task: Given a string and the search find out if the search string exists in the original string (Ignore Case) 
*/


function toLowerCase(userString){

  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";

  var newString = "";
  for(let i=0;i<userString.length;i++){
    for(let j=0;j<upper.length;j++){
      if(userString[i] == upper[j]){
        newString+=lower[j];
        break;
      }else if(userString[i] == lower[j]){
        newString+=lower[j];
        break;
      }      
    }
  }
  return newString;
}


function stringExist(userString, searchString){

  userString = toLowerCase(userString);
  searchString = toLowerCase(searchString);

  var count = 0;
  var j = 0;
  var i = 0;
  var x = true;
  for(;i<searchString.length;i++){
    for(;j<userString.length && x==true;j++){
      if(searchString[i] == userString[j]){
        count++;        
        break;
      }
    }
  }
  
  if(count == searchString.length){
    return true;
  }else{
    return false;
  }
}


console.log(stringExist("Nrupul","pul"))