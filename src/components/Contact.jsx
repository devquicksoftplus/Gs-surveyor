import React, { useState, useEffect } from 'react';
import { 
  Phone, Mail, MessageSquare, User, Clock, 
  Send, AlertCircle, CheckCircle, ShieldCheck 
} from 'lucide-react';
import { COMPANY_DETAILS, SERVICES } from '../data/surveyData';

export default function Contact({ prefilledService, onClearPrefilledService }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: '',
    location: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submittedStatus, setSubmittedStatus] = useState(null);

  // If a user clicks "Enquire" on a service card, auto-select it in the dropdown!
  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({
        ...prev,
        service: prefilledService
      }));
    }
  }, [prefilledService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required.';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 8) {
      newErrors.phone = 'Please enter a valid phone number.';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a required service.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details or message about your enquiry.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setSubmittedStatus({
        type: 'error',
        message: 'Please fill in all required fields indicated below.'
      });
      return;
    }

    // Build the formatted WhatsApp message
    const formattedMessage = 
`*NEW SURVEY ENQUIRY - GS SURVEYOR'S & CONSULTANCY*
---------------------------------------
*Full Name:* ${formData.fullName.trim()}
*Phone:* ${formData.phone.trim()}
${formData.email.trim() ? `*Email:* ${formData.email.trim()}\n` : ''}*Service Required:* ${formData.service}
${formData.location.trim() ? `*Site Location / Area:* ${formData.location.trim()}\n` : ''}
*Enquiry Details:*
${formData.message.trim()}
---------------------------------------
_Sent via GS Surveyor's & Consultancy Website_`;

    const encodedMessage = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/918754269119?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setSubmittedStatus({
      type: 'success',
      message: 'Opening WhatsApp with your pre-filled enquiry. Please click Send inside WhatsApp to transmit your message directly to Ganapathi Subramaniam C K.'
    });

    if (onClearPrefilledService) {
      onClearPrefilledService();
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="section-title">Contact GS Surveyor's &amp; Consultancy</h2>
          <div className="gold-divider"></div>
          <p className="section-subtitle">
            Connect with us for professional land surveying consultations, cost estimates, and rapid field deployment across Tamil Nadu.
          </p>
        </div>

        {/* 2-Column Grid: Contact Information & WhatsApp Enquiry Form */}
        <div className="contact-grid">
          {/* Left Column: Direct Contact Information */}
          <div className="contact-info-panel">
            <h3 className="panel-title">Direct Contact Information</h3>
            <p className="panel-intro">
              Reach out to us directly for professional land surveying services. We provide prompt consultations, transparent guidance, and dedicated on-site assistance.
            </p>

            <div className="contact-cards-stack">
              {/* Owner Card */}
              <div className="contact-detail-card">
                <div className="card-icon-box">
                  <User className="w-5 h-5 text-gold" />
                </div>
                <div className="card-info">
                  <span className="card-label">Principal Consultant &amp; Owner</span>
                  <span className="card-value font-bold">{COMPANY_DETAILS.owner}</span>
                  <span className="card-subtext">GS Surveyor's &amp; Consultancy • Est. {COMPANY_DETAILS.establishedYear}</span>
                </div>
              </div>

              {/* Primary Phone */}
              <div className="contact-detail-card">
                <div className="card-icon-box">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div className="card-info">
                  <span className="card-label">Primary Contact Number</span>
                  <a href={`tel:${COMPANY_DETAILS.phone1Raw}`} className="card-value link-hover">
                    +91 {COMPANY_DETAILS.phone1}
                  </a>
                  <div className="card-actions-row">
                    <a 
                      href={`https://wa.me/${COMPANY_DETAILS.phone1Intl}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-wa-btn"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Secondary Phone */}
              <div className="contact-detail-card">
                <div className="card-icon-box">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div className="card-info">
                  <span className="card-label">Secondary Contact Number</span>
                  <a href={`tel:${COMPANY_DETAILS.phone2Raw}`} className="card-value link-hover">
                    +91 {COMPANY_DETAILS.phone2}
                  </a>
                  <div className="card-actions-row">
                    <a 
                      href={`https://wa.me/${COMPANY_DETAILS.phone2Intl}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-wa-btn"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="contact-detail-card">
                <div className="card-icon-box">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div className="card-info">
                  <span className="card-label">Official Email</span>
                  <a href={`mailto:${COMPANY_DETAILS.email}`} className="card-value link-hover">
                    {COMPANY_DETAILS.email}
                  </a>
                  <span className="card-subtext">Inquiries replied promptly within 24 hours</span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Quick Chat Banner */}
            <div className="wa-quick-box">
              <div className="wa-quick-header">
                <MessageSquare className="w-6 h-6 text-green-400" />
                <h4 className="wa-quick-title">Quick WhatsApp Chat</h4>
              </div>
              <p className="wa-quick-desc">
                Prefer immediate chat? Click below to start a WhatsApp conversation with either of our verified numbers.
              </p>
              <div className="wa-quick-buttons">
                <a 
                  href={`https://wa.me/${COMPANY_DETAILS.phone1Intl}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp: +91 {COMPANY_DETAILS.phone1}</span>
                </a>
                <a 
                  href={`https://wa.me/${COMPANY_DETAILS.phone2Intl}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp: +91 {COMPANY_DETAILS.phone2}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: WhatsApp Enquiry Form */}
          <div className="contact-form-panel">
            <div className="form-card">
              <div className="form-card-header">
                <h3 className="form-heading">Send Us a Survey Enquiry</h3>
                <p className="form-subheading">
                  Fill in your project details below. Clicking the button will launch WhatsApp with a neatly formatted pre-filled enquiry sent directly to <strong>+91 {COMPANY_DETAILS.phone1}</strong>.
                </p>
              </div>

              {/* Status Message */}
              {submittedStatus && (
                <div className={`status-banner ${submittedStatus.type}`}>
                  {submittedStatus.type === 'error' ? (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <span>{submittedStatus.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="enquiry-form">
                {/* Full Name */}
                <div className="form-group">
                  <label htmlFor="fullName" className="form-label">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. K. Senthil Kumar"
                    className={`form-input ${errors.fullName ? 'input-error' : ''}`}
                    required
                  />
                  {errors.fullName && <span className="field-error">{errors.fullName}</span>}
                </div>

                {/* Phone & Email Row */}
                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 98765 43210"
                      className={`form-input ${errors.phone ? 'input-error' : ''}`}
                      required
                    />
                    {errors.phone && <span className="field-error">{errors.phone}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email Address <span className="text-muted">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. senthil@example.com"
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Service Required Dropdown */}
                <div className="form-group">
                  <label htmlFor="service" className="form-label">
                    Service Required <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`form-select ${errors.service ? 'input-error' : ''}`}
                    required
                  >
                    <option value="">-- Select Surveying Service --</option>
                    <option value="General Surveying Inquiry">General Surveying &amp; Consultancy Inquiry</option>
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title} ({s.category})
                      </option>
                    ))}
                    <option value="Custom / Other Survey">Other Specific Requirement</option>
                  </select>
                  {errors.service && <span className="field-error">{errors.service}</span>}
                </div>

                {/* Site Location */}
                <div className="form-group">
                  <label htmlFor="location" className="form-label">
                    Site Location or Area <span className="text-muted">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g. Coimbatore, Salem, Erode, Tirupur, etc."
                    className="form-input"
                  />
                </div>

                {/* Message / Enquiry Details */}
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message / Enquiry Details <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your property extent (e.g. 2.5 acres), current site condition, and survey objectives..."
                    className={`form-textarea ${errors.message ? 'input-error' : ''}`}
                    required
                  ></textarea>
                  {errors.message && <span className="field-error">{errors.message}</span>}
                </div>

                {/* Submit to WhatsApp Button */}
                <button
                  type="submit"
                  className="btn btn-whatsapp w-full form-submit-btn"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Send Enquiry on WhatsApp</span>
                </button>

                <p className="form-security-note">
                  <ShieldCheck className="w-4 h-4 text-gold inline mr-1" />
                  Direct WhatsApp dispatch to primary number <strong>+91 {COMPANY_DETAILS.phone1}</strong>. No database storage required.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
