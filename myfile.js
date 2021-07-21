const readline = require("readline");
const rl =readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

class Grader{
    converter(){
        rl.question("What is your name?",(studentName)=>{
            rl.question("What is the title of the assignment?",(assignmentGrade)=>{
                rl.question("what grade did you get?", (studentGrades)=>{
                    grades=["A","B","C","D","F"]
                    if (studentGrades >= 90){
                        console.log(studentName + " you got an " + grades[0])
                    }
                    else if (studentGrades >= 80){
                        console.log(studentName + " you got an " + grades[1])
                    }
                    else if (studentGrades >= 70){
                        console.log(studentName + " you got an " + grades[2])
                    }
                    else if (studentGrades >= 60){
                        console.log(studentName + " you got an " + grades[3])
                    }
                    else{
                        console.log(studentName + " you got an " + grades[4])
                    }
                    rl.close()
                })
            })
    })
    }
}
grade = new Grader();
grade.converter();