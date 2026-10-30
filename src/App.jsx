import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
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
        {/* Full-Width Automatic Image Slider Hero Section */}
        <Hero onOpenEnquiry={() => handleOpenEnquiry('')} />

        {/* 9 Core Surveying & Approval Services */}
        <Services onSelectServiceForEnquiry={(s) => handleOpenEnquiry(s)} />

        {/* About & Government Licensed Surveyor Credentials */}
        <About onOpenEnquiry={() => handleOpenEnquiry('')} />

        {/* Gallery / Project Showcase */}
        <Gallery onSelectServiceForEnquiry={(s) => handleOpenEnquiry(s)} />

        {/* Client Testimonials */}
        <Testimonials />

        {/* Contact & Direct WhatsApp Enquiry */}
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
