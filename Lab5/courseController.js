var courseController = {
    courses: [],

    age: 0,

    addCourse(code,name){
         this.courses.push({code:code, name:name});
    },
    getCourse(index){
        return this.courses[index];
    },

    getCourseCount(){
        return this.courses.length;
    }
        
    
};
module.exports = courseController;