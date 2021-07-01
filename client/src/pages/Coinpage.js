import Coins from '../components/Coins';
import Headline from '../components/Headline';
import Footer from '../components/Footer';
import styled from 'styled-components';

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

const CoinBlockWrapperStatic = styled.div`
  padding-top: 116px;
  width: 100%;
  background-color: white;
  z-index: 99;
  position: ${(props) => (props.isStatic ? 'static' : 'fixed')};
`;

const CoinBlockWrapper = styled.div`
  padding-top: 114px;
`;
