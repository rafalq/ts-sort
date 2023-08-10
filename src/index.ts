import { Sorter } from "./classes/Sorter";
import { sortNumbers } from "./functions/sortNumbers";
import { sortCharacters } from "./functions/sortCharacters";
import { CharacterCollection } from "./classes/CharactersCollection";
import { NumbersCollection } from "./classes/NumbersCollection";
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

console.log("--- class style ---");
console.log(charactersSorter.collection);
console.log(numbersSorter.collection);

console.log("--- func style ----");
console.log(sortNumbers(numbersArr));
console.log(sortCharacters(characters));

console.log(" - using sortItems() -");
console.log(sortItems(characters));
console.log(sortItems(numbersArr));
