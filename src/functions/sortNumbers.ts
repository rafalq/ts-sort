export function sortNumbers(
	collection: number[]
): number[] {
	const { length } = collection;

	for (let i = 0; i < length; i++) {
		for (let j = 0; j < length - i - 1; j++) {
			if (collection[j] > collection[j + 1]) {
				const leftHand = collection[j];
				collection[j] = collection[j + 1];
				collection[j + 1] = leftHand;
			}
		}
	}
	return collection;
}
