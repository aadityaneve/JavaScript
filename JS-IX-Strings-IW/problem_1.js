/* Given a string count the number of words in that string */

var tagline = "A transformation in Education";

var count = 0;
if(tagline.length > 0){
  for(let i=0;i<tagline.length;i++){
    if(tagline[i] == " "){
      count++;
    }  
  }
  console.log((count+1) + " Words");
}else{
  console.log(0+" Wrods");
}