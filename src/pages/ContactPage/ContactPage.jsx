import "./ContactPage.scss";
import contact from "../../data/contact.json";

const EmailIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.92 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.83 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const PinIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M3 13L13 3M13 3H6M13 3V10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function ContactPage() {
  return (
    <div className="contact-page">
      {/* ── Editorial hero strip ── */}
      <section className="contact-page__hero">
        <div className="contact-page__hero-text">
          <p className="contact-page__overline">Get in touch</p>
          <h1 className="contact-page__title">
            Let's
            <br />
            <em>connect.</em>
          </h1>
          <p className="contact-page__subtitle">
            Whether it's a job opportunity, a collaboration, or just a hello, my
            inbox is always open.
          </p>
        </div>

        {/* Large decorative index number */}
        <span className="contact-page__deco" aria-hidden="true">
          ✦
        </span>
      </section>

      {/* ── Main grid: photo + info ── */}
      <div className="contact-page__body">
        {/* Photo column */}
        <div className="contact-page__photo-col">
          <div className="contact-page__photo-wrap">
            {contact.photo ? (
              <img
                src={contact.photo}
                alt={contact.name}
                className="contact-page__photo"
              />
            ) : (
              <div className="contact-page__photo-placeholder">
                <span>Your photo goes here</span>
              </div>
            )}
            {/* Availability pill overlaid on photo */}
            <div className="contact-page__availability">
              <span
                className="contact-page__availability-dot"
                aria-hidden="true"
              />
              {contact.availability}
            </div>
          </div>
        </div>

        {/* Info column */}
        <div className="contact-page__info-col">
          <p className="contact-page__name">{contact.name}</p>

          {/* Location — not a link */}
          <div className="contact-page__info-rows">
            <div className="contact-page__info-row contact-page__info-row--static">
              <span className="contact-page__info-icon">
                <PinIcon />
              </span>
              <div className="contact-page__info-content">
                <span className="contact-page__info-label">Location</span>
                <span className="contact-page__info-value">{contact.city}</span>
              </div>
            </div>

            {/* Email */}
            <a
              href={`mailto:${contact.email}`}
              className="contact-page__info-row contact-page__info-row--link"
              aria-label={`Send email to ${contact.email}`}
            >
              <span className="contact-page__info-icon">
                <EmailIcon />
              </span>
              <div className="contact-page__info-content">
                <span className="contact-page__info-label">Email</span>
                <span className="contact-page__info-value">
                  {contact.email}
                </span>
              </div>
              <span className="contact-page__info-arrow">
                <ArrowIcon />
              </span>
            </a>

            {/* Phone */}
            <a
              href={`tel:${contact.phone.replace(/\D/g, "")}`}
              className="contact-page__info-row contact-page__info-row--link"
              aria-label={`Call ${contact.phone}`}
            >
              <span className="contact-page__info-icon">
                <PhoneIcon />
              </span>
              <div className="contact-page__info-content">
                <span className="contact-page__info-label">Phone</span>
                <span className="contact-page__info-value">
                  {contact.phone}
                </span>
              </div>
              <span className="contact-page__info-arrow">
                <ArrowIcon />
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-page__info-row contact-page__info-row--link"
              aria-label="LinkedIn profile"
            >
              <span className="contact-page__info-icon">
                <LinkedInIcon />
              </span>
              <div className="contact-page__info-content">
                <span className="contact-page__info-label">LinkedIn</span>
                <span className="contact-page__info-value">
                  /{contact.linkedinHandle}
                </span>
              </div>
              <span className="contact-page__info-arrow">
                <ArrowIcon />
              </span>
            </a>
          </div>

          {/* CTA buttons */}
          <div className="contact-page__ctas">
            <a
              href={`mailto:${contact.email}`}
              className="contact-page__cta-primary"
            >
              Send me an email
              <ArrowIcon />
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-page__cta-secondary"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* ── Bottom marquee strip ── */}
      <div className="contact-page__marquee-wrap" aria-hidden="true">
        <div className="contact-page__marquee">
          {Array(6)
            .fill(
              "PCB Design · Firmware Development · Embedded Systems · C++ · Electrical Engineering ·\u00A0",
            )
            .map((t, i) => (
              <span key={i}>{t}</span>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
