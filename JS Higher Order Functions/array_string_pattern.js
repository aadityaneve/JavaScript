/* Problem
Given an array of string generate an array whose first or last character is a
Sample Input - ["assignment", "problem", "media", "upload"]
Sample Output - ["assignment", "media"]
Submission Image/Video Instructions
Screenshot of the output for the array ["apple", "windows", "ubuntu", "cola", "system"] */

var array = ["apple", "windows", "ubuntu", "cola", "system"];

var firstOrLastCharacterA = function (element) {
    if(element[0] == 'a' || element[element.length-1] == 'a'){
        return true;
    }
}

var newArray = array.filter(firstOrLastCharacterA);

console.log("Answer : ",newArray);