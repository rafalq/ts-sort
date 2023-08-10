"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortCharacters = void 0;
const sort_1 = require("./sort");
function sortCharacters(characters) {
    let charsArr = characters.split("");
    charsArr = (0, sort_1.sort)(charsArr);
    return charsArr.join("");
}
exports.sortCharacters = sortCharacters;
