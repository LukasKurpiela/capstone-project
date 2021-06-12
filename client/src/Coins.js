import React from 'react';
import styled from 'styled-components';
import StarNotSelected from './Images/star-white.png'
import StarSelected from './Images/star-yellow.png'

const Coins = ({
  name,
  image,
  symbol,
  marketCap,
  price,
  priceChange,
  volume
}) => {
  return (
    <CoinWrapper>
      <CoinRow>
          <CoinImage src={image} alt="crypto" />
          <CoinNameWrapper>
          <CoinName>{name}</CoinName>
          <TickerSymbol>{symbol}</TickerSymbol>
        </CoinNameWrapper>
        <CoinData>
          <PriceWrapper>
          <CoinPrice>${price.toLocaleString()}</CoinPrice>
          {priceChange < 0 ? (
            <PriceChangeNegative>{priceChange.toFixed(2)}%</PriceChangeNegative>
          ) : (
            <PriceChangePositive>{priceChange.toFixed(2)}%</PriceChangePositive>
          )}
          </PriceWrapper>
          <MarketCapWrapper>
          <CoinMarketCap>${marketCap.toLocaleString()}</CoinMarketCap>
          <CoinVolume>${volume.toLocaleString()}</CoinVolume>
          </MarketCapWrapper>
        </CoinData>
        <StarImage src={StarSelected} alt="empty star" />
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
  height:92.5px;
  border-bottom: 1px solid #d7d7d7;
  /* width: 900px; */
`;

const CoinNameWrapper = styled.p`
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: space-between;
  width: 100%;

  /* display: flex;
  align-items: center; */
  /* padding-right: 24px; */
  /* min-width: 175px; */
`;

const PriceWrapper = styled.p`
display: flex;
flex-direction: column;
  text-align: right;
`

const MarketCapWrapper = styled.p`
display: flex;
flex-direction: column;
  text-align: right;
`

const CoinImage = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
`;

const CoinName = styled.p`
  font-size: 16px;
  width: 85px;
    padding-bottom: 10px;
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
  width: 85px;
  padding-bottom: 10px;
  /* display: none; */
`;

const PriceChangeNegative = styled.p`
  color: red;
`;

const PriceChangePositive = styled.p`
  color: green;
`;

const CoinMarketCap = styled.p`
  width: 150px;
  padding-bottom: 10px;
  /* display: none; */
`;

const CoinVolume = styled.p`
  width: 150px;
`;

const StarImage = styled.img`
height: 15px;
  width: 15px;
  margin-left: 5px;
  
  `

// const media = {
//   desktop: '@media(min-width: 900px)',
// };

// ${media.desktop} {
//   display: flex;
//   justify-content: center;
// } ...
