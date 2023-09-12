'use client';

import Problem from './components/problem/Problem';
import Navbar from './layouts/navbar';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Problem />
    </main>
  );
}
