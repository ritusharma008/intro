"use strict";
///<reference path="./students.ts"/>
///<reference path="./teacher.ts"/>
exports.__esModule = true;
var stu1 = new studentNS.student("Ritu Sharma", 123);
stu1.displayDetails();
var t1 = new TeacherNS.Teacher("sharma", ['html', 'css', 'js', 'ts']);
console.log("teacher name: ".concat(t1.fullname, ", subject: ").concat(t1.subject));
