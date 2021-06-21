import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { loadFromLocal, saveToLocal } from './lib/localStorage';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Coinpage from './pages/Coinpage';
import Searchbar from './components/Searchbar';
import Portfoliobar from './components/Portfoliobar';
import Portfoliopage from './pages/Portfoliopage';

function App() {
  const [coins, setCoins] = useState([]);
  const [allCoins, setAllCoins] = useState(loadFromLocal('allCoins') ?? []);
  // const [allCoins, setAllCoins] = useState([], () => {
  //   const localData = localStorage.getItem('allCoins');
  //   return localData ? JSON.parse(localData) : [];
  // });

  const [search, setSearch] = useState('');
  const [likedCoins, setLikedCoins] = useState(
    loadFromLocal('favoriteCoins') ?? []
  );

  useEffect(() => {
    fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    )
      .then((result) => result.json())
      .then((coins) =>
        setCoins(
          coins.map((coin) => {
            return {
              name: coin.name,
              image: coin.image,
              symbol: coin.symbol,
              price: coin.current_price,
              priceChange: coin.price_change_percentage_24h,
              marketCap: coin.market_cap,
              volume: coin.total_volume,
              isFavorite: false,
            };
          })
        )
      )
      .catch((error) => console.error(error.message));
    console.log(coins);
  }, []);

  useEffect(() => {
    fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    )
      .then((result) => result.json())
      .then((allCoins) =>
        setAllCoins(
          allCoins.map((coin) => {
            return {
              // if (isFavorite = false || isFavorite === "")
              ...coin,
              isFavorite: false,
            };
          })
        )
      )
      .catch((error) => console.error(error.message));
    console.log(allCoins);
  }, []);

  useEffect(() => {
    saveToLocal('allCoins', allCoins);
  }, [allCoins]);

  useEffect(() => {
    saveToLocal('favoriteCoins', likedCoins);
  }, [likedCoins]);

  function loadFavoriteCoin(coins, setFavorites) {
    const selectedCoin = coins.filter((eachCoin) => eachCoin.isFavorite);
    setFavorites(selectedCoin);
  }

  function toggleFavorite(coinToToggle) {
    const updatedCoinList = allCoins.map((name, isFavorite) => {
      if (name === coinToToggle.name) {
        isFavorite = !isFavorite;
      }
      return eachCoin;
    });
    setAllCoins(updatedCoinList);
    loadFavoriteCoin(allCoins, setLikedCoins);
  }

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = allCoins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <CoinApp>
      <Header />
      <Switch>
        <Route exact path="/">
          <main>
            <Searchbar
              search={search}
              handleChange={handleChange}
              filteredCoins={filteredCoins}
            />
            <Coinpage
              onToggleFavorite={toggleFavorite}
              filteredCoins={filteredCoins}
              allCoins={allCoins}
            />
          </main>
        </Route>
        <Route path="/portfolio">
          <main>
            <Portfoliobar />
            <Portfoliopage
              likedCoins={likedCoins}
              onToggleFavorite={toggleFavorite}
              filteredCoins={filteredCoins}
            />
          </main>
        </Route>
        <Route path="/news"></Route>
      </Switch>
      <Footer />
    </CoinApp>
  );
}

export default App;

const CoinApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
