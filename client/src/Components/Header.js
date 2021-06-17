import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import logo from '../images/cointrax-logo.svg';

export default function Header({ isStatic, handleChange, filteredCoins }) {
  return (
    <>
      <StyledHeader isStatic={isStatic}>
        <Logo src={logo} alt="Logo Cointrax" />
      </StyledHeader>
      <SearchBar>
        <CoinInput type="text" placeholder="Search" onChange={handleChange} />
      </SearchBar>
      <HeadlineWrapper>
        <p>Coin</p>
        <p>Price</p>
        <p>Market Cap.</p>
      </HeadlineWrapper>
    </>
  );
}

const StyledHeader = styled.header`
  background-color: #f8f8ff;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: ${(props) => (props.isStatic ? 'static' : 'fixed')};
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
`;

const Logo = styled.img`
  height: auto;
  padding: 1rem;
  width: 14.5rem;
`;

const SearchBar = styled.form`
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

const HeadlineWrapper = styled.h4`
  width: 265px;
  margin: 0px 10px 10px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
`;

Header.propTypes = {
  isStatic: PropTypes.bool,
};
