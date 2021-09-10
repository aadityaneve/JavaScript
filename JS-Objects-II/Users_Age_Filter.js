/* Given a list of user data with name and age, create a list of key-value pairs from the input
From the generated data, print the users whose age is more than 30
 */

var details = {
  data: [],

  addUser: function(name, age){
    var student = {
      name: name,
      age: age
    }
    this.data.push(student);
  },

  userAge: function(userAge){
    var age = null;
    for(let i=0;i<this.data.length;i++){
      if(this.data[i].age > userAge){
        console.log(this.data[i].name+" - "+this.data[i].age);
      }
    }
  }
};

details.addUser("Aditya", 25);
details.addUser("Chiku", 18);
details.addUser("Satish", 45);
details.addUser("Ravi", 48);
details.addUser("Dipak", 55);
details.addUser("Pradip", 57);

details.userAge(30);