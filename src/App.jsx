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
import Contact from './components/Contact';
import FootballCV from './components/FootballCV';
import Representative from './components/Representative';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F7F8F4] text-[#102A43] selection:bg-[#22C55E] selection:text-[#071A2D]">
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
        <Contact />
        <FootballCV />
        <Representative />
      </main>
      <Footer />
    </div>
  );
}
