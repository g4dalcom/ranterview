'use client';

import GlobalStyle from '@/styles/globalStyle';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import Provider from './components/helper-components/Provider';

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
          <Provider>{children}</Provider>
        </body>
      </html>
    </>
  );
}
