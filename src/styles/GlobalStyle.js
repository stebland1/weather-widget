import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --white: #fff;
    --black: #000;
    --light-grey: #f1f1f1;
    --dark-grey: #888888;
    --green: #98e4a5;
  }

  body {
    font-family: Open-Sans, Helvetica, Sans-Serif;
    font-size: 14px;
  }

  a {
    color: var(--black);
    text-decoration:none;
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
  }
`;

export default GlobalStyle;
