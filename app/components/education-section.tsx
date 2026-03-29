"use client";

import { useEffect, useState } from "react";

type EducationItem = {
  id: string;
  title: string;
  summary: string;
  details: string[];
  imagePath: string;
  imageLabel: string;
  timeline: {
    phase: string;
    title: string;
    description: string;
  }[];
};

const educationItems: EducationItem[] = [
  {
    id: "satit",
    title: "SATIT KASET IP",
    summary:
      "Early academic training shaped a structured approach to research, communication, and continuous learning.",
    details: [
      "Built a strong academic foundation through rigorous study and communication practice.",
      "Learned to combine disciplined coursework with self-driven exploration.",
      "Developed habits of consistency, curiosity, and long-term growth.",
    ],
    imagePath: "/images/education-satit.jpg",
    imageLabel: "Add Satit Kaset image",
    timeline: [
      {
        phase: "Stage 01",
        title: "Academic Foundation",
        description:
          "Built a strong study routine through structured coursework, presentation practice, and consistent academic discipline.",
      },
      {
        phase: "Stage 02",
        title: "Independent Growth",
        description:
          "Learned to balance formal study with self-driven exploration, shaping a more thoughtful and resilient learning process.",
      },
      {
        phase: "Stage 03",
        title: "Long-Term Habits",
        description:
          "Developed consistency, curiosity, and a habit of steady improvement that carried into later academic and creative work.",
      },
    ],
  },
  {
    id: "siit",
    title: "SIIT",
    summary:
      "Foundations in engineering systems, data, and product thinking across technical coursework and practical projects.",
    details: [
      "Developed a structured engineering mindset through interdisciplinary study.",
      "Worked across systems thinking, data logic, and project-based delivery.",
      "Built the academic base that shaped later technical and product-oriented work.",
    ],
    imagePath: "/images/education-siit.jpg",
    imageLabel: "Add SIIT image",
    timeline: [
      {
        phase: "Stage 01",
        title: "Systems Thinking",
        description:
          "Built a structured engineering mindset through interdisciplinary learning across technical subjects and analytical problem solving.",
      },
      {
        phase: "Stage 02",
        title: "Applied Coursework",
        description:
          "Worked across systems logic, data understanding, and project-based exercises that connected theory to practical delivery.",
      },
      {
        phase: "Stage 03",
        title: "Technical Direction",
        description:
          "Formed the academic base that later shaped product thinking, technical execution, and a broader interest in digital systems.",
      },
    ],
  },
  {
    id: "northumbria",
    title: "NORTHUMBRIA UNIVERSITY",
    summary:
      "Exchange experience that widened global perspective and strengthened interdisciplinary collaboration.",
    details: [
      "Expanded academic perspective through international study and exposure.",
      "Collaborated across different cultural and educational contexts.",
      "Strengthened adaptability, independence, and global awareness.",
    ],
    imagePath: "/images/education-exchange.jpg",
    imageLabel: "Add exchange image",
    timeline: [
      {
        phase: "Stage 01",
        title: "Global Perspective",
        description:
          "Expanded academic perspective through international study, new learning environments, and broader exposure beyond home context.",
      },
      {
        phase: "Stage 02",
        title: "Cross-Cultural Collaboration",
        description:
          "Worked with peers from different educational and cultural backgrounds, strengthening communication and collaboration across contexts.",
      },
      {
        phase: "Stage 03",
        title: "Personal Adaptability",
        description:
          "Built independence, flexibility, and confidence through navigating a new academic environment and everyday life abroad.",
      },
    ],
  },
];

export function EducationSection() {
  const [activeItem, setActiveItem] = useState<EducationItem | null>(null);
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
      <div className="experience-copy">
        <h3>
          Academic
          <br />
          Journey
        </h3>

        <div className="experience-grid">
          {educationItems.map((item) => (
            <article key={item.id}>
              <h4>{item.title}</h4>
              <p>{item.summary}</p>
              <button
                type="button"
                className="experience-info-button"
                onClick={() => setActiveItem(item)}
              >
                More Info
              </button>
            </article>
          ))}
        </div>
      </div>

      {activeItem ? (
        <div
          className="project-panel-backdrop"
          onClick={() => setActiveItem(null)}
          role="presentation"
        >
          <div
            className="project-panel education-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="education-panel-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="project-panel-close"
              onClick={() => setActiveItem(null)}
            >
              Close
            </button>
            <div className="project-panel-copy education-panel-copy">
              <p className="eyebrow eyebrow-olive">Academic Journey</p>
              <h2 id="education-panel-title" className="project-panel-title">
                {activeItem.title}
              </h2>
              <p className="project-panel-summary">{activeItem.summary}</p>
            </div>
            <div className="education-timeline">
              {activeItem.timeline.map((entry, index) => (
                <article key={entry.title} className="education-timeline-item">
                  <div className="education-timeline-rail" aria-hidden="true">
                    <span className="education-timeline-dot">{index + 1}</span>
                  </div>
                  <div className="education-timeline-card">
                    <div className="education-timeline-body">
                      <p className="education-timeline-phase">{entry.phase}</p>
                      <h3 className="education-timeline-title">{entry.title}</h3>
                      <p className="education-timeline-text">
                        {entry.description}
                      </p>
                    </div>
                    <div className="education-timeline-image-frame">
                      <img
                        className="education-timeline-image"
                        src={activeItem.imagePath}
                        alt={activeItem.title}
                        onError={() =>
                          setImageErrors((current) => ({
                            ...current,
                            [`${activeItem.id}-${index}`]: true,
                          }))
                        }
                      />
                      {imageErrors[`${activeItem.id}-${index}`] ? (
                        <div className="education-timeline-image-placeholder">
                          <span>{activeItem.imageLabel}</span>
                          <small>{activeItem.imagePath}</small>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </article>
              ))}
              <div className="education-timeline-notes">
                <p className="education-timeline-notes-title">Key Notes</p>
                <ul className="project-panel-list">
                  {activeItem.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
