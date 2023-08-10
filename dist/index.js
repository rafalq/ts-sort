"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./classes/Sorter");
const sortNumbers_1 = require("./functions/sortNumbers");
const sortCharacters_1 = require("./functions/sortCharacters");
const CharactersCollection_1 = require("./classes/CharactersCollection");
const NumbersCollection_1 = require("./classes/NumbersCollection");
const LinkedList_1 = require("./classes/LinkedList");
const sortItems_1 = require("./functions/sortItems");
const characters = "CbHuwwi";
const numbersArr = [32, -4, 0, 6];
const charactersCollection = new CharactersCollection_1.CharacterCollection(characters);
const charactersSorter = new Sorter_1.Sorter(charactersCollection);
const numbersCollection = new NumbersCollection_1.NumbersCollection(numbersArr);
const numbersSorter = new Sorter_1.Sorter(numbersCollection);
const linkedList = new LinkedList_1.LinkedList();
for (let num of numbersArr) {
    linkedList.add(num);
}
const linkedListSorter = new Sorter_1.Sorter(linkedList);
linkedListSorter.sort();
console.log("--- class style ---");
console.log(charactersSorter.collection);
console.log(numbersSorter.collection);
linkedList.print();
console.log("--- func style ----");
console.log((0, sortNumbers_1.sortNumbers)(numbersArr));
console.log((0, sortCharacters_1.sortCharacters)(characters));
console.log(" - using sortItems() -");
console.log((0, sortItems_1.sortItems)(characters));
console.log((0, sortItems_1.sortItems)(numbersArr));
