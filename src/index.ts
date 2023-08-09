// function

function sortItems(
	collection: number[]
): number[] {
	for (let i = 0; i < collection.length; i++) {
		for (
			let j = 0;
			j < collection.length - i - 1;
			j++
		) {
			if (collection[j] > collection[j + 1]) {
				const leftHand = collection[j];
				collection[j] = collection[j + 1];
				collection[j + 1] = leftHand;
			}
		}
	}
	return collection;
}

console.log(sortItems([123, 0, -7, 2.56, 20]));

// // class

// class Sorter {
// 	// collection: number[];
// 	// constructor(collection: number[]) {
// 	//   this.collection = collection;
// 	// }

// 	constructor(public collection: number[]) {}

// 	sort(): void {
// 		const { length } = this.collection;

// 		for (let i = 0; i < length; i++) {
// 			for (let j = 0; j < length - i - 1; j++) {
// 				if (
// 					this.collection[j] >
// 					this.collection[j + 1]
// 				) {
// 					const leftHand = this.collection[j];
// 					this.collection[j] =
// 						this.collection[j + 1];
// 					this.collection[j + 1] = leftHand;
// 				}
// 			}
// 		}
// 	}
// }

// const sort = new Sorter([42, -100, 5, 0, 10, -1]);

// sort.sort();
// console.log(sort.collection);
