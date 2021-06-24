import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { loadFromLocal, saveToLocal } from '../lib/localStorage';
import styled from 'styled-components';
import Footerbutton from '../components/Footerbutton';
import { ReactComponent as Close } from '../images/close.svg';
import validateEntry from '../lib/validation';

export default function AddForm({
  // onAddCoin,
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
    exchange: '',
    price: '',
    quantity: '',
    date: '',
    note: '',
  };

  const history = useHistory();

  function navigateToOverview() {
    history.push('/portfolio/overview');
  }

  // const [portfolioCoin, setportfolioCoin] = useState(
  //   coinToEdit ?? initialCoinState
  // );
  const [portfolioCoin, setportfolioCoin] = useState(
    loadFromLocal('portfolioCoin') ?? [initialCoinState]
  );
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    saveToLocal('portfolioCoin', portfolioCoin);
  }, [portfolioCoin]);

  function updateCoin(event) {
    const fieldName = event.target.name;
    let fieldValue = event.target.value;

    setportfolioCoin({ ...portfolioCoin, [fieldName]: fieldValue });
  }

  function handleForm(event) {
    event.preventDefault();

    if (validateEntry(portfolioCoin)) {
      // onAddCoin(portfolioCoin);
      setportfolioCoin(initialCoinState);
      setIsError(false);
    } else {
      setIsError(true);
      setTimeout(() => setIsError(false), 4000);
    }
  }

  {
    portfolioCoin.map((portfolioCoin) => {
      return (
        <Form onSubmit={handleForm}>
          <Headline>
            <h2>Add Transaction</h2>
            <CloseIcon
              type="reset"
              title="Close"
              role="img"
              onClick={setportfolioCoin}
            />
          </Headline>
          <BuyOrSell>
            {/* <label htmlFor="BuyOrSell"></label> */}
            <input
              isPrimary
              type="radio"
              value="buy"
              name="buyOrSell"
              onChange={updateCoin}
              checked={portfolioCoin.buyOrSell === 'buy'}
            />{' '}
            Buy
            <input
              type="radio"
              value="sell"
              name="buyOrSell"
              onChange={updateCoin}
              checked={portfolioCoin.buyOrSell === 'sell'}
            />{' '}
            Sell
          </BuyOrSell>
          <Inputfield>
            <label htmlFor="price">Price per Coin*</label>
            <input
              type="text"
              name="price"
              onChange={updateCoin}
              value={portfolioCoin.price}
              placeholder="In USD"
              // placeholder={allCoins.current_price}
            />
          </Inputfield>
          <Inputfield>
            <label htmlFor="quantity">Quantity*</label>
            <input
              type="text"
              name="quantity"
              onChange={updateCoin}
              value={portfolioCoin.quantity}
              placeholder="0"
            />
          </Inputfield>
          <Inputfield>
            <label htmlFor="exchange">Exchange</label>
            <select
              id="exchange"
              name="exchange"
              onChange={updateCoin}
              value={portfolioCoin.exchange}
              placeholder="Please select..."
            >
              <option value="Please select...">Please select...</option>
              {exchanges.map((exchange) => (
                <option value={exchange.name}>{exchange.name}</option>
              ))}
            </select>
          </Inputfield>
          <Inputfield>
            <label htmlFor="date">Date</label>
            <input
              type="date"
              name="date"
              onChange={updateCoin}
              value={portfolioCoin.date}
            />
          </Inputfield>
          <Inputfield>
            <label htmlFor="note">Note</label>
            <input
              type="text"
              name="note"
              onChange={updateCoin}
              value={portfolioCoin.note}
              placeholder="Tap to add a note"
            />
          </Inputfield>
          {isError && (
            <ErrorBox isError={isError}>
              Missing entries. Please check your input.
            </ErrorBox>
          )}
          <Footerbutton />
        </Form>
      );
    });
  }
}

const Headline = styled.div`
  padding-bottom: 1rem;
  display: flex;
  justify-content: center;
  font-weight: bold;
  margin-top: 110px;
  position: relative;
`;

const CloseIcon = styled(Close)`
  left: 15rem;
  top: 0.15rem;
  height: 1.2rem;
  width: 1.2rem;
  margin: 0 1.5rem 0 3rem;
  cursor: pointer;
  position: absolute;
`;

const Form = styled.form`
  display: grid;
  gap: 2rem;
  width: 20rem;
  margin: 0 13px 0px 15px;

  label {
    font-weight: bold;
  }
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

// const ErrorBox = styled.div`
//   background: hsl(340, 60%, 50%);
//   color: hsl(340, 95%, 95%);
//   padding: ${(props) => (props.isError ? '1.2rem' : 0)};
//   border-radius: 0.5rem;
//   opacity: ${(props) => (props.isError ? 1 : 0)};
//   max-height: ${(props) => (props.isError ? '100%' : '1px')};
//   transition: all 1s ease-in-out;
//   font-size: ${(props) => (props.isError ? '1rem' : '1px')};
//   font-weight: bold;
// `;
