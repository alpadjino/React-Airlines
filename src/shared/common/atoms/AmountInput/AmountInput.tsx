import { TReactDispatch } from '@models/custom';
import React, { InputHTMLAttributes, useEffect, useState } from 'react'
import styled from 'styled-components';

const AmountInputContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

const Input = styled.input`
  max-height: 50px;
`;

interface AmountInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value'> {
	label?: string;
	value: TReactDispatch<string>;
}

export const AmountInput = ({ label, value, ...props }: AmountInputProps) => {
	return (
		<AmountInputContainer>
			<p>{label}</p>
			<p>-</p>
			<Input type="number"
				min={0}
				value={value.value}
				onChange={(e) => value.setValue(e.target.value)}
				{...props}
				/>
		</AmountInputContainer>
	);
};
