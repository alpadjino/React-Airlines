import { rtkQueryApi } from './rtkQueryApi';
import { TagTypesEnum } from './apiTagTypes';
import { FlightsResponceModel } from '@models/flights';
import { CheckBoxOption } from '@models/checkbox';
import { getFlightResult } from '@utils/getFlightsResult';

type GetFlightsProps = {
	sortBy: string;
	airlineFilter?: CheckBoxOption[];
	transferFilter?: CheckBoxOption[];
	priceFilter?: { priceFrom: string, priceTo: string };
};

const flightsApi = rtkQueryApi.injectEndpoints({
	endpoints: (build) => ({
		getFlights: build.query<FlightsResponceModel, GetFlightsProps>({
			query: () => ({
				url: `/result`,
				method: 'GET',
			}),
			transformResponse: (response: FlightsResponceModel, meta, arg) => ({
				...response,
				flights: getFlightResult(response, {
					sortBy: arg.sortBy,
					airlineFilter: arg.airlineFilter,
					transferFilter: arg.transferFilter,
					priceFilter: arg.priceFilter,
				}),
			}),
			providesTags: [TagTypesEnum.Flights],
		}),
	}),
});

export const { useGetFlightsQuery } = flightsApi;

export default flightsApi;
