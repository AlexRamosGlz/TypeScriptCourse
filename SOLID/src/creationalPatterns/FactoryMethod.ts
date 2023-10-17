/**
 *  1 the Product declares the interface, which is common to all objects that can be
 *  produced by the creator and its subclasses
 *
 *  the IProduct interface declares all the opeartions that all concrete products must implement
 */
interface IProdcut {
  doStuff(): string;
}

/**
 *  2 Concrete products are different implementation of the Product interface
 *
 *  Concrete Products provide various implementation of the IProduct interface.
 */
class ConcreteProduct1 implements IProdcut {
  doStuff(): string {
    // Some logic goes here
    return "{Result of the concreteProduct1}";
  }
}

class ConcreteProduct2 implements IProdcut {
  doStuff(): string {
    return "{Result of the concreteProduct2}";
  }
}

/**
 * 3 The Creator class declares the factory method that returns new IProduct objects.
 * The Creator's subclasses usually provide the implementation of this method
 */
abstract class Creator {
  /**
   * Note that the Creator may aslo provide some defualt implementation of the factory method
   */
  public abstract createProduct(): IProdcut;

  /**
   * Also note that, despite its name, the creator's primary responsability is NOT creating products.
   * Usually, it contains some core bussines logic that relies on IProduct objects, returned by the factory method.
   *
   * Subclasses can inderectly change that business by overriding the factory method and returning a different tpye of product from it.
   */
  public someOperation(): string {
    // Call the factory method (createProduct()) to create a IProduct object.
    const product = this.createProduct();

    // Now, product is available to use.
    return `Creator: the same creator's worked with ${product.doStuff()}`;
  }
}

/**
 *  4 Concrete Creator override the base factory method (createProduct()) so it returns a different type of product.
 *
 *  Note that the factory method doesn't have to create a new instance all the time. It can also return existing objects from a cache, an object pool
 *  or antoher source.
 */
export class ConcreteCreateor1 extends Creator {
  /**
   *  Note that the signature of the method still uses the abstract product type, even though the concrete product is actually
   *  returned from the method. This way the Creator can stay independent of concrete product classes
   */
  public createProduct(): IProdcut {
    return new ConcreteProduct1();
  }
}

export class ConcreteCreateor2 extends Creator {
  public createProduct(): IProdcut {
    return new ConcreteProduct2();
  }
}

/**
 * The client code works with an instance of a concrete creator, albeit through its base interface.
 *
 * As long as the client keeps working with the creator via the base interface, tou can pass it any creator's subclass.
 */
export function clientCode(creator: Creator) {
  console.log(
    "Client: I'm not aware of the creator's class, but it still works."
  );
  console.log(creator.someOperation());
}

/**
 * The Application picks a creator's type depending on the configuration or enviroment.
 */
console.log(`App's launched with the concrete creator 1`);
clientCode(new ConcreteCreateor1());

console.log(`App's launched with the concrete creator 2`);
clientCode(new ConcreteCreateor2());

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: Example ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// Product interface ( all concrete prodcuts must implement all methods declared in this interface )
interface ITransport {
  deliver(orderId: string): string;
}

// Concrete Products implement the Product interface (ITransport)
class Truck implements ITransport {
  public deliver(orderId: string): string {
    return `Package with orderIrd ${orderId} has been delivered by road`;
  }
}

class Ship implements ITransport {
  public deliver(orderId: string): string {
    return `Package with orderIrd ${orderId} has been delivered by sea`;
  }
}

class Plane implements ITransport {
  public deliver(orderId: string): string {
    return `Package with orderIrd ${orderId} has been delivered by Sky`;
  }
}

export abstract class Logistics {
  constructor(protected orderId: string) {}

  public planDelivery(): string {
    const transport = this.createTransport();

    return `Logistics are thrill to announce that ${transport.deliver(
      this.orderId
    )}`;
  }

  abstract createTransport(): ITransport;
}

export class SeaLogistics extends Logistics {
  createTransport(): ITransport {
    return new Ship();
  }
}

export class RoadLogistics extends Logistics {
  createTransport(): ITransport {
    return new Truck();
  }
}

export class SkyLogistics extends Logistics {
  createTransport(): ITransport {
    return new Plane();
  }
}

export function clientCodee(logistic: Logistics): string {
  return logistic.planDelivery();
}
