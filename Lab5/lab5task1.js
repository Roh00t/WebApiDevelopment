// var person = require("./person.js");
var courseController = require("./courseController.js");

// person.setName("David");
// console.log(person.getName());
// person.setAge(40);
// console.log(person.getAge());

courseController.addCourse("Programming","EG1234");
courseController.addCourse("Programming","EG1234");
courseController.addCourse("Programming","EG1234");
console.log(courseController.getCourse(1));
console.log(courseController.getCourseCount());