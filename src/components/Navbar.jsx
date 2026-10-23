import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, MessageSquare, Compass } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/surveyData';

export default function Navbar({ onOpenEnquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scrollspy
      const sections = ['home', 'about', 'services', 'gallery', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'Testimonials', href: '#testimonials', id: 'testimonials' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e, href) => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar-root ${isScrolled ? 'navbar-scrolled' : ''}`}>
      {/* Top Gold Gradient Line */}
      <div className="navbar-top-gradient"></div>

      <nav className="container navbar-container">
        {/* Brand Monogram & Name */}
        <a href="#home" className="navbar-brand" onClick={(e) => handleLinkClick(e, '#home')}>
          <div className="brand-monogram">
            <svg viewBox="0 0 40 40" className="brand-svg">
              <circle cx="20" cy="20" r="18" fill="none" stroke="#D7B56D" strokeWidth="1.8" strokeDasharray="3 2" />
              <circle cx="20" cy="20" r="13" fill="none" stroke="#D7B56D" strokeWidth="1" opacity="0.6" />
              <line x1="20" y1="2" x2="20" y2="7" stroke="#D7B56D" strokeWidth="1.5" />
              <line x1="20" y1="33" x2="20" y2="38" stroke="#D7B56D" strokeWidth="1.5" />
              <line x1="2" y1="20" x2="7" y2="20" stroke="#D7B56D" strokeWidth="1.5" />
              <line x1="33" y1="20" x2="38" y2="20" stroke="#D7B56D" strokeWidth="1.5" />
              <text x="20" y="24" fill="#D7B56D" fontSize="11" fontWeight="800" textAnchor="middle" letterSpacing="0.5">GS</text>
            </svg>
          </div>
          <div className="brand-text-block">
            <span className="brand-title">GS Surveyor's</span>
            <span className="brand-subtitle">&amp; Consultancy</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="navbar-desktop-nav">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  <span className={`nav-indicator ${isActive ? 'active' : ''}`}></span>
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Action Controls */}
        <div className="navbar-actions">
          {/* Direct Phone Call */}
          <a href={`tel:${COMPANY_DETAILS.phone1Raw}`} className="nav-phone-btn" title="Call GS Surveyor's">
            <Phone className="w-4 h-4 text-gold" />
            <span>{COMPANY_DETAILS.phone1}</span>
          </a>

          {/* Quick Enquiry WhatsApp Trigger */}
          <button 
            type="button" 
            onClick={onOpenEnquiry} 
            className="nav-enquiry-cta"
            title="Book Land Survey Consultation"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Enquiry</span>
          </button>

          {/* Hamburger Menu Button */}
          <button
            type="button"
            className="nav-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer-header">
              <div className="brand-monogram sm">
                <span>GS</span>
              </div>
              <span className="drawer-title">GS Surveyor's &amp; Consultancy</span>
              <button 
                type="button" 
                className="drawer-close-btn"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <ul className="mobile-nav-links">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                    onClick={(e) => handleLinkClick(e, link.href)}
                  >
                    <span>{link.label}</span>
                    <span className="mobile-chevron">›</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mobile-drawer-footer">
              <div className="drawer-phone-card">
                <span className="drawer-phone-label">Primary Call / WhatsApp</span>
                <a href={`tel:${COMPANY_DETAILS.phone1Raw}`} className="drawer-phone-val">
                  <Phone className="w-4 h-4 text-gold" />
                  +91 {COMPANY_DETAILS.phone1}
                </a>
                <a href={`tel:${COMPANY_DETAILS.phone2Raw}`} className="drawer-phone-val">
                  <Phone className="w-4 h-4 text-gold" />
                  +91 {COMPANY_DETAILS.phone2}
                </a>
              </div>

              <button
                type="button"
                className="btn btn-gold w-full mt-3"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send WhatsApp Enquiry</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
