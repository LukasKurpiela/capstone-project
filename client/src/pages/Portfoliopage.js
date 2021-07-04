import Portfolio from '../components/Portfolio';
import Headline from '../components/Headline';
import Footer from '../components/Footer';
import styled from 'styled-components';

export default function Portfoliopage({
  onToggleFavorite,
  likedCoins,
  allCoins,
  portfolioCoins,
  onAddTotalValue,
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
            onAddTotalValue={onAddTotalValue}
          />
        );
      })}
      <Footer />
    </>
  );
}

const PortfolioBar = styled.div`
  margin: 26px 14px 30px 14px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  box-shadow: 0 1px 2px #87878a;
  padding-left: 16px;
  width: 300px;
  height: 50px;
  border-radius: 4px;
  border: none;
  background-color: #f8f8ff;
  position: ${(props) => (props.isStatic ? 'static' : 'fixed')};
  z-index: 100;
`;

const PortfoliobarHeading = styled.span`
  margin: 5px 0;
  font-size: 12px;
`;
const PortfoliobarValue = styled.span`
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 16px;
`;

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
