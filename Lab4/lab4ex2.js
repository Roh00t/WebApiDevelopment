

 var student = {
     "name": 'jason',
     "results":[
        {
        'moduleCode': "EG1234",
        'moduleGrade': "A",
        'moduleCredit': 4
        },

        {
            'moduleCode':"EG1298",
            'moduleGrade': "B+",
            'moduleCredit' : 4
        },

        {
            'moduleCode': "EG2255",
            'moduleGrade': "C",
            'moduleCredit': 2
        }

    ]
    
 }
  
var gradeToPoint = {
    "A" : 4.0,
    "B+" : 3.5,
    "B" : 3.0,
    "C+" : 2.5,
    "C" : 2.0,
    "D+" : 1.5,
    "D" : 1.0,
    "F" : 0.5
}

function calculateGPA() {
    var totalCredit = 0;
    var totalGradePoint = 0;
    student.results.forEach(function(result){
        console.log(result);


        var grade = result.Grade;
        var credit = result.Credit;
        totalCredit+=credit;
        var point = gradeToPoint[grade];
        totalGradePoint+=point*credit;
    })


    // for(var i in student.results){
    //     var result = student.results[i];
    // }
    var gpa = totalGradePoint/totalCredit;
    console.log("GPA for " +student.name+" is"+ gpa);
    }

    calculateGPA();
    