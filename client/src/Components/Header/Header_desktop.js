import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import marketsBlack from '../../Images/markets-black.png';
import menuBlack from '../../Images/menu-black.png';
import closeBlack from '../../Images/close-black.png';
import { Button } from './Button';
import { NavLink } from 'react-router-dom'

function Header() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    
    <HeaderItems>
      <HeaderLogo>
        CoinTrax<MyLogo src={marketsBlack}></MyLogo>
      </HeaderLogo>
      <HeaderIcon onClick={handleClick}>
        <i className={click ? { menuBlack } : { closeBlack }}></i>
      </HeaderIcon>
      <HeaderMenu
        className={click ? 'header-menu active' : 'header-menu'}
      >
            <HeaderItem>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </HeaderItem>
            <HeaderItem>
              <Link to='/portfolio' className='nav-links' onClick={closeMobileMenu}>
                Portfolio
              </Link>
            </HeaderItem>
            <HeaderItem>
              <Link to='/news' className='nav-links' onClick={closeMobileMenu}>
                News
              </Link>
            </HeaderItem>
            <HeaderItem>
              <Link to='/about-us' className='nav-links' onClick={closeMobileMenu}>
                About Us
              </Link>
            </HeaderItem>
      </HeaderMenu>
      {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
    </HeaderItems>
  );
}

export default Header;

const HeaderItems = styled.nav`
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
`;

const HeaderItem = styled.li`
`

const HeaderLogo = styled.h1`
  color: #fff;
  justify-self: start;
  margin-left: 20px;
  cursor: pointer;
`;

const MyLogo = styled.i`
  margin-left: 0.5rem;
  font-size: 1.6rem;
  /* background-image: url({../../Images/markets-black.png}); */
`;

const HeaderMenu = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 10px;
  list-style: none;
  text-align: center;
  width: 70vw;
  justify-content: end;
  margin-right: 2rem;
  /* color: ${(props) => (props.headerLinks ? 'white' : '')}; */
`;

const HeaderIcon = styled.div``;

// .header-menu {
// display: grid;
// grid-template-columns: repeat(5, auto);
// grid-gap: 10px;
// list-style: none;
// text-align: center;
// width: 70vw;
// justify-content: end;
// margin-right: 2rem;
// }

// .headerLinks {
//   color: white;
//   text-decoration: none;
//   pdding: 0.5rem 1rem;
// }

// .headerLinks:hover {
//   background-color: #6d76f7;
//   border-radius: 4px;
//   transition: all 0.2s ease-out;
// }

// .fa-bars {
//   color: #fff;
// }

// .nav-links-mobile {
//   display: none;
// }

// .menu-icon {
//   display: none;
// }

// @media screen and (max-width: 960px) {
//   .NavbarItems {
//     position: relative;
//   }

//   .nav-menu {
//     display: flex;
//     flex-direction: column;
//     width: 100%;
//     height: 500px;
//     position: absolute;
//     top: 80px;
//     left: -100%;
//     opacity: 1;
//     transition: all 0.5s ease;
//   }
// .nav-menu.active {
//   background: #6668f4;
//   left: 0;
//   opacity: 1;
//   transition: all 0.5s ease;
//   z-index: 1;
// }
// .nav-links {
//   text-align: center;
//   padding: 2rem;
//   width: 100%;
//   display: table;
// }

// nav.links:hover {
//   background-color: #7577fa;
//   border-radius: 0;
// }

// .navbar-logo {
//   position: absolute;
//   top: 0;
//   left: 0;
//   transform: translate(25%, 50%);
// }

// .menu-icon {
//   display: block;
//   position: absolute;
//   top: 0;
//   right: 0;
//   transform: translate(-100%, 60%);
//   font-size: 1.8rem;
//   cursor: pointer;
// }

// .fa-times {
//   color: #fff;
//   font-size: 2rem;
// }

// .nav-links-mobile {
//   display: block;
//   text-align: center;
//   padding: 1.5rem;
//   margin: 2rem auto;
//   border-radius: 4px;
//   width: 80%;
//   background: #4ad9e4;
//   text-decoration: none;
//   color: #fff;
//   font-size: 1.5rem;
// }

// .nav-links-mobile:hover {
//   background: #fff
//   color: #6568F4;
//   transition: 250ms;
// }

// Button {
//   display: none;
//   }
// }

// }
