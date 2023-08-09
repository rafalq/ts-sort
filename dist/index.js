"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const CharactersCollection_1 = require("./CharactersCollection");
const characters = new CharactersCollection_1.CharacterCollection("CbHuwwi");
const sorter = new Sorter_1.Sorter(characters);
console.log(sorter.collection);
