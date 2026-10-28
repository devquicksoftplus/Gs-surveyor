import React from 'react';
import { Award, ShieldCheck, TrendingUp, CheckCircle, Users, Check, ArrowRight } from 'lucide-react';
import { COMPANY_DETAILS, COMPANY_VALUES } from '../data/surveyData';

export default function About({ onOpenEnquiry }) {
  const valueIcons = {
    BestQuality: Award,
    Integrity: ShieldCheck,
    Strategy: TrendingUp,
    Safety: CheckCircle,
    Community: Users
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <span>ABOUT OUR FIRM</span>
          </div>
          <h2 className="section-title">About GS Surveyor's &amp; Consultancy</h2>
          <div className="gold-divider"></div>
          <p className="section-subtitle">
            Dedicated to delivering precision, reliability, and modern geospatial accuracy for landowners, developers, and engineers.
          </p>
        </div>

        {/* 2-Column Content Layout */}
        <div className="about-grid">
          {/* Left Column: Narrative & Stats */}
          <div className="about-narrative">
            <h3 className="about-lead-heading">
              Accurate Field Surveys &amp; Professional Land Consultancy Since {COMPANY_DETAILS.establishedYear}
            </h3>

            <p className="about-lead-p">
              <strong>GS Surveyor's &amp; Consultancy</strong> possesses phenomenal skills in performing accurate field surveys, operating various professional equipment and tools, developing detailed sketches, and analyzing maps and other documents. We are committed to prioritizing accuracy, client satisfaction, and public interest in every survey we conduct.
            </p>

            <p className="about-body-p">
              With <strong>{COMPANY_DETAILS.experienceYears} years of experience</strong> in the land surveying and consultancy domain, founded by <strong>{COMPANY_DETAILS.owner}</strong> in {COMPANY_DETAILS.establishedYear}, we have built a trusted reputation for precision, reliability, and professional excellence. Our dedicated team brings extensive practical expertise across all dimensions of cadastral, topographic, aerial, and civil construction surveying.
            </p>

            <div className="about-highlights-list">
              <div className="highlight-row">
                <div className="highlight-check">
                  <Check className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <strong>Professional Credential:</strong> Government Licensed Surveyor
                </div>
              </div>

              <div className="highlight-row">
                <div className="highlight-check">
                  <Check className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <strong>Owner &amp; Principal Consultant:</strong> {COMPANY_DETAILS.owner}
                </div>
              </div>

              <div className="highlight-row">
                <div className="highlight-check">
                  <Check className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <strong>Statutory Services:</strong> DTCP Approvals, Building Approvals &amp; 2nd/3rd Plan Services
                </div>
              </div>

              <div className="highlight-row">
                <div className="highlight-check">
                  <Check className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <strong>Established:</strong> {COMPANY_DETAILS.establishedYear} ({COMPANY_DETAILS.experienceYears} Years of Active Service)
                </div>
              </div>

              <div className="highlight-row">
                <div className="highlight-check">
                  <Check className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <strong>Equipped with Modern Technology:</strong> Total Stations, RTK DGPS &amp; Drone Photogrammetry
                </div>
              </div>
            </div>

            {/* 4 Stats Cards */}
            <div className="about-stats-grid">
              <div className="about-stat-card">
                <span className="stat-number">{COMPANY_DETAILS.experienceYears}<span>+</span></span>
                <span className="stat-label">Years Experience</span>
                <span className="stat-note">Est. {COMPANY_DETAILS.establishedYear}</span>
              </div>

              <div className="about-stat-card">
                <span className="stat-number">500<span>+</span></span>
                <span className="stat-label">Surveys Completed</span>
                <span className="stat-note">Across Tamil Nadu</span>
              </div>

              <div className="about-stat-card">
                <span className="stat-number">100<span>%</span></span>
                <span className="stat-label">Client Satisfaction</span>
                <span className="stat-note">Verified Precision</span>
              </div>

              <div className="about-stat-card">
                <span className="stat-number">12<span>+</span></span>
                <span className="stat-label">Survey Solutions</span>
                <span className="stat-note">Comprehensive Range</span>
              </div>
            </div>

            <div className="about-cta-box">
              <button 
                type="button" 
                onClick={onOpenEnquiry}
                className="btn btn-navy"
              >
                <span>Discuss Your Survey Requirement</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: 5 Core Value Pillars from Reference */}
          <div className="about-pillars">
            <div className="pillars-header">
              <h3 className="pillars-title">Our Operating Principles</h3>
              <p className="pillars-desc">The core benchmarks that guide every measurement, drawing, and boundary verification we undertake.</p>
            </div>

            <div className="values-stack">
              {COMPANY_VALUES.map((val, idx) => {
                const IconComponent = val.title === 'Best Quality' ? Award :
                                      val.title === 'Integrity' ? ShieldCheck :
                                      val.title === 'Strategy' ? TrendingUp :
                                      val.title === 'Safety' ? CheckCircle : Users;
                return (
                  <div key={idx} className="value-pillar-card">
                    <div className="value-icon-wrapper">
                      <IconComponent className="w-6 h-6 text-gold" />
                    </div>
                    <div className="value-content">
                      <h4 className="value-title">{val.title}</h4>
                      <p className="value-desc">{val.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
