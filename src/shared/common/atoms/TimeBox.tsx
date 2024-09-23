import React from 'react'
import styled from 'styled-components';
import ClockIcon from './Icons/ClockIcon';
import { convertMinutesToTime } from '@utils/formatDate';

const TimeBoxContainer = styled.div`
	display: flex;
	gap: 5px;
	align-items: center;
`;

interface TimeBoxProps {
  minutes: string | number;
};

export const TimeBox = ({ minutes }: TimeBoxProps) => {
	const time = convertMinutesToTime(minutes);
	return (
		<TimeBoxContainer>
			<ClockIcon />
			<p>{time}</p>
		</TimeBoxContainer>
	);
};
