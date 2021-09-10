/* Given a list of user data with name and skill, create key-value pairs from the input as mentioned below
From the generated data, print the users who have the desired skill */

var employee = {
  data: {
      Nrupul: [],
      Prateek: [],
      Aman: [],
      Albert: []
    },

  getNames: function(skill){

    var count = 0;
    for(keys in this.data){
      count++;
    }

    for(key in this.data){
        for(let j=0;j<this.data[key].length;j++){
          if(this.data[key][j] == skill){
            console.log(key);
            break;
          }
        }        
    }
  }
}
employee.data.Nrupul.push("cmd");
employee.data.Prateek.push("js");
employee.data.Aman.push("ds");
employee.data.Nrupul.push("python");
employee.data.Albert.push("js");
employee.data.Albert.push("react");
employee.data.Aman.push("algo");
employee.data.Prateek.push("html");
employee.data.Nrupul.push("sql");

employee.getNames("js");

//console.log(employee.data.length);


//console.log(employee.data);
// console.log(Object.keys(employee.data)[0]);

// console.log(Object.values(employee.data.Nrupul).length)