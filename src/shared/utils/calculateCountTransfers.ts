import { Legs } from "@models/flights";

const calculateCountTrasfer = (legs: Legs) => {
	let count = 0;
	legs.forEach((leg) => {
		count += leg.segments.length - 1;
	});

	return count;
};

export { calculateCountTrasfer };