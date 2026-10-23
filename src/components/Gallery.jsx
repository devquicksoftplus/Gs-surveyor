import React, { useState } from 'react';
import { Maximize2, X, MessageSquare, CheckCircle, Compass, Layers } from 'lucide-react';
import { GALLERY_PROJECTS, COMPANY_DETAILS } from '../data/surveyData';
import { GalleryVisual, ServiceIllustration } from './SurveyIllustrations';

export default function Gallery({ onSelectServiceForEnquiry }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filterTabs = ['All', 'Land Survey', 'Drone & DGPS', 'Cadastral', 'Engineering'];

  const filteredProjects = activeFilter === 'All'
    ? GALLERY_PROJECTS
    : GALLERY_PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <span>PORTFOLIO &amp; SHOWCASE</span>
          </div>
          <h2 className="section-title">Our Project Showcase</h2>
          <div className="gold-divider"></div>
          <p className="section-subtitle">
            Illustrative representations of surveying methodologies, equipment setups, and engineering deliverables executed across private and commercial sectors.
          </p>
        </div>

        {/* Gallery Filter Tabs */}
        <div className="gallery-filter-bar">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              type="button"
              className={`filter-btn ${activeFilter === tab ? 'active' : ''}`}
              onClick={() => setActiveFilter(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredProjects.map((project) => (
            <GalleryVisual 
              key={project.id} 
              project={project} 
              onClick={() => setSelectedProject(project)} 
            />
          ))}
        </div>
      </div>

      {/* Lightbox / Project Details Modal */}
      {selectedProject && (
        <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="modal-content modal-lg" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span className="modal-badge">{selectedProject.category}</span>
                <h3 className="modal-title">{selectedProject.title}</h3>
                <span className="modal-type">{selectedProject.type}</span>
              </div>
              <button 
                type="button" 
                className="modal-close"
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="lightbox-visual-hero">
              <ServiceIllustration 
                serviceId={
                  selectedProject.id === 'proj-1' ? 'topographic-survey' :
                  selectedProject.id === 'proj-2' ? 'drone-mapping' :
                  selectedProject.id === 'proj-3' ? 'boundary-survey' :
                  selectedProject.id === 'proj-4' ? 'dgps-survey' :
                  selectedProject.id === 'proj-5' ? 'setting-out-survey' :
                  selectedProject.id === 'proj-6' ? 'subdivision-layout' :
                  selectedProject.id === 'proj-7' ? 'alignment-planning' : 'earthwork-volume'
                }
                className="lightbox-svg" 
              />
            </div>

            <div className="modal-body">
              <h4 className="modal-subheading">Technical Methodology &amp; Execution</h4>
              <p className="modal-text">{selectedProject.desc}</p>
              
              <div className="lightbox-specs-grid">
                <div className="spec-card">
                  <span className="spec-label">Survey Classification</span>
                  <span className="spec-value">{selectedProject.category}</span>
                </div>
                <div className="spec-card">
                  <span className="spec-label">Measurement Standard</span>
                  <span className="spec-value">Millimeter Geodetic Precision</span>
                </div>
                <div className="spec-card">
                  <span className="spec-label">Primary Deliverables</span>
                  <span className="spec-value">AutoCAD DWG, PDF &amp; CSV Coords</span>
                </div>
                <div className="spec-card">
                  <span className="spec-label">Consultancy Firm</span>
                  <span className="spec-value">{COMPANY_DETAILS.name}</span>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-navy"
                onClick={() => setSelectedProject(null)}
              >
                Close View
              </button>
              <button
                type="button"
                className="btn btn-whatsapp"
                onClick={() => {
                  const p = selectedProject;
                  setSelectedProject(null);
                  onSelectServiceForEnquiry(`${p.title} (${p.category})`);
                }}
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enquire For Similar Project on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
