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
          <NavLink exact to="/">
            <MarketsButton title="Home" role="img" />
          </NavLink>
          <NavLink to="/portfolio">
            <PortfolioButton title="Portfolio" role="img" />
          </NavLink>
          <NavLink to="/news">
            <NewsButton title="News" role="img" />
          </NavLink>
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
  margin-top: 0;
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
  padding: 0;
  margin-top: 0;
`;

const MarketsButton = styled(MarketsIcon)`
  height: auto;
  width: 2.5rem;
  padding-top: 10px;
  fill: var(--tertiary);

  .active & path {
    fill: black;
  }
`;

const PortfolioButton = styled(PortfolioIcon)`
  height: auto;
  width: 2.5rem;
  padding-top: 10px;
  fill: var(--tertiary);

  .active & path {
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
    fill: black;
  }
`;
