import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [prefilledService, setPrefilledService] = useState('');

  const handleOpenEnquiry = (serviceName = '') => {
    if (typeof serviceName === 'string' && serviceName) {
      setPrefilledService(serviceName);
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClearPrefilled = () => {
    // Keep or clear service once submitted
  };

  return (
    <div className="site-wrapper">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenEnquiry={() => handleOpenEnquiry('')} />

      <main>
        {/* Hero Section */}
        <Hero onOpenEnquiry={() => handleOpenEnquiry('')} />

        {/* About Section */}
        <About onOpenEnquiry={() => handleOpenEnquiry('')} />

        {/* Services Section */}
        <Services onSelectServiceForEnquiry={(s) => handleOpenEnquiry(s)} />

        {/* Gallery / Project Showcase */}
        <Gallery onSelectServiceForEnquiry={(s) => handleOpenEnquiry(s)} />

        {/* Testimonials */}
        <Testimonials />

        {/* Contact & WhatsApp Enquiry Section */}
        <Contact 
          prefilledService={prefilledService} 
          onClearPrefilledService={handleClearPrefilled} 
        />
      </main>

      {/* Footer & Floating Quick Actions */}
      <Footer onSelectServiceForEnquiry={(s) => handleOpenEnquiry(s)} />
    </div>
  );
}
