import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Stats from './components/Stats';
import Strengths from './components/Strengths';
import Career from './components/Career';
import Achievements from './components/Achievements';
import Gallery from './components/Gallery';
import Highlights from './components/Highlights';
import Dream from './components/Dream';
import Representative from './components/Representative';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-sport-navy text-sport-light selection:bg-sport-emerald selection:text-sport-navy">
      <Navbar />
      <main>
        <Hero />
        <Profile />
        <Stats />
        <Strengths />
        <Career />
        <Achievements />
        <Gallery />
        <Highlights />
        <Dream />
        <Representative />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
