import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollections";
import { LinkedList } from "./LinkedList";

const numCollection = new NumbersCollection([10, 3, -5, 0]);
numCollection.sort();
console.log(numCollection.data);

const charCollection = new CharactersCollection('string');
charCollection.sort();
console.log(charCollection.data);

const linkedList = new LinkedList();
linkedList.add(-1023);
linkedList.add(2);
linkedList.add(10);
linkedList.add(3);
linkedList.sort();
linkedList.print();


