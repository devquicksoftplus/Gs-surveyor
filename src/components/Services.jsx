import React, { useState } from 'react';
import { 
  Map, Square, Home, Target, Plane, Network, 
  Compass, Grid, Radio, TrendingUp, Layers, Layers3, 
  MessageSquare, ChevronRight, CheckCircle2,
  FileCheck2, Building2, Award, ShieldCheck
} from 'lucide-react';
import { SERVICES, COMPANY_DETAILS } from '../data/surveyData';
import { ServiceIllustration } from './SurveyIllustrations';

export default function Services({ onSelectServiceForEnquiry }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalService, setActiveModalService] = useState(null);

  const categories = ['All', 'Approvals', 'Land Survey', 'Cadastral', 'Engineering', 'Aerial & DGPS', 'Construction'];

  const filteredServices = selectedCategory === 'All' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === selectedCategory || (selectedCategory === 'Approvals' && s.category === 'Approvals') || (selectedCategory === 'Engineering' && (s.category === 'Engineering' || s.category === 'Geodetic' || s.category === 'Architecture')));

  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'FileCheck2': return FileCheck2;
      case 'Building2': return Building2;
      case 'Award': return Award;
      case 'ShieldCheck': return ShieldCheck;
      case 'Map': return Map;
      case 'Square': return Square;
      case 'Home': return Home;
      case 'Target': return Target;
      case 'Plane': return Plane;
      case 'Network': return Network;
      case 'Compass': return Compass;
      case 'Grid': return Grid;
      case 'Radio': return Radio;
      case 'TrendingUp': return TrendingUp;
      case 'Layers': return Layers;
      case 'Layers3': return Layers3;
      default: return Compass;
    }
  };

  const handleEnquireClick = (service) => {
    onSelectServiceForEnquiry(service.title);
  };

  return (
    <section id="services" className="services-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <span>WHAT WE DELIVER</span>
          </div>
          <h2 className="section-title">Our Surveying &amp; Consultancy Services</h2>
          <div className="gold-divider"></div>
          <p className="section-subtitle">
            Comprehensive, technology-driven land surveying solutions executing with millimeter precision for civil infrastructure, property demarcation, and development planning.
          </p>
        </div>

        {/* Category Filters */}
        <div className="services-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services 12-Card Grid */}
        <div className="services-grid">
          {filteredServices.map((service, index) => {
            const Icon = getServiceIcon(service.icon);
            return (
              <div key={service.id} className="service-card">
                {/* Top Gold Hover Strip */}
                <div className="service-card-top-strip"></div>

                {/* SVG Vector Graphic Demonstration */}
                <div className="service-illustration-box">
                  <ServiceIllustration serviceId={service.id} className="service-svg" />
                </div>

                {/* Card Header with Icon & Category */}
                <div className="service-card-header">
                  <div className="service-icon-bubble">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <span className="service-cat-tag">{service.category}</span>
                </div>

                {/* Title & Description */}
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.shortDesc}</p>

                {/* Key Deliverables */}
                <div className="service-deliverables">
                  <span className="deliverables-heading">Deliverables:</span>
                  <ul className="deliverables-list">
                    {service.deliverables.slice(0, 2).map((item, i) => (
                      <li key={i}>
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Actions */}
                <div className="service-card-actions">
                  <button
                    type="button"
                    onClick={() => handleEnquireClick(service)}
                    className="service-enquire-btn"
                    title={`Enquire on WhatsApp about ${service.title}`}
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Enquiry</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveModalService(service)}
                    className="service-details-btn"
                    title="View Full Scope"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Fast Action Prompt */}
        <div className="services-bottom-cta">
          <div className="cta-content">
            <h3 className="cta-heading">Need a Customized Survey or Urgent Site Inspection?</h3>
            <p className="cta-sub">
              Contact <strong>Ganapathi Subramaniam C K</strong> directly. We deploy total stations and DGPS units across all districts in Tamil Nadu.
            </p>
          </div>
          <div className="cta-buttons">
            <a href={`tel:${COMPANY_DETAILS.phone1Raw}`} className="btn btn-outline-gold">
              Call +91 {COMPANY_DETAILS.phone1}
            </a>
            <button 
              type="button" 
              onClick={() => onSelectServiceForEnquiry("General Surveying Inquiry")}
              className="btn btn-whatsapp"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us Directly</span>
            </button>
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      {activeModalService && (
        <div className="modal-backdrop" onClick={() => setActiveModalService(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title-group">
                <span className="modal-badge">{activeModalService.category}</span>
                <h3 className="modal-title">{activeModalService.title}</h3>
              </div>
              <button 
                type="button" 
                className="modal-close"
                onClick={() => setActiveModalService(null)}
              >
                &times;
              </button>
            </div>

            <div className="modal-illustration-container">
              <ServiceIllustration serviceId={activeModalService.id} className="modal-svg" />
            </div>

            <div className="modal-body">
              <h4 className="modal-subheading">Comprehensive Service Overview</h4>
              <p className="modal-text">{activeModalService.fullDesc}</p>

              <h4 className="modal-subheading mt-4">Standard Deliverables &amp; Formats</h4>
              <ul className="modal-list">
                {activeModalService.deliverables.map((item, idx) => (
                  <li key={idx}>
                    <CheckCircle2 className="w-4 h-4 text-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-navy"
                onClick={() => setActiveModalService(null)}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-whatsapp"
                onClick={() => {
                  const s = activeModalService;
                  setActiveModalService(null);
                  handleEnquireClick(s);
                }}
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enquire This Service on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
