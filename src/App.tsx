import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Capabilities } from './components/Capabilities';
import { ServiceMap } from './components/ServiceMap';
import { Advantages } from './components/Advantages';
import { Partnerships } from './components/Partnerships';
import { Footer } from './components/Footer';
import { Logo } from './components/Logo';

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
