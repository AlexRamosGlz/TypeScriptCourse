// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: 1 STEP ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
/**
 *  1
 *
 *  Abstract Products declare interfaces for a set of distinct but
 *  related products which make up a product family.
 *
 *  Each distinct product if a product family should have a base interface.
 *  all variants of the product must implement this interface.
 */
interface IAbstractProductA {
  usefulFunctionA(): string;
}

/**
 *  Here's the base interface of another product.
 *
 *  All products can interact with each other, BUT PROPER INTERACTION is possible ONLY between Products of THE SAME VARIANT
 *
 */
interface IAbstractProductB {
  // Product B is able to do its own thing...
  usefulFunctionB(): string;

  /**
   * ...but it also can collaborate with the Product A.
   *
   *  The Abstract Factory makes sure that all the products it creates are of the same variant and thus, compatible.
   */
  antoherUsefulFunction(collaborator: IAbstractProductA): string;
}

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: 1 STEP ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: 2 STEP ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/**
 *  2
 *
 *  Concrete products are various implementations of abstract products, grouped by variants.
 *
 *  Each abstract product (IAbstractProductA, IAbstractProductB) must be implemented in all given variants (ConcreteProductA1, ConcreteProductA2, ...)
 */

// These Concrete Products are created by corresponding Concrete Factories.
class ConcreteProductA1 implements IAbstractProductA {
  public usefulFunctionA(): string {
    return "The result of product A1";
  }
}

class ConcreteProductA2 implements IAbstractProductA {
  public usefulFunctionA(): string {
    return "The result of the product A2";
  }
}

// These Concrete Products are created by corresponding Concrete Factories.
class ConcreteProductB1 implements IAbstractProductB {
  public usefulFunctionB(): string {
    return "The result of the product B1";
  }

  /**
   * The variant, Product B1, is ONLY able to work correctly with the variant, Product A1. Nervertheless, it
   * accepts any instance of AbstractProductA as an argument
   */
  public antoherUsefulFunction(collaborator: IAbstractProductA): string {
    const result = collaborator.usefulFunctionA();

    return `the Result of the B1 collaborating with the (${result})`;
  }
}

class ConcreteProductB2 implements IAbstractProductB {
  public usefulFunctionB(): string {
    return "The result of product B2";
  }

  /**
   * The variant, Product B2, is only able to work correctly with the variant,
   * Product A2. Nevertheless, it accepts any instance of AbstractProductA as
   * an argument.
   */
  public antoherUsefulFunction(collaborator: IAbstractProductA): string {
    const result = collaborator.usefulFunctionA();

    return `The result of B2 collaborating with the (${result})`;
  }
}

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: 2 STEP ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: 3 STEP ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
/**
 * 3
 *
 * The Abstract Factory intercae declares a set of methods that return different abstract products.
 *
 * These products are called a family and are related by a high-level theme or concept. Products of one family
 * are USUALLY ABLE to collaborate among themselves. A family of products may have several variants, but the product of
 * one variant are incompatible with products of another.
 */
interface IAbstractFactory {
  createProductA(): IAbstractProductA;

  createProductB(): IAbstractProductB;
}

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: 3 STEP ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: 4 STEP ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
/**
 *  4
 *
 *  Concrete factories implements creation methods of the abstract factory. Each concrete factory correspond to a
 *  specific variant of products and creates only those product variants.
 *
 *  The factory guarantees that resultign products are compatible. Note that signatures of the Concrete Factory's methods return an abstract product,
 * while inside the method a concrete product is instantiated.
 */
class ConcreteFactory1 implements IAbstractFactory {
  public createProductA(): IAbstractProductA {
    return new ConcreteProductA1();
  }

  public createProductB(): IAbstractProductB {
    return new ConcreteProductB1();
  }
}

/**
 * Each Concrete Factory has a corresponding product variant.
 */
class ConcreteFactory2 implements IAbstractFactory {
  public createProductA(): IAbstractProductA {
    return new ConcreteProductA2();
  }

  public createProductB(): IAbstractProductB {
    return new ConcreteProductB2();
  }
}

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: 4 STEP ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: 5 STEP ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/**
 * Altough concrete factories instantiate concrete products, signatures of ther creation methods must return corresponding abstract products,
 * this way the client code that uses a factory DOESN'T  get coupled to the specific variant of the product it get from a factory.
 *
 * The client can work work with any concrete factory/product variant, as long as it communicates with their objects via abstracts interfaces.
 */
export function clientCode(factory: IAbstractFactory) {
  const productA = factory.createProductA();
  const productB = factory.createProductB();

  console.log(productB.usefulFunctionB());
  console.log(productB.antoherUsefulFunction(productA));
}

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: 5 STEP ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: EXAMPLE ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// Abstract Products

interface IButton {
  render(): string;
}

interface ICheckbox {
  render(): string;
}

// Concrete Products

/**
 *  Windows Family
 */
class WindowsButton implements IButton {
  public render(): string {
    return "Windows button rendered";
  }
}

class WindowsCheckbox implements ICheckbox {
  public render(): string {
    return "Windows Checkbox rendered";
  }
}

/**
 *  Mac Family
 */
class MacButton implements IButton {
  public render(): string {
    return "Mac button rendered";
  }
}

class MacCheckbox implements ICheckbox {
  public render(): string {
    return "Mac Checkbox rendered";
  }
}

// Abstract Factory

abstract class GUIFactory {
  public abstract createButton(): IButton;

  public abstract createCheckbox(): ICheckbox;
}

// Concrete Factory
export class WindowsFactory implements GUIFactory {
  public createButton(): IButton {
    return new WindowsButton();
  }

  public createCheckbox(): ICheckbox {
    return new WindowsCheckbox();
  }
}

export class MacFactory implements GUIFactory {
  public createCheckbox(): ICheckbox {
    return new MacCheckbox();
  }

  public createButton(): IButton {
    return new MacButton();
  }
}

export class Application {
  private button: IButton;
  private checkbox: ICheckbox;

  constructor(private factory: GUIFactory) {
    this.createUI();
  }

  public createUI(): void {
    this.button = this.factory.createButton();
    this.checkbox = this.factory.createCheckbox();
  }

  public renderButton(): string {
    return this.button.render();
  }

  public renderCheckbox(): string {
    return this.checkbox.render();
  }
}

export function appConfig(OS: string): void {
  let app: Application;
  if (OS === "windows") {
    app = new Application(new WindowsFactory());
    console.log(app.renderButton());
    console.log(app.renderCheckbox());
  }
  if (OS === "mac") {
    app = new Application(new MacFactory());
    console.log(app.renderButton());
    console.log(app.renderCheckbox());
  }
}

export const windowsApp = appConfig;
