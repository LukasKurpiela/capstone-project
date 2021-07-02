import styled from 'styled-components';

export default function Portfoliobar({ portfolioCoins, likedCoins }) {
  function calculateTotalHoldings(portfolioCoins) {
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

  return (
    <>
      <PortfolioBar>
        <PortfoliobarHeading>Total Profit/Loss:</PortfoliobarHeading>
        <PortfoliobarValue>
          {calculateTotalHoldings(portfolioCoins).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </PortfoliobarValue>
      </PortfolioBar>
    </>
  );
}

const PortfolioBar = styled.div`
  margin: 26px 14px 30px 14px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  box-shadow: 0 1px 2px #87878a;
  padding-left: 16px;
  width: 300px;
  height: 50px;
  border-radius: 4px;
  border: none;
  background-color: #f8f8ff;
  position: ${(props) => (props.isStatic ? 'static' : 'fixed')};
  z-index: 100;
`;

const PortfoliobarHeading = styled.span`
  margin: 5px 0;
  font-size: 12px;
`;
const PortfoliobarValue = styled.span`
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 16px;
`;
