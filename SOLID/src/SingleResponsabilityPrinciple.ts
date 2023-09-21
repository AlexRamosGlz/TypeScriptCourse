
// NOT using Single Responsability Principle

/** 
 *   the class take care of two different behaviors, the class may change overtime and therefore will be more dificult to maintaine (say we add hundred lines of code),
 *   this might cuase damage at long term. 
 */
class Employee {
    constructor(private name: string) {}

    public printTimeShitReport(): void {
        // prints the time sheet...
    }

    public payment(time: Date): void {
        // pays the employee
    }
}


// USING SRP

export class NewEmployee {
    public timeSheetReport: TimeSheetReport;
    private payment: Payment;
    private name: string;

    constructor(name: string, payment: Payment, timeSheetReport: TimeSheetReport){
        this.name = name;
        this.payment = payment;
        this.timeSheetReport = timeSheetReport;
    }

    public printTimeSheetReport(): void {
        // now it delegates the behavior to the implementation not caring about the code
        console.log(this.timeSheetReport.printTimeSheetReport());    
    }

    public payEmployee(): void {
        console.log(this.payment.pay());
    }
}

class TimeSheetReport {

    public printTimeSheetReport(): string {
        return 'time sheet printed';
    }

    // the future code goes here...
}

class Payment {
    
    public pay(): string {
        // pay the employee
        return 'paid';
    }

    // the future code goes here...
}

export const newEmployee = new NewEmployee('alan', new Payment(), new TimeSheetReport());


