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
  onDeleteCoinDatabase,
}) {
  const history = useHistory();
  const clickedCoin = history.location.state;

  const historyCoins = portfolioCoins.filter(
    (historyCoin) => historyCoin.name === clickedCoin.name
  );

  function navigateToForm() {
    history.push('/portfolio/addform', clickedCoin);
  }

  function navigateToPortfolio() {
    history.push('/portfolio', historyCoins);
  }

  return (
    <BodyWrapper>
      <HeadlineBlockWrapperStatic>
        <HeadlineWrapperStatic>
          <CoinImage src={clickedCoin.image} alt={clickedCoin.name} />
          <HeadlineName>
            {clickedCoin.symbol.toUpperCase()} History
          </HeadlineName>
          <CloseIcon title="Close" role="img" onClick={navigateToPortfolio} />
        </HeadlineWrapperStatic>
      </HeadlineBlockWrapperStatic>
      <Headline
        Headlinetext1="Exchange"
        Headlinetext2="Price"
        Headlinetext3="Holdings"
      />

      <CoinBodyWrapper>
        {historyCoins.length > 0 ? (
          <></>
        ) : (
          <EmptyEntryBox>
            Tap on the Add-Button to add your first transaction to your
            Portfolio.
          </EmptyEntryBox>
        )}
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
                          {parseFloat(
                            coin.price * coin.quantity
                          ).toLocaleString('de-DE', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </HoldingsBuy>
                      ) : (
                        <HoldingsSell>
                          -$
                          {parseFloat(
                            coin.price * coin.quantity
                          ).toLocaleString('de-DE', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </HoldingsSell>
                      )}
                      {coin.buyOrSell === 'buy' ? (
                        <QuantityBuy>
                          {coin.quantity.toLocaleString('de-DE', {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 3,
                          })}{' '}
                          {coin.symbol}
                        </QuantityBuy>
                      ) : (
                        <QuantitySell>
                          -
                          {coin.quantity.toLocaleString('de-DE', {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 3,
                          })}{' '}
                          {coin.symbol}
                        </QuantitySell>
                      )}
                    </HoldingsWrapper>
                  </CoinData>
                  <TrashCanImage
                    title="TrashCan"
                    role="img"
                    onClick={() => {
                      onDeleteCoinHistory(coin);
                      onDeleteCoinDatabase(coin);
                    }}
                  />
                </CoinRow>
              </CoinWrapper>
            </>
          );
        })}
      </CoinBodyWrapper>
      <ButtonAnchor>
        <AddButton onClick={navigateToForm} isStatic={isStatic}></AddButton>
        <AddSign
          onClick={navigateToForm}
          title="Plus"
          role="img"
          isStatic={isStatic}
        />
      </ButtonAnchor>

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
                      ${parseFloat(coin.price).toLocaleString('de-DE', {
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
                        {parseFloat(coin.price * coin.quantity)
                          .toLocaleString('de-DE', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
                      </HoldingsBuy>
                    ) : (
                      <HoldingsSell>
                        -$
                        {parseFloat(coin.price * coin.quantity)
                          .toLocaleString('de-DE', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
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
                <TrashCanImage title="TrashCan" role="img" />
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
    </BodyWrapper>
  );
}

const BodyWrapper = styled.div`
  margin-bottom: 5.5rem;
`;

const HeadlineWrapperStatic = styled.div`
  margin-top: 32.5px;
  display: flex;
  justify-content: center;
  font-weight: bold;
  width: 320px;
  position: ${(props) => (props.isStatic ? 'static' : 'fixed')};
  background-color: white;
  z-index: 100;
`;

const HeadlineBlockWrapperStatic = styled.div`
  margin-top: 0px;
  width: 100%;
  position: ${(props) => (props.isStatic ? 'static' : 'fixed')};
  height: 117px;
  background-color: white;
  z-index: 99;
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
  left: 16rem;
  top: 0.15rem;
  height: 1.2rem;
  width: 1.2rem;
  margin: 0 1.5rem 0 3rem;
  cursor: pointer;
  position: absolute;
`;

const BuyImage = styled(BuySellIcon)`
  height: 2rem;
  width: 2rem;
  margin-right: 1rem;
  fill: green;
`;

const SellImage = styled(BuySellIcon)`
  height: 2rem;
  width: 2rem;
  margin-right: 1rem;
  fill: red;
`;

const CoinBodyWrapper = styled.div`
  padding-top: 116px;
`;

const EmptyEntryBox = styled.div`
  background: var(--secondary);
  color: var(--primary);
  padding: 1rem;
  margin: 1rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  text-align: center;
  width: 18.5rem;
`;

const CoinWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const CoinRow = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 5.625rem;
  width: 327px;
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
  width: 5.5rem;
`;

const PriceWrapper = styled.span`
  display: flex;
  flex-direction: column;
  text-align: right;
  width: 5rem;
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
  width: 6rem;
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
  width: 6.5rem;
  padding-bottom: 0.625rem;
  padding-right: 0.4rem;
  font-weight: bold;
  color: green;
`;

const HoldingsSell = styled.span`
  width: 6.5rem;
  padding-bottom: 0.625rem;
  padding-right: 0.4rem;
  font-weight: bold;
  color: red;
`;

const QuantityBuy = styled.span`
  width: 6.5rem;
  padding-right: 0.4rem;
  color: green;
  text-transform: uppercase;
  align-items: right;
`;

const QuantitySell = styled.span`
  width: 6.5rem;
  padding-right: 0.4rem;
  color: red;
  text-transform: uppercase;
  align-items: right;
`;

const TrashCanImage = styled(TrashCan)`
  height: 2.25rem;
  width: 2.25rem;
  margin-left: 0.4rem;
  margin-right: 0.1rem;

  cursor: pointer;
`;

const ButtonAnchor = styled.div`
  position: relative;
`;

const AddButton = styled.button`
  background: linear-gradient(135deg, #ffc608, #f7931a, #b1583e);
  border-radius: 50%;
  border: none;
  width: 3.25rem;
  height: 3.25rem;
  bottom: 8rem;
  margin-left: 17.1rem;
  cursor: pointer;
  position: absolute;
  position: ${(props) => (props.isStatic ? 'static' : 'fixed')};
`;

const AddSign = styled(PlusIcon)`
  border-radius: 50%;
  width: 1.65rem;
  height: 1.65rem;
  bottom: 8.75rem;
  margin-left: 17.9rem;
  cursor: pointer;
  position: absolute;
  position: ${(props) => (props.isStatic ? 'static' : 'fixed')};
`;
