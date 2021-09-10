/** 
 * Should have the following functions camelCase snakeCase hypenCase which takes a string as input and returns the string the respective case
 * You cannot use any inbuilt functions, the only things you can use are the length push 
*/

var arr = [];

function storeToArray(userString){

  // Reseting whole array
  arr.length = 0;

  var word = "";

  // Storing userString into array i.e arr
  for(let i=0;i<userString.length;i++){

    if(userString[i] != " "){
      word+=userString[i];      
    }else{
      if(word.length != 0){
        arr.push(word);
      }      
      word = "";          
    }

  }
  arr.push(word);
}


function wordToLower(word){
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var newWord = "";

  for(let i=0;i<word.length;i++){
    for(let j=0;j<upper.length;j++){
      if(word[i] == upper[j]){
        newWord+=lower[j];
        break;
      }else if(word[i] == lower[j]){
        newWord+=word[i];
        break;
      }
    }
  }
  return newWord;
}


function firstLetterCapital(word){
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var newWord = "";

  for(let i=0;i<word.length;i++){
    for(let j=0;j<lower.length;j++){
      if(word[i] == lower[j] && i == 0){
        newWord+=upper[j];
        break;
      }else if(word[i] == upper[j] && i == 0){
        newWord+=upper[j];
        break;
      }else if(word[i] == upper[j] && i > 0){
        newWord+=lower[j];
        break;
      }else if(word[i] == lower[j] && i > 0){
        newWord+=lower[j];
        break;
      }
    }
  }
  return newWord;
}


function camelCase(userString){

  var camelCaseString = "";

  storeToArray(userString);
  
  for(let i=0;i<arr.length;i++){
    if(i == 0){
      camelCaseString+=wordToLower(arr[i]);
    }else{
      camelCaseString+=firstLetterCapital(arr[i]);
    }
  }
  return camelCaseString;
}


function hypenCase(userString){

  var hypenCaseString = "";
  storeToArray(userString);

  for(let i=0;i<arr.length;i++){
    var word = wordToLower(arr[i]);
    if(i < arr.length-1){
      hypenCaseString+=word+"-";
    }else{
      hypenCaseString+=word;    
    }    
  }

  return hypenCaseString;
}


function snakeCase(userString){

  var snakeCase = "";
  storeToArray(userString);

  for(let i=0;i<arr.length;i++){
    var word = wordToLower(arr[i]);
    if(i < arr.length-1){
      snakeCase+=word+"_";
    }else{
      snakeCase+=word;    
    }    
  }

  return snakeCase;
}



console.log(camelCase("A quick BROWN fox Jumps oveR a LazY DOg"));
console.log();
console.log(hypenCase("A quick BROWN fox Jumps oveR a LazY DOg"));
console.log();
console.log(snakeCase("A quick BROWN fox Jumps oveR a LazY DOg"));