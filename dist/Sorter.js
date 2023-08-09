"use strict";
class Sorter {
    /*
  collection: number[];
  constructor(collection: number[]) {
    this.collection = collection;
  }
*/
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.collection[j] >
                    this.collection[j + 1]) {
                    const leftHand = this.collection[j];
                    this.collection[j] =
                        this.collection[j + 1];
                    this.collection[j + 1] = leftHand;
                }
            }
        }
    }
}
