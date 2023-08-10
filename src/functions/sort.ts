export function sort<T>(data: T[]): T[] {
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
