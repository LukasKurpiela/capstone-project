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

const SearchBar = styled.form`
  margin: 105px 23px 30px 23px;
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

  &::placeholder {
    color: #515154;
  }
`;
