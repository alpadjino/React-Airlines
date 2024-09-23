import React from 'react'
import { formatDateTime } from '@utils/formatDate';
import styled from 'styled-components';

const DateBoxContainer = styled.div`
	display: flex;
	gap: 5px;
	align-items: center;
`;

interface DateBoxProps {
    value: string;
};

export const DateBox = ({ value }: DateBoxProps) => {
    const { time, formattedDate } = formatDateTime(value);
	return (
		<DateBoxContainer>
			<p>{time}</p>
			<p style={{ color: 'var(--color-blue)' }}>{formattedDate}</p>
		</DateBoxContainer>
	);
};
