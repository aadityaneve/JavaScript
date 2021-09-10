/* Given a string print the number of times each character appears */

var name = "aditya";
var details = {};

for (let i = 0; i < name.length; i++) {
  var char = name[i];
  if (details[char] === undefined) {
    details[char] = 1;
  } else {
    var prev = details[char];
    details[char] = prev + 1;
  }
}

for (key in details) {
  console.log(key + " : " + details[key]);
}