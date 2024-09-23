import React from 'react'
import Divider from '@common/atoms/Divider';
import ClockIcon from '@common/atoms/Icons/ClockIcon';
import styled from 'styled-components';
import { Legs, Segment } from '@models/flights';
import { useGetLogoByUidQuery } from '@api/logosApi';
import { nanoid } from 'nanoid';
import { DateBox } from '@common/atoms/DateBox';
import { TimeBox } from '@common/atoms/TimeBox';
import { translateTransfer } from '@utils/translateTransfer';

const FlightContainer = styled.div`
	width: 100%;
	padding: 10px 20px 10px 20px;
    box-sizing: border-box;
`;

const CardHeader = styled.div`
	display: flex;
	background-color: var(--color-blue);
	padding: 10px 20px 10px 20px;
	color: white;
	justify-content: space-between;
`;

const PriceBox = styled.div`
  text-align: right;
`;

const PriceText = styled.p`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.5px;
  margin: 0;
`;

const CardBody = styled.div`
`;

const CityHeader = styled.div`
  display: flex;
  gap: 5px;
`;

const TimeHeader = styled.div`
	display: flex;
	gap: 5px;
    justify-content: space-between;
    padding: 0 20px;
`;

const CardButton = styled.button`
	color: white;
	background-color: var(--color-orange);
	width: 100%;
	border: none;
	text-transform: uppercase;
	min-height: 40px;
    cursor: pointer;
`;
const LegContainer = styled.div``;

const Logo = styled.img`
  max-width: 150px;
  max-height: 50px;
`;

interface FlightCardProp {
	legs: Legs;
	totalPrice: string;
    logoUid: string
};

export const FlightCard = ({ legs, totalPrice, logoUid }: FlightCardProp) => {
	const { data, isLoading } = useGetLogoByUidQuery(logoUid);
    return (
			<FlightContainer>
				<CardHeader>
					<div>
						{isLoading ? (
							<span>Загрузка изображения...</span>
						) : (
							<Logo src={data ? data.logoUrl : ''} alt="airline-logo" />
						)}
					</div>
					<PriceBox>
						<PriceText>{totalPrice} Р</PriceText>
						<p style={{ margin: 0 }}>Стоимость для одного взрослого пассажира</p>
					</PriceBox>
				</CardHeader>
				<CardBody>
					{legs.map((leg) => (
						<LegContainer key={leg.duration}>
							<CityHeader>
								<p>
									{leg.segments[0].departureCity?.caption}, {leg.segments[0].departureAirport?.caption}
								</p>
								<p style={{ color: 'var(--color-blue)' }}>({leg.segments[0].departureAirport.uid})</p>
								<p>{`->`}</p>
								<p>
									{leg.segments[leg.segments.length - 1].arrivalCity?.caption},{' '}
									{leg.segments[leg.segments.length - 1].arrivalAirport?.caption}
								</p>
								<p style={{ color: 'var(--color-blue)' }}>
									({leg.segments[leg.segments.length - 1].arrivalAirport.uid})
								</p>
							</CityHeader>
							<Divider color="var(--color-light-gray)" />
							<TimeHeader>
								<DateBox value={leg.segments[0].departureDate} />
								<TimeBox minutes={leg.duration} />
								<DateBox value={leg.segments[0].arrivalDate} />
							</TimeHeader>
							{leg.segments.length - 1 !== 0 && (
								<div style={{ padding: '0 50px' }}>
									<Divider color="var(--color-dark-gray)" thickness="2px">
										<p style={{ color: 'var(--color-orange)', margin: 0 }}>
											{translateTransfer(leg.segments.length - 1)}
										</p>
									</Divider>
								</div>
							)}
							<p>Рейс выполняет: {leg.segments[0].airline.caption}</p>
							<Divider color="var(--color-blue)" thickness="3px" />
						</LegContainer>
					))}
				</CardBody>
				<div>
					<CardButton>Выбрать</CardButton>
				</div>
			</FlightContainer>
		);
};
