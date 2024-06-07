var studentName = "Asma umair";
document.write(studentName + "<br>");
var subjects = "eng urdu math";
document.write(`Subjects: ${subjects} `+ "<br>");

var totalMarks = 300
var eng = 80;
var urdu = 72;
var math = 88;
var marks = eng + urdu + math;
document.write( `Total marks: ${totalMarks}` + "<br>" + "<br>");
document.write(`Your marks: ${marks}`+ "<br>");
var result = marks / totalMarks * 100;
document.write( ` ${result} %` + "<br>")
var grade;
if (result >= 90) {
    grade = "A+";
}
else if (result >= 80) {
    grade = "'A'";
}
else if (result >= 70) {
    grade = "B"
}
else if (result >= 60) {
    grade = "C"
} else if (result >= 50) {
    grade = "Fail"
}
document.write(`🚀Congratulations, ${studentName} your percentage is,  ${result}%  your Grade is 😍 ${grade}`);


