import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class User implements Mappable{
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red';

  constructor() {
    this.name = faker.person.firstName();
    this.location  = {
        lat: faker.location.latitude(),
        lng: faker.location.longitude()
    }
  }

  public markerContent(): string{
    return`<h1>User name is: ${this.name}</h1>`;
  } 

}


interface IUser<T, U> {
  name: T,
  age?: U
}

const jacob: IUser<string, number> = {
    name: 'jacob', age: 123
}

const megan: IUser<object, number[]> = {
    name: {key: 'value'}, age: [1,2]
}

console.log(jacob, megan);