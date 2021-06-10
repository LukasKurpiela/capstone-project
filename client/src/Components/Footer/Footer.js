import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import styled from 'styled-components';
import marketsBlack from '../../Images/markets-black.png';
import menuBlack from '../../Images/menu-black.png';
import closeBlack from '../../Images/close-black.png';

class Footer extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <FooterItems>
        <FooterLogo>
          CoinTrax<MyLogo src={marketsBlack}></MyLogo>
        </FooterLogo>
        <FooterIcon onClick={this.handleClick}>
          <i
            className={this.state.clicked ? { menuBlack } : { closeBlack }}
          ></i>
        </FooterIcon>
        <ul>
          {MenuItems.map((item, index) => {
            return (
              <li>
                {/* Wie kann man Komponenten flexibel schreiben? */}
                <a className={MenuItems.clName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </FooterItems>
    );
  }
}

export default Footer;

const FooterItems = styled.nav`
  background: linear-gradient(
    90deg,
    rgb(110, 94, 254) 0%,
    rgba(73, 63, 252, 1) 100%
  );
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
`;

const FooterLogo = styled.h1`
  color: #fff;
  justify-self: start;
  margin-left: 20px;
  cursor: pointer;
`;

const MyLogo = styled.i`
  margin-left: 0.5rem;
  font-size: 1.6rem;
  background-image: url({../../Images/markets-black.png});
`;

const FooterIcon = styled.div``;
