import PropTypes from 'prop-types';
import Portfolio from '../components/Portfolio';
import Headline from '../components/Headline';
import Footer from '../components/Footer';
import styled from 'styled-components';

export default function Portfoliopage({
  onToggleFavorite,
  likedCoins,
  allCoins,
  portfolioCoins,
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
          />
        );
      })}
      <Footer />
    </>
  );
}

Portfoliopage.propTypes = {
  onToggleFavorite: PropTypes.func,
  likedCoins: PropTypes.arrayOf(PropTypes.object),
  allCoins: PropTypes.arrayOf(PropTypes.object),
  portfolioCoins: PropTypes.arrayOf(PropTypes.object),
  onAddTotalValue: PropTypes.func,
};
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
