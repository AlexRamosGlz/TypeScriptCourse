class Vehicle {
  color: string;

  public drive(): void {
    console.log("chugga chugga");
  }

  constructor(color: string) {
    this.color = color;
  }

  public honk(): void {
    console.log("honk honk");
  }
}

interface ICar {
  brand: string;
}

class Car extends Vehicle {
  // one way to safe some boilerplate code is to simple add an acces modifier before the parameter name in the constructor
  //with this, a few lines of code are saved and it look cleaner
  constructor(color: string, public brand: string) {
    super(color);
  }

  // for overwriting a parent method, simply just change the logic inside of it
  public drive(): void {
    console.log("vroooommm");
  }

  //private methods or filed are only available inside the class
  private somePrivateMethod(): void {}

  //protected methods or fields are available inside the class and its subclasses
  protected someProtectedMethod(): void {}

  public summary(): void {
    console.log(`${this.brand} color ${this.color}`);
    this.somePrivateMethod();
  }
}

const car = new Car("blue", "ford");
car.drive();
car.summary();
