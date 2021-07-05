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

function calculateHoldingsTotal(portfolioCoins) {
  const boughtCoinsObject = portfolioCoins.filter(
    (boughtCoin) => boughtCoin.buyOrSell === 'buy'
  );
  const totalSumBought = boughtCoinsObject.reduce(
    (a, b) => parseFloat(a) + parseFloat(b.price) * parseFloat(b.quantity),
    0
  );

  const soldCoinsObject = portfolioCoins.filter(
    (boughtCoin) => boughtCoin.buyOrSell === 'sell'
  );
  const totalSumSold = soldCoinsObject.reduce(
    (a, b) => parseFloat(a) + parseFloat(b.price) * parseFloat(b.quantity),
    0
  );
  const totalValue = totalSumBought - totalSumSold;
  return totalValue;
}

export { calculateQuantityPerCoin, calculateHoldingsTotal };
