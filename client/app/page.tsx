'use client';

import Problem from './components/problem/Problem';
import Header from './layouts/header';
import Navbar from './layouts/navbar';
import styled from '@emotion/styled';

export default function Home() {
  return (
    <main>
      <Header />
      <Container>
        <NavContainer>
          <Navbar />
        </NavContainer>
        <ContentContainer>
          <Problem />
        </ContentContainer>
      </Container>
    </main>
  );
}

const Container = styled.section`
  display: flex;
`;

const NavContainer = styled.article`
  flex: 1;
`;

const ContentContainer = styled.article`
  flex: 4;
`;
