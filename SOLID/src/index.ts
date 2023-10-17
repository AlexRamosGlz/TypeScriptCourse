import { app, app2 } from "./DependencyInversion";
import { newEmployee } from "./SingleResponsabilityPrinciple";
import {
  groundShipping,
  airShipping,
  boatShipping,
} from "./OpenClosePrinciple";
//import { p } from "./LiskovSubstitutionPrinciple";
import {
  ConcreteCreateor1,
  ConcreteCreateor2,
  clientCode,
  clientCodee,
  SeaLogistics,
  RoadLogistics,
  SkyLogistics,
} from "./creationalPatterns/FactoryMethod";
import {
  Application,
  WindowsFactory,
  appConfig,
  MacFactory,
} from "./creationalPatterns/AbstractFactory";
import { builderPattern } from "./creationalPatterns/Builder";

// console.log(app.get('12345234'));
// console.log(app2.get('12345234'));

// newEmployee.payEmployee();
// newEmployee.printTimeSheetReport();

// airShipping.getShippingCost();
// groundShipping.getShippingCost();
// boatShipping.getShippingCost();

// p.openAll();
// p.saveAll();

// clientCode(new ConcreteCreateor1());
// const response = clientCodee(new SeaLogistics("someId123"));
// console.log(response);

// console.log(clientCodee(new RoadLogistics("id123410a8sda")));
// console.log(clientCodee(new SkyLogistics("12341aspdap324")));

appConfig('windows');
appConfig('mac')
builderPattern