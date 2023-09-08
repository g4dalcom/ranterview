'use client';

import GlobalStyle from '@/styles/globalStyle';
import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';

const notosanskr = Noto_Sans_KR({
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
        <body className={notosanskr.className}>{children}</body>
      </html>
    </>
  );
}
