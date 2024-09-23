import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { tagTypes } from './apiTagTypes';

const baseUrl = `http://localhost:3000`;

const rtkQueryApi = createApi({
	reducerPath: 'api',
	keepUnusedDataFor: 60,
	refetchOnMountOrArgChange: true,
	baseQuery: fetchBaseQuery({
		baseUrl,
		prepareHeaders: (headers, { getState }) => {
			headers.set('Accept', 'application/json');
			headers.set('Content-Type', 'application/json; charset=UTF-8');
			
			return headers;
		},
	}),
	tagTypes: tagTypes,
	endpoints: () => ({}),
});

export { rtkQueryApi };
