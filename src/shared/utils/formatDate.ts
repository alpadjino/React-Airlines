import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

function formatDateTime(dateTimeString: string) {
	const date = new Date(dateTimeString);

	const time = format(date, 'HH:mm', { locale: ru });

	const formattedDate = format(date, 'd MMM EE', { locale: ru });
	
    return { time, formattedDate };
};

function convertMinutesToTime(mins: string | number): string {
	let minutes = typeof mins === 'string' ? parseInt(mins, 10) : mins;

	if (isNaN(minutes) || minutes < 0) {
		return 'Некорректное значение';
	}

	const hours = Math.floor(minutes / 60);
	const remainingMinutes = minutes % 60;

	return `${hours} ч ${remainingMinutes} мин`;
}

export { formatDateTime, convertMinutesToTime };