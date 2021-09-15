/* Problem
Given an array of strings print the length of each string

Submission Image/Video Instructions
Screenshot of the output for the array ["apple", "windows", "ubuntu"] */

var array = ["apple", "windows", "ubuntu"];

array.forEach(function (element) {
    console.log(`${element} length is : ${element.length}`);
});