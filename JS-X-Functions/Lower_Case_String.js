/* Problem
    Write a function to convert a character to lower case
    Use this function to convert a given word to lower case
    Use that function to convert an array of strings to array of lower case strings 
*/

function convert(str){
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var newStr = "";
  
  //console.log(typeof(str))

  if(typeof(str) == "string" && str.length==1){
    //console.log(Array.isArray(str));
    for(let i=0;i<str.length;i++){
      for(let j=0;j<upper.length;j++){
        if(str[i] == upper[j]){
          newStr += lower[j];
          return newStr;
        }else{
          newStr += upper[j];
          return newStr;
        }
      }      
    }    
  }else if(typeof(str) == "string" && str.length > 1){
    //console.log(Array.isArray(str));
    for(let i=0;i<str.length;i++){
      for(let j=0;j<upper.length;j++){
        if(str[i] == upper[j]){          
          newStr+=lower[j];
        }else if(str[i] == lower[j]){
          newStr+=upper[j];
        }
      }
    }
    return newStr;
  }else if(Array.isArray(str) == true){
    //console.log(Array.isArray(str));
    var newWord="";
    var arr = [];
    for(let i=0;i<str.length;i++){
      newWord="";
      var word=str[i];
      //console.log(word);
      for(let j=0;j<word.length;j++){
        for(let k=0;k<upper.length;k++){
          if(word[j] == upper[k]){
            newWord+=lower[k];
          }else if(word[j] == lower[k]){
            newWord+=upper[k];
          }
        }        
      }
      arr.push(newWord);
    }
    return arr;
  }
}

var arr = ["ADITYA","NEVE"];


console.log("Converted Letter is : "+convert("A"));
console.log("Convertede String is : "+convert("ADITYA"));
console.log(`Converted Array is : `);
console.log(convert(arr));
