'use client';

import Problem from './components/problem/Problem';
import Header from './layouts/header';
import Navbar from './layouts/navbar';

export default function Home() {
  return (
    <main>
      {/* <Navbar /> */}
      <Header />
      <Problem />
    </main>
  );
}
