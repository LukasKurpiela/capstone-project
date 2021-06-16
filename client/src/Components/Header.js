import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import logo from '../Images/cointrax-logo.svg';

export default function Header({ isStatic }) {
  return (
    <StyledHeader isStatic={isStatic}>
      <Logo src={logo} alt="Logo Cointrax" />
    </StyledHeader>
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

Header.propTypes = {
  isStatic: PropTypes.bool,
};
