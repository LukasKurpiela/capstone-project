import Portfolio from '../components/Portfolio';
import Headline from '../components/Headline';
// import styled from 'styled-components/macro';
import Footer from '../components/Footer';

export default function Portfoliopage({
  onToggleFavorite,
  likedCoins,
  allCoins,
}) {
  return (
    <>
      <Headline
        Headlinetext1="Coin"
        Headlinetext2="Price"
        Headlinetext3="Holdings"
      />
      {likedCoins.map((coin) => {
        return (
          <Portfolio
            coin={coin}
            onToggleFavorite={onToggleFavorite}
            favoriteCoins={likedCoins}
            allCoins={allCoins}
          />
        );
      })}
      <Footer />
    </>
  );
}
