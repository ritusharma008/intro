namespace studentNS {
    export interface studentInt {
        fullName:string;
        passPort:number;
        displayDetails(): void
    }
    export class student {
        constructor(public fullName:string, public passPort:number) { }
        displayDetails():void
        {
            console.log(`name: ${this.fullName} | passport: ${this.passPort}`);
        }
    }
}