import { css, Global } from '@emotion/react';
import resetStyle from './reset';

const style = css`
  ${resetStyle}

  html {
    font-size: 62.5%;

    // Constants
    --color-main-bg: #2a3447;
    --color-soft-bg: #384256;
    --color-dark-bg: #222b3c;
    --color-main: white;
    --color-soft: #ddd;
    --color-dark: #2a3447;

    // Responsive
    --size-sm: 480px;
    --size-md: 768px;
    --size-lg: 1024px;
    --size-xl: 1200px;
    --size-xxl: 1400px;
  }

  body {
    font-size: 1.6rem;
    font-weight: 300;
  }

  main {
    flex: 4;
    padding: 20px;
    background-color: var(--color-main-bg);
    color: var(--color-main);
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
