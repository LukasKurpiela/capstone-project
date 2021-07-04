import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { useHistory } from 'react-router-dom';

export default function Footerbutton({ isStatic }) {
  const history = useHistory();

  function navigateToOverview() {
    history.push('/portfolio/overview');
  }

  function navigateToForm() {
    history.push('/portfolio/addform');
  }

  Footerbutton.propTypes = {
    isStatic: PropTypes.bool,
  };

  return (
    <footer>
      <NavWrapper isStatic={isStatic}>
        <NavBox>
          <Button onClick={navigateToForm}>Add Transaction</Button>
        </NavBox>
      </NavWrapper>
    </footer>
  );
}

const NavWrapper = styled.nav`
  padding-bottom: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: ${(props) => (props.isStatic ? 'static' : 'fixed')};
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 100;
  background-color: white;
`;

const NavBox = styled.ul`
  background-color: #f8f8ff;
  height: 60px;
  width: 350px;
  box-shadow: 0px 1px 3px #87878a;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  list-style: none;
  z-index: 100;
  color: grey;
`;

const Button = styled.button`
  font-weight: bold;
  padding: 0.75rem 2rem;
  width: 15rem;
  margin: auto;
  border: solid 1px;
  border-radius: 0.4rem;
  background: #22e006;
  cursor: pointer;
`;
