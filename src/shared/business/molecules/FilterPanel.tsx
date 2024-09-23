import React from 'react'
import styled from 'styled-components';
import { RadioGroup } from '@common/atoms/Radio/RadioGroup';
import { CheckboxGroup } from '@common/atoms/Checkbox/CheckboxGroup';
import { AmountInput } from '@common/atoms/AmountInput/AmountInput';
import { CheckBoxOption } from '@models/checkbox';
import { sortedObject } from '@utils/constants';
import { TReactDispatch } from '@models/custom';

const FilterPanelContainer = styled.div`
	display: flex;
	flex-direction: column;
	background-color: white;
	padding: 20px;
`;

interface FilterPanelProps {
	sortedOption: TReactDispatch<string>;
	priceTo: TReactDispatch<string>;
	priceFrom: TReactDispatch<string>;
	transferOptions: TReactDispatch<CheckBoxOption[]>;
	airlineOptions: TReactDispatch<CheckBoxOption[]>;
}

export const FilterPanel = ({
	sortedOption,
	airlineOptions,
	transferOptions,
	priceFrom,
	priceTo,
}: FilterPanelProps) => {
	return (
		<FilterPanelContainer>
			<RadioGroup
				name="Сортировка"
				options={sortedObject}
				setSelectedValue={sortedOption.setValue}
				selectedValue={sortedOption.value}
			/>

			<CheckboxGroup name="Фильтрация" options={transferOptions.value} setOptions={transferOptions.setValue} />
			<div>
				<p>Цена</p>
				<AmountInput label="от" value={ priceFrom } />
				<AmountInput label="до" value={ priceTo } />
			</div>
			<CheckboxGroup name="Авиакомпании" options={airlineOptions.value} setOptions={airlineOptions.setValue} />
		</FilterPanelContainer>
	);
};
