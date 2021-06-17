import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Coins from './pages/Coins';
import Portfolio from './pages/Portfolio';
import Header from './Components/Header';
import Footer from './Components/Footer';

// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false

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
    <Wrapper>
      <CoinApp>
        <Switch>
          <Route exact path="/">
            <Header />
            <SearchBar>
              <form>
                <CoinInput
                  type="text"
                  placeholder="Search"
                  onChange={handleChange}
                />
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
                  />
                );
              })}
            </main>
          </Route>
          <Route path="/portfolio">
            <Header />
            <SearchBar>
              <form>
                <CoinInput
                  type="text"
                  placeholder="Search"
                  onChange={handleChange}
                />
              </form>
            </SearchBar>
            <HeadlineWrapper>
              <p>Coin</p>
              <p>Price</p>
              <p>Holdings</p>
            </HeadlineWrapper>
            <main>
              {filteredCoins.map((coin) => {
                return (
                  <Portfolio
                    key={coin.id}
                    name={coin.name}
                    image={coin.image}
                    symbol={coin.symbol}
                    price={coin.current_price}
                    priceChange={coin.price_change_percentage_24h}
                  />
                );
              })}
            </main>
          </Route>
          <Route path="/news"></Route>
        </Switch>
        <Footer />
      </CoinApp>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  position: relative;
`;

const CoinApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 64 px;
`;

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
  box-shadow: 0 1px 2px #87878a;
`;

const CoinInput = styled.input`
  padding-left: 16px;
  width: 300px;
  height: 40px;
  border-radius: 4px;
  border: none;
  background-color: #f8f8ff;
  color: #515154;

  &::placeholder {
    color: #515154;
  }
`;
