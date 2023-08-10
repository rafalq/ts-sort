export function sortCharacters(
	collection: string
): string {
	const { length } = collection;

	let collectionArr;

	for (let i = 0; i < length; i++) {
		for (let j = 0; j < length - i - 1; j++) {
			if (
				collection[j].toLowerCase() >
				collection[j + 1].toLowerCase()
			) {
				collectionArr = collection.split("");
				const leftHand = collectionArr[j];
				collectionArr[j] = collectionArr[j + 1];
				collectionArr[j + 1] = leftHand;
			}
		}
	}

	return collectionArr!.join("");
}
