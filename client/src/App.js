// import { Route, Switch, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import StickyHeader from 'react-sticky-header';
import axios from 'axios';
import Coins from './Coins';
import styled from 'styled-components';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { saveToLocal, loadFromLocal } from './lib/localStorage';

// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false

function App() {
  const [coins, setCoins] = useState([]);
  const [likedCoins, setLikedCoins] = useState(loadFromLocal('favoriteCoins') ?? []);
  const [search, setSearch] = useState('');

  const [showMarketsIcon, setShowMarketsIcon] = useState(true);
  const [showPortfolioIcon, setShowPortfolioIcon] = useState(true);
  const [showNewsIcon, setShowNewsIcon] = useState(true);

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then((res) => {
        setCoins(res.data);
        // console.log(res.data)
      })
      .catch((error) => console.log(error));
      return {
        isFavorite: false
      }
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    saveToLocal('favoriteCoins', likedCoins);
  }, [likedCoins]);

   function toggleFavorite(itemToToggle) {
    const updatedCoinsList = coins.map((selectedCoin) => {
      if (selectedCoin.id === itemToToggle.id) {
        selectedCoin.isFavorite = !selectedCoin.isFavorite;
      }
      return selectedCoin;
    });
    setCoins(updatedCoinsList);
    // loadFavoriteCoins(coins, setLikedCoins);
  }

  return (
    <CoinApp>
      <Header />
      {/* <CoinText>CoinTrax</CoinText> */}
      <SearchBar>
        <form>
          <CoinInput type="text" placeholder="Search" onChange={handleChange} />
        </form>
      </SearchBar>
      <HeadlineWrapper>
        <p>Coin</p>
        <p>Price</p>
        <p>Market Cap.</p>
      </HeadlineWrapper>
<main>
      {filteredCoins.map((coin) => {
        return (
          <Coins
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketCap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
            toggleFavorite={toggleFavorite}
          />
        );
      })}
      </main>
      <Footer 
      showMarketsIcon={showMarketsIcon}
      setShowMarketsIcon={setShowMarketsIcon}
      showPortfolioIcon={showPortfolioIcon}
      setShowPortfolioIcon={setShowPortfolioIcon}
      showNewsIcon={showNewsIcon}
      setShowNewsIcon={setShowNewsIcon}
      />
    </CoinApp>
  );
}

export default App;

const CoinApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 64 px;
`;

// const CoinText = styled.h1`
//   margin-bottom: 32px;
//   text-align: center;
// `;



const HeadlineWrapper = styled.h4`
  width: 265px;
  margin: 0px 10px 10px 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: sticky;
`;

const SearchBar = styled.div`
  margin: 115px 0 30px 0;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 2px #87878A;
`;

const CoinInput = styled.input`
  padding-left: 16px;
  width: 300px;
  height: 40px;
  border-radius: 4px;
  border: none;
  background-color: #F8F8FF;
  color: #515154;

  &::placeholder {
    color: #515154;
  }
`;

// Cryptocompare
// WebSocket Base URL: wss://streamer.cryptocompare.com/v2
// const API_KEY = bdb27b9f6be05992ef59e9a7b3cc2e00fb6e6b1257bc960a05b3bf71bdd3202c;
// const ApiKeyInUrl = wss://streamer.cryptocompare.com/v2?api_key={bdb27b9f6be05992ef59e9a7b3cc2e00fb6e6b1257bc960a05b3bf71bdd3202c})
