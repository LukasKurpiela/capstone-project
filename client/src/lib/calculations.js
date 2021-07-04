function calculateQuantityPerCoin(historyCoins) {
  const boughtCoinsObject = historyCoins.filter(
    (boughtCoin) => boughtCoin.buyOrSell === 'buy'
  );
  const totalQuantityBought = boughtCoinsObject.reduce(
    (a, b) => parseFloat(a) + parseFloat(b.quantity),
    0
  );

  const soldCoinsObject = historyCoins.filter(
    (boughtCoin) => boughtCoin.buyOrSell === 'sell'
  );
  const totalQuantitySold = soldCoinsObject.reduce(
    (a, b) => parseFloat(a) + parseFloat(b.quantity),
    0
  );

  const totalQuantity = totalQuantityBought - totalQuantitySold;
  return totalQuantity;
}

export { calculateQuantityPerCoin };
