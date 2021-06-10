import { useState, useEffect } from 'react';
// import StickyHeader from 'react-sticky-header';
import axios from 'axios';
import Coins from './Coins';
import styled from 'styled-components';
import Footer from './Components/Footer/Footer';

// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

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
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <CoinApp>
      <Footer />
      <CoinText>CoinTrax</CoinText>
      <SearchBar>
        <form>
          <CoinInput type="text" placeholder="Search" onChange={handleChange} />
        </form>
      </SearchBar>
      {/* const MyHeader=() => (
      <StickyHeader
      // This is the sticky part of the header.
      header={
        }
        >
      </StickyHeader> ); */}
      <HeadlineWrapper>
        <p>Name</p>
        <p>Symbol</p>
        <p>Price</p>
        <p>Market Cap.</p>
        <p>24h %</p>
        <p>Volume (24h)</p>
      </HeadlineWrapper>

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

const CoinText = styled.h1`
  margin-bottom: 32px;
  text-align: center;
`;

const SearchBar = styled.div`
  margin-bottom: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeadlineWrapper = styled.h4`
  width: 900px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  /* z-index: 1; */
`;

// const Headline = styled.p`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
// `;

const CoinInput = styled.input`
  padding-left: 16px;
  width: 300px;
  height: 50px;
  border-radius: 4px;
  border: none;
  background-color: lightblue;
  /* background-image: linear-gradient(
    -225deg,
    #ac32e4 0%,
    #7918f2 48%,
    #4801ff 100%
  ); */
  color: white;

  &::placeholder {
    color: white;
  }
`;

// Cryptocompare
// WebSocket Base URL: wss://streamer.cryptocompare.com/v2
// const API_KEY = bdb27b9f6be05992ef59e9a7b3cc2e00fb6e6b1257bc960a05b3bf71bdd3202c;
// const ApiKeyInUrl = wss://streamer.cryptocompare.com/v2?api_key={bdb27b9f6be05992ef59e9a7b3cc2e00fb6e6b1257bc960a05b3bf71bdd3202c})

// import styled from 'styled-components';
// import { saveToLocal, loadFromLocal } from './lib/localStorage';
// import { NavLink, Switch, Route } from 'react-router-dom';

// function App() {
//   const [players, setPlayers] = useState(loadFromLocal('players') ?? []);
//   const [playerToEdit, setPlayerToEdit] = useState(null);
//   const [shoppingCart, setShoppingCart] = useState(
//     loadFromLocal('shoppingCart') ?? []
//   );

//   useEffect(() => {
//     fetch('http://localhost:4000/players')
//       .then((result) => result.json())
//       .then((apiPlayers) => setPlayers(apiPlayers))
//       .catch((error) => console.error(error));
//   }, []);

//   useEffect(() => {
//     saveToLocal('players', players);
//   }, [players]);

//   useEffect(() => {
//     saveToLocal('shoppingCart', shoppingCart);
//   }, [shoppingCart]);

//   function addPlayer(player) {
//     fetch('http://localhost:4000/players', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       // body: JSON.stringify(player), })
//       body: JSON.stringify({
//         name: player.name,
//         price: player.price,
//         free_transfer: player.free_transfer,
//         club: player.club,
//         position: player.position,
//         skills: player.skills,
//         email: player.email,
//       }),
//     })
//       .then((result) => result.json())
//       .then((playerSaved) => setPlayers([...players, playerSaved]))
//       // .then((player) => setPlayers([...players, player]))
//       .catch((error) => console.error(error));
//   }

//   function addToShoppingCart(playerToAdd) {
//     setShoppingCart([...shoppingCart, playerToAdd]);
//   }

//   function editPlayer(player) {
//     setPlayerToEdit(player);
//   }

//   function updateAndSavePlayer(playerToUpdateAndSave) {
//     const upToDatePlayers = players.filter(
//       (player) => player._id !== playerToUpdateAndSave._id
//     );
//     fetch('http//localhost:4000/players/' + playerToUpdateAndSave._id, {
//       method: 'PUT', // Update
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(playerToUpdateAndSave),
//     })
//       .then((result) => result.json())
//       .then((updatedPlayer) => {
//         setPlayers([...upToDatePlayers, updatedPlayer]);
//         setPlayerToEdit(null); // Formular dann wieder im Add Modus
//       })
//       .catch((error) => console.error(error));
//   }

//   function deletePlayer(player) {
//     fetch('http://localhost:4000/players/' + player._id, {
//       method: 'DELETE',
//       headers: { 'Content-Type': 'application/json' },
//     })
//       .then((result) => result.json())
//       .then((response) => {
//         if (response.data && response.data._id) {
//           const playersToKeep = players.filter(
//             (player) => player._id !== response.data._id
//           );
//           setPlayers(playersToKeep);
//         } else {
//           console.log(
//             'Player could not be deleted, was not found or something else went wrong'
//           );
//         }
//       });
//   }

//   return (
//     <div>
//       <Header>
//         <NavLink to="/">
//           <h1>German Fussball Transfer Market</h1>
//         </NavLink>
//         <NavLink to="/cart">
//           Zum Warenkorb
//           <Counter /> ({shoppingCart.length} Player(s) selected)
//         </NavLink>
//       </Header>

//       <Switch>
//         <Route exact path="/">
//           <Grid>
//             <PlayerForm
//               onAddPlayer={addPlayer}
//               playerToEdit={playerToEdit}
//               onUpdateAndSavePlayer={updateAndSavePlayer}
//             />
//             <Players>
//               {players.map((player) => (
//                 <PlayerCard
//                   player={player}
//                   onAddToShoppingCart={addToShoppingCart}
//                   onEditPlayer={editPlayer}
//                   onDeletePlayer={deletePlayer}
//                 />
//               ))}
//             </Players>
//           </Grid>
//         </Route>
//         <Route path="/cart">
//           <div>
//             <ShoppingCart shoppingCart={shoppingCart} />
//           </div>
//         </Route>
//       </Switch>
//     </div>
//   );
// }

// export default App;

// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;

//   gap: 1rem;

//   @media (min-width: 576px) {
//     grid-template-columns: 1fr 2fr;
//   }
// `;

// const Players = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 0.5rem;
// `;

// const Counter = styled.div``;

// const Header = styled.div``;
