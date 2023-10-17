// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: 1 STEP :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
/**
 * 1
 *
 * The IBuilder interface declares product construction steps that are common to all types
 * of builders.
 *
 * The builder interface defines all possible construction steps, and concrete builders implement these steps to
 * construct particular representations of the product.
 */

interface IBuilder {
  producePartA(): void;
  producePartB(): void;
  producePartC(): void;
}
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: 1 STEP :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: 2 STEP :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/**
 *  2
 *
 *  Concrete Builders provide different implementations of the construction steps.
 *  Concrete builders may produce products that don't follow the common interface.
 *
 *  The concrete builders classes follow the builder interface and provide specific implementations of
 *  the building steps. Your program MAY HAVE several VARIATIONS of builders, implemented differently.
 */
class ConcreteBuilder1 implements IBuilder {
  private product: Product1;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.product = new Product1();
  }

  public producePartA(): void {
    this.product.parts.push("Part1");
  }

  public producePartB(): void {
    this.product.parts.push("Part2");
  }

  public producePartC(): void {
    this.product.parts.push("Part3");
  }

  /**
   * Concrete Builders are supposed to provide their own methods for retrieving results. That's because
   * various types of builders may create entirely different products that don't follow the same interface.
   *
   * In other words, you don't know the return type for such method
   *
   *
   * Usaully after returning the end result to the client, a builder instance is expected to be ready to start
   * producing antoher product. That's why it's usual practice to call the reset method at the end of the `getProduct`
   * body. However this behavior is not mandatory, and can make your vuilders wait for an explicit reset call
   * from the client code before disposing of the previous result.
   */
  public get result(): Product1 {
    const result = this.product;
    this.reset();
    return result;
  }
}

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: 2 STEP :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: 3 STEP :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/**
 * 3
 *
 * Products are resulting objects. Products constructed by different builders don't have to belong to the same class hierarchy or interface.
 *
 * It makes sense to use the Builder pattern only when your prodcuts are quite complex and require extensive configuration.
 *
 * Unlike in other creational patterns, different concrete builders can produce unrelated products. in other words, result
 * of various builders may note always follow the same interface.
 */
class Product1 {
  public parts: string[] = [];

  public listParts(): void {
    console.log(`Product parts: {${this.parts.join(", ")}}\n`);
  }
}

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: 3 STEP :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: 4 STEP :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/**
 * 4
 *
 * The Director class defines the order in which to call constructions steps, so you can create and reuse
 * specific configurations of products.
 *
 * The Director is only responsible fir executing the building steps in a particualr sequence. It is helpful
 * when producing products according to a specific order or configuration. Strictly speaking, the director class is optional,
 * since the client can control builders directly.
 */
class Director {
  private builder: IBuilder;

  /**
   * The director works with any builder instance that the client passes to it. this way, the client code may
   * alter the final type of the newly assembled product.
   */
  public setBuilder(builder: IBuilder): void {
    this.builder = builder;
  }

  /**
   *  The Director can construct several product variations using the same building steps.
   */
  public buildMinimalViableProduct(): void {
    this.builder.producePartA();
  }

  public buildFullFeaturedProduct(): void {
    this.builder.producePartA();
    this.builder.producePartB();
    this.builder.producePartC();
  }
}

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: 4 STEP :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: 5 STEP :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
/**
 * The Client must associate one of the builder objects with the director. Usually, it's
 * done just once, via parameters of the director's constructor.
 *
 * then the director uses that builder object for all further construction. However, there's an alternative
 * approach for when the client passes the builder object to the production method of the director. in this case, you can use a different builder
 * each time you produce something with the director.
 */
function clientCode(director: Director) {
  const builder = new ConcreteBuilder1();
  director.setBuilder(builder);

  console.log("Standard Basic Product: ");
  director.buildMinimalViableProduct();
  builder.result.listParts();

  console.log("Standard Full featured product: ");
  director.buildFullFeaturedProduct();
  builder.result.listParts();
}

export const builderPattern = clientCode(new Director());
