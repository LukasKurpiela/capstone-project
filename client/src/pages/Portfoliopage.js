import Portfolio from '../components/Portfolio';
import Headline from '../components/Headline';
import styled from 'styled-components/macro';
import Footer from '../components/Footer';

import { ReactComponent as PlusIcon } from '../images/plus.svg';

export default function Portfoliopage({
  onToggleFavorite,
  likedCoins,
  allCoins,
  isStatic,
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
            allCoins={allCoins}
          />
        );
      })}
      {/* <AddButton isStatic={isStatic}></AddButton>
      <AddSign title="Plus" role="img" isStatic={isStatic} /> */}
      <Footer />
    </>
  );
}

// const AddButton = styled.button`
//   background: linear-gradient(135deg, #ffc608, #f7931a, #b1583e);
//   border-radius: 50%;
//   border: none;
//   width: 3.25rem;
//   height: 3.25rem;
//   bottom: 8rem;
//   right: 1.5rem;
//   cursor: pointer;
//   position: ${(props) => (props.isStatic ? 'static' : 'fixed')};
// `;

// const AddSign = styled(PlusIcon)`
//   border-radius: 50%;
//   width: 1.65rem;
//   height: 1.65rem;
//   bottom: 8.75rem;
//   right: 2.3rem;
//   cursor: pointer;
//   position: ${(props) => (props.isStatic ? 'static' : 'fixed')};
// `;
