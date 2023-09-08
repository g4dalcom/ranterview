import { css, Global } from '@emotion/react';
import resetStyle from './reset';

const style = css`
  ${resetStyle}

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Pretendard';
    font-weight: 300;
  }
`;

function GlobalStyle() {
  return <Global styles={style} />;
}

export default GlobalStyle;
