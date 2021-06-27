import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap');


:root {
    --primary: #F8F8FF;
    --secondary: #515154;
    --tertiary: #CBCBD3;
    --bitcoinColor: #F7931A;
}

*,
*::before,
*::after {
    box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
  color: #1D1D1F;
  font-size: 14px;
  margin-bottom: 6.25rem;
}


body, h1, h2, h3, h4, h5, h6, ol, ul, p {
  font-weight: normal;
}
`;

export default GlobalStyle;
