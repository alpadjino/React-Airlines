import React from 'react'
import styled from 'styled-components';
import { CheckboxButton } from './CheckboxButton';
import { CheckBoxOption } from '@models/checkbox';

const CheckboxGroupContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	justify-content: center;
`;

interface CheckboxGroupProps {
	options: CheckBoxOption[];
	name: string;
	setOptions: React.Dispatch<React.SetStateAction<CheckBoxOption[]>>;
};

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ options, name, setOptions }) => {
	const handleCheckboxChange =
		({ value, checked }: CheckBoxOption) => {
			setOptions((prev) => {
				const updatedOptions = prev.map((option) => {
					if (option.value === value) {
						console.log(option.value);
						return { ...option, checked: !option.checked };
					}
					return option;
				});
				return updatedOptions;
			});
		}

	return (
		<CheckboxGroupContainer>
			<p>{name}</p>
			{options.map((option) => (
				<CheckboxButton
					key={option.value}
					label={option.value}
					value={option.value}
					checked={option.checked}
					onChange={() => handleCheckboxChange(option)}
				/>
			))}
		</CheckboxGroupContainer>
	);
};
