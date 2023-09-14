'use client';

import Main from './components/main/Main';
import Header from './layouts/header';
import Navbar from './layouts/navbar';
import styled from '@emotion/styled';

export default function Home() {
  return (
    <main>
      <Header />
      <Container>
        <Navbar />
        <ContentContainer>
          <Main />
        </ContentContainer>
      </Container>
    </main>
  );
}

const Container = styled.section`
  display: flex;
  height: calc(100dvh - 76px);
`;

const ContentContainer = styled.article`
  flex: 4;
  padding: 20px;
  background-color: var(--color-main-bg);
  color: var(--color-main);
`;
