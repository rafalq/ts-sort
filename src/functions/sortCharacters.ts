import { sort } from "./sort";

export function sortCharacters(
	characters: string
): string {
	let charsArr = characters.split("");
	charsArr = sort(charsArr);
	return charsArr!.join("");
}
