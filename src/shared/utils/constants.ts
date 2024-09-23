import { Dictionary } from "@models/dictionary";

const airlines = [
	'LOT Polish Airlines',
	'Air Baltic Corporation A/S',
	'Air France',
	'KLM',
	'Brussels Airlines',
	'TURK HAVA YOLLARI A.O.',
	'Аэрофлот - российские авиалинии',
	'Alitalia Societa Aerea Italiana',
	'Finnair Oyj',
	'Pegasus Hava Tasimaciligi A.S.',
];


const transfersCount = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];

const sortedObject: Dictionary[] = [
	{ code: 'byHighPrice', value: 'по возрастанию цены' },
	{ code: 'byLowPrice', value: 'по убыванию цены' },
	{ code: 'byTime', value: 'по времени в пути' },
];

export { airlines, transfersCount, sortedObject };