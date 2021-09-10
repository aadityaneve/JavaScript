/* Problem
Store the name, school, grade, section, rollno and the marks scored by the student in 3 subjects
Print the report card of the student (You can make it look nice by using some keyboard symbols )
Explore ASCII ART (https://en.wikipedia.org/wiki/ASCII_art) or Text Art (https://fsymbols.com/text-art/) for some inspiration
*/

var name = "Aditya Neve";
var school = "ST. Teresa Convent School";
var grade = "A";
var section = "B";
var rollNo = "21";
var physicsMarks = "80";
var chemistryMarks = "70";
var mathsMarks = "75";

console.log("- - - - - - - - - - - - - - - - - - - - - - - - -");
console.log(school);
console.log("- - - - - - - - - - - - - - - - - - - - - - - - -");

console.log("Name: "+name+"\t"+"Roll No.: "+rollNo+"\t"+"Section: "+section);
console.log("Grade: "+grade);

console.log("Subjects Marks:-");
console.log("\t"+"Physics"+"\t"+"Chemistry"+"\t"+"Maths");
console.log("\t"+physicsMarks+"\t\t\t"+chemistryMarks+"\t\t"+mathsMarks);
console.log("- - - - - - - - - - - - - - - - - - - - - - - - -");