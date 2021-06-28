import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import logo from '../images/cointrax-logo.svg';

export default function Header({ isStatic }) {
  return (
    <>
      <StyledHeader isStatic={isStatic}>
        <Logo src={logo} alt="Logo Cointrax" />
      </StyledHeader>
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
  border-bottom: solid 1px #eee;
  box-shadow: 0px 1px 2px #dddbdb;
`;

const Logo = styled.img`
  height: auto;
  padding-bottom: 0.5rem;
  width: 13rem;
`;

Header.propTypes = {
  isStatic: PropTypes.bool,
};
