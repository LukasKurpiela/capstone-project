import React from 'react';
import styled from 'styled-components';

const Coins_desktop = ({
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
          {priceChange < 0 ? (
            <PriceChangeNegative>{priceChange.toFixed(2)}%</PriceChangeNegative>
          ) : (
            <PriceChangePositive>{priceChange.toFixed(2)}%</PriceChangePositive>
          )}
          <CoinMarketCap>${marketCap.toLocaleString()}</CoinMarketCap>

          <CoinVolume>${volume.toLocaleString()}</CoinVolume>
        </CoinData>
      </CoinRow>
    </CoinWrapper>
  );
};

export default Coins;

const CoinWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const CoinRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  height: 100px;
  border-bottom: 1px solid #d7d7d7;
  /* width: 900px; */
`;

const Coin = styled.div`
  display: flex;
  align-items: center;
  /* padding-right: 24px; */
  min-width: 300px;
`;

const Image = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
`;

const CoinName = styled.h1`
  font-size: 16px;
  width: 150px;
`;

const TickerSymbol = styled.p`
  text-transform: uppercase;
`;

const CoinData = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-between;
  width: 100%;
`;

const CoinPrice = styled.p`
  width: 100px;
  /* display: none; */
`;

const PriceChangeNegative = styled.p`
  width: 60px;
  color: red;
`;

const PriceChangePositive = styled.p`
  width: 60px;
  color: green;
`;

const CoinMarketCap = styled.p`
  width: 190px;
  /* display: none; */
`;

const CoinVolume = styled.p`
  width: 175px;
`;

// const media = {
//   desktop: '@media(min-width: 900px)',
// };

// ${media.desktop} {
//   display: flex;
//   justify-content: center;
// } ...
