namespace TeacherNS {
    export interface TeacherInt {
        fullname:string;
        subject:string[];
    }
    export class Teacher implements TeacherInt {
        fullname: string;
        subject:string[];
        constructor(public fn:string , public sub:string[]) {
            this.fullname = fn;
            this.subject = sub;
        }
    }
    }