import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Footerbutton from '../components/Footerbutton';
import { ReactComponent as Close } from '../images/close.svg';

export default function PortfolioOverview({
  allCoins,
  likedCoins,
  exchanges,
  portfolioCoins,
  coin,
}) {
  const { image, name, symbol } = coin;
  const { price_change_percentage_24h: priceChange, current_price: price } =
    coin;
  const { market_cap: marketCap, total_volume: volume } = coin;

  function calcSum() {
    return likedCoins.reduce((total, { price = 0 }) => +total + +price, 0);
  }

  const history = useHistory();

  function navigateToForm() {
    history.push('/portfolio/addform');
  }

  function navigateToPortfolio() {
    history.push('/portfolio');
  }

  return (
    <>
      <Headline>
        <h2>History</h2>
        <CloseIcon title="Close" role="img" onClick={navigateToPortfolio} />
      </Headline>
      {likedCoins.map((coin) => {
        return (
          <CoinWrapper>
            <CoinRow>
              {/* <CoinImage src={image} alt={name} /> */}
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
            </CoinRow>
          </CoinWrapper>
        );
      })}
      <Footerbutton />
    </>
  );
}

const Headline = styled.div`
  padding-bottom: 1rem;
  display: flex;
  justify-content: center;
  font-weight: bold;
  margin-top: 110px;
  position: relative;
  width: 320px;
`;

const CloseIcon = styled(Close)`
  left: 15rem;
  top: 0.15rem;
  height: 1.2rem;
  width: 1.2rem;
  margin: 0 1.5rem 0 3rem;
  cursor: pointer;
  position: absolute;
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

// const CoinImage = styled.img`
//   height: 1.5rem;
//   width: 1.5rem;
//   margin-right: 0.625rem;
// `;

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

const Button = styled.button`
  font-weight: bold;
  padding: 1rem;
  width: 12rem;
  margin-top: 0.7rem;
  border: solid 1px;
  border-radius: 0.4rem;
  background: ${(props) => (props.isPrimary ? '#2EBDA3' : '#E84089')};
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin-bottom: 7rem;
`;

//     <div>
//       <Headline>
//         <ArrowBackIcon
//           title="ArrowBack"
//           role="img"
//           onClick={navigateToPortfolio}
//         />
//         <h2>Buy/Sell Overview</h2>
//       </Headline>
//       <Container>
//         <section>
//           <h3>Buy/Sell</h3>
//           {likedCoins.map((coin) => (
//             <p>{coin.name}</p>
//           ))}
//         </section>
//         <section>
//           <h3>Date</h3>
//           {likedCoins.map((coin) => (
//             <p>{coin.name}</p>
//           ))}
//         </section>
//         <section>
//           <h3>Exchange</h3>
//           {exchanges.map((exchange) => (
//             <p>{exchange.name}</p>
//           ))}
//         </section>
//         <section>
//           <h3>Quantity</h3>
//           {likedCoins.map((coin) => (
//             <p>{coin.current_price}</p>
//           ))}
//         </section>
//         <section>
//           <h3>Price</h3>
//           {likedCoins.map((coin) => (
//             <p>{coin.current_price}</p>
//           ))}
//           {/* <h3>{calcSum()}</h3> */}
//         </section>
//       </Container>
//       <article>
//         <Link to="/portfolio">Back</Link>
//       </article>
//       <Button isPrimary onClick={navigateToForm}>
//         Add Transaction
//       </Button>
//       <Footerbuttons />
//     </div>
//   );
// }

// const Container = styled.article`
//   /* border-radius: 10px;
//   background: var(--tertiary);
//   display: grid;
//   grid-template-columns: 1.5fr 1fr;
//   margin: 1rem;
//   padding: 0.5rem; */

//   display: flex;
//   justify-content: space-between;
//   background: var(--tertiary);
//   margin-bottom: 1rem;
// `;
