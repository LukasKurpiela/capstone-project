import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import MarketsNotSelected from '../../Images/markets-white.png'
import PortfolioNotSelected from '../../Images/portfolio-white.png'
import NewsNotSelected from '../../Images/news-white.png'
import MarketsSelected from '../../Images/markets-black.png'
import PortfolioSelected from '../../Images/portfolio-black.png'
import NewsSelected from '../../Images/news-black.png'

export default function Footer({
  isStatic,
  showMarketsIcon,
  setShowMarketsIcon,
  showPortfolioIcon,
  setShowPortfolioIcon,
  showNewsIcon,
  setShowNewsIcon
}) {
  return (
    <footer>
      <Nav isStatic={isStatic}>
        <NavLinkStyled exact to="/">
           {showMarketsIcon ? (
            <MarketsIconStyled src={MarketsSelected} alt="Logo Markets not filled"/>
           ) : (
            <MarketsIconStyled src={MarketsNotSelected} alt="Logo Markets not filled"/>
           )}
        </NavLinkStyled>
        <NavLinkStyled to="/Portfolio">
         {showPortfolioIcon ? (
            <PortfolioIconStyled src={PortfolioNotSelected} alt="Logo Markets not filled"/>
           ) : (
            <PortfolioIconStyled src={PortfolioSelected} alt="Logo Markets not filled"/>
           )}
        </NavLinkStyled>
        <NavLinkStyled to="/News">
        {showNewsIcon ? (
            <NewsIconStyled src={NewsNotSelected} alt="Logo Markets not filled"/>
           ) : (
            <NewsIconStyled src={NewsSelected} alt="Logo Markets not filled"/>
           )}
        </NavLinkStyled>
      </Nav>
    </footer>
  );
}


const Nav = styled.nav`
   background-image: linear-gradient(
    -225deg,
    #ac32e4 0%,
    #7918f2 48%,
    #4801ff 100%
  );
  height: 75px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: ${(props) => (props.isStatic ? 'static' : 'fixed')};
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 100;
`;

const NavLinkStyled = styled(NavLink)`
  &:hover {
    width: 5.5rem;
  }
`;

const MarketsIconStyled = styled.img`
  height: auto;
  width: 2.75rem;
  padding-top: 15px;
`;

const PortfolioIconStyled = styled.img`
  height: auto;
  width: 2.75rem;
  padding-top: 15px;
`;

const NewsIconStyled = styled.img`
  height: auto;
  width: 2.75rem;
  padding-top: 15px;
`;

Footer.propTypes = {
  isStatic: PropTypes.bool,
  showMarketsIcon: PropTypes.bool,
  setShowMarketsIcon: PropTypes.func,
};
