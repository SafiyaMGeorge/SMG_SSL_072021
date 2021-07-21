
class Grader
    def converter
        puts "What is you name?"
        studentName = gets
        puts studentName + "what is the title of the assignment?"
        assignment = gets
        puts "What grade did you get on assignment"
        gradeStr = gets
        studentGrades = gradeStr.to_i
        grades =["A","B","C","D","F"]
        if studentGrades >= 90
            puts studentName + " You got an " + grades[0]
        elsif studentGrades >= 80
            puts studentName + " You got an " + grades[1]
        elsif studentGrades >= 70
            puts studentName + " You got an " + grades[2]
        elsif studentGrades >= 60
            puts studentName + " You got an " + grades[3]
        else studentGrades
            puts studentName + " You got an " + grades[4]
        end
    end        
end
grade = Grader.new
grade.converter