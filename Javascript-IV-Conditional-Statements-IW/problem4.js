/* Problem
  give store username and password and input username and password, Print if the user can login or not
*/

var stored_usr = "aditya", stored_pwd = "password";
var input_usr = "aditya", input_pwd = "pass";

if(stored_usr === input_usr){
  if(stored_pwd === input_pwd){
    console.log("Welcome !");
  }else{
    console.log("Wrong Password.");
  }
}else{
  console.log("Wrong User Name.");
}