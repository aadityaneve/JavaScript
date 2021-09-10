/*  Problem
  Print the Calendar date in the below format
*/

var date = new Date();
var current_year = date.getFullYear();
var days=0;

if(current_year%4==0 && current_year%100!=0){
  console.log("===========");
    console.log(current_year+" is a leap year.");
  console.log("===========");
}else{
  console.log("===========");
    console.log(current_year+" is not leap year.");
  console.log("===========");
}

for(var i=1;i<=12;i++){
  console.log("===========");
  switch(i){
    case 1: console.log("JANUARY");
      break;
    case 2: console.log("FEBRUARY");
      break;
    case 3: console.log("MARCH");
      break;
    case 4: console.log("APRIL");
      break;
    case 5: console.log("MAY");
      break;
    case 6: console.log("JUNE");
      break;
    case 7: console.log("JULY");
      break;
    case 8: console.log("AUGUST");
      break;
    case 9: console.log("SEPTEMBER");
      break;
    case 10: console.log("OCTOBER");
      break;
    case 11: console.log("NOVEMBER");
      break;
    case 12: console.log("DECEMBER");
      break;
  }
  console.log("===========");

  if(i==2){
    if(current_year%4==0 && current_year%100!=0){
      days=29;
      for(var j=1;j<=days;j++){
        console.log(i+"-"+j);
      }
    }else{
      days=28;
      for(var j=1;j<=days;j++){
        console.log(i+"-"+j);
      }
    }
  }else if(i==4 || i==6 || i==9 || i==11){
    days=30;
    for(var j=1;j<=days;j++){
      console.log(i+"-"+j);
    }
  }
  else{
    days=31;
    for(var j=1;j<=days;j++){
      console.log(i+"-"+j);
    }
  }
}