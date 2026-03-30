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
    imagePath?: string;
    containImage?: boolean;
    imagePosition?: string;
  }[];
};

const educationItems: EducationItem[] = [
  {
    id: "satit",
    title: "SATIT KASET IP",
    summary:
      "An early foundation shaped through competition, teamwork, and hands-on problem solving in both technical and collaborative settings.",
    details: [
      "Built confidence through competitive robotics and public presentation.",
      "Developed precision, execution, and real-time problem-solving under pressure.",
      "Strengthened teamwork, collaboration, and communication through team-based competition.",
    ],
    imagePath: "/images/education-satit.jpg",
    imageLabel: "Add Satit Kaset image",
    timeline: [
      {
        phase: "Stage 01",
        title: "World Robot Olympiad",
        description:
          "Robot Performance – 3rd Place. Designed and programmed a competitive robotics system, focusing on execution, precision, and real-time problem-solving in a dynamic environment.",
        imagePath: "/images/wro.JPG",
      },
      {
        phase: "Stage 02",
        title: "World Robot Olympiad",
        description:
          "Core Values – 1st Place. Recognized for outstanding teamwork, collaboration, and project presentation, demonstrating strong communication and team dynamics.",
        imagePath: "/images/wro1.JPG",
        imagePosition: "center 28%",
      },
    ],
  },
  {
    id: "siit",
    title: "SIIT",
    summary:
      "A broader university journey shaped through technical study, public presentation, teamwork, and student-led campus activities.",
    details: [
      "Built confidence through public-facing performances and faculty representation.",
      "Developed teamwork, discipline, and adaptability across large-scale student activities.",
      "Gained hands-on experience in customer interaction, entrepreneurship, and formal technical presentation.",
    ],
    imagePath: "/images/education-siit.jpg",
    imageLabel: "Add SIIT image",
    timeline: [
      {
        phase: "Stage 01",
        title: "SIIT Open House",
        description:
          "Performed as a member of the SIIT cheerleading team during the Open House event, representing the faculty to prospective students and visitors. Strengthened confidence, stage presence, and the ability to communicate energy and identity through performance.",
        imagePath: "/images/openhouse.JPG",
      },
      {
        phase: "Stage 02",
        title: "Freshy Games 2022",
        description:
          "Performed as part of the SIIT cheerleading team in a large-scale university sports event. Developed strong teamwork, discipline, and the ability to perform under pressure through coordinated group performance.",
        imagePath: "/images/freshygame.JPG",
      },
      {
        phase: "Stage 03",
        title: "SIIT Back to School Market",
        description:
          "Participated as a seller in a campus market event, managing product sales, customer interaction, and on-site operations. Gained hands-on experience in entrepreneurship, pricing decisions, and real-time customer engagement.",
        imagePath: "/images/siitbacktoschool.JPG",
      },
      {
        phase: "Stage 04",
        title: "Senior Project Presentation",
        description:
          "Participated in the Senior Project Presentation and Graduation Camp, presenting technical work in a formal academic setting. Developed the ability to communicate complex systems clearly, combining technical understanding with structured presentation.",
        imagePath: "/images/seniorproject.JPG",
      },
      {
        phase: "Stage 05",
        title: "Thammasat Startup Competition",
        description:
          "Developed HEATGUARD, an AI-powered heat detection system designed to prevent heat stroke in outdoor environments using thermal sensing, computer vision, and real-time risk prediction. Selected as one of the top 30 teams out of 100, demonstrating strong ability to integrate technology, system design, and business thinking into a real-world solution.",
        imagePath: "/images/thammasatstartup.png",
        containImage: true,
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
                <article
                  key={`${activeItem.id}-${entry.phase}-${index}`}
                  className="education-timeline-item"
                >
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
                        className={`education-timeline-image ${entry.containImage ? "education-timeline-image-contain" : ""}`}
                        src={entry.imagePath ?? activeItem.imagePath}
                        alt={activeItem.title}
                        style={
                          entry.imagePosition
                            ? { objectPosition: entry.imagePosition }
                            : undefined
                        }
                        onLoad={() =>
                          setImageErrors((current) => {
                            const next = { ...current };
                            delete next[`${activeItem.id}-${index}`];
                            return next;
                          })
                        }
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
                          <small>{entry.imagePath ?? activeItem.imagePath}</small>
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
