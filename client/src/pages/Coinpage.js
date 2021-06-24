import Coins from '../components/Coins';
import Headline from '../components/Headline';
import Footer from '../components/Footer';

export default function Coinpage({ filteredCoins, onToggleFavorite }) {
  return (
    <>
      <Headline Headlinetext="Market Cap." />
      {filteredCoins.map((coin) => {
        return <Coins coin={coin} onToggleFavorite={onToggleFavorite} />;
      })}
      <Footer />
    </>
  );
}
