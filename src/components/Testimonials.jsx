import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/surveyData';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <span>CLIENT EXPERIENCES</span>
          </div>
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="gold-divider"></div>
          <p className="section-subtitle">
            Feedback and commendations from developers, contractors, and property owners who rely on our land measurement precision.
          </p>
        </div>

        {/* Carousel Showcase */}
        <div className="testimonial-carousel-container">
          {/* Arrow Buttons */}
          <button 
            type="button" 
            onClick={prevSlide}
            className="carousel-arrow-btn left"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-navy" />
          </button>

          <button 
            type="button" 
            onClick={nextSlide}
            className="carousel-arrow-btn right"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-navy" />
          </button>

          {/* Testimonial Active Card */}
          <div className="testimonial-card">
            {/* Top Gold Border Accent */}
            <div className="testimonial-border-accent"></div>

            {/* Giant Watermark Quote */}
            <div className="quote-watermark">
              <Quote className="w-16 h-16" />
            </div>

            {/* Star Rating */}
            <div className="star-rating-row">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>

            {/* Quote Body */}
            <p className="testimonial-quote-text">
              "{current.quote}"
            </p>

            {/* Author Profile */}
            <div className="testimonial-author-block">
              <div className="author-avatar-initial">
                {current.name.charAt(0)}
              </div>
              <div className="author-meta">
                <span className="author-name">{current.name}</span>
                <span className="author-role">{current.role}</span>
              </div>
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="testimonial-dots">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`dot-indicator ${currentIndex === idx ? 'active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
