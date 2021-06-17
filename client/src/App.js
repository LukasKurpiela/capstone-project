import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Coins from './pages/Coins';
import Portfolio from './pages/Portfolio';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    )
      .then((result) => result.json())
      .then((coins) => setCoins(coins))
      .catch((error) => console.error(error.message));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <CoinApp>
      <Switch>
        <Route exact path="/">
          <Header search={search} handleChange={handleChange} />
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
                />
              );
            })}
          </main>
        </Route>
        <Route path="/portfolio">
          <Header search={search} handleChange={handleChange} />
          <main>
            {filteredCoins.map((coin) => {
              return (
                <Portfolio
                  key={coin.id}
                  name={coin.name}
                  image={coin.image}
                  symbol={coin.symbol}
                  marketCap={coin.market_cap}
                  price={coin.current_price}
                  priceChange={coin.price_change_percentage_24h}
                  volume={coin.total_volume}
                />
              );
            })}
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
