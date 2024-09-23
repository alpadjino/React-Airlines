function getUniqueMap(data: string[]) {
    // if (!data) return [];
    // const uniqueCaptions = [...new Set(data?.flights.map((fl) => fl.flight.carrier.caption))];
    const captionsWithChecked = data.map((caption) => ({
			value: caption,
			checked: true,
		}));
    return captionsWithChecked;
};

export { getUniqueMap };