var details = {
  data: [],

  addStudent: function(name, maths, science, english){
    var student = {
      name: name,
      maths: maths,
      science: science,
      english: english,
      total: maths+science+english
    }
    this.data.push(student);
  },

  lowScore: function(){
    var lowStudent = null;
    var lowTotal = null;
    for(let i=0;i<this.data.length;i++){
      var currStudent = this.data[i];
      var total = currStudent.maths+currStudent.science+currStudent.english;
      if(lowTotal === null || total < lowTotal){
        lowStudent = currStudent;
        lowTotal = total;
      }
    }
    return lowStudent;
  },

  highScore: function(){
    var highStudent = null;
    var highTotal = null;
    for(let i=0;i<this.data.length;i++){
      var currStudent = this.data[i];
      var total = currStudent.maths+currStudent.science+currStudent.english;
      if(highTotal === null || total > highTotal){
        highStudent = currStudent;
        highTotal = total;
      }
    }
    return highStudent;
  }
}


details.addStudent("Aditya", 99, 88, 99);
details.addStudent("Chiku", 9, 8, 9);
details.addStudent("Ronit", 89, 50, 70);
//console.log(details.data);
console.log(details.lowScore());
console.log(details.highScore());