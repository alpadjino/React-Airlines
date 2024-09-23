import React from 'react'
import styled from 'styled-components';

const CheckboxLabel = styled.label`
	display: flex;
	align-items: center;
`;

interface CheckboxButtonProps {
	label: string;
	value: string;
	checked: boolean;
	onChange: () => void;
}

export const CheckboxButton: React.FC<CheckboxButtonProps> = ({ label, value, checked, onChange }) => {
	return (
		<CheckboxLabel>
			<input type="checkbox" value={value} checked={checked} onChange={onChange} />
			{label}
		</CheckboxLabel>
	);
};
