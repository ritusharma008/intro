var studentNS;
(function (studentNS) {
    var student = /** @class */ (function () {
        function student(fullName, passPort) {
            this.fullName = fullName;
            this.passPort = passPort;
        }
        student.prototype.displayDetails = function () {
            console.log("name: ".concat(this.fullName, " | passport: ").concat(this.passPort));
        };
        return student;
    }());
    studentNS.student = student;
})(studentNS || (studentNS = {}));
