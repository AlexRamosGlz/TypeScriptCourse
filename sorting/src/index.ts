import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollections";

const numCollection = new NumbersCollection([10, 3, -5, 0]);
const charactersCollection = new CharactersCollection('Astring');
const sort = new Sorter(charactersCollection);

sort.sort();
console.log(charactersCollection.data);
