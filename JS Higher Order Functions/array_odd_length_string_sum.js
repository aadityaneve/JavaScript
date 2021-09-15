/* Problem
Given an array of strings print the sum of lengths if the characters in the string are odd
Sample Input - ["A", "Good", "Problem"]
Sample Output - 8
Submission Image/Video Instructions
Screenshot of the output for the array ["Apple", "Windows", "Linux", "Kindle", "Quiz"] */

var array = ["Apple", "Windows", "Linux", "Kindle", "Quiz"];

var lengthOfOddString = function (accumulator, element) {
    if (element.length % 2 != 0) {
        // console.log(accumulator + element.length);
        return accumulator + element.length;
    }else{
        return accumulator;
    }
}

console.log("Sum of length of odd string : ",array.reduce(lengthOfOddString, 0));