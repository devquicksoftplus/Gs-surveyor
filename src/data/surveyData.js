// Data repository for GS Surveyor's & Consultancy
// Theme: Forest Green (#244B3C), Ivory (#F7F4EA), Bronze (#B77B45), White (#FFFFFF), Dark Text (#29332E)

export const COMPANY_DETAILS = {
  name: "GS Surveyor's & Consultancy",
  shortName: "GS Surveyor",
  tagline: "Government Licensed Surveyor • Accurate Land Surveying & Professional Approval Consultancy",
  qualification: "GOVERNMENT LICENSED SURVEYOR",
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
  heroSubtitle: "Accurate Land Surveying & Professional Approval Consultancy Across Tamil Nadu"
};

export const SERVICES = [
  {
    id: "land-surveying",
    title: "Land Surveying",
    icon: "Compass",
    shortDesc: "Comprehensive land measurement and setting-out using high-precision electronic total stations and digital leveling.",
    fullDesc: "Complete field surveying for agricultural land, commercial plots, and industrial estates. We conduct precise perimeter traverses, corner stakeouts, and topographical measurements to establish reliable ground data for all types of property development.",
    deliverables: ["Total Station Field Traverse", "AutoCAD Plot Plans", "Corner Pegging & Coordinates", "Site Demarcation Blueprints"],
    category: "Land Survey"
  },
  {
    id: "dtcp-approval",
    title: "DTCP Approval",
    icon: "FileCheck2",
    shortDesc: "DTCP layout approval guidance and documentation support. Professional assistance for land and layout approval processes.",
    fullDesc: "Comprehensive guidance and technical drawing preparation for Directorate of Town and Country Planning (DTCP) layout approvals. We prepare compliant layout plans, public reservation earmarks, access road widths, and documentation required for statutory layout approval procedures.",
    deliverables: ["DTCP Layout Drawings", "Layout Documentation Support", "Zoning & Setback Verification", "Authority Submission Guidance"],
    category: "Approvals"
  },
  {
    id: "building-approval",
    title: "Building Approval",
    icon: "Building2",
    shortDesc: "Building plan preparation and approval assistance. Guidance for residential and commercial building approval procedures.",
    fullDesc: "Complete building plan preparation, drafting, and regulatory approval assistance. We guide clients through residential and commercial building approval procedures, ensuring structural drawings and site measurements meet municipal and panchayat norms.",
    deliverables: ["Building Plan Preparation", "Municipal Approval Drawings", "FSI & Setback Compliance Check", "Approval Procedure Guidance"],
    category: "Approvals"
  },
  {
    id: "second-third-plan",
    title: "2nd and 3rd Plan Services",
    icon: "Layers",
    shortDesc: "Assistance with Second and Third Plan-related approval requirements. Preserving exact statutory alignment and procedural documentation.",
    fullDesc: "Specialized assistance with Second and Third Plan-related approval requirements. We assist property owners and builders with necessary plan revisions, staged submissions, and documentation for relevant authority approvals.",
    deliverables: ["Second & Third Plan Filings", "Drawing Revision Support", "Authority Documentation", "Procedural Assistance"],
    category: "Approvals"
  },
  {
    id: "dgps-survey",
    title: "DGPS / GPS Surveying",
    icon: "Radio",
    shortDesc: "High-precision satellite positioning using multi-constellation RTK GNSS/DGPS for geodetic reference networks and legal boundaries.",
    fullDesc: "Sub-centimeter accuracy positioning using multi-constellation RTK DGPS receivers. We cover large areas quickly, recording lat-long coordinates and ellipsoidal heights for statutory approvals, solar plants, wind farm projects, and infrastructure right-of-ways.",
    deliverables: ["RTK Coordinate Schedules", "UTM / WGS84 Geo-referencing", "Survey Settlement Records", "Satellite Observation Reports"],
    category: "Aerial & DGPS"
  },
  {
    id: "boundary-demarcation",
    title: "Boundary Demarcation",
    icon: "Square",
    shortDesc: "Precise determination of property boundaries, corner pegs, and legal limits to eliminate encroachment and secure property rights.",
    fullDesc: "Crucial for property buyers, legal documentation, and title registrations. We conduct thorough boundary demarcations using total stations and high-accuracy DGPS, verifying title deeds and revenue village maps to permanently fix site boundaries and resolve corner discrepancies.",
    deliverables: ["Legal Boundary Plan", "Corner Stone Marking", "Encroachment Analysis", "Fencing & Demarcation Reports"],
    category: "Cadastral"
  },
  {
    id: "drone-surveying",
    title: "Drone Surveying",
    icon: "Plane",
    shortDesc: "Aerial photogrammetry using advanced UAV drones for expansive topography, high-resolution orthophotos, and 3D terrain models.",
    fullDesc: "Rapid, cost-effective aerial surveying for expansive acreages, hilly terrain, and inaccessible corridors. Using modern photogrammetry UAVs with RTK precision, we capture orthomosaic aerial imagery, point clouds, and high-density topographical models.",
    deliverables: ["High-Res Orthophoto Maps", "3D Textured Mesh Models", "LiDAR / Point Cloud Data", "Watershed & Slope Profiles"],
    category: "Aerial & DGPS"
  },
  {
    id: "topographic-surveying",
    title: "Topographic Surveying",
    icon: "Map",
    shortDesc: "Detailed mapping of natural and artificial surface features, contour elevations, spot heights, and existing infrastructure.",
    fullDesc: "Our topographic surveys capture high-resolution three-dimensional data of natural and artificial land features. We produce comprehensive contour maps, elevation benchmarks, spot levels, and 3D digital terrain models essential for site planning, drainage analysis, and civil infrastructure.",
    deliverables: ["AutoCAD DWG Contours", "Digital Elevation Model (DEM)", "Spot Level Coordinates", "Infrastructure Boundaries"],
    category: "Land Survey"
  },
  {
    id: "civil-engineering",
    title: "Civil Engineering Consultancy",
    icon: "TrendingUp",
    shortDesc: "Expert technical guidance for site feasibility, earthwork cut/fill estimation, road alignment, and structural setting-out.",
    fullDesc: "Complete civil engineering and geospatial consultancy for contractors and project developers. We provide route corridor alignment, structural column axis transfer, foundation grid setting-out, and volumetric earthwork computations for billing and quality assurance.",
    deliverables: ["Alignment Profile Drawings", "Column Centerline Staking", "Earthwork Volume Sheets", "Site Feasibility Studies"],
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
    color: "#244B3C"
  },
  {
    id: "proj-2",
    title: "Drone Aerial Mapping",
    category: "Drone & DGPS",
    desc: "High-resolution orthophoto generation and aerial volumetric calculation over 75+ acres of expansive terrain.",
    type: "UAV Photogrammetry",
    color: "#19362B"
  },
  {
    id: "proj-3",
    title: "Cadastral Boundary Demarcation",
    category: "Cadastral",
    desc: "Precise boundary verification, corner pegging, and legal revenue map reconciliation for private estate.",
    type: "Property Demarcation",
    color: "#2E5E4C"
  },
  {
    id: "proj-4",
    title: "High-Precision DGPS Survey",
    category: "Drone & DGPS",
    desc: "Geodetic baseline establishment and control network coordinates for solar farm infrastructure.",
    type: "RTK Satellite Survey",
    color: "#1E3F33"
  },
  {
    id: "proj-5",
    title: "Construction Setting-Out & Alignment",
    category: "Engineering",
    desc: "Millimeter-accuracy foundation column grid transfer and plinth level verification for industrial warehouse.",
    type: "Structural Positioning",
    color: "#244B3C"
  },
  {
    id: "proj-6",
    title: "Residential Subdivision Layout",
    category: "Cadastral",
    desc: "Township layout plotting, road axis alignment, and DTCP compliance plot demarcations.",
    type: "Subdivision Planning",
    color: "#1D4133"
  },
  {
    id: "proj-7",
    title: "Highway Corridor Alignment Survey",
    category: "Engineering",
    desc: "Longitudinal cross-section leveling and corridor optimization for infrastructure right-of-way.",
    type: "Corridor Engineering",
    color: "#19362B"
  },
  {
    id: "proj-8",
    title: "Earthwork Cut & Fill Volumetric Calculation",
    category: "Engineering",
    desc: "3D CAD surface comparison and cubic meter excavation quantity certification for earthmoving project.",
    type: "Quantity Certification",
    color: "#2E5E4C"
  }
];

export const COMPANY_VALUES = [
  {
    title: "Certified Precision",
    desc: "Striving for excellence with calibrated total stations, RTK DGPS, and verified mathematical closure.",
    icon: "Award"
  },
  {
    title: "Integrity",
    desc: "Operating as an ethical, dependable consultancy respecting verified data and total client transparency.",
    icon: "ShieldCheck"
  },
  {
    title: "Modern Technology",
    desc: "Deploying high-frequency satellite receivers, photogrammetry UAVs, and CAD workflows.",
    icon: "TrendingUp"
  },
  {
    title: "Safety & Quality",
    desc: "Prioritizing on-site field safety protocols and regular equipment calibration for flawless execution.",
    icon: "CheckCircle"
  },
  {
    title: "Client Partnership",
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
    quote: "GS Surveyor's & Consultancy delivered exceptionally accurate topographic contours for our 20-acre layout. Their prompt communication, transparent guidance, and millimeter precision made our DTCP approval process seamless."
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
