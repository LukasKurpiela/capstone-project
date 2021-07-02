import Portfolio from '../components/Portfolio';
import Headline from '../components/Headline';
import Footer from '../components/Footer';
import styled from 'styled-components';

export default function Portfoliopage({
  onToggleFavorite,
  likedCoins,
  allCoins,
  portfolioCoins,
  historyCoins,
  onCalculateQuantityPerCoin,
  setPortfolioValue,
}) {
  return (
    <>
      <Headline
        Headlinetext1="Coin"
        Headlinetext2="Price"
        Headlinetext3="Holdings"
      />
      <PortfolioWrapperStatic />
      <PortfolioBlockWrapper />
      {likedCoins.map((coin) => {
        return (
          <Portfolio
            coin={coin}
            onToggleFavorite={onToggleFavorite}
            likedCoins={likedCoins}
            allCoins={allCoins}
            portfolioCoins={portfolioCoins}
            onCalculateQuantityPerCoin={onCalculateQuantityPerCoin}
            historyCoins={historyCoins}
            setPortfolioValue={setPortfolioValue}
          />
        );
      })}
      <Footer />
    </>
  );
}

const PortfolioWrapperStatic = styled.div`
  padding-top: 116px;
  width: 100%;
  background-color: white;
  z-index: 99;
  position: ${(props) => (props.isStatic ? 'static' : 'fixed')};
`;

const PortfolioBlockWrapper = styled.div`
  margin-top: 116px;
`;
