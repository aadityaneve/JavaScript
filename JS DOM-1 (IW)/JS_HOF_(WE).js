var numbers = [1, 2, 3, 4, 5, 6, 7];


// Problem-1
// Given an array of numbers print the square of those numbers
console.log("Squares : ");
numbers.forEach(function (element) {
    console.log("Square of " + element + " is " + (element * element));
})


// Problem-2
// Given an array of numbers generate an array containing the double value of the numbers
console.log("Doubles : ");
function double(element) {
    return element * 2;
}

var doubleNumbers = numbers.map(double);
console.log(doubleNumbers);


// Problem-3
// Given an array of numbers extract the numbers which are odd
console.log("Odd Elements : ");
var isOdd = function (element) {
    return element % 2 != 0;
}

var oddNumbers = numbers.filter(isOdd);
console.log(oddNumbers);


// isEven function
var isEven = function (element) {
    return element % 2 == 0;
}


// Problem-4
// Given an array of numbers print the product of all numbers
console.log("Product of all elements : ");
var product = function (accumulator, element) {
    return accumulator * element;
}

var numProduct = numbers.reduce(product);
console.log(numProduct);


// Problem-5
// Given an array of numbers find the sum of odd elements
console.log("Sum of odd elements : ");
var sum = function (accumulator, element) {
    return accumulator + element;
}

var evenNumSum = numbers.filter(isEven).reduce(sum);
console.log(evenNumSum);


// Problem-6
// Given an array of numbers find the sum of cubes if the number is divisible by 3
console.log("Sum of cubes : ");
var multipleOfThree = function (element) {
    return element % 3 == 0;
}

var cube = function (element) {
    return element ** 3;
}

var m3CubSum = numbers.filter(multipleOfThree).map(cube).reduce(sum);
console.log(m3CubSum);