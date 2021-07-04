import { useState, useEffect } from 'react';
import { loadFromLocal, saveToLocal } from '../lib/localStorage';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Close } from '../images/close.svg';
import validateEntry from '../lib/validation';
import { v4 as uuidv4 } from 'uuid';

export default function AddForm({
  onAddCoin,
  exchanges,
  isStatic,
  onPostCoinDatabase,
}) {
  const history = useHistory();
  const clickedCoin = history.location.state;

  const { name, symbol, image } = clickedCoin;

  const initialCoinState = {
    name: name,
    symbol: symbol,
    image: image,
    id: '',
    buyOrSell: 'buy',
    exchange: '---------',
    price: '',
    quantity: '',
    date: '----/--/--',
    note: '',
  };

  function navigateToOverview() {
    history.push('/portfolio/overview', clickedCoin);
  }

  const [portfolioCoin, setportfolioCoin] = useState(
    loadFromLocal('portfolioCoin') ?? initialCoinState
  );
  const [isError, setIsError] = useState(false);
  const [isDone, setIsDone] = useState(false);

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
      // onAddCoin({ ...portfolioCoin, id: uuidv4() });
      onPostCoinDatabase({ ...portfolioCoin, id: uuidv4() });
      setportfolioCoin(initialCoinState);
      setIsError(false);
      setIsDone(true);
      setTimeout(() => setIsDone(false), 3000);
    } else {
      setIsError(true);
      setIsDone(false);
      setTimeout(() => setIsError(false), 3000);
    }
  }

  return (
    <Form onSubmit={handleForm}>
      <HeadlineWrapper>
        <CoinImage src={image} alt="Image of selected coin" />
        <HeadlineName>{symbol.toUpperCase()} - Add Transaction</HeadlineName>
        <CloseIcon title="Close" role="img" onClick={navigateToOverview} />
      </HeadlineWrapper>
      <BuyOrSell>
        <label htmlFor="buyOrSell"></label>
        <Input
          isPrimary
          type="radio"
          value="buy"
          name="buyOrSell"
          onChange={updateCoin}
          checked={portfolioCoin.buyOrSell === 'buy'}
        />{' '}
        Buy
        <Input
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
        <Input
          type="text"
          name="price"
          onChange={updateCoin}
          value={portfolioCoin.price}
          placeholder="In USD"
        />
      </Inputfield>
      <Inputfield>
        <label htmlFor="quantity">Quantity*</label>
        <Input
          type="text"
          name="quantity"
          onChange={updateCoin}
          value={portfolioCoin.quantity}
          placeholder='e.g. "0.25"'
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
        <Input
          type="date"
          name="date"
          onChange={updateCoin}
          value={portfolioCoin.date}
        />
      </Inputfield>
      <Inputfield>
        <label htmlFor="note">Note</label>
        <Input
          type="text"
          name="note"
          onChange={updateCoin}
          value={portfolioCoin.note}
          placeholder="Tap to add a note"
        />
      </Inputfield>
      {isDone && (
        <ConfirmationBox isDone={isDone}>
          Your transaction has been succesfully added to your Portfolio
        </ConfirmationBox>
      )}
      {isError && (
        <ErrorBox isError={isError}>
          Missing or wrong entries. Please check your input.
        </ErrorBox>
      )}

      <NavWrapper isStatic={isStatic}>
        <Button>Add Transaction</Button>
      </NavWrapper>
    </Form>
  );
}

const HeadlineWrapper = styled.div`
  padding-bottom: 1rem;
  display: flex;
  justify-content: left;
  font-weight: bold;
  margin-top: 32.5px;
  padding: 0 0 10px 20px;
  position: relative;
`;

const CoinImage = styled.img`
  height: 1.5rem;
  width: 1.5rem;
  margin-right: 0.625rem;
`;

const HeadlineName = styled.h2`
  padding: 0;
  margin: 0;
`;

const CloseIcon = styled(Close)`
  left: 15.7rem;
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
  justify-content: space-between;
  padding-right: 2.5rem;
  gap: 1rem;
  font-weight: bold;
`;

const ErrorBox = styled.div`
  background: hsl(335, 60%, 50%);
  color: hsl(335, 75%, 90%);
  padding: 1rem;
  border-radius: 0.5rem;
  display: flex;
  text-align: center;
`;

const ConfirmationBox = styled.div`
  background: hsl(159, 100%, 30%);
  color: hsl(159, 100%, 80%);
  padding: 1rem;
  border-radius: 0.5rem;
  display: flex;
  text-align: center;
`;

const Inputfield = styled.section`
  display: flex;
  justify-content: space-between;
  /* height: 35px; */
`;

const Input = styled.input`
  display: flex;
  justify-content: space-between;
  padding-inline-start: 3px;
  width: auto;
  font-size: 'Roboto', sans-serif;
`;

const NavWrapper = styled.nav`
  padding-bottom: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: ${(props) => (props.isStatic ? 'static' : 'fixed')};
  bottom: 15px;
  right: 0;
  left: 0;
  z-index: 100;
  background-color: white;
  margin-top: 0;
`;

const Button = styled.button`
  /* background-color: #f8f8ff; */
  height: 60px;
  width: 350px;
  box-shadow: 0px 1px 3px #87878a;
  border-radius: 10px;
  border: none;
  align-items: center;
  z-index: 100;
  padding: 0;
  margin-top: 0;
  background: #22e006;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
`;

// const Button = styled.button`
//   font-weight: bold;
//   padding: 0.75rem 2rem;
//   width: 15rem;
//   margin: auto;
//   border: solid 1px;
//   border-radius: 0.4rem;
//   background: #22e006;
//   cursor: pointer;
// `;
