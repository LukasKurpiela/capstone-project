import React from 'react';
import styled from 'styled-components';

const Coins = ({
  name,
  image,
  symbol,
  marketCap,
  price,
  priceChange,
  volume,
}) => {
  return (
    <CoinWrapper>
      <CoinRow>
        <Coin>
          <Image src={image} alt="crypto" />
          <CoinName>{name}</CoinName>
          <TickerSymbol>{symbol}</TickerSymbol>
        </Coin>
        <CoinData>
          <CoinPrice>${price.toLocaleString()}</CoinPrice>
          <CoinMarketCap>${marketCap.toLocaleString()}</CoinMarketCap>
          {priceChange < 0 ? (
            <PriceChangeNegative>{priceChange.toFixed(2)}%</PriceChangeNegative>
          ) : (
            <PriceChangePositive>{priceChange.toFixed(2)}%</PriceChangePositive>
          )}
          <CoinVolume>${volume.toLocaleString()}</CoinVolume>
        </CoinData>
      </CoinRow>
    </CoinWrapper>
  );
};

export default Coins;

const media = {
  desktop: '@media(min-width: 376px)',
};

const CoinWrapper = styled.div`
  display: flex;
  justify-content: center;

  ${media.desktop} {
    display: flex;
    justify-content: center;
  }
`;

const CoinRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid #d7d7d7;
  width: 900px;

  ${media.desktop} {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    height: 80px;
    border-bottom: 1px solid #d7d7d7;
    width: 900px;
  }
`;

const Coin = styled.div`
  display: flex;
  align-items: center;
  padding-right: 24px;
  min-width: 300px;

  ${media.desktop} {
    display: flex;
    align-items: center;
    padding-right: 24px;
    min-width: 300px;
  }
`;

const Image = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;

  ${media.desktop} {
    height: 30px;
    width: 30px;
    margin-right: 10px;
  }
`;

const CoinName = styled.h1`
  font-size: 16px;
  width: 150px;

  ${media.desktop} {
    font-size: 16px;
    width: 150px;
  }
`;

const TickerSymbol = styled.p`
  text-transform: uppercase;

  ${media.desktop} {
    text-transform: uppercase;
  }
`;

const CoinData = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-between;
  width: 100%;

  ${media.desktop} {
    display: flex;
    text-align: center;
    justify-content: space-between;
    width: 100%;
  }
`;

const CoinPrice = styled.p`
  width: 110px;
  /* display: none; */

  ${media.desktop} {
    width: 110px;
    /* display: contents; */
  }
`;

const CoinMarketCap = styled.p`
  width: 240px;
  /* display: none; */

  ${media.desktop} {
    width: 240px;
    /* display: contents; */
  }
`;

const PriceChangeNegative = styled.p`
  width: 80px;
  color: red;

  ${media.desktop} {
    width: 80px;
    color: red;
  }
`;

const PriceChangePositive = styled.p`
  width: 80px;
  color: green;

  ${media.desktop} {
    width: 80px;
    color: green;
  }
`;

const CoinVolume = styled.p`
  width: 200px;

  ${media.desktop} {
    width: 200px;
  }
`;
