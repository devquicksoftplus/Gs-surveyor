import React from 'react';
import { ArrowDown, MessageSquare, Compass, Phone, ShieldCheck, MapPin, Award } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/surveyData';

export default function Hero({ onOpenEnquiry }) {
  return (
    <section id="home" className="hero-section">
      {/* Background Graphic Grid & Radar Elements */}
      <div className="hero-grid-bg"></div>
      <div className="hero-glow-circle circle-1"></div>
      <div className="hero-glow-circle circle-2"></div>

      {/* Decorative Survey Crosshair in Background */}
      <div className="hero-survey-reticle">
        <svg viewBox="0 0 500 500" className="reticle-svg">
          <circle cx="250" cy="250" r="230" fill="none" stroke="rgba(215, 181, 109, 0.12)" strokeWidth="1.5" strokeDasharray="6 4" />
          <circle cx="250" cy="250" r="170" fill="none" stroke="rgba(215, 181, 109, 0.15)" strokeWidth="1" />
          <circle cx="250" cy="250" r="100" fill="none" stroke="rgba(215, 181, 109, 0.2)" strokeWidth="1.2" strokeDasharray="3 3" />
          <circle cx="250" cy="250" r="40" fill="none" stroke="rgba(215, 181, 109, 0.25)" strokeWidth="1" />
          <line x1="250" y1="10" x2="250" y2="490" stroke="rgba(215, 181, 109, 0.15)" strokeWidth="1.2" />
          <line x1="10" y1="250" x2="490" y2="250" stroke="rgba(215, 181, 109, 0.15)" strokeWidth="1.2" />
        </svg>
      </div>

      <div className="container hero-content-wrapper">
        {/* Established Badge */}
        <div className="hero-badge-pill">
          <span className="badge-pulse"></span>
          <span className="badge-text">Established 2020 • {COMPANY_DETAILS.experienceYears} Years of Surveying Precision</span>
        </div>

        {/* Main Title */}
        <h1 className="hero-main-title">
          <span className="title-gold">GS SURVEYOR'S</span>
          <span className="title-white"> &amp; CONSULTANCY</span>
        </h1>

        {/* Famous Quote from Reference */}
        <p className="hero-quote">
          {COMPANY_DETAILS.quote}
        </p>

        {/* Subtitle */}
        <p className="hero-description">
          Professional Land Surveying &amp; Engineering Consultancy Services. Delivering millimeter-accurate topographic surveys, DGPS mapping, boundary demarcations, drone photogrammetry, and setting-out solutions.
        </p>

        {/* CTA Button Group */}
        <div className="hero-cta-group">
          <a href="#services" className="btn btn-gold">
            <span>Explore Services</span>
            <Compass className="w-4 h-4 ml-1" />
          </a>

          <button 
            type="button" 
            onClick={onOpenEnquiry} 
            className="btn btn-whatsapp"
            title="Send WhatsApp Enquiry"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Enquiry</span>
          </button>

          <a href={`tel:${COMPANY_DETAILS.phone1Raw}`} className="btn btn-outline-gold">
            <Phone className="w-4 h-4" />
            <span>Call: {COMPANY_DETAILS.phone1}</span>
          </a>
        </div>

        {/* Fast Key Metric Highlights */}
        <div className="hero-features-bar">
          <div className="feature-item">
            <div className="feature-icon-box">
              <Award className="w-5 h-5 text-gold" />
            </div>
            <div className="feature-text">
              <span className="feature-title">{COMPANY_DETAILS.experienceYears} Years Experience</span>
              <span className="feature-subtitle">Est. 2020 by Ganapathi Subramaniam C K</span>
            </div>
          </div>

          <div className="feature-separator"></div>

          <div className="feature-item">
            <div className="feature-icon-box">
              <ShieldCheck className="w-5 h-5 text-gold" />
            </div>
            <div className="feature-text">
              <span className="feature-title">100% Reliable Accuracy</span>
              <span className="feature-subtitle">Total Stations &amp; Dual-Freq DGPS</span>
            </div>
          </div>

          <div className="feature-separator"></div>

          <div className="feature-item">
            <div className="feature-icon-box">
              <Compass className="w-5 h-5 text-gold" />
            </div>
            <div className="feature-text">
              <span className="feature-title">12 Comprehensive Services</span>
              <span className="feature-subtitle">Cadastral, Drone &amp; Civil Engineering</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a href="#about" className="hero-scroll-indicator" aria-label="Scroll to About section">
        <span className="scroll-text">SCROLL DOWN</span>
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
      </a>
    </section>
  );
}
