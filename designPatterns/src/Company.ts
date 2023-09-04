import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  color: string = 'blue';

  // This DOES NOT initilice the location propertie it just tells typescipt that location is an Object and it will have this properties
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();

    //now this is how we intitialice it
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }

  public markerContent(): string {
    return `
        <div>
        <h1>Company name is: ${this.companyName}</h1>
        <h3 style="font-style: italic">"${this.catchPhrase}"</h3>
        </div>`;
  }
}
