/* Q1. Given a string create a array of words

String : A Transformation in Education
Array : [A, Transformation, In, Education] */

var str = "A Transformation in Education";
var arr = [];
var word="";
var sCount=0;
var i=0;j=0;

if(str.length != 0){
  // Total Space Count
  for(var i=0;i<str.length;i++){
    if(str[i] == " "){
      sCount++;
    }
  }
  console.log(str.length);
  console.log(sCount);
  for(i=0;i<=sCount;i++){
    //for(j=0;j<str.length;j++){
    word="";
    while(j<=str.length){
      console.log(j);
      if(str[j]!=" "){
        word+=str[j];
        console.log(str[j]);
        j++;
      }else{
        //sCount--;
        j++;
        
        //console.log(sCount);
        //if(sCount==0){
          break;
        //}
      }
      if(j == str.length && i<sCount){
        break;
      }else{
        arr[i]=word;
     }
    }
    console.log(arr.length);
    console.log(sCount);
    
  }
}else{
  console.log("String is empty");
}

console.log(arr);