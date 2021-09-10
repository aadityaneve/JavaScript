/* Problem
    Given the year of birth, if the age is between 13 and 19 (both included) print Teenage and in between 20 and 29 (both included) print Twenties
*/

var yob = 2003;
var curr_age = 2021-yob;

// Problem_1 Logic_1
if(curr_age>=13 && curr_age<=19){
    console.log("Teenage");
}else if(curr_age>=20 && curr_age<=29){
    console.log("Twenties");
}