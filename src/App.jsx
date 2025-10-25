import React from 'react';
import Hero from './components/Hero';
import Listings from './components/Listings';
import Team from './components/Team';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />
      <main>
        <Listings />
        <Team />
      </main>
      <Footer />
    </div>
  );
}
