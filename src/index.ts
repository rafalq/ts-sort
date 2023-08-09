import { Sorter } from "./Sorter";
import { CharacterCollection } from "./CharactersCollection";

const characters = new CharacterCollection(
	"CbHuwwi"
);
const sorter = new Sorter(characters);
console.log(sorter.collection);
