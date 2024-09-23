import { FlightListModel, FlightsResponceModel } from "@models/flights";
import { generalSort } from "./generalSort";
import { CheckBoxOption } from "@models/checkbox";
import { translateTransfer } from "./translateTransfer";
import { calculateCountTrasfer } from "./calculateCountTransfers";

interface FilterParams {
	sortBy?: string;
	airlineFilter?: CheckBoxOption[];
	transferFilter?: CheckBoxOption[];
	priceFilter?: { priceFrom: string, priceTo: string };
};

function getFlightResult(
	flights: FlightsResponceModel,
	{ sortBy, airlineFilter, transferFilter, priceFilter }: FilterParams,
): FlightListModel {
	let result = flights.flights;

	if (airlineFilter) {
		result = result.filter((flight) =>
			airlineFilter.some((filter) => filter.value === flight.flight.carrier.caption && filter.checked),
		);
	}

	if (transferFilter) {
		result = result.filter((flight) =>
			transferFilter.some(
				(filter) => filter.value === translateTransfer(calculateCountTrasfer(flight.flight.legs)) && filter.checked,
			),
		);
	}

	if (priceFilter) {
		result = result.filter((flight) => {
			const amountPrice = Number(flight.flight.price.total.amount);
			const priceTo = Number(priceFilter.priceTo) || Infinity;
			const priceFrom = Number(priceFilter.priceFrom) || 0;

			if (amountPrice > priceFrom && amountPrice < priceTo) return true;
			
			return false;
		});
	} 
	
	if (sortBy) result = generalSort(result, sortBy);

	return result;
};

export { getFlightResult };