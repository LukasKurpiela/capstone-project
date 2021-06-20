import Portfolio from '../components/Portfolio';
import Headline from '../components/Headline';

export default function Portfoliopage({
  filteredCoins,
  onToggleFavorite,
  likedCoins,
}) {
  return (
    <>
      <Headline Headlinetext="Holdings" />
      {likedCoins.map((coin) => {
        return (
          <Portfolio
            coin={coin}
            onToggleFavorite={onToggleFavorite}
            favoriteCoins={likedCoins}
          />
        );
      })}
    </>
  );
}
