"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const sort_1 = require("./sort");
// function style
console.log(" --- func style --- ");
console.log((0, sort_1.sortItems)([897, 0, 23, -4]));
// class style
const numbersColl = new NumbersCollection_1.NumbersCollection([
    10, 3, -4, 0,
]);
const sorter = new Sorter_1.Sorter(numbersColl);
sorter.sort();
console.log(" --- class style --- ");
console.log(numbersColl.data);
