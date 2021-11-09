
var mycc = {

    courses: [{name:"Course 1", code:"EG111", description:"Course 1 enables students to learn about computers", cutoff:"12"},{name:"Course 2", code:"EG222", description:"Course 2 enables students to learn about mechanical systems", cutoff:"16"},{name:"Course 3", code:"EG333", description:"Course 3 enables students to learn about land systems", cutoff:"17"}],  
    // if there are default course object items
  
    //  courses: [], // if it is an empty array
  
    addCourse: function (a,b,c,d) {  // add course with two string param inputs
      var obj = {name:a, code:b, description:c, cutoff:d};
      this.courses.push(obj);
   },
  
    addCourseObj: function (a) {  // add course using object
    this.courses.push(a);
  },
  
    getCourseAt: function(b){   // return object from index position b
        return this.courses[b];
    },
  
    getFirstCourse: function(){   // return object from first position 0
      return this.courses[0];
  },
  
    getCourseNameByCode: function(code){   // return course name using course code
      for (i=0;i<this.courses.length;i++){
         if (this.courses[i].code==code) {
            return this.courses[i].name;
         }
      }    
  },
  
    getCourseDescByCode: function(code){   // return course description using course code
      for (i=0;i<this.courses.length;i++){
         if (this.courses[i].code==code) {
            return this.courses[i].description;
         }
      }    
  },
  
    getAverageCutOff: function(){   // return average cut off points of all courses
      var sum=0;
      for (i=0;i<this.courses.length;i++){
        sum = sum + parseFloat(this.courses[i].cutoff);
      }    
      return (sum/this.courses.length); // return average cutoff points
  },
  
  
    length: function(){   // returns number of objects in the array of objects
        return this.courses.length;
    } 
  
  }
  
  module.exports = mycc;
      