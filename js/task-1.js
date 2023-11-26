function makeTransaction(quantity, pricePerDroid) {
    const totalCost = quantity * pricePerDroid;
    const purchaseMessage = `You ordered ${quantity} droids worth ${totalCost} credits!`;
    return purchaseMessage;
}

console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));
