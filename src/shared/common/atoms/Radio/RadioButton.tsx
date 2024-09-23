import React from 'react'
import styled from 'styled-components';

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
` 

interface RadioButtonProps {
	label: string;
	value: string;
	checked: boolean;
	onChange: () => void;
}

export const RadioButton: React.FC<RadioButtonProps> = ({ label, value, checked, onChange }) => {
	return (
		<RadioLabel>
			<input type="radio" value={value} checked={checked} onChange={onChange} />
			{label}
		</RadioLabel>
	);
};