import React from 'react'
import { RadioButton } from './RadioButton';
import { Dictionary } from '@models/dictionary';
import styled from 'styled-components';

const RadioGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
`

interface RadioGroupProps {
	options: Dictionary[];
	name: string;
	setSelectedValue: React.Dispatch<React.SetStateAction<string>>;
	selectedValue: string;
};

export const RadioGroup: React.FC<RadioGroupProps> = ({ options, name, setSelectedValue, selectedValue }) => {
  	const handleRadioChange = (value: string) => {
		setSelectedValue(value);
	};
	return (
		<RadioGroupContainer>
			<p>{name}</p>
			{options.map((option) => (
				<RadioButton
					key={option.code}
					label={option.value}
					value={option.value}
					checked={selectedValue === option.code}
					onChange={() => handleRadioChange(option.code)}
				/>
			))}
		</RadioGroupContainer>
	);
};
