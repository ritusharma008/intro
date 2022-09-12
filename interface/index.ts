///<reference path="./students.ts"/>
///<reference path="./teacher.ts"/>


let stu1:studentNS.studentInt = new studentNS.student("Ritu Sharma", 123);
stu1.displayDetails();


let t1 = new TeacherNS.Teacher("sharma",['html','css','js','ts']);
console.log(`teacher name: ${t1.fullname}, subject: ${t1.subject}`);

export{}