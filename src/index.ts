import { Sorter } from "./classes/Sorter";
import { sortNumbers } from "./functions/sortNumbers";
import { sortCharacters } from "./functions/sortCharacters";
import { CharacterCollection } from "./classes/CharactersCollection";
import { NumbersCollection } from "./classes/NumbersCollection";
import { LinkedList } from "./classes/LinkedList";
import { sortItems } from "./functions/sortItems";

const characters = "CbHuwwi";
const numbersArr = [32, -4, 0, 6];

const charactersCollection =
	new CharacterCollection(characters);
const charactersSorter = new Sorter(
	charactersCollection
);

const numbersCollection = new NumbersCollection(
	numbersArr
);
const numbersSorter = new Sorter(
	numbersCollection
);

const linkedList = new LinkedList();
for (let num of numbersArr) {
	linkedList.add(num);
}
const linkedListSorter = new Sorter(linkedList);
linkedListSorter.sort();

console.log("--- class style ---");
console.log(charactersSorter.collection);
console.log(numbersSorter.collection);
linkedList.print();

console.log("--- func style ----");
console.log(sortNumbers(numbersArr));
console.log(sortCharacters(characters));

console.log(" - using sortItems() -");
console.log(sortItems(characters));
console.log(sortItems(numbersArr));
