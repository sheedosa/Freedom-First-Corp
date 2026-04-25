import React from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { Capabilities } from './components/Capabilities.tsx';
import { ServiceMap } from './components/ServiceMap.tsx';
import { Advantages } from './components/Advantages.tsx';
import { Partnerships } from './components/Partnerships.tsx';
import { Footer } from './components/Footer.tsx';
import { Logo } from './components/Logo.tsx';

export default function App() {
  return (
    <div className="min-h-screen bg-off-white font-body selection:bg-red-freedom selection:text-white">
      <Header />
      <main>
        <Hero />
        <Capabilities />
        <ServiceMap />
        <Advantages />
        <Partnerships />
        {/* Upcoming sections: About, How We Work, etc. */}
      </main>

      <Footer />
    </div>
  );
}
