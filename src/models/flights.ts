type FlightsResponceModel = {
	bestPrices: BestPrices;
	flights: FlightListModel;
};

type BestPrices = {
	DIRECT: BestFlights;
	ONE_CONNECTION: BestFlights;
};

type BestFlights = BestFlight[]

type BestFlight = {
	carrier: Carrier;
	price: PriceSubObject;
};

type FlightListElemModel = {
	flight: Flight;
	flightToken: string;
	hasExtendedFare: boolean;
};

type FlightListModel = FlightListElemModel[];

type Flight = {
	carrier: Carrier;
	exchange: Exchange;
	international: boolean;
	isTripartiteContractDiscountApplied: boolean;
	legs: Legs;
	price: Price;
	refund: Refund;
	seats: Seats;
	servicesStatuses: ServicesStatuses;
};

type Legs = Leg[];

type Leg = {
    duration: number;
    segments: Segment[];
}

type Segment = {
	aircraft: UIDCaption;
	airline: Carrier;
	arrivalAirport: UIDCaption;
	arrivalCity: UIDCaption;
	arrivalDate: string;
	classOfService: UIDCaption;
	classOfServiceCode: string;
	departureAirport: UIDCaption;
	departureCity: UIDCaption;
	departureDate: string;
	flightNumber: string;
	servicesDetails: ServicesDetails;
	starting: boolean;
	stops: number;
	techStopInfos: [];
	travelDuration: number;
};

type ServicesDetails = {
	fareBasis: { ADULT: string };
	freeCabinLuggage: Object;
	ADULT: { pieces: number; nil: boolean; unit: string };
	paidCabinLuggage: Object;
	paidLuggage: Object;
	tariffName: string;
};

type Carrier = {
	airlineCode: string;
} & UIDCaption;

type Exchange = {
	ADULT: {
		exchangeAfterDeparture: PriceSubObject;
		exchangeBeforeDeparture: PriceSubObject;
		exchangeableAfterDeparture: boolean;
		exchangeableBeforeDeparture: boolean;
	};
};

type Seat = {
	count: number;
	type: UIDCaption;
};

type Seats = Seat[];

type ServicesStatuses = {
	baggage: UIDCaption;
	exchange: UIDCaption;
	refund: UIDCaption;
};

type Refund = {
	ADULT: { refundableBeforeDeparture: boolean; refundableAfterDeparture: boolean };
};

type Price = {
	passengerPrices: PassengerPrices[];
	rates: Rates;
	total: PriceSubObject;
	totalFeeAndTaxes: PriceSubObject;
};

type PassengerPrices = {
	feeAndTaxes: PriceSubObject;
	passengerCount: number;
	passengerType: UIDCaption;
	singlePassengerTotal: PriceSubObject;
	tariff: PriceSubObject;
	total: PriceSubObject;
};

type PriceSubObject = {
	amount: string;
	currency: string;
	currencyCode: string;
};

type UIDCaption = {
    uid: string;
    caption: string;
}

type Rates = {
	totalEur: Omit<PriceSubObject, 'currency'>;
	totalUsd: Omit<PriceSubObject, 'currency'>;
};

export { FlightsResponceModel, Segment, Legs, Leg, FlightListModel, FlightListElemModel };
