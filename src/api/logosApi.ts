import { rtkQueryApi } from './rtkQueryApi';

type LogoResponceModel = {
	logoUid: string;
	logoUrl: string;
	id: string;
};

const logosApi = rtkQueryApi.injectEndpoints({
	endpoints: (build) => ({
		getLogos: build.query<LogoResponceModel[], void>({
			query: () => ({
				url: `/logos`,
				method: 'GET',
			}),
		}),
		getLogoByUid: build.query<LogoResponceModel, string>({
			query: (name) => ({
				url: `/logos?logoUid=${name}`,
				method: 'GET',
			}),
			transformResponse: (responce) => (responce as LogoResponceModel[])[0],
		}),
	}),
});

export const { useGetLogosQuery, useGetLogoByUidQuery } = logosApi;

export default logosApi;
