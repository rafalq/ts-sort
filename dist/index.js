"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CharactersCollection_1 = require("./classes/CharactersCollection");
const LinkedList_1 = require("./classes/LinkedList");
const NumbersCollection_1 = require("./classes/NumbersCollection");
const chars = "HjuiiR";
const numsArr = [67, 8, 0, -3];
const charsCollection = new CharactersCollection_1.CharactersCollection(chars);
charsCollection.sort();
console.log(charsCollection.data);
const linkedList = new LinkedList_1.LinkedList();
for (let num of numsArr) {
    linkedList.add(num);
}
linkedList.sort();
linkedList.print();
const numsCollection = new NumbersCollection_1.NumbersCollection(numsArr);
numsCollection.sort();
console.log(numsCollection.data);
