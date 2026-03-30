"use client";

import { useEffect, useState } from "react";

type ExplorationItem = {
  id: string;
  category: string;
  title: string;
  accentClass: string;
  eyebrowClass: string;
  buttonClass: string;
  imageClass: string;
  imageFitClass?: string;
  modalImageFitClass?: string;
  modalFrameClass?: string;
  imageLabel: string;
  imagePath: string;
  modalImagePath?: string;
  summary: string;
  text: string;
  details: string[];
  sections?: {
    title: string;
    text: string;
    details: string[];
    imagePath?: string;
    imageLabel?: string;
  }[];
  awards?: {
    title: string;
    project?: string;
    preview: string;
    description: string;
    imagePath?: string;
  }[];
  certificatesIntro?: string;
  certificates?: {
    title: string;
    issuer: string;
    year: string;
    buttonLabel?: string;
  }[];
};

const explorationItems: ExplorationItem[] = [
  {
    id: "internship",
    category: "Artwork",
    title: "Internship",
    accentClass: "accent-pink",
    eyebrowClass: "eyebrow eyebrow-pink",
    buttonClass: "explore-link explore-link-pink",
    imageClass: "image-placeholder image-placeholder-square",
    imageFitClass: "exploration-image-contain",
    modalImageFitClass: "exploration-panel-image-contain",
    modalFrameClass: "exploration-panel-image-frame-wide",
    imageLabel: "Insert artwork",
    imagePath: "/images/internship.png",
    modalImagePath: "/images/wisesight.png",
    summary:
      "Sales & Revenue Forecasting Simulation Tool – Wisesight Internship",
    text:
      "Designed and developed a simulation system to model sales acquisition and forecast revenue based on real business KPIs, including ARPA, LTV, and Win Rate.",
    details: [
      "Built backend logic that translated business rules into calculable outputs for lead targets, revenue forecasting, and scenario simulation.",
      "Developed an interactive dashboard with funnel visualization, scenario comparison, and validation logic for unrealistic assumptions.",
      "Designed the system with reference to real Wisesight products such as ZocialEye, aligning the tool with actual business workflows and data-driven decision processes.",
    ],
  },
  {
    id: "certificate",
    category: "Recognition",
    title: "Certificates & Awards",
    accentClass: "accent-gold",
    eyebrowClass: "eyebrow eyebrow-gold",
    buttonClass: "explore-link explore-link-gold",
    imageClass: "image-placeholder image-placeholder-square image-placeholder-soft",
    imageLabel: "Insert certificate image",
    imagePath: "/images/awards.png",
    summary:
      "A curated record of awards and certificates that reflects achievement across innovation, competition, and continuous learning.",
    text:
      "This section brings together featured recognition and a growing archive of certificates in a cleaner, portfolio-ready format.",
    details: [
      "Highlights both competitive achievement and ongoing professional development.",
      "Balances a stronger featured award story with a flexible certificate archive.",
      "Prepared so additional recognitions can be added later without redesign.",
    ],
    awards: [
      {
        title: "PSAT Health Hacks 2024 – 3rd Place Award",
        project: "Med D Return",
        preview:
          "Recognized for Med D Return, a digital health innovation project designed to improve the return and management of unused medication through technology-driven solutions.",
        description:
          "Awarded 3rd Place in PSAT Health Hacks 2024 for Med D Return, an innovation project focused on improving the return and reuse of unused medication through digital technology. The concept combined healthcare impact with system thinking, proposing features such as OCR, QR Code, AI-assisted verification, location services, reward systems, and notification support to make medicine return safer, more accessible, and more sustainable.",
        imagePath: "/images/awards.png",
      },
    ],
    certificatesIntro:
      "A selected collection of academic, competition, and professional certificates that reflect continuous learning, participation, and achievement across technology, innovation, and interdisciplinary projects.",
    certificates: [
      {
        title: "Certificate Title",
        issuer: "Issuer / Event",
        year: "Year",
        buttonLabel: "View",
      },
      {
        title: "Certificate Title",
        issuer: "Issuer / Event",
        year: "Year",
        buttonLabel: "View",
      },
      {
        title: "Certificate Title",
        issuer: "Issuer / Event",
        year: "Year",
        buttonLabel: "View",
      },
      {
        title: "Certificate Title",
        issuer: "Issuer / Event",
        year: "Year",
        buttonLabel: "View",
      },
    ],
  },
  {
    id: "ecommerce",
    category: "Design",
    title: "Commerce",
    accentClass: "accent-blue",
    eyebrowClass: "eyebrow eyebrow-blue",
    buttonClass: "explore-link explore-link-blue",
    imageClass:
      "image-placeholder image-placeholder-square image-placeholder-grid",
    imageLabel: "Insert design image",
    imagePath: "/images/commerce.png",
    summary:
      "Commerce experiments across digital selling, campaign strategy, and product presentation.",
    text:
      "This work explores how storytelling, urgency, and platform-native content can be turned into conversion-focused commerce experiences.",
    details: [
      "Combined content thinking with direct-to-customer selling.",
      "Focused on campaign design, product presentation, and conversion flow.",
      "Built practical experience across digital commerce and audience behavior.",
    ],
    sections: [
      {
        title: "Art Toy Sales via TikTok",
        text:
          "Launched and sold art toy products through TikTok, leveraging short-form content to drive visibility and engagement.",
        details: [
          "Focused on content-driven selling strategies, including product storytelling, trend-based videos, and audience interaction to increase reach and conversion.",
          "Handled order fulfillment and managed high-volume sales during peak demand, gaining hands-on experience in digital commerce and customer behavior.",
        ],
        imagePath: "/images/tiktok.png",
        imageLabel: "Attach art toy image",
      },
      {
        title: "Custom Jersey Pre-order Campaign",
        text:
          "Developed and executed a pre-order campaign for custom-designed jerseys, managing the full process from concept design to online sales execution.",
        details: [
          "Applied limited-time drop strategies and content-based marketing to create urgency and drive conversions through social media platforms.",
          "Coordinated production, pricing, and order fulfillment while maintaining consistency in brand positioning and visual presentation.",
        ],
        imagePath: "/images/jersey.png",
        imageLabel: "Attach jersey campaign image",
      },
    ],
  },
];

export function ExplorationSection() {
  const [activeItem, setActiveItem] = useState<ExplorationItem | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (!activeItem) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveItem(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeItem]);

  return (
    <>
      <div className="exploration-grid">
        {explorationItems.map((item) => (
          <article key={item.id} className="exploration-card">
            <p className={item.eyebrowClass}>{item.category}</p>
            <h3 className={item.accentClass}>{item.title}</h3>
            <button
              type="button"
              className={item.buttonClass}
              onClick={() => setActiveItem(item)}
            >
              Explore
            </button>
            <div className="exploration-image">
              <img
                className={`exploration-image-asset ${item.imageFitClass ?? ""}`}
                src={item.imagePath}
                alt={item.title}
                onError={() =>
                  setImageErrors((current) => ({ ...current, [item.id]: true }))
                }
              />
              {imageErrors[item.id] ? (
                <div
                  className={item.imageClass}
                  aria-label="Exploration image placeholder"
                >
                  <span>{item.imageLabel}</span>
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>

      {activeItem ? (
        <div
          className="project-panel-backdrop"
          onClick={() => setActiveItem(null)}
          role="presentation"
        >
          <div
            className="project-panel exploration-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="exploration-panel-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="project-panel-close"
              onClick={() => setActiveItem(null)}
            >
              Close
            </button>

            <div className="project-panel-grid exploration-panel-grid">
              <div
                className={`project-panel-copy ${activeItem.sections || activeItem.awards || activeItem.certificates ? "exploration-panel-copy-wide" : ""}`}
              >
                <p className={activeItem.eyebrowClass}>{activeItem.category}</p>
                <h2
                  id="exploration-panel-title"
                  className={`project-panel-title ${activeItem.accentClass}`}
                >
                  {activeItem.title}
                </h2>
                <p className="project-panel-summary">{activeItem.summary}</p>
                {activeItem.awards || activeItem.certificates ? (
                  <div className="recognition-layout">
                    <section className="recognition-awards">
                      <p className="project-detail-label">Awards</p>
                      {activeItem.awards?.map((award, index) => (
                        <article
                          key={`${activeItem.id}-award-${index}`}
                          className="recognition-award-card"
                        >
                          <div className="recognition-award-copy">
                            <p className="recognition-award-preview">
                              {award.preview}
                            </p>
                            <h3 className="project-detail-subtitle">
                              {award.title}
                            </h3>
                            {award.project ? (
                              <p className="recognition-award-project">
                                Project: {award.project}
                              </p>
                            ) : null}
                            <p className="project-panel-text">
                              {award.description}
                            </p>
                          </div>
                          <div className="recognition-award-image-frame">
                            {award.imagePath ? (
                              <img
                                className="recognition-award-image"
                                src={award.imagePath}
                                alt={award.title}
                              />
                            ) : (
                              <div
                                className={`${activeItem.imageClass} recognition-award-placeholder`}
                                aria-label={`${award.title} placeholder`}
                              >
                                <span>{activeItem.imageLabel}</span>
                              </div>
                            )}
                          </div>
                        </article>
                      ))}
                    </section>

                    <section className="recognition-certificates">
                      <p className="project-detail-label">Certificates</p>
                      <p className="project-panel-text">
                        {activeItem.certificatesIntro}
                      </p>
                      <div className="recognition-certificate-grid">
                        {activeItem.certificates?.map((certificate, index) => (
                          <article
                            key={`${activeItem.id}-certificate-${index}`}
                            className="recognition-certificate-card"
                          >
                            <h3 className="recognition-certificate-title">
                              {certificate.title}
                            </h3>
                            <p className="recognition-certificate-meta">
                              {certificate.issuer}
                            </p>
                            <p className="recognition-certificate-year">
                              {certificate.year}
                            </p>
                            {certificate.buttonLabel ? (
                              <button
                                type="button"
                                className={`ghost-button ${activeItem.buttonClass} recognition-certificate-button`}
                              >
                                {certificate.buttonLabel}
                              </button>
                            ) : null}
                          </article>
                        ))}
                      </div>
                    </section>
                  </div>
                ) : activeItem.sections ? (
                  <div className="exploration-detail-sections">
                    {activeItem.sections.map((section, index) => (
                      <section
                        key={`${activeItem.id}-section-${index}`}
                        className="exploration-detail-section"
                      >
                        <div className="exploration-detail-copy">
                          <p className="project-detail-label">
                            Section {index + 1}
                          </p>
                          <h3 className="project-detail-subtitle">
                            {section.title}
                          </h3>
                          <p className="project-panel-text">{section.text}</p>
                          <ul className="project-panel-list">
                            {section.details.map((detail) => (
                              <li key={detail}>{detail}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="exploration-detail-image-frame">
                          {section.imagePath ? (
                            <img
                              className="exploration-detail-image"
                              src={section.imagePath}
                              alt={section.title}
                            />
                          ) : (
                            <div
                              className={`${activeItem.imageClass} exploration-detail-placeholder`}
                              aria-label={`${section.title} placeholder`}
                            >
                              <span>{section.imageLabel ?? activeItem.imageLabel}</span>
                            </div>
                          )}
                        </div>
                      </section>
                    ))}
                  </div>
                ) : (
                  <>
                    <p className="project-panel-text">{activeItem.text}</p>
                    <ul className="project-panel-list">
                      {activeItem.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              {!activeItem.sections &&
              !activeItem.awards &&
              !activeItem.certificates ? (
                <div className="exploration-panel-visual">
                  <div
                    className={`exploration-panel-image-frame ${activeItem.modalFrameClass ?? ""}`}
                  >
                    <img
                      className={`exploration-panel-image ${activeItem.modalImageFitClass ?? activeItem.imageFitClass ?? ""}`}
                      src={activeItem.modalImagePath ?? activeItem.imagePath}
                      alt={activeItem.title}
                      onError={() =>
                        setImageErrors((current) => ({
                          ...current,
                          [`panel-${activeItem.id}`]: true,
                        }))
                      }
                    />
                    {imageErrors[`panel-${activeItem.id}`] ? (
                      <div
                        className={`${activeItem.imageClass} exploration-panel-placeholder`}
                        aria-label={`${activeItem.title} placeholder`}
                      >
                        <span>{activeItem.imageLabel}</span>
                      </div>
                    ) : null}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
