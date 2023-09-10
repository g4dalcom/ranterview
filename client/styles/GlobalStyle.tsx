import { css, Global } from '@emotion/react';
import resetStyle from './reset';

const style = css`
  ${resetStyle}

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-weight: 300;
    display: grid;
    place-items: center;
    min-height: 100dvh;
    width: 40%;
    min-width: 360px;
    margin: 0 auto;
  }

  h1 {
    font-size: 3.6rem;
    font-weight: 700;
    text-align: center;
  }
`;

function GlobalStyle() {
  return <Global styles={style} />;
}

export default GlobalStyle;
