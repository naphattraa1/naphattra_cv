"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Project = {
  id: string;
  eyebrow: string;
  eyebrowClass: string;
  title: string;
  summary: string;
  tags: string[];
  buttonClass: string;
  imageSrc: string;
  imageAlt: string;
  modalImageSrc?: string;
  modalImageAlt?: string;
  detailText: string;
  detailList: string[];
  reverse?: boolean;
  structuredDetail?: {
    title: string;
    description: string;
    overview: string;
    myRole: {
      label: string;
      bullets: string[];
    };
    keyContributions: string[];
    systemWorkflow?: string[];
    techStack: string[];
    outcome: string[];
    team: string[];
  };
};

const projects: Project[] = [
  {
    id: "Roop",
    eyebrow: "Circular Marketplace Platform",
    eyebrowClass: "eyebrow-blue",
    title: "Roop",
    summary: "A scalable circular marketplace enabling sustainable product exchange.",
    tags: ["Product Strategy", "System Design", "Marketplace"],
    buttonClass: "ghost-button-blue",
    imageSrc: "/images/roop.png",
    imageAlt: "Roop circular marketplace project artwork",
    modalImageSrc: "/images/roop2.png",
    modalImageAlt: "Roop project detail image",
    detailText:
      "A circular marketplace concept focused on rental behavior, consumer discovery, and a branded editorial commerce experience.",
    detailList: [
      "Defined the product direction for a rental-first marketplace flow.",
      "Structured the landing page and browsing hierarchy for a consumer audience.",
      "Aligned branding and interface presentation into a cohesive showcase concept.",
    ],
    structuredDetail: {
      title: "Roop — Circular Marketplace Platform",
      description:
        "A full-stack rental marketplace platform designed to enable sustainable product consumption through a rental-first system.",
      overview:
        "Roop is a team-based full-stack project that simulates a real-world rental marketplace. The platform allows users to browse, rent, and manage products through an integrated frontend and backend system.",
      myRole: {
        label: "Full-Stack Developer (Team of 4)",
        bullets: [
          "Developed both frontend interface and backend logic.",
          "Implemented core features including product browsing, rental flow, and tracking.",
          "Designed API connections and handled data flow between frontend and backend.",
          "Collaborated with team members to integrate full system functionality.",
        ],
      },
      keyContributions: [
        "Built rental-first user flow (browse → select → rent → manage).",
        "Developed frontend interaction for product discovery.",
        "Implemented backend logic for transactions and user actions.",
        "Connected frontend and backend system for seamless experience.",
      ],
      techStack: [
        "Frontend: React / Next.js",
        "Backend: Node.js / Express",
        "Database: Firebase",
        "Tools: Git, Figma",
      ],
      outcome: [
        "Delivered a functional full-stack marketplace prototype.",
        "Simulated real-world rental platform workflow.",
        "Demonstrated end-to-end system development capability.",
        "Strengthened understanding of product and system integration.",
      ],
      team: ["Team size: 4", "Role: Full-Stack Developer"],
    },
  },
  {
    id: "movie",
    eyebrow: "Security System Project",
    eyebrowClass: "eyebrow-pink",
    title: "Simple Secure Chat",
    summary:
      "A real-time encrypted messaging system designed to ensure secure communication through end-to-end encryption using hybrid cryptography (AES + RSA).",
    tags: ["AES-256", "RSA", "JWT"],
    buttonClass: "ghost-button-pink",
    imageSrc: "/images/chat.png",
    imageAlt: "Chat project artwork",
    modalImageSrc: "/images/secureinfo.png",
    modalImageAlt: "Simple Secure Chat project detail image",
    reverse: true,
    detailText:
      "A full-stack security-focused application that enables users to communicate securely in real time.",
    detailList: [
      "Implemented hybrid cryptography using AES and RSA.",
      "Designed secure authentication and encrypted messaging flow.",
      "Integrated frontend and backend into a functional secure chat system.",
    ],
    structuredDetail: {
      title: "Simple Secure Chat",
      description:
        "A real-time encrypted messaging system designed to ensure secure communication through end-to-end encryption using hybrid cryptography (AES + RSA).",
      overview:
        "Simple Secure Chat is a full-stack security-focused application that enables users to communicate securely in real time. The system integrates encryption, authentication, and secure key management to protect user data and privacy. The project emphasizes both strong security design and a clean, intuitive user experience.",
      myRole: {
        label: "Full-Stack Developer (Team of 2)",
        bullets: [
          "Developed backend logic for encryption, authentication, and messaging flow.",
          "Implemented secure communication system using AES and RSA.",
          "Designed API and handled data flow between frontend and backend.",
          "Collaborated with team to integrate frontend UI with secure backend system.",
        ],
      },
      keyContributions: [
        "End-to-end message encryption (AES-256).",
        "RSA-based key exchange for secure communication.",
        "JWT-based session authentication.",
        "Password hashing for user credential protection.",
        "Encrypted private key storage.",
      ],
      systemWorkflow: [
        "User registers → RSA key pair generated.",
        "User logs in → JWT token issued.",
        "Message sent → AES key generated and message encrypted.",
        "AES key encrypted using recipient’s RSA key.",
        "Recipient decrypts AES key → decrypts message.",
      ],
      techStack: [
        "Frontend: React",
        "Backend: Node.js / Express",
        "Security: AES-256, RSA, JWT, bcrypt",
        "Tools: Git",
      ],
      outcome: [
        "Built a functional real-time encrypted messaging system.",
        "Demonstrated implementation of hybrid cryptography (AES + RSA).",
        "Simulated secure communication workflow used in real-world systems.",
        "Strengthened understanding of system security and backend architecture.",
      ],
      team: ["Team size: 2", "Role: Full-Stack Developer"],
    },
  },
  {
    id: "train",
    eyebrow: "System Design & Development",
    eyebrowClass: "eyebrow-olive",
    title: "Train Ticket Management System",
    summary:
      "A full-stack train booking system supporting ticket search, reservation, and real-time seat availability through an integrated backend and database.",
    tags: ["Full Stack", "PHP", "MySQL", "Booking System"],
    buttonClass: "ghost-button-olive",
    imageSrc: "/images/trainticket.png",
    imageAlt: "Train ticket management project artwork",
    modalImageSrc: "/images/trainticket2.png",
    modalImageAlt: "Train ticket management project detail image",
    detailText:
      "A full-stack booking system built to handle ticket search, reservations, and real-time seat management.",
    detailList: [
      "Built a complete booking flow including authentication, ticket search, reservation, and e-ticket generation.",
      "Integrated frontend with backend logic to process bookings and manage ticket data.",
      "Designed and implemented a MySQL database for users, schedules, and booking records.",
      "Implemented real-time seat availability updates based on booking actions.",
      "Collaborated in a 3-person team to deliver a functional end-to-end system.",
    ],
    structuredDetail: {
      title: "Train Ticket Management System",
      description:
        "A full-stack train booking system supporting ticket search, reservation, and real-time seat availability through an integrated backend and database.",
      overview:
        "A full-stack booking system developed as part of a 3-person team, designed to handle ticket search, reservations, and real-time seat management through a connected frontend, backend, and relational database. The system enables users to browse routes, book tickets, and receive confirmations while dynamically updating seat availability.",
      myRole: {
        label: "Full Stack Developer (Team of 3)",
        bullets: [
          "Built a complete booking flow including authentication, ticket search, reservation, and e-ticket generation.",
          "Integrated frontend with backend logic to process bookings and manage ticket data.",
          "Designed and implemented a MySQL database for users, schedules, and booking records.",
          "Implemented real-time seat availability updates based on booking actions.",
          "Collaborated in a 3-person team to deliver a functional end-to-end system.",
        ],
      },
      keyContributions: [
        "Built a complete booking flow including authentication, ticket search, reservation, and e-ticket generation.",
        "Integrated frontend with backend logic to process bookings and manage ticket data.",
        "Designed and implemented a MySQL database for users, schedules, and booking records.",
        "Implemented real-time seat availability updates based on booking actions.",
        "Collaborated in a 3-person team to deliver a functional end-to-end system.",
      ],
      techStack: [
        "Full Stack",
        "PHP",
        "MySQL",
        "Booking System",
      ],
      outcome: [
        "Built a working booking system with real-time seat availability.",
        "Delivered an end-to-end product flow from search to reservation.",
        "Demonstrated full-stack integration across frontend, backend, and database.",
      ],
      team: ["Team size: 3", "Role: Full Stack Developer"],
    },
  },
  {
    id: "irrigation",
    eyebrow: "AI-Assisted Irrigation Planning from Satellite Imagery",
    eyebrowClass: "eyebrow-violet",
    title: "AI-Assisted Irrigation Planning",
    summary:
      "AI-powered irrigation network generation from satellite data, combining optimization algorithms and hydraulic modeling to produce real-world-ready layouts.",
    tags: [
      "AI System",
      "Graph Optimization",
      "Web Application",
      "Hydraulic Modeling",
    ],
    buttonClass: "ghost-button-violet",
    imageSrc: "/images/irrigation.png",
    imageAlt: "Irrigation planning project artwork",
    modalImageSrc: "/images/irrigation2.png",
    modalImageAlt: "AI-Assisted Irrigation Planning project detail image",
    reverse: true,
    detailText:
      "An AI-assisted system that generates irrigation network layouts directly from satellite imagery.",
    detailList: [
      "Designed a system that converts satellite data into optimized irrigation network layouts.",
      "Applied heuristic algorithms and AI models to generate efficient pipe routing and zone distribution.",
      "Integrated hydraulic validation (Hazen-Williams) to ensure real-world feasibility.",
      "Built a web-based interface for layout visualization, planning, and system interaction.",
      "Generated Bill of Materials (BOM) including pipe lengths, fittings, and cost estimation.",
    ],
    structuredDetail: {
      title: "AI-Assisted Irrigation Planning",
      description:
        "AI-powered irrigation network generation from satellite data, combining optimization algorithms and hydraulic modeling to produce real-world-ready layouts.",
      overview:
        "An AI-assisted system that generates irrigation network layouts directly from satellite imagery, eliminating the need for manual field surveys. The system integrates spatial data processing, heuristic optimization, and hydraulic validation to produce efficient pipe routing, water distribution, and cost-aware irrigation plans through an interactive web interface.",
      myRole: {
        label:
          "System Design & Full Stack Development",
        bullets: [
          "Focus: AI-assisted planning logic, system architecture, and web interface integration.",
          "Designed a system that converts satellite data into optimized irrigation network layouts.",
          "Built the planning workflow across system logic, interface, and output generation.",
        ],
      },
      keyContributions: [
        "Designed a system that converts satellite data into optimized irrigation network layouts.",
        "Applied heuristic algorithms and AI models to generate efficient pipe routing and zone distribution.",
        "Integrated hydraulic validation (Hazen-Williams) to ensure real-world feasibility.",
        "Built a web-based interface for layout visualization, planning, and system interaction.",
        "Generated Bill of Materials (BOM) including pipe lengths, fittings, and cost estimation.",
      ],
      techStack: [
        "AI System",
        "Graph Optimization",
        "Web Application",
        "Hydraulic Modeling",
      ],
      outcome: [
        "Turned satellite data into practical irrigation layouts through one connected system.",
        "Demonstrated product-level thinking across AI logic, optimization, and interface design.",
        "Positioned the project as a deployable engineering workflow rather than a research prototype.",
      ],
      team: [
        "Role: System Design & Full Stack Development",
      ],
    },
  },
];

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);

  useEffect(() => {
    if (!activeProject && !isArchiveOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveProject(null);
        setIsArchiveOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeProject, isArchiveOpen]);

  return (
    <>
      <section className="projects" id="projects">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`project ${project.id === "Roop" ? "project-Roop" : ""} ${
              project.id === "movie" ? "project-movie" : ""
            } ${project.id === "train" ? "project-train" : ""} ${
              project.id === "irrigation" ? "project-irrigation" : ""
            }`}
          >
            {project.reverse ? (
              <>
                <div className="project-art project-image-card">
                  <div className="project-image-frame">
                    <Image
                      className="project-image"
                      src={project.imageSrc}
                      alt={project.imageAlt}
                      width={1600}
                      height={900}
                    />
                  </div>
                </div>
                <div className="project-copy">
                  <p className={`eyebrow ${project.eyebrowClass}`}>{project.eyebrow}</p>
                  <h2>{project.title}</h2>
                  <p className="project-summary">{project.summary}</p>
                  <div className="chip-row">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <button
                    type="button"
                    className={`ghost-button ${project.buttonClass} project-trigger`}
                    onClick={() => setActiveProject(project)}
                  >
                    View Project
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="project-copy">
                  <p className={`eyebrow ${project.eyebrowClass}`}>{project.eyebrow}</p>
                  <h2>{project.title}</h2>
                  <p className="project-summary">{project.summary}</p>
                  <div className="chip-row">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <button
                    type="button"
                    className={`ghost-button ${project.buttonClass} project-trigger`}
                    onClick={() => setActiveProject(project)}
                  >
                    View Project
                  </button>
                </div>
                <div className="project-art project-image-card">
                  <div className="project-image-frame">
                    <Image
                      className="project-image"
                      src={project.imageSrc}
                      alt={project.imageAlt}
                      width={1600}
                      height={900}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </section>

      <div className="projects-more">
        <button
          type="button"
          className="projects-more-button"
          onClick={() => setIsArchiveOpen(true)}
        >
          View More Project
        </button>
      </div>

      {activeProject ? (
        <div
          className="project-panel-backdrop"
          onClick={() => setActiveProject(null)}
          role="presentation"
        >
          <div
            className="project-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-panel-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="project-panel-close"
              onClick={() => setActiveProject(null)}
            >
              Close
            </button>
            <div className="project-panel-grid">
              <div className="project-panel-copy">
                {activeProject.structuredDetail ? (
                  <div className="project-structured">
                    <p className={`eyebrow ${activeProject.eyebrowClass}`}>
                      {activeProject.eyebrow}
                    </p>
                    <h2 id="project-panel-title" className="project-panel-title">
                      {activeProject.structuredDetail.title}
                    </h2>
                    <p className="project-panel-summary">
                      {activeProject.structuredDetail.description}
                    </p>

                    <section className="project-detail-section">
                      <p className="project-detail-label">Overview</p>
                      <p className="project-panel-text">
                        {activeProject.structuredDetail.overview}
                      </p>
                    </section>

                    <section className="project-detail-section">
                      <p className="project-detail-label">My Role</p>
                      <p className="project-detail-subtitle">
                        {activeProject.structuredDetail.myRole.label}
                      </p>
                      <ul className="project-panel-list">
                        {activeProject.structuredDetail.myRole.bullets.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </section>

                    <section className="project-detail-section">
                      <p className="project-detail-label">Key Contributions</p>
                      <ul className="project-panel-list">
                        {activeProject.structuredDetail.keyContributions.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </section>

                    {activeProject.structuredDetail.systemWorkflow ? (
                      <section className="project-detail-section">
                        <p className="project-detail-label">System Workflow</p>
                        <ul className="project-panel-list">
                          {activeProject.structuredDetail.systemWorkflow.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </section>
                    ) : null}

                    <section className="project-detail-section">
                      <p className="project-detail-label">Tech Stack</p>
                      <ul className="project-panel-list">
                        {activeProject.structuredDetail.techStack.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </section>

                    <section className="project-detail-section">
                      <p className="project-detail-label">Outcome</p>
                      <ul className="project-panel-list">
                        {activeProject.structuredDetail.outcome.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </section>

                    <section className="project-detail-section">
                      <p className="project-detail-label">Team</p>
                      <ul className="project-panel-list">
                        {activeProject.structuredDetail.team.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </section>

                    <div className="chip-row project-panel-chips">
                      {activeProject.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>

                    <div className="project-detail-actions">
                      <button
                        type="button"
                        className={`ghost-button ${activeProject.buttonClass}`}
                        onClick={() => setActiveProject(null)}
                      >
                        Close Project
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <p className={`eyebrow ${activeProject.eyebrowClass}`}>
                      {activeProject.eyebrow}
                    </p>
                    <h2 id="project-panel-title" className="project-panel-title">
                      {activeProject.title}
                    </h2>
                    <p className="project-panel-summary">{activeProject.summary}</p>
                    <p className="project-panel-text">{activeProject.detailText}</p>
                    <ul className="project-panel-list">
                      {activeProject.detailList.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <div className="chip-row project-panel-chips">
                      {activeProject.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </>
                )}
              </div>
              <div className="project-panel-image-frame">
                <Image
                  className="project-panel-image"
                  src={activeProject.modalImageSrc ?? activeProject.imageSrc}
                  alt={activeProject.modalImageAlt ?? activeProject.imageAlt}
                  width={1600}
                  height={900}
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {isArchiveOpen ? (
        <div
          className="project-panel-backdrop"
          onClick={() => setIsArchiveOpen(false)}
          role="presentation"
        >
          <div
            className="project-panel project-panel-archive"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-archive-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="project-panel-close"
              onClick={() => setIsArchiveOpen(false)}
            >
              Close
            </button>
            <div className="project-panel-copy project-archive-copy">
              <p className="eyebrow eyebrow-blue">Selected Project Archive</p>
              <h2 id="project-archive-title" className="project-panel-title">
                More Project Works
              </h2>
              <p className="project-panel-text">
                A quick archive view for scanning the project collection,
                comparing focus areas, and opening individual work summaries.
              </p>
            </div>

            <div className="project-archive-grid">
              {projects.map((project) => (
                <article key={project.id} className="project-archive-card">
                  <div className="project-archive-image-frame">
                    <Image
                      className="project-archive-image"
                      src={project.imageSrc}
                      alt={project.imageAlt}
                      width={1600}
                      height={900}
                    />
                  </div>
                  <p className={`eyebrow ${project.eyebrowClass}`}>{project.eyebrow}</p>
                  <h3 className="project-archive-title">{project.title}</h3>
                  <p className="project-archive-summary">{project.summary}</p>
                  <div className="chip-row project-archive-chips">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <button
                    type="button"
                    className={`ghost-button ${project.buttonClass} project-trigger`}
                    onClick={() => {
                      setIsArchiveOpen(false);
                      setActiveProject(project);
                    }}
                  >
                    View Project
                  </button>
                </article>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
