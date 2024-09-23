import { FlightListModel, FlightsResponceModel, Leg } from "@models/flights";

type SortedConst = 'byLowPrice' | 'byHighPrice' | 'byTime';

function add(accumulator: number, leg: Leg) {
	return accumulator + leg.duration;
}

function generalSort(response: FlightListModel, sortBy: string): FlightListModel {
	return response.sort((a, b) => {
		const priceA = Number(a.flight.price?.total?.amount) || 0;
		const priceB = Number(b.flight.price?.total?.amount) || 0;
		const travelTimeA = Number(a.flight.legs.reduce(add, 0));
		const travelTimeB = Number(b.flight.legs.reduce(add, 0));

		switch (sortBy) {
			case 'byLowPrice':
				return priceB - priceA;
			case 'byHighPrice':
				return priceA - priceB;
			case 'byTime':
				return travelTimeA - travelTimeB;
			default:
				return 0;
		}
	});
};

export { generalSort };