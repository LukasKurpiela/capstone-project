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
      <NavWrapper isStatic={isStatic}>
      <NavIcons>
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
      </NavIcons>
      </NavWrapper>
    </footer>
  );
}


const NavWrapper = styled.nav`

  height: 83px;
  px;
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

const NavIcons = styled.ul`
  background-color: #F8F8FF;
  height: 60px;
  width: 350px;
  box-shadow: 0px 1px 3px #87878A;
  border-radius: 10px;
  /* margin-bottom: 10px; */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  list-style: none;
  z-index: 100;
`

const NavLinkStyled = styled(NavLink)`
  /* &:hover {
    width: 5.5rem;
  } */
`;

const MarketsIconStyled = styled.img`
  height: auto;
  width: 2.5rem;
  padding-top: 10px;
  /* &:hover {
    background-color: #87878A;
  } */
`;

const PortfolioIconStyled = styled.img`
  height: auto;
  width: 2.5rem;
  padding-top: 10px;
`;

const NewsIconStyled = styled.img`
  height: auto;
  width: 2.5rem;
  padding-top: 10px;
`;

Footer.propTypes = {
  isStatic: PropTypes.bool,
  showMarketsIcon: PropTypes.bool,
  setShowMarketsIcon: PropTypes.func,
  showPortfolioIcon: PropTypes.bool,
  setShowPortfolioIcon: PropTypes.func,
  showNewsIcon: PropTypes.bool,
  setShowNewsIcon: PropTypes.func,
};
