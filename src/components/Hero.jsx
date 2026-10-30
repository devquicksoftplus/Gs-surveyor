import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  Compass, MessageSquare, Phone, Award, ShieldCheck, 
  ChevronLeft, ChevronRight
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/surveyData';

const HERO_SLIDES = [
  {
    id: 'total-station',
    image: '/images/hero/hero_total_station.jpg',
    category: 'Land Surveying',
    title: 'Electronic Total Station Field Surveying',
    subtitle: 'Millimeter-accurate boundary staking & topographical measurement'
  },
  {
    id: 'dgps-survey',
    image: '/images/hero/hero_dgps_survey.jpg',
    category: 'DGPS / GPS Surveying',
    title: 'Dual-Frequency GNSS RTK Positioning',
    subtitle: 'High-precision satellite geodetic coordinates across Tamil Nadu'
  },
  {
    id: 'plot-layout',
    image: '/images/hero/hero_plot_layout.jpg',
    category: 'Land & Plot Layouts',
    title: 'DTCP & Master Layout Demarcation',
    subtitle: 'Statutory layout compliance, road alignments & corner stone pegging'
  },
  {
    id: 'drone-survey',
    image: '/images/hero/hero_drone_survey.jpg',
    category: 'Drone Surveying',
    title: 'UAV Aerial Photogrammetry & 3D Mapping',
    subtitle: 'High-density point clouds, orthophotos & large-acreage terrain models'
  },
  {
    id: 'building-survey',
    image: '/images/hero/hero_building_survey.jpg',
    category: 'Building & Construction',
    title: 'Building Plan Approvals & Site Setting-Out',
    subtitle: 'Foundation column grid alignment, plinth leveling & setback verification'
  },
  {
    id: 'topographic-map',
    image: '/images/hero/hero_topographic_map.jpg',
    category: 'Topographic Mapping',
    title: 'Contour Mapping & Boundary Demarcation',
    subtitle: 'Elevation benchmarks, digital terrain models & dispute-free boundaries'
  }
];

const SLIDE_DURATION = 120000; // 2 minutes (120 seconds) exactly as required

export default function Hero({ onOpenEnquiry }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => 
    typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false
  );
  const timerRef = useRef(null);

  // Listen for reduced motion preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Timer controls with 120s interval
  const clearSlideTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startSlideTimer = useCallback(() => {
    clearSlideTimer();
    if (prefersReducedMotion) return;

    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, SLIDE_DURATION);
  }, [clearSlideTimer, prefersReducedMotion]);

  // Tab visibility: pause on hidden, resume on visible
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        clearSlideTimer();
      } else {
        startSlideTimer();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    startSlideTimer();

    return () => {
      clearSlideTimer();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [clearSlideTimer, startSlideTimer]);

  // Manual navigation handlers - reset timer so next auto-rotation is 120s away
  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
    startSlideTimer();
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    startSlideTimer();
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    startSlideTimer();
  };

  return (
    <section id="home" className="hero-slider-section">
      {/* Background Full-Width Rotating Image Slider */}
      <div className="hero-slider-track" aria-live="polite">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`hero-slide-layer ${isActive ? 'active' : ''}`}
              style={{
                opacity: isActive ? 1 : 0,
                transition: prefersReducedMotion ? 'none' : 'opacity 800ms cubic-bezier(0.4, 0, 0.2, 1)',
                zIndex: isActive ? 1 : 0
              }}
              aria-hidden={!isActive}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="hero-slide-image"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </div>
          );
        })}
      </div>

      {/* Forest Green Gradient & Darkening Overlay for Text Contrast */}
      <div className="hero-forest-overlay"></div>

      {/* Decorative Surveyor Grid Overlay */}
      <div className="hero-reticle-watermark">
        <svg viewBox="0 0 500 500" className="hero-reticle-svg">
          <circle cx="250" cy="250" r="230" fill="none" stroke="rgba(183, 123, 69, 0.16)" strokeWidth="1.5" strokeDasharray="6 4" />
          <circle cx="250" cy="250" r="160" fill="none" stroke="rgba(247, 244, 234, 0.08)" strokeWidth="1" />
          <circle cx="250" cy="250" r="90" fill="none" stroke="rgba(183, 123, 69, 0.2)" strokeWidth="1.2" strokeDasharray="3 3" />
          <line x1="250" y1="10" x2="250" y2="490" stroke="rgba(183, 123, 69, 0.16)" strokeWidth="1.2" />
          <line x1="10" y1="250" x2="490" y2="250" stroke="rgba(183, 123, 69, 0.16)" strokeWidth="1.2" />
        </svg>
      </div>

      {/* Slider Arrow Controls */}
      <button
        type="button"
        onClick={handlePrevSlide}
        className="hero-arrow-btn hero-arrow-prev"
        aria-label="Previous surveying photograph"
        title="Previous Photograph (2-min rotation)"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        type="button"
        onClick={handleNextSlide}
        className="hero-arrow-btn hero-arrow-next"
        aria-label="Next surveying photograph"
        title="Next Photograph (2-min rotation)"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slide Context Pill (Shows which photo is active) */}
      <div className="hero-slide-badge-indicator">
        <span className="slide-pulse-dot"></span>
        <span className="slide-badge-text">
          {HERO_SLIDES[currentSlide].category} • {currentSlide + 1} of {HERO_SLIDES.length}
        </span>
      </div>

      {/* Foreground Hero Content Container */}
      <div className="container hero-content-wrapper">
        {/* Established Badge */}
        <div className="hero-top-pill">
          <span className="badge-pulse"></span>
          <span className="badge-text">Established 2020 • {COMPANY_DETAILS.experienceYears} Years of Precision</span>
        </div>

        {/* Brand Name */}
        <p className="hero-brand-name">
          GS SURVEYOR'S &amp; CONSULTANCY
        </p>

        {/* Primary Professional Badge: GOVERNMENT LICENSED SURVEYOR */}
        <div className="hero-license-badge-wrap">
          <div className="hero-license-badge">
            <Award className="w-5 h-5 text-bronze flex-shrink-0" />
            <span className="hero-license-badge-text">GOVERNMENT LICENSED SURVEYOR</span>
            <ShieldCheck className="w-4 h-4 text-bronze flex-shrink-0" />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="hero-main-title">
          Accurate Land Surveying &amp; Professional Approval Consultancy
        </h1>

        {/* Supporting Description */}
        <p className="hero-description">
          Reliable land surveying, DTCP approval assistance, building approval guidance, plan-related services, DGPS mapping, boundary demarcation, and civil engineering consultancy.
        </p>

        {/* Primary Buttons */}
        <div className="hero-cta-group">
          <a href="#services" className="btn btn-forest-hero">
            <span>Explore Services</span>
            <Compass className="w-4 h-4 ml-1" />
          </a>

          <button 
            type="button" 
            onClick={onOpenEnquiry} 
            className="btn btn-whatsapp-hero"
            title="Send WhatsApp Enquiry"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Enquiry</span>
          </button>

          <a href={`tel:${COMPANY_DETAILS.phone1Raw}`} className="btn btn-ivory-hero" title="Call Now">
            <Phone className="w-4 h-4" />
            <span>Call Now</span>
          </a>
        </div>

        {/* Fast Key Metric Highlights */}
        <div className="hero-features-bar">
          <div className="feature-item">
            <div className="feature-icon-box">
              <Award className="w-5 h-5 text-bronze" />
            </div>
            <div className="feature-text">
              <span className="feature-title">Government Licensed</span>
              <span className="feature-subtitle">Official Professional Qualification</span>
            </div>
          </div>

          <div className="feature-separator"></div>

          <div className="feature-item">
            <div className="feature-icon-box">
              <ShieldCheck className="w-5 h-5 text-bronze" />
            </div>
            <div className="feature-text">
              <span className="feature-title">DTCP &amp; Building Approvals</span>
              <span className="feature-subtitle">Layout &amp; Drawing Clearances</span>
            </div>
          </div>

          <div className="feature-separator"></div>

          <div className="feature-item">
            <div className="feature-icon-box">
              <Compass className="w-5 h-5 text-bronze" />
            </div>
            <div className="feature-text">
              <span className="feature-title">{COMPANY_DETAILS.experienceYears}+ Years Precision</span>
              <span className="feature-subtitle">Total Stations &amp; RTK DGPS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Navigation Dots / Indicators */}
      <div className="hero-dots-container" role="tablist" aria-label="Slider navigation indicators">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <button
              key={slide.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`Go to slide ${index + 1}: ${slide.category}`}
              onClick={() => handleDotClick(index)}
              className={`hero-dot-indicator ${isActive ? 'active' : ''}`}
            >
              <span className="dot-progress-fill"></span>
            </button>
          );
        })}
      </div>

      {/* Scroll Down Indicator */}
      <a href="#services" className="hero-scroll-indicator" aria-label="Scroll to Services section">
        <span className="scroll-text">EXPLORE SERVICES</span>
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
      </a>
    </section>
  );
}
