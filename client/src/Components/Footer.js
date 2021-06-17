import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

import { ReactComponent as MarketsIcon } from '../images/markets.svg';
import { ReactComponent as PortfolioIcon } from '../images/portfolio.svg';
import { ReactComponent as NewsIcon } from '../images/news.svg';

export default function Footer({ isStatic }) {
  return (
    <footer>
      <NavWrapper isStatic={isStatic}>
        <NavIcons>
          <NavLinkStyled exact to="/">
            <MarketsButton title="Home" role="img" />
          </NavLinkStyled>
          <NavLinkStyled to="/portfolio">
            <PortfolioButton title="Portfolio" role="img" />
          </NavLinkStyled>
          <NavLinkStyled to="/news">
            <NewsButton title="News" role="img" />
          </NavLinkStyled>
        </NavIcons>
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

const NavIcons = styled.ul`
  background-color: #f8f8ff;
  height: 60px;
  width: 350px;
  box-shadow: 0px 1px 3px #87878a;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  list-style: none;
  z-index: 100;
  color: grey;
`;

const NavLinkStyled = styled(NavLink)``;

const MarketsButton = styled(MarketsIcon)`
  height: auto;
  width: 2.5rem;
  padding-top: 10px;
  fill: var(--tertiary);

  .active & path {
    /* fill: var(--secondary); */
    fill: black;
  }
`;

const PortfolioButton = styled(PortfolioIcon)`
  height: auto;
  width: 2.5rem;
  padding-top: 10px;
  fill: var(--tertiary);

  .active & path {
    /* fill: var(--secondary); */
    fill: black;
  }
`;

const NewsButton = styled(NewsIcon)`
  height: auto;
  width: 2.5rem;
  padding-top: 10px;
  fill: var(--tertiary);

  .active & path,
  .active & rect {
    /* fill: var(--secondary); */
    fill: black;
  }
`;
