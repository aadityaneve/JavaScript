/* Problem
    Given 3 numbers (all different values), print which is greatest
*/

// Problem_3 Logic_1
var num_1 = -10;
var num_2 = 1000;
var num_3 = 100;

if(num_1 > num_2 && num_1 > num_3){
    console.log(num_1+" is gretest.");
}else if(num_2 > num_1 && num_2 > num_3){
    console.log(num_2+" is gretest.");
}else{
    console.log(num_3+" is gretest");
}