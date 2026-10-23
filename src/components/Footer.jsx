import React, { useState, useEffect } from 'react';
import { Phone, Mail, MessageSquare, ArrowUp, Compass, ChevronRight } from 'lucide-react';
import { COMPANY_DETAILS, SERVICES } from '../data/surveyData';

export default function Footer({ onSelectServiceForEnquiry }) {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Project Showcase', href: '#gallery' },
    { label: 'Client Testimonials', href: '#testimonials' },
    { label: 'Contact & Enquiry', href: '#contact' },
  ];

  return (
    <>
      <footer className="footer-root">
        {/* Top Gold Border Accent */}
        <div className="footer-top-accent"></div>

        <div className="container footer-content-grid">
          {/* Col 1: Brand & Overview */}
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <div className="brand-monogram sm">
                <span>GS</span>
              </div>
              <div className="brand-text">
                <span className="brand-name">{COMPANY_DETAILS.name}</span>
                <span className="brand-tag">Land Surveying &amp; Consultancy</span>
              </div>
            </div>

            <p className="footer-about-text">
              Professional land surveying and engineering consultancy services. Established in {COMPANY_DETAILS.establishedYear} with {COMPANY_DETAILS.experienceYears} years of practical expertise delivering precision, reliable boundary mapping, and modern geospatial solutions.
            </p>

            <div className="footer-owner-chip">
              <span className="chip-label">Owner &amp; Principal:</span>
              <span className="chip-name">{COMPANY_DETAILS.owner}</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Navigation</h4>
            <ul className="footer-links-list">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="footer-link">
                    <ChevronRight className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Key Services */}
          <div className="footer-col">
            <h4 className="footer-col-title">Core Services</h4>
            <ul className="footer-links-list">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <a 
                    href="#services" 
                    onClick={() => onSelectServiceForEnquiry && onSelectServiceForEnquiry(service.title)}
                    className="footer-link"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                    <span>{service.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="footer-col contact-col">
            <h4 className="footer-col-title">Contact Information</h4>
            <ul className="footer-contact-items">
              {/* Phone 1 */}
              <li>
                <div className="contact-icon-bubble">
                  <Phone className="w-4 h-4 text-gold" />
                </div>
                <div className="contact-meta">
                  <span className="contact-meta-label">Primary Call &amp; WhatsApp</span>
                  <a href={`tel:${COMPANY_DETAILS.phone1Raw}`} className="contact-meta-val">
                    +91 {COMPANY_DETAILS.phone1}
                  </a>
                </div>
              </li>

              {/* Phone 2 */}
              <li>
                <div className="contact-icon-bubble">
                  <Phone className="w-4 h-4 text-gold" />
                </div>
                <div className="contact-meta">
                  <span className="contact-meta-label">Secondary Contact</span>
                  <a href={`tel:${COMPANY_DETAILS.phone2Raw}`} className="contact-meta-val">
                    +91 {COMPANY_DETAILS.phone2}
                  </a>
                </div>
              </li>

              {/* Email */}
              <li>
                <div className="contact-icon-bubble">
                  <Mail className="w-4 h-4 text-gold" />
                </div>
                <div className="contact-meta">
                  <span className="contact-meta-label">Email Address</span>
                  <a href={`mailto:${COMPANY_DETAILS.email}`} className="contact-meta-val text-break">
                    {COMPANY_DETAILS.email}
                  </a>
                </div>
              </li>
            </ul>

            {/* Direct WhatsApp Buttons */}
            <div className="footer-wa-actions">
              <a 
                href={`https://wa.me/${COMPANY_DETAILS.phone1Intl}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-wa-btn"
                title="WhatsApp Primary Contact"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat (+91 {COMPANY_DETAILS.phone1})</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="footer-bottom-bar">
          <div className="container bottom-bar-inner">
            <p className="copyright-text">
              &copy; {currentYear} {COMPANY_DETAILS.name}. All rights reserved.
            </p>
            <p className="designer-tag">
              Proprietor: {COMPANY_DETAILS.owner} &bull; Land Surveying &amp; Consultancy Services
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Action Elements (WhatsApp + Scroll to Top) */}
      <div className="floating-actions-container">
        {/* Floating WhatsApp Quick Action */}
        <a 
          href={`https://wa.me/${COMPANY_DETAILS.phone1Intl}?text=${encodeURIComponent("Hello GS Surveyor's & Consultancy, I would like to inquire about your land surveying services.")}`}
          target="_blank" 
          rel="noopener noreferrer"
          className="floating-wa-btn"
          aria-label="Direct WhatsApp Message to GS Surveyor"
          title="Direct WhatsApp Message"
        >
          <MessageSquare className="w-7 h-7" />
          <span className="floating-wa-tooltip">Chat on WhatsApp</span>
        </a>

        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button 
            type="button" 
            onClick={scrollToTop}
            className="floating-top-btn"
            aria-label="Scroll to top of page"
            title="Scroll to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </div>
    </>
  );
}
