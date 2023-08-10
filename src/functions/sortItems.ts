export function sortItems<T>(
	data: T[] | string
): T[] | string {
	const { length } = data;

	let dataArr;

	for (let i = 0; i < length; i++) {
		for (let j = 0; j < length - i - 1; j++) {
			if (typeof data === "string") {
				dataArr = data.split("");
				if (
					data[j].toLocaleLowerCase() >
					data[j + 1].toLocaleLowerCase()
				) {
					const leftHand = dataArr[j];
					dataArr[j] = dataArr[j + 1];
					dataArr[j + 1] = leftHand;
				}
			} else {
				if (data[j] > data[j + 1]) {
					const leftHand = data[j];
					data[j] = data[j + 1];
					data[j + 1] = leftHand;
				}
			}
		}
	}
	if (typeof data === "string") {
		dataArr = dataArr!.join("");
		return dataArr;
	}
	return data;
}
