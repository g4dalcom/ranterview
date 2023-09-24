'use client';

import GlobalStyle from '@/styles/globalStyle';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import Provider from './components/helper-components/Provider';
import Header from './layouts/header';
import styled from '@emotion/styled';
import Navbar from './layouts/navbar';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ranterview',
  description: 'Random Interview Questions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GlobalStyle />
      <html lang="en">
        <body className={roboto.className}>
          <Header />
          <Container>
            <Navbar />
            <Provider>
              <main>{children}</main>
            </Provider>
          </Container>
        </body>
      </html>
    </>
  );
}

const Container = styled.section`
  display: flex;
  height: calc(100dvh - 77px);
`;
