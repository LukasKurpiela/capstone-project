import React from 'react';
import styled from 'styled-components';
import StarNotSelected from './Images/star-white.png'
import StarSelected from './Images/star-yellow.png'

export default function Coins ({
  key,
  name,
  image,
  symbol,
  marketCap,
  price,
  priceChange,
  volume, 
  onToggle
}) {

  return (
    <CoinWrapper>
    <CoinRow>
      {/* <CoinRow onClick={() => onToggle(coins)}>
      {coins.isFavorite} */}
          <CoinImage src={image} alt="crypto" />
          <CoinNameWrapper>
          <CoinName>{name}</CoinName>
          <TickerSymbol>{symbol}</TickerSymbol>
        </CoinNameWrapper>
        <CoinData>
          <PriceWrapper>
          <CoinPrice>${(price.toFixed(2))}</CoinPrice>
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
        <StarImage src={StarNotSelected} alt="empty star" />
      </CoinRow>
    </CoinWrapper>
  );
};



const CoinWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const CoinRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  height: 90px;
  border-bottom: 1px solid #d7d7d7;

  &:hover {
  background-color: #F8F8FF;
  box-shadow: 0px 1px 3px #87878A;
  border-radius: 5px;
  padding: 0 5px 0 5px
  }
  cursor: pointer;
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
  height: 25px;
  width: 25px;
  margin-right: 10px;
`;

const CoinName = styled.p`
  width: 65px;
  padding-bottom: 10px;
  font-weight: bold;
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
  width: 75px;
  padding-bottom: 10px;
  font-weight: bold;
  /* display: none; */
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
  /* display: none; */
`;

const CoinVolume = styled.p`
  width: 125px;
`;

const StarImage = styled.img`
height: 15px;
  width: 15px;
  margin-left: 10px;
  
  `

// const media = {
//   desktop: '@media(min-width: 900px)',
// };

// ${media.desktop} {
//   display: flex;
//   justify-content: center;
// } ...
