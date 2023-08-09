export function sortItems<T>(
	collection: T[] | string
): void {
	let checkedCollection;
	if (typeof collection === "string") {
		checkedCollection = collection.split("");
	} else {
		checkedCollection = collection;
	}

	const { length } = checkedCollection;

	for (let i = 0; i < length; i++) {
		for (let j = 0; j < length - i - 1; j++) {
			if (
				checkedCollection[j] >
				checkedCollection[j + 1]
			) {
				const leftHand = checkedCollection[j];
				checkedCollection[j] =
					checkedCollection[j + 1];
				checkedCollection[j + 1] = leftHand;
			}
		}
	}

	// if (typeof collection === "string") {
	// 	return checkedCollection.join("");
	// }
	// return checkedCollection;
	if (typeof collection === "string")
		console.log(checkedCollection.join(""));
	else console.log(checkedCollection);
}
