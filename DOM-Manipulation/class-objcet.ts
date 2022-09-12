class person{
    //class properties
    protected empCode: number
    protected empName: string
    constructor(code:number,name:string) {
        console.log('constructor called');
        this.empCode = code;
        this.empName = name;
    }

        //class methods
    // disDetails():void {
    //     console.log(`code ${this.empCode} name ${this.empName}`);
    // }
    disDetails =():void => console.log(`code ${this.empCode} name ${this.empName}`);  //method is public by default
}
// let emp1 = new person(101,'ritu');
// // emp1.empCode = 102;    //for change code. use of private in class then it will not access here
// emp1.disDetails();

//access modifiers
// public ,
// private = access inside the clss
//  ,protected = can access inside or inheritefd class

class employee extends person {
    private empSal:number;
    constructor(code:number,name:string,salary:number) {
        super(code,name);
        this.empSal = salary;
    }
    disSalary(): void {
        super.disDetails;
        console.log(`salary: ${this.empSal}`);
    }
}
let employee1 = new employee(103,'sharma',50000);
employee1.disSalary();
employee1.disDetails();


