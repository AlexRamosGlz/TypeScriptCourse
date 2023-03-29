// Interface → create a new type, describing the property names and values of an object

//fixing long type annotation
const vehicle = {
  name: "civic",
  year: 2000,
  broken: true,
  summary(): string {
    return `name: ${this.name}\nyear: ${this.year}\nbroken: ${this.broken}`;
  },
};

interface IVehicule {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

// function printVehicule({
//   name,
//   year,
//   broken,
// }: {
//   name: string;
//   year: number;
//   broken: boolean;
// }) {
//   console.log(`name: ${name}\nyear: ${year}\nbroken: ${broken}`);
// }

//short type annoation
function logVehicule(vehicule: IVehicule): void {
  const { summary }: IVehicule = vehicule;

  console.log(summary);
}

logVehicule(vehicle);
