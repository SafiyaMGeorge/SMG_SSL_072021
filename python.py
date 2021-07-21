import sys
class Grader():
    def converter(self):
        grades = ["A","B","C","D","F"]
        studentName = raw_input("Hello, what is your name?")
        assignment = raw_input("Hi " + studentName + ", what is the title of the assignment?")
        assignmentGrade= raw_input(studentName + " what grade did you get?")
        if assignmentGrade >90:
            print(studentName+" you got an " + grades[0])
        elif assignmentGrade >=80:
            print(studentName+" you got an " + grades[1])
        elif assignmentGrade >= 70:
            print(studentName+" you got an " + grades[2])
        elif assignmentGrade >= 60:
            print(studentName+" you got an " + grades[3])
        else:
            print(studentName+" you got an " + grades[4])

grade = Grader()
grade.converter()