import { css, Global } from '@emotion/react';
import resetStyle from './reset';

const style = css`
  ${resetStyle}

  :root {
    $main_bg: #2a3447;
    $soft_bg: #384256;
    $dark-bg: #222b3c;
    $main-color: white;
    $soft-color: #ddd;
    $dark-color: #2a3447;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-weight: 300;
    display: grid;
    min-height: 100dvh;
    /* place-items: center; */
  }

  main {
    display: flex;
  }

  h1 {
    font-size: 3.6rem;
    font-weight: 700;
    text-align: center;
  }

  h2 {
    font-size: 2.4rem;
    font-weight: 600;
    text-align: center;
  }
`;

function GlobalStyle() {
  return <Global styles={style} />;
}

export default GlobalStyle;
