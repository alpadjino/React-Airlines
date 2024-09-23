import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { useGetFlightsQuery } from '@api/flightsApi';
import { FlightList } from '@business/molecules/FlightList';
import { FilterPanel } from '@business/molecules/FilterPanel';
import { CheckBoxOption } from '@models/checkbox';
import { getUniqueMap } from '@utils/getUniqueMap';
import { airlines, transfersCount } from '@utils/constants';

const MainPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

const MainSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  width: 100%;
  padding: 20px;
`;

const FilterSectionContainer = styled.div`
  display: flex;
  background-color: gray;
  height: 100%;
  padding: 20px;
`

function MainPage() {
  const [airlinesOptions, setAirlinesOptions] = useState<CheckBoxOption[]>(getUniqueMap(airlines));
  const [transferOptions, setTransferOptions] = useState<CheckBoxOption[]>(getUniqueMap(transfersCount));
  const [priceTo, setPriceTo] = useState(''); 
  const [priceFrom, setPriceFrom] = useState(''); 
  const [sortedOption, setSortedOption] = useState('byHighPrice');
  const [limit, setLimit] = useState(2);
  
  const { data, isLoading } = useGetFlightsQuery({
		sortBy: sortedOption,
		airlineFilter: airlinesOptions,
		transferFilter: transferOptions,
		priceFilter: { priceFrom: priceFrom, priceTo: priceTo },
	});

  const limitedFlights = data?.flights.slice(0, limit);

	const handleChangeLimit = useCallback(() => {
		setLimit((prevLimit) => prevLimit + 2);
	}, []);

  	if (isLoading) return <span>Загрузка...</span>
  	
	return (
		<MainPageContainer>
			<FilterSectionContainer>
				<FilterPanel
					sortedOption={{ value: sortedOption, setValue: setSortedOption }}
					airlineOptions={{ value: airlinesOptions, setValue: setAirlinesOptions }}
					transferOptions={{ value: transferOptions, setValue: setTransferOptions }}
					priceFrom={{ value: priceFrom, setValue: setPriceFrom }}
					priceTo={{ value: priceTo, setValue: setPriceTo }}
				/>
			</FilterSectionContainer>
			<MainSectionContainer>
				<FlightList flights={limitedFlights!} />
				<div>
					{limitedFlights?.length !== 0 ? (
						<button style={{ width: '200px' }} onClick={handleChangeLimit}>
							Показать еще
						</button>
					) : (
						<span>Нет подходящих билетов</span>
					)}
				</div>
			</MainSectionContainer>
		</MainPageContainer>
	);
};

export default MainPage;
