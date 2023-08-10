import { CharactersCollection } from "./classes/CharactersCollection";
import { LinkedList } from "./classes/LinkedList";
import { NumbersCollection } from "./classes/NumbersCollection";

const chars = "HjuiiR";
const numsArr = [67, 8, 0, -3];

const charsCollection = new CharactersCollection(
	chars
);
charsCollection.sort();
console.log(charsCollection.data);

const linkedList = new LinkedList();
for (let num of numsArr) {
	linkedList.add(num);
}
linkedList.sort();
linkedList.print();

const numsCollection = new NumbersCollection(
	numsArr
);
numsCollection.sort();
console.log(numsCollection.data);
