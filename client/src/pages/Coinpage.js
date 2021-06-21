import Coins from '../components/Coins';
import Headline from '../components/Headline';

export default function Coinpage({ filteredCoins, onToggleFavorite }) {
  return (
    <>
      <Headline Headlinetext="Market Cap." />
      {filteredCoins.map((coin) => {
        return <Coins coin={coin} onToggleFavorite={onToggleFavorite} />;
      })}
    </>
  );
}
