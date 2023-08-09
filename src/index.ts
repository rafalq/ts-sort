import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { sortItems } from "./sort";

// function style
console.log(" --- func style --- ");
console.log(sortItems([897, 0, 23, -4]));

// class style
const numbersColl = new NumbersCollection([
	10, 3, -4, 0,
]);
const sorter = new Sorter(numbersColl);
sorter.sort();

console.log(" --- class style --- ");
console.log(numbersColl.data);
