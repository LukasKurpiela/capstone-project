import Coins from '../components/Coins';
import Headline from '../components/Headline';

export default function Coinpage({
  filteredCoins,
  onToggleFavorite,
  allCoins,
}) {
  return (
    <>
      <Headline Headlinetext="Market Cap." />
      {filteredCoins.map((coin) => {
        return <Coins coin={coin} onToggleFavorite={onToggleFavorite} />;
      })}
    </>
  );
}

// const [filteredToken, setFilteredToken] = useState([]);
// const [view, setView] = useState('all');

// function drawList(filteredCoins) {
//   return (
//     <>
//       <Headline Headlinetext="Market Cap." />
//       {filteredCoins.map((coin) => {
//         return <Coins coin={coin} onToggleFavorite={onToggleFavorite} />;
//       })}
//     </>
//   );
// }

// function listOnView() {
//   return view === 'all' ? drawList(allCoins) : drawList(filteredToken);
// }
