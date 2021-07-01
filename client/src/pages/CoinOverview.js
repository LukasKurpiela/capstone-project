import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Headline from '../components/Headline';
import Footer from '../components/Footer';
import { ReactComponent as Close } from '../images/close.svg';
import { ReactComponent as PlusIcon } from '../images/plus.svg';
import { ReactComponent as BuySellIcon } from '../images/coins.svg';
import { ReactComponent as TrashCan } from '../images/trashcan.svg';

export default function PortfolioOverview({
  portfolioCoins,
  isStatic,
  onDeleteCoinHistory,
}) {
  const history = useHistory();
  const clickedCoin = history.location.state;

  const historyCoins = portfolioCoins.filter(
    (historyCoin) => historyCoin.name === clickedCoin.name
  );

  console.log(clickedCoin);
  console.log(historyCoins);

  function navigateToForm() {
    history.push('/portfolio/addform', clickedCoin);
  }

  function navigateToPortfolio() {
    history.push('/portfolio', historyCoins, calculateTotalPortfolio);
  }

  function calculateTotalPortfolio(historyCoins) {
    const boughtCoinsObject = historyCoins.filter(
      (boughtCoin) => boughtCoin.buyOrSell === 'buy'
    );
    const totalSumBought = boughtCoinsObject.reduce(
      (a, b) => parseFloat(a) + parseFloat(b.price) * parseFloat(b.quantity),
      0
    );
    const soldCoinsObject = historyCoins.filter(
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
    <Body>
      <HeadlineWrapper>
        <CoinImage src={clickedCoin.image} alt={clickedCoin.name} />
        <HeadlineName>{clickedCoin.name} History</HeadlineName>
        <CloseIcon title="Close" role="img" onClick={navigateToPortfolio} />
      </HeadlineWrapper>
      <Headline
        Headlinetext1="Exchange"
        Headlinetext2="Price"
        Headlinetext3="Holdings"
      />
      {historyCoins.map((coin) => {
        return (
          <>
            <CoinWrapper>
              <CoinRow>
                {coin.buyOrSell === 'buy' ? (
                  <BuyImage title="BuyOrSell" role="img" />
                ) : (
                  <SellImage title="BuyOrSell" role="img" />
                )}
                <ExchangeWrapper>
                  <Exchange>{coin.exchange}</Exchange>
                  <Date>{coin.date}</Date>
                </ExchangeWrapper>
                <CoinData>
                  <PriceWrapper>
                    <CoinPrice>
                      $
                      {parseFloat(coin.price).toLocaleString('de-DE', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </CoinPrice>
                    <BuyOrSell>{coin.buyOrSell}</BuyOrSell>
                  </PriceWrapper>
                  <HoldingsWrapper>
                    {coin.buyOrSell === 'buy' ? (
                      <HoldingsBuy>
                        $
                        {parseFloat(coin.price * coin.quantity).toLocaleString(
                          'de-DE',
                          {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          }
                        )}
                      </HoldingsBuy>
                    ) : (
                      <HoldingsSell>
                        -$
                        {parseFloat(coin.price * coin.quantity).toLocaleString(
                          'de-DE',
                          {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          }
                        )}
                      </HoldingsSell>
                    )}
                    {coin.buyOrSell === 'buy' ? (
                      <QuantityBuy>
                        {coin.quantity.replace('.', ',')} {coin.symbol}
                      </QuantityBuy>
                    ) : (
                      <QuantitySell>
                        -{coin.quantity.replace('.', ',')} {coin.symbol}
                      </QuantitySell>
                    )}
                  </HoldingsWrapper>
                </CoinData>
                <TrashCanImage
                  title="TrashCan"
                  role="img"
                  onClick={() => onDeleteCoinHistory(coin)}
                />
              </CoinRow>
            </CoinWrapper>
          </>
        );
      })}
      <AddButton onClick={navigateToForm} isStatic={isStatic}></AddButton>
      <AddSign
        onClick={navigateToForm}
        title="Plus"
        role="img"
        isStatic={isStatic}
      />
      <Footer />
    </Body>
  );
}

const Body = styled.body`
  margin-bottom: 6.25rem;
`;

const HeadlineWrapper = styled.div`
  padding-bottom: 1rem;
  display: flex;
  justify-content: center;
  font-weight: bold;
  margin-top: 110px;
  padding-bottom: 41px;
  position: relative;
  width: 346px;
`;

const CoinImage = styled.img`
  height: 1.5rem;
  width: 1.5rem;
  margin-right: 0.625rem;
`;

const HeadlineName = styled.h2`
  padding: 0;
  margin: 0;
`;

const CloseIcon = styled(Close)`
  left: 16.9rem;
  top: 0.15rem;
  height: 1.2rem;
  width: 1.2rem;
  margin: 0 1.5rem 0 3rem;
  cursor: pointer;
  position: absolute;
`;

const BuyImage = styled(BuySellIcon)`
  height: 1.75rem;
  width: 1.75rem;
  margin-right: 0.625rem;
  fill: green;
`;

const SellImage = styled(BuySellIcon)`
  height: 1.75rem;
  width: 1.75rem;
  margin-right: 0.625rem;
  fill: red;
`;

const CoinWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const CoinRow = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 328px;
  height: 5.625rem;
  border-bottom: 1px solid #d7d7d7;
`;

// const NoteRow = styled.div`
//   display: flex;
//   justify-content: start;
//   align-items: center;
//   height: 1.25rem;
//   border-bottom: 1px solid #d7d7d7;
// `;

const ExchangeWrapper = styled.span`
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: space-between;
  width: 4rem;
`;

const PriceWrapper = styled.span`
  display: flex;
  flex-direction: column;
  text-align: right;
`;

const HoldingsWrapper = styled.span`
  display: flex;
  flex-direction: column;
  text-align: right;
`;

const Exchange = styled.span`
  width: 4rem;
  padding-bottom: 10px;
  font-weight: bold;
`;

const Date = styled.span`
  width: 4.75rem;
`;

const CoinData = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-between;
  width: 100%;
`;

const CoinPrice = styled.span`
  width: 5rem;
  padding-bottom: 10px;
  font-weight: bold;
`;

const BuyOrSell = styled.span`
  width: 5rem;
`;

const HoldingsBuy = styled.span`
  width: 5rem;
  padding-bottom: 10px;
  font-weight: bold;
  color: green;
`;

const HoldingsSell = styled.span`
  width: 5rem;
  padding-bottom: 10px;
  font-weight: bold;
  color: red;
`;

const QuantityBuy = styled.span`
  width: 5rem;
  color: green;
  text-transform: uppercase;
`;

const QuantitySell = styled.span`
  width: 5rem;
  color: red;
  text-transform: uppercase;
`;

const TrashCanImage = styled(TrashCan)`
  height: 1.75rem;
  width: 1.75rem;
  margin-left: 10px;
  cursor: pointer;
`;

const AddButton = styled.button`
  background: linear-gradient(135deg, #ffc608, #f7931a, #b1583e);
  border-radius: 50%;
  border: none;
  width: 3.25rem;
  height: 3.25rem;
  bottom: 8rem;
  right: 1.5rem;
  cursor: pointer;
  position: ${(props) => (props.isStatic ? 'static' : 'fixed')};
`;

const AddSign = styled(PlusIcon)`
  border-radius: 50%;
  width: 1.65rem;
  height: 1.65rem;
  bottom: 8.75rem;
  right: 2.3rem;
  cursor: pointer;
  position: ${(props) => (props.isStatic ? 'static' : 'fixed')};
`;
