import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import logo from '../../Images/markets-white.png'

export default function Header({ isStatic }) {
  return (
    <StyledHeader isStatic={isStatic}>
      <Logo src={logo} alt="Logo Cointrax" />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`

 background-image: linear-gradient(
    -225deg,
    #ac32e4 0%,
    #7918f2 48%,
    #4801ff 100%
  );
  height: 100px;
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
//   background: var(--secondary);
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
  

// `;

const Logo = styled.img`
  height: auto;
  padding: 1rem;
  width: 6.5rem;
`;

Header.propTypes = {
  isStatic: PropTypes.bool,
};
