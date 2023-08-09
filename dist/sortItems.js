"use strict";
// function
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortItems = void 0;
function sortItems(collection) {
    for (let i = 0; i < collection.length; i++) {
        for (let j = 0; j < collection.length - i - 1; j++) {
            if (collection[j] > collection[j + 1]) {
                const leftHand = collection[j];
                collection[j] = collection[j + 1];
                collection[j + 1] = leftHand;
            }
        }
    }
    return collection;
}
exports.sortItems = sortItems;
