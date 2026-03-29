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
  imageLabel: string;
  imagePath: string;
  summary: string;
  text: string;
  details: string[];
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
    imageLabel: "Insert artwork",
    imagePath: "/images/internship.png",
    summary:
      "A selection of visual work developed through internships, studio practice, and creative experimentation.",
    text:
      "This body of work reflects a balance between composition, storytelling, and material sensitivity across visual outcomes.",
    details: [
      "Developed artwork with attention to layout, color rhythm, and communication clarity.",
      "Worked across creative briefs that required both concept thinking and hands-on execution.",
      "Built confidence translating abstract ideas into polished visual pieces.",
    ],
  },
  {
    id: "certificate",
    category: "Editorial",
    title: "Certificate",
    accentClass: "accent-gold",
    eyebrowClass: "eyebrow eyebrow-gold",
    buttonClass: "explore-link explore-link-gold",
    imageClass: "image-placeholder image-placeholder-square image-placeholder-soft",
    imageLabel: "Insert certificate image",
    imagePath: "/images/awards.png",
    summary:
      "Certificates and recognitions that document learning milestones, professional growth, and continued development.",
    text:
      "Presented as a curated record of progress, this section frames achievement through a consistent editorial lens.",
    details: [
      "Collected certificates from academic, technical, and extracurricular development.",
      "Organized accomplishments into a clear narrative of growth and commitment.",
      "Connected formal recognition with broader personal and professional direction.",
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
      "Design work spanning interface systems, product storytelling, and digital touchpoints shaped for real user experience.",
    text:
      "The focus here is how structure, interaction, and visual identity come together to create clearer product experiences.",
    details: [
      "Explored UI direction through brand-led layouts and product presentation systems.",
      "Considered both aesthetics and usability when shaping digital experiences.",
      "Used design to connect business goals, user journeys, and visual coherence.",
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
              <div className="project-panel-copy">
                <p className={activeItem.eyebrowClass}>{activeItem.category}</p>
                <h2
                  id="exploration-panel-title"
                  className={`project-panel-title ${activeItem.accentClass}`}
                >
                  {activeItem.title}
                </h2>
                <p className="project-panel-summary">{activeItem.summary}</p>
                <p className="project-panel-text">{activeItem.text}</p>
                <ul className="project-panel-list">
                  {activeItem.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>

              <div className="exploration-panel-visual">
                <div className="exploration-panel-image-frame">
                  <img
                    className={`exploration-panel-image ${activeItem.imageFitClass ?? ""}`}
                    src={activeItem.imagePath}
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
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
