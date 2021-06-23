import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

export default function AddForm({
  onAddCoin,
  coinToEdit,
  onUpdateAndSaveCoin,
  filteredCoins,
  likedCoins,
  coin,
  allCoins,
  exchanges,
}) {
  const initialCoinState = {
    buyOrSell: 'buy',
    exchange: [],
    price: '',
    quantity: '',
    date: '',
    note: '',
  };

  const history = useHistory();

  function navigateToOverview() {
    history.push('/portfolio/overview');
  }

  const [portfolioCoins, setPortfolioCoins] = useState(initialCoinState);

  const [isError, setIsError] = useState(false);

  function updateCoin(event) {
    const fieldName = event.target.name;
    let fieldValue = event.target.value;

    if (event.target.type === 'checkbox') {
      fieldValue = event.target.checked;
    }
    setPortfolioCoins({ ...portfolioCoins, [fieldName]: fieldValue });
  }

  return (
    // <Form onSubmit={handleFormSubmit}>
    <Form>
      <Headline>Add Transaction</Headline>
      {/* <span>x</span> */}
      {isError && (
        <ErrorBox>Missing entries. Please check your input.</ErrorBox>
      )}
      <BuyOrSell>
        {/* <label htmlFor="BuyOrSell"></label> */}
        <input
          isPrimary
          type="radio"
          value="buy"
          name="buyOrSell"
          onChange={updateCoin}
          checked={portfolioCoins.buyOrSell === 'buy'}
        />{' '}
        Buy
        <input
          type="radio"
          value="sell"
          name="buyOrSell"
          onChange={updateCoin}
          checked={portfolioCoins.buyOrSell === 'sell'}
        />{' '}
        Sell
      </BuyOrSell>
      <Inputfield>
        <label htmlFor="exchange">Exchange</label>
        <select
          id="exchange"
          name="exchange"
          onChange={updateCoin}
          value={portfolioCoins.coin_exchange}
          placeholder="Please select..."
        >
          <option value="Please select...">Please select...</option>
          {exchanges.map((exchange) => (
            <option value={exchange.name}>{exchange.name}</option>
          ))}
        </select>
      </Inputfield>
      <Inputfield>
        <label htmlFor="price">Price per Coin*</label>
        <input
          type="text"
          name="price"
          onChange={updateCoin}
          value={portfolioCoins.coin_price}
          placeholder={allCoins.current_price}
        />
      </Inputfield>
      <Inputfield>
        <label htmlFor="quantity">Quantity*</label>
        <input
          type="text"
          name="quantity"
          onChange={updateCoin}
          value={portfolioCoins.quantity}
          placeholder="1"
        />
      </Inputfield>
      <Inputfield>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          name="Date"
          onChange={updateCoin}
          value={portfolioCoins.date}
        />
      </Inputfield>
      <Inputfield>
        <label htmlFor="note">Note</label>
        <input
          type="text"
          name="Note"
          onChange={updateCoin}
          value={portfolioCoins.note}
          placeholder="Tap to add a note"
        />
      </Inputfield>
      <ButtonWrapper>
        <Button onClick={navigateToOverview}>Cancel</Button>
        <Button isPrimary onClick={navigateToOverview}>
          Save
        </Button>
      </ButtonWrapper>
    </Form>
  );
}

const Form = styled.form`
  display: grid;
  gap: 2rem;
  width: 20rem;
  margin: 110px 13px 0px 15px;

  label {
    font-weight: bold;
  }
`;

const ButtonWrapper = styled.span`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  font-weight: bold;
  padding: 1rem;
  width: 9rem;
  margin-top: 0.7rem;
  border: solid 1px;
  border-radius: 0.4rem;
  background: ${(props) => (props.isPrimary ? '#2EBDA3' : '#E84089')};
  cursor: pointer;
`;

const BuyOrSell = styled.section`
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  font-weight: bold;
`;

const ErrorBox = styled.div`
  background: hsl(340, 60%, 50%);
  color: hsl(340, 80%, 80%);
  padding: 1rem;
  border-radius: 0.5rem;
`;

const Inputfield = styled.section`
  display: flex;
  justify-content: space-between;
`;

const Headline = styled.h2`
  padding-bottom: 1rem;
  display: flex;
  justify-content: center;
  font-weight: bold;
`;
