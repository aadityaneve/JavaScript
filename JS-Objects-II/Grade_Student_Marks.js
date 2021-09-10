/* Given an object of student grades and their marks in the mentioned below format, print the highest scored student for each grade along with the total */


var object = {

  data: [],

  addStudentSection: function(userGrade, userName, userMarks){

    var student = {
      grade: userGrade,
      students: [],
      getGrade: function(){
        return this.grade;
      },
      getStudentName: function(index){
        return this.students[index].name;
      },
      getTotalMarks: function(index){
        return (
          this.students[index].marks[0]
          + this.students[index].marks[1]
          + this.students[index].marks[2]
        );
      }
    }

    if(this.data.length == 0){
      this.data.push(student);
      this.data[0].students.push({ name: userName, marks: userMarks});
    }else{
      if(this.data.length > 0){
        for(let i=0;i<this.data.length;i++){
          flag = 0;
          if(this.data[i].grade == userGrade){
            this.data[i].students.push({ name: userName, marks: userMarks});
            flag = 1;
            break;
          }
        }      
      }

      if(flag == 0){
        let index = this.data.length;
        this.data.push(student);
        this.data[index].students.push({ name: userName, marks: userMarks });
      }
    }    
  },


  printHighestStudentGrade: function(){
    
    for(let i=0;i<this.data.length;i++){      
      if(this.data[i].getTotalMarks(0) > this.data[i].getTotalMarks(1)){
        console.log(this.data[i].getGrade+"-"+this.data[i].getStudentName(0)+"-"+this.data[i].getTotalMarks(0));
      }else{
        console.log(this.data[i].getGrade()+"-"+this.data[i].getStudentName(1)+"-"+this.data[i].getTotalMarks(1));
      }
    }
  }
}

object.addStudentSection("V","Nrupul",[10, 20, 30]);
object.addStudentSection("V","Prateek",[20, 30, 40]);

object.addStudentSection("VI","Aman",[10, 20, 30]);
object.addStudentSection("VI","Albert",[20, 30, 40]);

object.addStudentSection("VII","Yogesh",[10, 20, 30]);
object.addStudentSection("VII","Sandhya",[20, 30, 40]);

object.printHighestStudentGrade();
