import React from 'react';
import styled from 'styled-components';
import { ReactComponent as StarNotFilled } from '../images/star-noFill-empty.svg';
import { ReactComponent as StarFilled } from '../images/star-noFill-filled.svg';

export default function Coins({ coin, onToggleFavorite }) {
  const { image, name, symbol } = coin;
  const {price_change_percentage_24h: priceChange, current_price: price} = coin;
  const {market_cap: marketCap, total_volume: volume} = coin;

  return (
    <CoinWrapper>
      <CoinRow>
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
          <MarketCapWrapper>
            <CoinMarketCap>${marketCap.toLocaleString()}</CoinMarketCap>
            <CoinVolume>${volume.toLocaleString()}</CoinVolume>
          </MarketCapWrapper>
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

const MarketCapWrapper = styled.p`
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

const CoinMarketCap = styled.p`
  width: 125px;
  padding-bottom: 10px;
  font-weight: bold;
`;

const CoinVolume = styled.p`
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
