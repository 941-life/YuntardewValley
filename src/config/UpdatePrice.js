export function updatePrice(items, priceCalculation) {
    return items.map(item => ({
        ...item,
        origin: priceCalculation(item.basePrice)
    }));
}