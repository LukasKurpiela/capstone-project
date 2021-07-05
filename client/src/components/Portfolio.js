import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { ReactComponent as StarNotFilled } from '../images/star-noFill-empty.svg';
import { ReactComponent as StarFilled } from '../images/star-noFill-filled.svg';
import { calculateQuantityPerCoin } from '../lib/calculations';

export default function Portfolio({
  coin,
  onToggleFavorite,
  allCoins,
  portfolioCoins,
  onAddTotalValue,
}) {
  const history = useHistory();

  const updatedCoin = allCoins.find(
    (favoriteCoin) => favoriteCoin.name === coin.name
  );

  const historyCoins = portfolioCoins.filter(
    (historyCoin) => historyCoin.name === coin.name
  );

  const { image, name, symbol } = updatedCoin;
  const { price_change_percentage_24h: priceChange, current_price: price } =
    updatedCoin;

  function setPortfolioValuePerCoin(historyCoins) {
    const totalValuePerCoin = price * calculateQuantityPerCoin(historyCoins);
    // onAddTotalValue(totalValuePerCoin);
    return totalValuePerCoin;
  }

  function navigateToOverview() {
    history.push('/portfolio/overview', updatedCoin);
  }

  Portfolio.propTypes = {
    coin: PropTypes.object,
    onToggleFavorite: PropTypes.func,
    allCoins: PropTypes.arrayOf(PropTypes.object),
    portfolioCoins: PropTypes.arrayOf(PropTypes.object),
    onAddTotalValue: PropTypes.func,
  };

  return (
    <CoinWrapper>
      <CoinRow>
        <CoinImage src={image} alt={name} />
        <CoinNameWrapper onClick={navigateToOverview}>
          <CoinName>{name}</CoinName>
          <CoinSymbol>{symbol}</CoinSymbol>
        </CoinNameWrapper>
        <CoinData>
          <PriceWrapper onClick={navigateToOverview}>
            <CoinPrice>
              $
              {price.toLocaleString('de-DE', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </CoinPrice>
            {priceChange < 0 ? (
              <PriceChangeNegative>
                {priceChange.toFixed(2).replace('.', ',')}%
              </PriceChangeNegative>
            ) : (
              <PriceChangePositive>
                {priceChange.toFixed(2).replace('.', ',')}%
              </PriceChangePositive>
            )}
          </PriceWrapper>
          <HoldingsWrapper onClick={navigateToOverview}>
            <CoinHoldingsPerCoin>
              $
              {setPortfolioValuePerCoin(historyCoins).toLocaleString('de-DE', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 3,
              })}
            </CoinHoldingsPerCoin>
            <CoinQuantityPerCoin>
              {calculateQuantityPerCoin(historyCoins).toLocaleString({
                minimumFractionDigits: 2,
                maximumFractionDigits: 3,
              })}{' '}
              {symbol}
            </CoinQuantityPerCoin>
          </HoldingsWrapper>
        </CoinData>
        <span onClick={() => onToggleFavorite(coin)}>
          {coin.isFavorite ? (
            <StarImageFilled title="StarFilled" role="img" />
          ) : (
            <StarImageEmpty title="StarNotFilled" role="img" />
          )}
        </span>
      </CoinRow>
    </CoinWrapper>
  );
}

const CoinWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const CoinRow = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 5.625rem;
  border-bottom: 1px solid #d7d7d7;
`;

const CoinNameWrapper = styled.span`
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
`;

const PriceWrapper = styled.span`
  display: flex;
  flex-direction: column;
  text-align: right;
  cursor: pointer;
`;

const HoldingsWrapper = styled.span`
  display: flex;
  flex-direction: column;
  text-align: right;
  cursor: pointer;
`;

const CoinImage = styled.img`
  height: 1.35rem;
  width: 1.35rem;
  margin-right: 0.625rem;
`;

const CoinName = styled.span`
  width: 4rem;
  padding-bottom: 10px;
  font-weight: bold;
`;

const CoinSymbol = styled.span`
  text-transform: uppercase;
`;

const CoinData = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-between;
  width: 100%;
`;

const CoinPrice = styled.span`
  width: 4.7rem;
  padding-bottom: 10px;
  font-weight: bold;
`;

const PriceChangeNegative = styled.span`
  color: red;
`;

const PriceChangePositive = styled.span`
  color: green;
`;

const CoinHoldingsPerCoin = styled.span`
  width: 7.8rem;
  padding-bottom: 10px;
  font-weight: bold;
`;

const CoinQuantityPerCoin = styled.span`
  width: 7.8rem;
  text-transform: uppercase;
`;

const StarImageFilled = styled(StarFilled)`
  height: 1.25rem;
  width: 1.25rem;
  margin-left: 10px;
  cursor: pointer;
`;

const StarImageEmpty = styled(StarNotFilled)`
  height: 1.25rem;
  width: 1.25rem;
  margin-left: 10px;
  cursor: pointer;
`;
