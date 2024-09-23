import { FlightListElemModel } from "@models/flights";

interface GetFlightFieldsProps {
	flight: FlightListElemModel;
	field: keyof FlightListElemModel;
};

function getFlightFields({ flight, field }: GetFlightFieldsProps) {
    function getAmountPrice() {
        return flight.flight.price.total.amount;
    }
};

export { getFlightFields };