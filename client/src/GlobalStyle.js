import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  /* background-color: #f6eec5; */
}

body * {
  /* font-family: 'Press Start 2P'; */
}
`;

export default GlobalStyle;
