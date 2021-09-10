/* Problem
  Create an object with a key called the radius
  The object must have 2 methods, perimeter, and area that returns the respective values for the given radius 
*/


var circle = {
  
  radius: [],
  perimeter: function(){
    return 2*3.14*this.radius[0];
  },
  area: function(){
    return 3.14*this.radius[0]*this.radius[0];
  }
};


circle.radius[0] = 5;
//console.log(circle.radius[0]);
console.log(circle.perimeter());


