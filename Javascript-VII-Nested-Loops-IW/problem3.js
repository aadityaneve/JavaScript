/* Problem
  Print a box patterns using *
*/

for(var i=0;i<10;i++){
  var output="";
  for(var j=0;j<10;j++){
    if(i==0 || i==9){
      output+="*";  
    }else{
      if(j==0 || j==9){
        output+="*";
      }else{
        output+=" ";
      }
    }    
  }
  console.log(output);
}
