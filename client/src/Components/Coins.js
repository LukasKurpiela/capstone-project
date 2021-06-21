import React from 'react';
import styled from 'styled-components';
import { ReactComponent as StarNotFilled } from '../images/star-noFill-empty.svg';
import { ReactComponent as StarFilled } from '../images/star-noFill-filled.svg';

export default function Coins({ coin, onToggleFavorite }) {
  const { image, name, symbol } = coin;
  const { price_change_percentage_24h: priceChange, current_price: price } =
    coin;
  const { market_cap: marketCap, total_volume: volume } = coin;

  return (
    <CoinWrapper>
      <CoinRow>
        <CoinImage src={image} alt={name} />
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
  height: 5.625rem;
  border-bottom: 1px solid #d7d7d7;
`;

const CoinNameWrapper = styled.span`
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: space-between;
  width: 100%;
`;

const PriceWrapper = styled.span`
  display: flex;
  flex-direction: column;
  text-align: right;
`;

const MarketCapWrapper = styled.span`
  display: flex;
  flex-direction: column;
  text-align: right;
`;

const CoinImage = styled.img`
  height: 1.5rem;
  width: 1.5rem;
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

const CoinMarketCap = styled.span`
  width: 7.8rem;
  padding-bottom: 10px;
  font-weight: bold;
`;

const CoinVolume = styled.span`
  width: 7.8rem;
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
