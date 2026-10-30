import React from 'react';
import { 
  FileCheck2, Building2, Layers, Award, ShieldCheck, 
  MessageSquare, Phone, ArrowRight, CheckCircle2, Star
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/surveyData';

export default function ServiceHighlights({ onSelectServiceForEnquiry }) {
  const cards = [
    {
      id: 'dtcp-approval',
      title: 'DTCP Approval',
      tag: 'Layout & Land Planning',
      icon: FileCheck2,
      shortDesc: 'DTCP layout approval guidance and documentation support. Professional assistance for land and layout approval processes.',
      points: [
        'DTCP layout approval guidance & documentation support',
        'Professional assistance for land & layout approval processes',
        'Zoning alignment, road width & public space compliance'
      ],
      serviceName: 'DTCP Approval',
      featured: false,
      badgeText: 'Statutory Approval'
    },
    {
      id: 'building-approval',
      title: 'Building Approval',
      tag: 'Residential & Commercial',
      icon: Building2,
      shortDesc: 'Building plan preparation and approval assistance. Guidance for residential and commercial building approval procedures.',
      points: [
        'Building plan preparation & approval assistance',
        'Guidance for residential & commercial building approval procedures',
        'Setback, elevation & municipal guideline verification'
      ],
      serviceName: 'Building Approval',
      featured: false,
      badgeText: 'Plan Clearance'
    },
    {
      id: 'second-third-plan',
      title: '2nd & 3rd Plan Services',
      tag: 'Plan Approvals',
      icon: Layers,
      shortDesc: 'Assistance with Second and Third Plan-related approval requirements. Full documentation handling and procedural guidance.',
      points: [
        'Assistance with Second and Third Plan-related approval requirements',
        'Preserving exact service terminology & statutory alignment',
        'Technical drawing revisions & authority submission support'
      ],
      serviceName: '2nd and 3rd Plan Approval',
      featured: false,
      badgeText: 'Approval Requirements'
    },
    {
      id: 'govt-licensed-surveyor',
      title: 'Government Licensed Surveyor',
      tag: 'Most Important Trust Highlight',
      icon: Award,
      shortDesc: 'Primary professional qualification and trust factor of the business. Certified surveying expertise delivering legally valid boundary and land measurement reports.',
      points: [
        'Primary professional qualification and trust factor',
        'Legally recognized field demarcation & boundary reports',
        'Sub-centimeter total station & dual-frequency DGPS precision'
      ],
      serviceName: 'Government Licensed Surveyor Services',
      featured: true,
      badgeText: 'Primary Trust Factor'
    }
  ];

  const handleCardEnquiry = (serviceName) => {
    if (onSelectServiceForEnquiry) {
      onSelectServiceForEnquiry(serviceName);
    }
  };

  const getWhatsAppDirectUrl = (serviceName) => {
    const text = `Hello GS Surveyor's & Consultancy, I would like to inquire about ${serviceName}.`;
    return `https://wa.me/${COMPANY_DETAILS.phone1Intl}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="service-highlights" className="service-highlights-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <ShieldCheck className="w-4 h-4 text-gold inline-block mr-1" />
            <span>CORE APPROVALS &amp; CERTIFICATION</span>
          </div>
          <h2 className="section-title">Professional Approvals &amp; Surveying Services</h2>
          <div className="gold-divider"></div>
          <p className="section-subtitle">
            Specialized statutory approval guidance and certified land surveying led by a trusted Government Licensed Surveyor across Tamil Nadu.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="highlights-grid">
          {cards.map((card) => {
            const Icon = card.icon;
            const isFeatured = card.featured;

            return (
              <div 
                key={card.id} 
                className={`highlight-card ${isFeatured ? 'highlight-card-featured' : ''}`}
              >
                {/* Top Gold Accent / Featured Shimmer Bar */}
                <div className="highlight-card-top-accent"></div>

                {/* Featured Ribbon / Badge */}
                {isFeatured && (
                  <div className="featured-badge-ribbon">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>PRIMARY TRUST FACTOR</span>
                  </div>
                )}

                {/* Card Header with Icon & Category Tag */}
                <div className="highlight-card-header">
                  <div className={`highlight-icon-box ${isFeatured ? 'featured-icon-box' : ''}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className={`highlight-tag ${isFeatured ? 'featured-tag' : ''}`}>
                    {card.badgeText}
                  </span>
                </div>

                {/* Title & Short Description */}
                <h3 className="highlight-card-title">{card.title}</h3>
                <p className="highlight-card-desc">{card.shortDesc}</p>

                {/* Structured Key Points */}
                <ul className="highlight-points-list">
                  {card.points.map((point, idx) => (
                    <li key={idx}>
                      <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Card Actions */}
                <div className="highlight-card-actions">
                  <button
                    type="button"
                    onClick={() => handleCardEnquiry(card.serviceName)}
                    className={`btn ${isFeatured ? 'btn-gold' : 'btn-outline-gold'} btn-sm w-full`}
                    title={`Enquire about ${card.title}`}
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Enquire This Service</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </button>

                  <div className="highlight-sub-actions">
                    <a
                      href={getWhatsAppDirectUrl(card.serviceName)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight-quick-wa"
                      title="Direct WhatsApp"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-whatsapp" />
                      <span>Direct WhatsApp</span>
                    </a>

                    <a
                      href={`tel:${COMPANY_DETAILS.phone1Raw}`}
                      className="highlight-quick-call"
                      title="Direct Call"
                    >
                      <Phone className="w-3.5 h-3.5 text-gold" />
                      <span>Call Now</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
