/* 
  Create an Object that has the name and gender (M/F) of the users in an array with the key called data
  Create a method for that object with takes the gender as a parameter and returns the no of users for the provided gender 
*/


var usergender = {

  data: [],

  setNameGender: function(name, gender){
    this.data.push({ name: name, gender: gender });
  },

  getGenderWiseNames: function(gender){
    var allNames = "";
    for(let i=0;i<this.data.length;i++){
      if(this.data[i].gender == gender){
        allNames+=this.data[i].name+" "+this.data[i].gender+"\n";
      }
    }
    return allNames;
  }
};

usergender.setNameGender("Aditya","M");
usergender.setNameGender("Ronit","M");
usergender.setNameGender("Shreya","F");
usergender.setNameGender("Swati","F");
usergender.setNameGender("Rushi","M");
usergender.setNameGender("Aditi","F");
//console.log(usergender.data);
console.log(usergender.getGenderWiseNames("M"));
console.log("----------");
console.log(usergender.getGenderWiseNames("F"));