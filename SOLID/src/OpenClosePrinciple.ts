// ::::::::::::::::::::::::::::::::::::::::::::::::::: NOT FOLLOWING OPEN/CLOSE PRINCIPLE :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// say we have a Order class thats take care of the orders of an ecomerce, calculates shipping costs and all shipping costs and all shippgin methods are hard coded
class BadOrder {
  private order: any;

  constructor(private shipping: string) {}

  public getTotal(): number {
    return 200;
  }

  public getTotalWeight(): void {}

  public setShippingType(shipping: any): void {}

  // so we have 2 case scenarios ready to use, but what happens if another shipping method is added in the future say a boat now is aveilable for shipping,
  //then a new case scenario must be added to fulfill it.
  public getShippingCost(): number {
    if (this.shipping === "ground") {
      return 50;
    }

    if (this.shipping === "air") {
      return 100;
    }

    // this new shipping method makes the class bigger and therefore may cuase bugs or even break it completly
    if (this.shipping === "boat") {
      return 200;
    }

    //and so on.....

    return 0;
  }
}
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// ::::::::::::::::::::::::::::::::::::::::::::::::::: FOLLOWING OPEN/CLOSE PRINCIPLE :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// You can solve the problem by applying the STRATEGY pattern...

// start by extracting shipping methods into separate classes with a common interface
interface IShipping {
  getCost(order: any): number;
  getDate(order: any): Date;
}

class Order {
  private order: any;

  //   now when you need to implement a new shipping method, you can derive a new calss from the shipping interface withotuh touching any of the Order class code.
  constructor(private shipping: IShipping) {}

  public getTotal(): number {
    return 50;
  }

  public getTotalWeight(): void {}

  public setShippingType(shipping: any): void {}

  public getShippingCost(): void {
    console.log(this.shipping.getCost(this));
  }

  public getShippingDate(): void {
    console.log(this.shipping.getDate(this.order));
  }
}

class Ground implements IShipping {
  getCost(order: any): number {
    if (order.getTotal() > 100) {
      return 0;
    }

    return 10;
  }

  getDate(order: any): Date {
    return new Date();
  }
}

class Air implements IShipping {
  getCost(order: any): number {
    return 50;
  }

  getDate(order: any): Date {
    return new Date();
  }
}

class Boat implements IShipping {
  getCost(order: any): number {
    if (order.getTotal() > 50) return 0;

    return 25;
  }

  getDate(order: any): Date {
    return new Date();
  }
}

export const airShipping = new Order(new Air());
export const groundShipping = new Order(new Ground());
export const boatShipping = new Order(new Boat());