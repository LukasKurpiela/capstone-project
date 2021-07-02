import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { loadFromLocal, saveToLocal } from './lib/localStorage';
import styled from 'styled-components';
import Header from './components/Header';
import Coinpage from './pages/Coinpage';
import Searchbar from './components/Searchbar';
import Portfoliobar from './components/Portfoliobar';
import Portfoliopage from './pages/Portfoliopage';
import AddForm from './pages/AddForm';
import PortfolioOverview from './pages/CoinOverview';
import Newspage from './pages/Newspage';

function App() {
  const [allCoins, setAllCoins] = useState(loadFromLocal('allCoins') ?? []);
  const [likedCoins, setLikedCoins] = useState(
    loadFromLocal('likedCoins') ?? []
  );
  const [portfolioCoins, setPortfolioCoins] = useState(
    loadFromLocal('portfolioCoins') ?? []
  );
  const [news, setNews] = useState([]);
  const [exchanges, setExchanges] = useState(loadFromLocal('exchanges') ?? []);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    )
      .then((result) => result.json())
      .then((allCoins) => {
        const updatedCoins = allCoins.map((coin) => {
          return {
            ...coin,
            isFavorite: likedCoins.some(
              (likedCoin) => likedCoin.id === coin.id
            ),
          };
        });
        setAllCoins(updatedCoins);
      })
      .catch((error) => console.error(error.message));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/exchanges')
      .then((result) => result.json())
      .then((exchangesFromApi) => setExchanges(exchangesFromApi))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetch('/apiNews')
      .then((result) => result.json())
      .then((newsFromApi) => {
        setNews(newsFromApi);
      });
  }, []);

  useEffect(() => {
    saveToLocal('allCoins', allCoins);
  }, [allCoins]);

  useEffect(() => {
    saveToLocal('likedCoins', likedCoins);
  }, [likedCoins]);

  useEffect(() => {
    saveToLocal('exchanges', exchanges);
  }, [exchanges]);

  useEffect(() => {
    saveToLocal('portfolioCoins', portfolioCoins);
  }, [portfolioCoins]);

  function addCoin(portfolioCoin) {
    setPortfolioCoins([...portfolioCoins, portfolioCoin]);
  }

  function loadFavoriteCoin(coins, setFavorites) {
    const selectedCoin = coins.filter((eachCoin) => eachCoin.isFavorite);
    setFavorites(selectedCoin);
  }

  function toggleFavorite(coinToToggle) {
    const updatedCoinList = allCoins.map((eachCoin) => {
      if (eachCoin.name === coinToToggle.name) {
        eachCoin.isFavorite = !eachCoin.isFavorite;
      }
      return eachCoin;
    });
    setAllCoins(updatedCoinList);
    loadFavoriteCoin(allCoins, setLikedCoins);
  }

  function deleteCoinHistory(coinToDelete) {
    const updatedPortfolioCoin = portfolioCoins.filter(
      (coin) => coin.id !== coinToDelete.id
    );
    setPortfolioCoins(updatedPortfolioCoin);
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
        </Route>
        <Route exact path="/portfolio">
          <Portfoliobar
            portfolioCoins={portfolioCoins}
            likedCoins={likedCoins}
          />
          <Portfoliopage
            likedCoins={likedCoins}
            onToggleFavorite={toggleFavorite}
            filteredCoins={filteredCoins}
            allCoins={allCoins}
            portfolioCoins={portfolioCoins}
            // setPortfolioValue={setPortfolioValue}
          />
        </Route>
        <Route path="/portfolio/overview">
          <PortfolioOverview
            exchanges={exchanges}
            portfolioCoins={portfolioCoins}
            allCoins={allCoins}
            onDeleteCoinHistory={deleteCoinHistory}
          />
        </Route>
        <Route path="/portfolio/addform">
          <AddForm
            exchanges={exchanges}
            likedCoins={likedCoins}
            onToggleFavorite={toggleFavorite}
            filteredCoins={filteredCoins}
            allCoins={allCoins}
            onAddCoin={addCoin}
            portfolioCoins={portfolioCoins}
          />
        </Route>
        <Route path="/news">
          <Newspage news={news} />
        </Route>
      </Switch>
    </CoinApp>
  );
}

export default App;

const CoinApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
