"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sort = void 0;
function sort(data) {
    const { length } = data;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if (data[j] > data[j + 1]) {
                const leftHand = data[j];
                data[j] = data[j + 1];
                data[j + 1] = leftHand;
            }
        }
    }
    return data;
}
exports.sort = sort;
