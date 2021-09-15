/* Problem
Given an array of string generate an array with their first characters

Sample Input - ["Masai", "School"]

Sample Output - ["M", "S"]

Screenshot of the output for the array ["apple", "windows", "ubuntu"] */


var array = ["apple", "windows", "ubuntu"];

var getFirstCharacter = function (string){
    console.log(string[0]);
}

array.forEach(getFirstCharacter);