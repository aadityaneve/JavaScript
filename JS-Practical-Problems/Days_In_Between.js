/* Problem
    Given two dates in a nonleap year. Find the no of days in between them (excluding the given dates)
    Sample Input - 31-7 (31st July) & 4-8 (4th Aug)
    Sample Output - 3 (1st Aug, 2nd Aug, 3rd Aug) 
*/


function daysInBetween( dateStart, dateEnd){
  var startDay = "";
  var startMonth = "";
  var endDay = "";
  var endMonth = "";
  var totalDays = 0;
  var dayCounter = 0;

  // Start day seperator
  for(let i=0;i<dateStart.length;i++){
    if(dateStart[i] != "-"){
      startDay+=dateStart[i];
      //console.log(startDay);
    }else{
      i++;
      for(;i<dateStart.length;i++){
        startMonth = dateStart[i];
        //console.log(startMonth);
      }
    }
  }

  // End day seperator
  for(let i=0;i<dateEnd.length;i++){
    if(dateEnd[i] != "-"){
      endDay+=dateEnd[i];
      //console.log(endDay);
    }else{
      i++;
      for(;i<dateEnd.length;i++){
        endMonth = dateEnd[i];
        //console.log(endMonth);
      }
    }
  }


  if(startMonth == 2){
    totalDays = 28;
    for(i=Number(startDay);i<totalDays;i++){
      if(startDay == totalDays){
        break;
      }else{
        dayCounter++;
      }
    }
  }else if(startMonth == 1 || startMonth == 3 || startMonth == 5 || startMonth == 7 || startMonth == 8 || startMonth == 10){
      totalDays = 31;
      for(i=Number(startDay);i<totalDays;i++){
        if(startDay == totalDays){
          break;
        }else{
          dayCounter++;
        }
      }
  }else{
    totalDays = 30;
    for(i=Number(startDay);i<totalDays;i++){
      if(startDay == totalDays){
        break;
      }else{
        dayCounter++;
      }
    }
  }

  

  if(endMonth == 2){
    totalDays = 28;
    for(i=Number(endDay);i>1;i--){
      if(endDay == totalDays){
        break;
      }else{
        dayCounter++;
      }
    }
  }else if(endMonth == 1 || endMonth == 3 || endMonth == 5 || endMonth == 7 || endMonth == 8 || endMonth == 10){
      totalDays = 31;
      for(i=Number(endDay);i>1;i--){
        if(endDay == totalDays){
          break;
        }else{
          dayCounter++;
        }
      }
  }else{
    totalDays = 30;
    for(i=Number(endDay);i>1;i--){
      if(endDay == totalDays){
        break;
      }else{
        dayCounter++;
      }
    }
  }


  // console.log(startDay, endMonth);
  // console.log(endDay, endMonth);
  return dayCounter;
}


console.log("Number of days in between : "+daysInBetween("28-7", "4-8"));