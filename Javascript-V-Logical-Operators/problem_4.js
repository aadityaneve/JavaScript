/* Problem
    Given the days of the week in short format "Sun", "Mon" ... print in long format "Sunday", "Monday", ...
 */

// Problem_4 Logic_1
var day = "thu";
switch(day){
    case "mon":   console.log("Monday");
        break;
    case "tue":   console.log("Tuesday");
        break;
    case "wed":   console.log("wednesday");
        break;
    case "thu":   console.log("Thursday");
        break;
    case "fri":   console.log("Friday");
        break;
    case "sat":
    case "sun":   console.log("Weakend");
        break;
    default:    console.log("Enter valid day");
        break;
}