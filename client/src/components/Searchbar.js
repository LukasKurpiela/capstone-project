import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Searchbar({ handleChange }) {
  return (
    <>
      <SearchBar>
        <CoinInput type="text" placeholder="Search" onChange={handleChange} />
      </SearchBar>
    </>
  );
}

Searchbar.propTypes = {
  handleChange: PropTypes.func,
};

const SearchBar = styled.form`
  margin: 26px 28px 30px 28px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 1px 2px #87878a;
  position: ${(props) => (props.isStatic ? 'static' : 'fixed')};
  z-index: 100;
`;

const CoinInput = styled.input`
  padding-left: 16px;
  width: 300px;
  height: 40px;
  border-radius: 4px;
  border: none;
  background-color: #f8f8ff;

  &::placeholder {
    color: #515154;
  }
`;
