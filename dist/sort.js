"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortItems = exports.swap = exports.compare = void 0;
function compare(data, leftIndex, rightIndex) {
    return data[leftIndex] > data[rightIndex];
}
exports.compare = compare;
function swap(data, leftIndex, rightIndex) {
    const leftHand = data[leftIndex];
    data[leftIndex] = data[rightIndex];
    data[rightIndex] = leftHand;
}
exports.swap = swap;
function sortItems(collection) {
    for (let i = 0; i < collection.length; i++) {
        for (let j = 0; j < collection.length - i - 1; j++) {
            if (compare(collection, j, j + 1)) {
                swap(collection, j, j + 1);
            }
        }
    }
    return collection;
}
exports.sortItems = sortItems;
