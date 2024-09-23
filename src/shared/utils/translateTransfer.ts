function translateTransfer(transferCount: number): string {
    if (transferCount === 0) return "Без пересадок"; 

    const lastNumber = transferCount % 10;
    
    if (transferCount === 3 || lastNumber === 2 || lastNumber === 4) return `${transferCount} пересадки`;
    if (transferCount !== 11 && lastNumber === 1) return `${transferCount} пересадка`;
    
    return `${transferCount} пересадок`
};

export { translateTransfer };