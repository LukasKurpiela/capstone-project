import Coins from '../components/Coins';
import Headline from '../components/Headline';
import Footer from '../components/Footer';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function Coinpage({ filteredCoins, onToggleFavorite }) {
  return (
    <>
      <Headline
        Headlinetext1="Coin"
        Headlinetext2="Price"
        Headlinetext3="Market Cap."
      />
      <CoinBlockWrapperStatic />
      <CoinBlockWrapper />
      {filteredCoins.map((coin) => {
        return <Coins coin={coin} onToggleFavorite={onToggleFavorite} />;
      })}
      <Footer />
    </>
  );
}

Coinpage.propTypes = {
  filteredCoins: PropTypes.arrayOf(PropTypes.object),
  onToggleFavorite: PropTypes.func,
};

const CoinBlockWrapperStatic = styled.div`
  padding-top: 116px;
  width: 100%;
  background-color: white;
  z-index: 99;
  position: ${(props) => (props.isStatic ? 'static' : 'fixed')};
`;

const CoinBlockWrapper = styled.div`
  margin-top: 116px;
`;
