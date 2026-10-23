import React from 'react';

// Dedicated SVG vector illustrations for GS Surveyor's & Consultancy
export function ServiceIllustration({ serviceId, className = "h-16 w-auto" }) {
  const navy = "#102D50";
  const gold = "#D7B56D";
  const goldLight = "#F3DC9F";
  const deepNavy = "#091B30";

  switch (serviceId) {
    case 'topographic-survey':
      return (
        <svg viewBox="0 0 160 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 65C35 45 60 70 95 40C125 15 140 30 150 20" stroke={gold} strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M10 50C40 35 75 55 110 30C130 15 145 25 150 15" stroke={navy} strokeWidth="2" strokeDasharray="4 3" opacity="0.7"/>
          <path d="M10 35C45 20 80 40 120 18C135 10 145 15 150 10" stroke={gold} strokeWidth="1.5" opacity="0.5"/>
          <circle cx="95" cy="40" r="4" fill={gold}/>
          <circle cx="95" cy="40" r="8" stroke={gold} strokeWidth="1" opacity="0.4"/>
          <text x="98" y="32" fill={navy} fontSize="9" fontWeight="700" fontFamily="sans-serif">+124.5m</text>
          <path d="M40 75L55 35L70 75" stroke={deepNavy} strokeWidth="2"/>
          <rect x="52" y="27" width="6" height="8" rx="1" fill={gold}/>
          <line x1="55" y1="23" x2="55" y2="27" stroke={gold} strokeWidth="2"/>
        </svg>
      );

    case 'boundary-survey':
      return (
        <svg viewBox="0 0 160 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="30,20 130,15 145,65 15,60" fill="rgba(215, 181, 109, 0.08)" stroke={gold} strokeWidth="2.5" strokeDasharray="5 3"/>
          <circle cx="30" cy="20" r="4" fill={deepNavy}/>
          <circle cx="130" cy="15" r="4" fill={deepNavy}/>
          <circle cx="145" cy="65" r="4" fill={deepNavy}/>
          <circle cx="15" cy="60" r="4" fill={deepNavy}/>
          <path d="M80 18L80 62" stroke={navy} strokeWidth="1.5" strokeDasharray="3 3"/>
          <text x="65" y="12" fill={deepNavy} fontSize="9" fontWeight="bold">98.40 m</text>
          <text x="140" y="45" fill={deepNavy} fontSize="9" fontWeight="bold">42.10 m</text>
          <circle cx="80" cy="40" r="14" stroke={gold} strokeWidth="1.5"/>
          <line x1="80" y1="22" x2="80" y2="58" stroke={gold} strokeWidth="1.5"/>
          <line x1="62" y1="40" x2="98" y2="40" stroke={gold} strokeWidth="1.5"/>
        </svg>
      );

    case 'interior-survey':
      return (
        <svg viewBox="0 0 160 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="25" y="15" width="110" height="52" rx="4" stroke={deepNavy} strokeWidth="2.5"/>
          <line x1="75" y1="15" x2="75" y2="45" stroke={deepNavy} strokeWidth="2"/>
          <line x1="25" y1="45" x2="105" y2="45" stroke={deepNavy} strokeWidth="2"/>
          <path d="M105 45L120 60" stroke={gold} strokeWidth="2"/>
          <circle cx="50" cy="30" r="10" stroke={gold} strokeWidth="1.2" strokeDasharray="2 2"/>
          <circle cx="50" cy="30" r="2" fill={gold}/>
          <text x="82" y="32" fill={navy} fontSize="8" fontWeight="600">LIVING</text>
          <text x="32" y="60" fill={navy} fontSize="8" fontWeight="600">OFFICE</text>
        </svg>
      );

    case 'setting-out-survey':
      return (
        <svg viewBox="0 0 160 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="20" y1="20" x2="140" y2="20" stroke={navy} strokeWidth="1.5" strokeDasharray="4 4"/>
          <line x1="20" y1="42" x2="140" y2="42" stroke={navy} strokeWidth="1.5" strokeDasharray="4 4"/>
          <line x1="20" y1="64" x2="140" y2="64" stroke={navy} strokeWidth="1.5" strokeDasharray="4 4"/>
          <line x1="40" y1="10" x2="40" y2="70" stroke={navy} strokeWidth="1.5" strokeDasharray="4 4"/>
          <line x1="80" y1="10" x2="80" y2="70" stroke={navy} strokeWidth="1.5" strokeDasharray="4 4"/>
          <line x1="120" y1="10" x2="120" y2="70" stroke={navy} strokeWidth="1.5" strokeDasharray="4 4"/>
          <rect x="34" y="36" width="12" height="12" fill={gold} stroke={deepNavy} strokeWidth="1.5"/>
          <rect x="74" y="36" width="12" height="12" fill={gold} stroke={deepNavy} strokeWidth="1.5"/>
          <rect x="114" y="36" width="12" height="12" fill={gold} stroke={deepNavy} strokeWidth="1.5"/>
          <circle cx="80" cy="42" r="16" stroke={gold} strokeWidth="1.5"/>
          <line x1="80" y1="20" x2="80" y2="64" stroke={gold} strokeWidth="1.5"/>
          <line x1="58" y1="42" x2="102" y2="42" stroke={gold} strokeWidth="1.5"/>
        </svg>
      );

    case 'drone-mapping':
      return (
        <svg viewBox="0 0 160 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Drone */}
          <ellipse cx="80" cy="24" rx="14" ry="6" fill={deepNavy}/>
          <line x1="58" y1="20" x2="102" y2="28" stroke={gold} strokeWidth="2.5"/>
          <line x1="58" y1="28" x2="102" y2="20" stroke={gold} strokeWidth="2.5"/>
          <circle cx="58" cy="20" r="7" stroke={gold} strokeWidth="1.5" strokeDasharray="3 2"/>
          <circle cx="102" cy="28" r="7" stroke={gold} strokeWidth="1.5" strokeDasharray="3 2"/>
          <circle cx="58" cy="28" r="7" stroke={gold} strokeWidth="1.5" strokeDasharray="3 2"/>
          <circle cx="102" cy="20" r="7" stroke={gold} strokeWidth="1.5" strokeDasharray="3 2"/>
          {/* Scan Cone */}
          <polygon points="80,27 30,72 130,72" fill="rgba(215, 181, 109, 0.12)"/>
          <line x1="80" y1="27" x2="30" y2="72" stroke={gold} strokeWidth="1.2" strokeDasharray="3 3"/>
          <line x1="80" y1="27" x2="130" y2="72" stroke={gold} strokeWidth="1.2" strokeDasharray="3 3"/>
          <line x1="25" y1="72" x2="135" y2="72" stroke={deepNavy} strokeWidth="2"/>
        </svg>
      );

    case 'control-network':
      return (
        <svg viewBox="0 0 160 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="80,14 135,66 25,66" fill="rgba(16, 45, 80, 0.05)" stroke={deepNavy} strokeWidth="2"/>
          <polygon points="80,14 105,45 55,45" stroke={gold} strokeWidth="1.5" strokeDasharray="3 3"/>
          <circle cx="80" cy="14" r="5" fill={gold}/>
          <circle cx="135" cy="66" r="5" fill={gold}/>
          <circle cx="25" cy="66" r="5" fill={gold}/>
          <circle cx="80" cy="48" r="4" fill={deepNavy}/>
          <text x="87" y="16" fill={deepNavy} fontSize="8" fontWeight="bold">CP-01</text>
          <text x="140" y="68" fill={deepNavy} fontSize="8" fontWeight="bold">CP-02</text>
          <text x="8" y="68" fill={deepNavy} fontSize="8" fontWeight="bold">CP-03</text>
        </svg>
      );

    case 'master-planning':
      return (
        <svg viewBox="0 0 160 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="15" width="120" height="52" rx="4" fill="rgba(215, 181, 109, 0.06)" stroke={deepNavy} strokeWidth="2"/>
          <path d="M20 40Q80 25 140 45" stroke={gold} strokeWidth="3"/>
          <line x1="60" y1="15" x2="60" y2="67" stroke={deepNavy} strokeWidth="1.5" strokeDasharray="3 3"/>
          <line x1="105" y1="15" x2="105" y2="67" stroke={deepNavy} strokeWidth="1.5" strokeDasharray="3 3"/>
          <rect x="28" y="22" width="22" height="12" rx="2" fill="rgba(16, 45, 80, 0.15)"/>
          <rect x="70" y="48" width="25" height="12" rx="2" fill="rgba(215, 181, 109, 0.25)"/>
          <rect x="112" y="22" width="20" height="18" rx="2" fill="rgba(16, 45, 80, 0.15)"/>
        </svg>
      );

    case 'subdivision-layout':
      return (
        <svg viewBox="0 0 160 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="18" y="14" width="124" height="52" fill="none" stroke={deepNavy} strokeWidth="2"/>
          <rect x="24" y="20" width="34" height="18" rx="1" fill="rgba(215, 181, 109, 0.2)" stroke={gold} strokeWidth="1.2"/>
          <rect x="63" y="20" width="34" height="18" rx="1" fill="rgba(215, 181, 109, 0.2)" stroke={gold} strokeWidth="1.2"/>
          <rect x="102" y="20" width="34" height="18" rx="1" fill="rgba(215, 181, 109, 0.2)" stroke={gold} strokeWidth="1.2"/>
          <rect x="24" y="44" width="34" height="18" rx="1" fill="rgba(16, 45, 80, 0.12)" stroke={navy} strokeWidth="1.2"/>
          <rect x="63" y="44" width="34" height="18" rx="1" fill="rgba(16, 45, 80, 0.12)" stroke={navy} strokeWidth="1.2"/>
          <rect x="102" y="44" width="34" height="18" rx="1" fill="rgba(16, 45, 80, 0.12)" stroke={navy} strokeWidth="1.2"/>
          <text x="35" y="32" fill={deepNavy} fontSize="7" fontWeight="bold">PLOT 1</text>
          <text x="74" y="32" fill={deepNavy} fontSize="7" fontWeight="bold">PLOT 2</text>
          <text x="113" y="32" fill={deepNavy} fontSize="7" fontWeight="bold">PLOT 3</text>
        </svg>
      );

    case 'dgps-survey':
      return (
        <svg viewBox="0 0 160 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Satellite */}
          <rect x="110" y="10" width="14" height="8" rx="1" fill={gold}/>
          <line x1="102" y1="14" x2="110" y2="14" stroke={gold} strokeWidth="2"/>
          <line x1="124" y1="14" x2="132" y2="14" stroke={gold} strokeWidth="2"/>
          <path d="M110 22C100 28 80 45 60 55" stroke={gold} strokeWidth="1.5" strokeDasharray="3 3"/>
          {/* DGPS Pole & Antenna */}
          <circle cx="50" cy="28" r="8" fill={deepNavy}/>
          <circle cx="50" cy="28" r="5" fill={gold}/>
          <line x1="50" y1="36" x2="50" y2="74" stroke={deepNavy} strokeWidth="3"/>
          <circle cx="50" cy="74" r="3" fill={gold}/>
          <circle cx="50" cy="28" r="14" stroke={gold} strokeWidth="1" strokeDasharray="2 2"/>
          <circle cx="50" cy="28" r="20" stroke={gold} strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6"/>
          <text x="65" y="32" fill={deepNavy} fontSize="8" fontWeight="bold">RTK GNSS</text>
        </svg>
      );

    case 'alignment-planning':
      return (
        <svg viewBox="0 0 160 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 65C40 60 60 30 100 30C125 30 145 15 155 10" stroke={deepNavy} strokeWidth="9" strokeLinecap="round"/>
          <path d="M10 65C40 60 60 30 100 30C125 30 145 15 155 10" stroke={gold} strokeWidth="2" strokeDasharray="6 4" strokeLinecap="round"/>
          <line x1="60" y1="18" x2="60" y2="68" stroke={navy} strokeWidth="1.2" strokeDasharray="2 2"/>
          <line x1="100" y1="12" x2="100" y2="62" stroke={navy} strokeWidth="1.2" strokeDasharray="2 2"/>
          <circle cx="60" cy="45" r="4" fill={gold}/>
          <circle cx="100" cy="30" r="4" fill={gold}/>
          <text x="50" y="76" fill={deepNavy} fontSize="8" fontWeight="bold">CH: 0+500</text>
          <text x="92" y="76" fill={deepNavy} fontSize="8" fontWeight="bold">CH: 1+000</text>
        </svg>
      );

    case 'leveling-survey':
      return (
        <svg viewBox="0 0 160 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Level Instrument */}
          <path d="M40 70L52 38L64 70" stroke={deepNavy} strokeWidth="2"/>
          <rect x="44" y="32" width="22" height="7" rx="1.5" fill={gold} stroke={deepNavy} strokeWidth="1.5"/>
          <circle cx="62" cy="35.5" r="4" fill={deepNavy}/>
          {/* Level Staff */}
          <rect x="125" y="15" width="8" height="55" fill="#FFFFFF" stroke={deepNavy} strokeWidth="2"/>
          <rect x="125" y="20" width="8" height="6" fill={gold}/>
          <rect x="125" y="32" width="8" height="6" fill={gold}/>
          <rect x="125" y="44" width="8" height="6" fill={gold}/>
          <rect x="125" y="56" width="8" height="6" fill={gold}/>
          {/* Sight Line */}
          <line x1="65" y1="35.5" x2="125" y2="35.5" stroke="#E11D48" strokeWidth="1.5" strokeDasharray="4 3"/>
          <text x="75" y="30" fill={deepNavy} fontSize="8" fontWeight="bold">BS: 1.485m</text>
          <path d="M20 72Q70 68 140 70" stroke={deepNavy} strokeWidth="2.5"/>
        </svg>
      );

    case 'earthwork-volume':
      return (
        <svg viewBox="0 0 160 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* 3D Prism Earth cut & fill */}
          <polygon points="30,55 70,30 135,42 90,70" fill="rgba(215, 181, 109, 0.25)" stroke={gold} strokeWidth="2"/>
          <polygon points="70,30 135,42 125,20 60,12" fill="rgba(16, 45, 80, 0.15)" stroke={deepNavy} strokeWidth="1.5"/>
          <polygon points="30,55 70,30 60,12 20,32" fill="rgba(16, 45, 80, 0.3)" stroke={deepNavy} strokeWidth="1.5"/>
          <path d="M25 65L85 45L145 58" stroke={deepNavy} strokeWidth="1.5" strokeDasharray="3 3"/>
          <text x="65" y="55" fill={deepNavy} fontSize="8" fontWeight="bold">CUT / FILL</text>
          <text x="63" y="65" fill={navy} fontSize="7" fontWeight="bold">ΔV = 4,820 m³</text>
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 160 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="80" cy="40" r="28" stroke={gold} strokeWidth="2"/>
          <circle cx="80" cy="40" r="14" stroke={navy} strokeWidth="1.5"/>
          <line x1="80" y1="6" x2="80" y2="74" stroke={gold} strokeWidth="1.5"/>
          <line x1="46" y1="40" x2="114" y2="40" stroke={gold} strokeWidth="1.5"/>
        </svg>
      );
  }
}

// Visual Gallery Card Display
export function GalleryVisual({ project, onClick }) {
  return (
    <div 
      className="gallery-card-wrapper"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter') onClick(); }}
    >
      <div className="gallery-graphic-container">
        <ServiceIllustration serviceId={project.id === 'proj-1' ? 'topographic-survey' :
                                      project.id === 'proj-2' ? 'drone-mapping' :
                                      project.id === 'proj-3' ? 'boundary-survey' :
                                      project.id === 'proj-4' ? 'dgps-survey' :
                                      project.id === 'proj-5' ? 'setting-out-survey' :
                                      project.id === 'proj-6' ? 'subdivision-layout' :
                                      project.id === 'proj-7' ? 'alignment-planning' : 'earthwork-volume'}
                            className="gallery-svg" />
        
        {/* Subtle coordinate overlay */}
        <div className="gallery-overlay-badge">
          <span>{project.category}</span>
        </div>
      </div>

      <div className="gallery-card-body">
        <span className="gallery-type-label">{project.type}</span>
        <h3 className="gallery-card-title">{project.title}</h3>
        <p className="gallery-card-desc">{project.desc}</p>
        <div className="gallery-view-link">
          <span>Inspect Project Details</span>
          <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </div>
  );
}
