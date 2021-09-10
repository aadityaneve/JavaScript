/* Given an array of string count the overall total number of characters */

var names = ["Aditya", "Nrupul", "Yogesh", "Venu"];

var total_char = 0;

for(var i=0;i<names.length;i++){
  var name = names[i];
  total_char += name.length;
}

console.log(total_char);