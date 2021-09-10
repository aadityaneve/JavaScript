/* Given an array find the unique items in the array */

var items = ["A", "D", "B", "C", "A", "D", "F"];
var details = {};

for (let i = 0; i < items.length; i++) {
  details[items[i]] = "s";
}

console.log(Object.keys(details));









/* Logic 1
var unique = [];
for(let i=0;i<items.length;i++){
  var c = 0;
  for(let j=0;j<unique.length;j++){
    if(items[i] == unique[j]){
      c++;
    }
  }
  if(c == 0){
    unique.push(items[i]);
  }
}

console.log(unique);

 */