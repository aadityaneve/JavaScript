/* Problem
    Given any character, if it is a vowel print "Vowel"
    Given and character if it is a consonant print "Consonant"
*/

// Problem_2 Logic_1
var char = "z";
if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
    console.log("Vowel");
}else{
    console.log("Consonant");
}

// Problem_2 Logic_2
switch(char){
    case "a":   console.log("Vowel");
        break;
    case "e":   console.log("Vowel");
        break;
    case "i":   console.log("Vowel");
        break;
    case "o":   console.log("Vowel");
        break;
    case "u":   console.log("Vowel");
        break;
    default:    console.log("Consonant");
        break;
}