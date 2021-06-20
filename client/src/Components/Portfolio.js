import React from 'react';
import styled from 'styled-components';
import { ReactComponent as StarNotFilled } from '../images/star-noFill-empty.svg';
import { ReactComponent as StarFilled } from '../images/star-noFill-filled.svg';

export default function Portfolio({ coin, onToggleFavorite }) {
  const { image, name, symbol } = coin;
  const priceChange = coin.price_change_percentage_24h;
  const price = coin.current_price;

  return (
    <CoinWrapper>
      <CoinRow>
        {/* <CoinRow onClick={() => loadPortfolioOverview(coin)}> */}
        <CoinImage src={image} alt="Logo of cryptocurrency" />
        <CoinNameWrapper>
          <CoinName>{name}</CoinName>
          <CoinSymbol>{symbol}</CoinSymbol>
        </CoinNameWrapper>
        <CoinData>
          <PriceWrapper>
            <CoinPrice>${price.toFixed(2)}</CoinPrice>
            {priceChange < 0 ? (
              <PriceChangeNegative>
                {priceChange.toFixed(2)}%
              </PriceChangeNegative>
            ) : (
              <PriceChangePositive>
                {priceChange.toFixed(2)}%
              </PriceChangePositive>
            )}
          </PriceWrapper>
          <HoldingsWrapper>
            <CoinHoldingsTotal>$----.--</CoinHoldingsTotal>
            <CoinHoldingsPerCoin>$--.--</CoinHoldingsPerCoin>
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
  height: 90px;
  border-bottom: 1px solid #d7d7d7;

  &:hover {
    background-color: #f8f8ff;
    box-shadow: 0px 1px 3px #87878a;
    border-radius: 5px;
    padding: 0 5px 0 5px;
  }
  cursor: pointer;
`;

const CoinNameWrapper = styled.p`
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: space-between;
  width: 100%;
`;

const PriceWrapper = styled.p`
  display: flex;
  flex-direction: column;
  text-align: right;
`;

const HoldingsWrapper = styled.p`
  display: flex;
  flex-direction: column;
  text-align: right;
`;

const CoinImage = styled.img`
  height: 25px;
  width: 25px;
  margin-right: 10px;
`;

const CoinName = styled.p`
  width: 65px;
  padding-bottom: 10px;
  font-weight: bold;
`;

const CoinSymbol = styled.p`
  text-transform: uppercase;
`;

const CoinData = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-between;
  width: 100%;
`;

const CoinPrice = styled.p`
  width: 75px;
  padding-bottom: 10px;
  font-weight: bold;
`;

const PriceChangeNegative = styled.p`
  color: red;
`;

const PriceChangePositive = styled.p`
  color: green;
`;

const CoinHoldingsTotal = styled.p`
  width: 125px;
  padding-bottom: 10px;
  font-weight: bold;
`;

const CoinHoldingsPerCoin = styled.p`
  width: 125px;
`;

const StarImageFilled = styled(StarFilled)`
  height: 20px;
  width: 20px;
  margin-left: 10px;
  cursor: pointer;
`;

const StarImageEmpty = styled(StarNotFilled)`
  height: 20px;
  width: 20px;
  margin-left: 10px;
  cursor: pointer;
`;
