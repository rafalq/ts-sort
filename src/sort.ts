function compare(
	data: number[],
	leftIndex: number,
	rightIndex: number
): boolean {
	return data[leftIndex] > data[rightIndex];
}

function swap(
	data: number[],
	leftIndex: number,
	rightIndex: number
): void {
	const leftHand = data[leftIndex];
	data[leftIndex] = data[rightIndex];
	data[rightIndex] = leftHand;
}

export function sortItems(
	collection: number[]
): number[] {
	for (let i = 0; i < collection.length; i++) {
		for (
			let j = 0;
			j < collection.length - i - 1;
			j++
		) {
			if (compare(collection, j, j + 1)) {
				swap(collection, j, j + 1);
			}
		}
	}
	return collection;
}
