import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

export default function PortfolioOverview({ allCoins, likedCoins, exchanges }) {
  function calcSum() {
    return likedCoins.reduce((total, { price = 0 }) => +total + +price, 0);
  }

  const history = useHistory();

  function navigateToForm() {
    history.push('/portfolio/addform');
  }

  return (
    <div>
      <Headline>Buy/Sell Overview</Headline>
      <Container>
        <section>
          <h3>Buy/Sell</h3>
          {likedCoins.map((coin) => (
            <p>{coin.name}</p>
          ))}
        </section>
        <section>
          <h3>Date</h3>
          {likedCoins.map((coin) => (
            <p>{coin.name}</p>
          ))}
        </section>
        <section>
          <h3>Exchange</h3>
          {exchanges.map((exchange) => (
            <p>{exchange.name}</p>
          ))}
        </section>
        <section>
          <h3>Quantity</h3>
          {likedCoins.map((coin) => (
            <p>{coin.current_price}</p>
          ))}
        </section>
        <section>
          <h3>Price</h3>
          {likedCoins.map((coin) => (
            <p>{coin.current_price}</p>
          ))}
          {/* <h3>{calcSum()}</h3> */}
        </section>
      </Container>
      <article>
        <Link to="/portfolio">Back</Link>
      </article>
      <Button isPrimary onClick={navigateToForm}>
        Add Transaction
      </Button>
    </div>
  );
}

const Container = styled.article`
  /* border-radius: 10px;
  background: var(--tertiary);
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  margin: 1rem;
  padding: 0.5rem; */

  display: flex;
  justify-content: space-between;
  background: var(--tertiary);
  margin-bottom: 1rem;
`;

const Button = styled.button`
  font-weight: bold;
  padding: 1rem;
  width: 12rem;
  margin-top: 0.7rem;
  border: solid 1px;
  border-radius: 0.4rem;
  background: ${(props) => (props.isPrimary ? '#2EBDA3' : '#E84089')};
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin-bottom: 7rem;
`;

const Headline = styled.h2`
  padding-bottom: 1rem;
  display: flex;
  justify-content: center;
  font-weight: bold;
  margin-top: 110px;
`;
