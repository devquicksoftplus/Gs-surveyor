// Data repository for GS Surveyor's & Consultancy

export const COMPANY_DETAILS = {
  name: "GS Surveyor's & Consultancy",
  shortName: "GS Surveyor",
  tagline: "Professional Land Surveying & Consultancy Services",
  owner: "Ganapathi Subramaniam C K",
  experienceYears: 5,
  establishedYear: 2020,
  phone1: "87542 69119",
  phone1Raw: "+918754269119",
  phone1Intl: "918754269119",
  phone2: "63828 88839",
  phone2Raw: "+916382888839",
  phone2Intl: "916382888839",
  email: "gssurveyor.bvn@gmail.com",
  quote: "“Land is the only thing worth working for, because it’s the only thing that lasts forever.”",
  heroSubtitle: "Accurate Land Surveying & Engineering Consultancy Services Across Tamil Nadu"
};

export const SERVICES = [
  {
    id: "topographic-survey",
    title: "Topographic Survey",
    icon: "Map",
    shortDesc: "Detailed mapping of land surface features including elevations, contours, and existing structures for engineering and construction projects.",
    fullDesc: "Our topographic surveys capture high-resolution three-dimensional data of natural and artificial land features. We produce comprehensive contour maps, elevation benchmarks, spot levels, and 3D digital terrain models essential for site planning, architectural design, drainage analysis, and civil infrastructure.",
    deliverables: ["AutoCAD DWG Contours", "Digital Elevation Model (DEM)", "Spot Level Coordinates", "Infrastructure Boundaries"],
    category: "Land Survey"
  },
  {
    id: "boundary-survey",
    title: "Boundary Survey",
    icon: "Square",
    shortDesc: "Precise determination of property boundaries, corners, and lines to establish legal property limits and resolve disputes.",
    fullDesc: "Crucial for property buyers, legal documentation, and title registrations. We conduct thorough boundary demarcations using total stations and high-accuracy DGPS, verifying title deeds and revenue village maps to permanently fix site boundaries and resolve corner discrepancies.",
    deliverables: ["Legal Boundary Plan", "Corner Stone Marking", "Encroachment Analysis", "Fencing & Demarcation Reports"],
    category: "Cadastral"
  },
  {
    id: "interior-survey",
    title: "Interior Survey",
    icon: "Home",
    shortDesc: "Comprehensive measurement and mapping of building interiors for renovation, space planning, and as-built documentation.",
    fullDesc: "Accurate interior measurements of residential, commercial, and industrial facilities. We document wall thicknesses, beam depths, sill levels, floor plans, electrical conduit paths, and column grids for space utilization and retrofit engineering.",
    deliverables: ["As-Built Floor Plans", "Cross-Section Drawings", "Ceiling & Sill Heights", "Space Allocation Schedules"],
    category: "Architecture"
  },
  {
    id: "setting-out-survey",
    title: "Setting-Out Survey",
    icon: "Target",
    shortDesc: "Accurate transfer of architectural and engineering designs to the ground for construction positioning and alignment.",
    fullDesc: "Precision staking and layout execution. We transfer CAD drawings and structural column centerlines directly onto the physical ground with millimeter precision, ensuring foundation grids, pile points, and building axes align strictly with approved engineering drawings.",
    deliverables: ["Column Grid Layouts", "Pile Point Pegging", "Excavation Reference Lines", "Plinth Level Check Reports"],
    category: "Construction"
  },
  {
    id: "drone-mapping",
    title: "Drone Mapping",
    icon: "Plane",
    shortDesc: "Aerial surveying using advanced drone technology for large-area mapping, orthophotos, and 3D terrain models.",
    fullDesc: "Rapid, cost-effective aerial surveying for expansive acreages, hilly terrain, and inaccessible corridors. Using modern photogrammetry UAVs with RTK precision, we capture orthomosaic aerial imagery, point clouds, and high-density topographical models.",
    deliverables: ["High-Res Orthophoto Maps", "3D Textured Mesh Models", "LiDAR / Point Cloud Data", "Watershed & Slope Profiles"],
    category: "Aerial & DGPS"
  },
  {
    id: "control-network",
    title: "Control Network Establishment",
    icon: "Network",
    shortDesc: "Setting up precise geodetic control points as reference framework for all subsequent surveying operations.",
    fullDesc: "The foundation of all dependable surveying. We establish primary, secondary, and tertiary geodetic benchmarks tied to global coordinate systems (WGS84 / UTM) using dual-frequency static DGPS observations, guaranteeing long-term site measurement consistency.",
    deliverables: ["Concrete Permanent Benchmarks", "DGPS Baseline Solutions", "Triangulation Networks", "Coordinate Reference Register"],
    category: "Geodetic"
  },
  {
    id: "master-planning",
    title: "Master Planning Support",
    icon: "Compass",
    shortDesc: "Surveying assistance for urban and rural master planning, land use analysis, and development feasibility studies.",
    fullDesc: "Providing comprehensive geospatial intelligence for developers, township planners, and government consultants. We map existing land use patterns, natural water bodies, right-of-ways, electric transmission corridors, and environmental constraints.",
    deliverables: ["Feasibility Base Maps", "Utility Corridor Profiles", "Land Slope Suitability Maps", "Zoning Alignment Drawings"],
    category: "Planning"
  },
  {
    id: "subdivision-layout",
    title: "Subdivision & Layout Design",
    icon: "Grid",
    shortDesc: "Design and survey of land subdivisions, residential layouts, and plot demarcation for development projects.",
    fullDesc: "From raw agricultural land to DTCP/RERA-compliant residential colonies and commercial plotting. We calculate optimal plot subdivision geometry, road network widths, park reservations, and stake each individual corner corner with boundary markers.",
    deliverables: ["DTCP / Layout Subdivisions", "Individual Plot Demarcation", "Road Network Geometry", "Site Corner Verification"],
    category: "Cadastral"
  },
  {
    id: "dgps-survey",
    title: "DGPS Survey",
    icon: "Radio",
    shortDesc: "High-precision positioning using Differential Global Positioning System for geodetic and engineering surveys.",
    fullDesc: "Sub-centimeter accuracy positioning using multi-constellation RTK DGPS receivers. We cover large areas quickly, recording lat-long coordinates and ellipsoidal heights for statutory approvals, wind mill sites, solar plants, and highway projects.",
    deliverables: ["RTK Coordinate Schedules", "UTM / WGS84 Geo-referencing", "Survey Settlement Records", "Satellite Observation Reports"],
    category: "Aerial & DGPS"
  },
  {
    id: "alignment-planning",
    title: "Alignment Planning Survey",
    icon: "TrendingUp",
    shortDesc: "Survey and design of road, pipeline, and utility corridor alignments with optimal route selection.",
    fullDesc: "Complete corridor surveying for highways, transmission lines, water supply canals, and sewer systems. We generate long-sections, cross-sections, cut/fill estimations, and optimal route alignments avoiding major land obstacles.",
    deliverables: ["Longitudinal & Cross Sections", "Corridor Right-of-Way Plans", "Obstacle Identification Maps", "Chainage Pegging Reports"],
    category: "Engineering"
  },
  {
    id: "leveling-survey",
    title: "Leveling Survey",
    icon: "Layers",
    shortDesc: "Precise height determination and benchmarking for construction grades, drainage design, and earthwork planning.",
    fullDesc: "Auto-level and digital level surveys establishing accurate ground elevations relative to mean sea level (MSL) or arbitrary site datums. Ideal for designing gravity drainage pipelines, road formation levels, and flood risk mitigation.",
    deliverables: ["Reduced Level (RL) Registers", "Gradient Slope Diagrams", "Drainage Flow Vector Charts", "Formation Level Templates"],
    category: "Engineering"
  },
  {
    id: "earthwork-volume",
    title: "Earthwork Volume Calculation",
    icon: "Layers3",
    shortDesc: "Accurate cut and fill volume computations for earthwork projects, cost estimation, and material management.",
    fullDesc: "Precise volumetric computations for quarrying, hill cutting, reservoir excavation, and industrial plinth filling. We compare pre-development and post-excavation 3D terrain meshes in CAD to calculate exact cubic meter quantities for billing.",
    deliverables: ["Cut & Fill Volumetric Sheets", "3D Isopach Comparison Maps", "Progressive Bill Verification", "Quantity Certification"],
    category: "Engineering"
  }
];

export const GALLERY_PROJECTS = [
  {
    id: "proj-1",
    title: "Topographic Land Survey",
    category: "Land Survey",
    desc: "Comprehensive contour mapping and digital terrain modeling for an upcoming commercial development.",
    type: "Contour & Surface Mapping",
    color: "#102D50"
  },
  {
    id: "proj-2",
    title: "Drone Aerial Mapping",
    category: "Drone & DGPS",
    desc: "High-resolution orthophoto generation and aerial volumetric calculation over 75+ acres of expansive terrain.",
    type: "UAV Photogrammetry",
    color: "#091B30"
  },
  {
    id: "proj-3",
    title: "Cadastral Boundary Demarcation",
    category: "Cadastral",
    desc: "Precise boundary verification, corner pegging, and legal revenue map reconciliation for private estate.",
    type: "Property Demarcation",
    color: "#163B66"
  },
  {
    id: "proj-4",
    title: "High-Precision DGPS Survey",
    category: "Drone & DGPS",
    desc: "Geodetic baseline establishment and control network coordinates for solar farm infrastructure.",
    type: "RTK Satellite Survey",
    color: "#0F2847"
  },
  {
    id: "proj-5",
    title: "Construction Setting-Out & Alignment",
    category: "Engineering",
    desc: "Millimeter-accuracy foundation column grid transfer and plinth level verification for industrial warehouse.",
    type: "Structural Positioning",
    color: "#102D50"
  },
  {
    id: "proj-6",
    title: "Residential Subdivision Layout",
    category: "Cadastral",
    desc: "Township layout plotting, road axis alignment, and DTCP compliance plot demarcations.",
    type: "Subdivision Planning",
    color: "#133762"
  },
  {
    id: "proj-7",
    title: "Highway Corridor Alignment Survey",
    category: "Engineering",
    desc: "Longitudinal cross-section leveling and corridor optimization for infrastructure right-of-way.",
    type: "Corridor Engineering",
    color: "#0A1E35"
  },
  {
    id: "proj-8",
    title: "Earthwork Cut & Fill Volumetric Calculation",
    category: "Engineering",
    desc: "3D CAD surface comparison and cubic meter excavation quantity certification for earthmoving project.",
    type: "Quantity Certification",
    color: "#1B4474"
  }
];

export const COMPANY_VALUES = [
  {
    title: "Best Quality",
    desc: "Striving for excellence through realistic criteria, certified instruments, and rigorous result validation.",
    icon: "Award"
  },
  {
    title: "Integrity",
    desc: "Operating as an ethical, dependable consultancy respecting verified data and total client transparency.",
    icon: "ShieldCheck"
  },
  {
    title: "Strategy",
    desc: "Maintaining high professional standards by deploying modern survey workflows and experienced engineering personnel.",
    icon: "TrendingUp"
  },
  {
    title: "Safety",
    desc: "Prioritizing on-site safety protocols and regular instrument calibration to guarantee flawless project execution.",
    icon: "CheckCircle"
  },
  {
    title: "Community",
    desc: "Building enduring partnerships with landowners, builders, and developers through active listening and dedication.",
    icon: "Users"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "S. Murugan",
    role: "Property Developer",
    rating: 5,
    quote: "GS Surveyor's & Consultancy delivered exceptionally accurate topographic contours for our 20-acre layout. Their prompt communication, transparent guidance, and millimeter precision made our approval process seamless."
  },
  {
    id: 2,
    name: "K. Ranganathan",
    role: "Civil Contractor",
    rating: 5,
    quote: "Very professional setting-out and leveling work. Ganapathi Subramaniam C K and his team arrived with modern total stations and established all column centerlines flawlessly. Highly recommended for any engineering survey."
  },
  {
    id: 3,
    name: "V. Chandrasekar",
    role: "Land Owner",
    rating: 5,
    quote: "I needed urgent boundary verification for my ancestral property. GS Surveyor conducted a thorough DGPS survey, matched with revenue records, and marked every corner stone clearly. Reliable and honest service."
  },
  {
    id: 4,
    name: "M. Balasubramanian",
    role: "Infrastructure Consultant",
    rating: 5,
    quote: "Outstanding drone mapping and earthwork volume calculation. The 3D models and cut/fill cross-sections were delivered right on schedule, enabling accurate contractor billing. True experts in the field."
  }
];
