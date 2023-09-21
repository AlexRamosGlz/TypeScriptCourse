class App {
  constructor(private dbProcessor: IdbProccesor) {}

  public save(data: any) {
    this.dbProcessor.create(data);
  }

  public get(data: any): string {
    return this.dbProcessor.get(data);
  }
}

class MongoDB implements IdbProccesor {
  create(data: any): void {
    // save data to db
  }

  get(data: any): string {
    // get data from db
    return data + 'from mongoDB';
  }
}

class MysqlDB implements IdbProccesor {
  create(data: any): void {
    // save data to db
  }

  get(data: any): string {
    // get data from db
    return data + 'from mysql db';
  }
}

interface IdbProccesor {
  create(data: string): void;
  get(data: string): string;

  // update, delete....
}

export const app = new App(new MysqlDB());  
export const app2 = new App(new MongoDB());



// Another example
interface IItem {
  description: string,
  value: number;
  quantity: number;
}

interface IPaymentProccesor {
  createPayment(cart: IItem[]): void;
}

class Cart {
  private paymentProccesor: IPaymentProccesor;
  private cart: IItem[]

  constructor(paymentProccesor: IPaymentProccesor, cart: IItem[]) {
    this.cart = cart;
    this.paymentProccesor = paymentProccesor;
  }

  public pay(): void {
    this.paymentProccesor.createPayment(this.cart);
  }
}

class Openpay implements IPaymentProccesor{
  createPayment(cart: IItem[]): void {
      console.log(`the user cart: ${JSON.stringify(cart)} has been pay by Openpay payments processor`);
  }
}

class Stripe implements IPaymentProccesor {
  createPayment(cart: IItem[]): void {
      console.log(`the user cart: ${JSON.stringify(cart)} has been pay by Stripe payments processor`)
  }
}

const cart = new Cart(new Openpay(), [{description: 'Playstation 5', quantity: 1, value: 599}]);
const newCart = new Cart(new Stripe(), [{description: 'Xbox Series S', quantity: 1, value: 299}])


cart.pay();
newCart.pay();