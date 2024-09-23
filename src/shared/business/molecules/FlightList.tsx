import React from 'react'
import { FlightListModel } from '@models/flights';
import { FlightCard } from '@business/atoms/FlightCard';
import { nanoid } from 'nanoid';

interface FlightListProps {
	flights: FlightListModel;
};

export const FlightList = ({ flights }: FlightListProps) => {
	return flights.map((flight, index) => (
		<FlightCard
			key={nanoid()}
			totalPrice={flight.flight.price.total.amount}
			logoUid={flight.flight.carrier.uid}
			legs={flight.flight.legs}
		/>
	));
};
