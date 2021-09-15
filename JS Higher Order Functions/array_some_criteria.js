/* Problem
Given an array of numbers, return the elements that have even index (starting the count at 0) and are even
Use Higher-order functions
Sample Input - [2, 4, 5, 3, 6, 8]
Sample Output - [2, 6] */

var array = [2, 4, 5, 3, 6, 8];

var evenIndex = array.filter(function (element, index) {
    // console.log(element);
    if (index % 2 == 0 && index != 0) {
        return true;
    }
});

console.log("Even index elements : ",evenIndex);