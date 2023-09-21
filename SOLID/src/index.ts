import { app, app2 } from "./DependencyInversion";
import { newEmployee } from "./SingleResponsabilityPrinciple";
import { groundShipping, airShipping, boatShipping } from "./OpenClosePrinciple";

console.log(app.get('12345234')); 
console.log(app2.get('12345234'));

newEmployee.payEmployee();
newEmployee.printTimeSheetReport();

airShipping.getShippingCost();
groundShipping.getShippingCost();
boatShipping.getShippingCost();