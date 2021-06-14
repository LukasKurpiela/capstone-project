import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap');

  text-align: center;
  font-weight: 400;

*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
  font-family: 'Roboto', sans-serif;
  color: #1D1D1F;
}

body * {
  font-family: 'Roboto', sans-serif;
  color: #1D1D1F;
}

body, h1, h2, h3, h4, h5, h6, ol, ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}
`;

export default GlobalStyle;
