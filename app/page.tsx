import Image from "next/image";
import { EducationSection } from "./components/education-section";
import { ExplorationSection } from "./components/exploration-section";
import { ProjectsSection } from "./components/projects-section";

export default function Home() {
  return (
    <main className="site-shell">
      <section className="page-frame">
        <header className="hero" id="home">
          <div className="hero-heading">
            <nav className="main-nav" aria-label="Primary">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#projects">Project</a>
              <a href="#contact">Contact</a>
            </nav>

            <h1 className="hero-title">Portfolio</h1>
            <p className="hero-kicker">
              Digital Engineering Student | Technology, Data &amp; Product
              Systems
            </p>
          </div>

          <div className="hero-divider" />

          <div className="hero-grid">
            <section className="hero-copy">
              <h2 className="profile-name">Naphattra Phruksaphanrat</h2>
              <p className="profile-role">
                Digital Engineering
                <br />
                Systems • Data • Product Thinking
              </p>

              <div className="hero-actions">
                <a className="pill pill-primary" href="#contact">
                  Contact
                </a>
                <a
                  className="pill pill-dark"
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a className="pill pill-outline" href="#projects">
                  View Project
                </a>
              </div>
            </section>

            <div className="hero-image-wrap">
              <div className="hero-image-frame">
                <Image
                  className="hero-image"
                  src="/images/IMG_8046.JPG"
                  alt="Hero portrait"
                  width={1200}
                  height={900}
                  priority
                />
              </div>
            </div>
          </div>
        </header>

        <section className="about-panel" id="about">
          <div className="about-inner">
            <h2 className="section-title section-title-light">About</h2>

            <ol className="about-list">
              <li>
                <span>01</span>
                <div>
                  <h3>Digital Engineering</h3>
                  <p>
                    Backend systems, data architecture, and structured product
                    development.
                  </p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <h3>International Academic Experience</h3>
                  <p>
                    Exchange program at Northumbria University, broadening
                    global perspective.
                  </p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <h3>Personal Branding &amp; Influencing</h3>
                  <p>Content creation and digital engagement strategy.</p>
                </div>
              </li>
              <li>
                <span>04</span>
                <div>
                  <h3>Systems &amp; Business Integration</h3>
                  <p>
                    Bridging technical solutions with practical application.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <ProjectsSection />

        <section className="experience" id="experience">
          <div className="experience-banner">
            <Image
              className="experience-image"
              src="/images/experience.png"
              alt="Experience collage"
              width={1800}
              height={900}
            />
            <div className="experience-overlay">
              <h2>Experience</h2>
              <p>
                Applied data analytics to real-world client campaigns,
                transforming raw datasets into actionable business intelligence.
              </p>
            </div>
          </div>

          <EducationSection />
        </section>

        <section className="explorations" id="creative">
          <div className="exploration-header">
            <div className="exploration-rule" />
            <h2>
              An exploration of systems, aesthetics, and experiences across
              digital and physical spaces.
            </h2>
          </div>

          <ExplorationSection />
        </section>

        <section className="skills" id="skills">
          <h2 className="skills-title">SKILLS</h2>

          <div className="skills-grid">
            <article>
              <div className="skill-icon">⛓</div>
              <h3>Core Stack</h3>
              <p>
                Unlock data-driven decisions with comprehensive analytics,
                revealing key opportunities for strategic regional growth.
              </p>
            </article>
            <article>
              <div className="skill-icon">◔</div>
              <h3>Frontend</h3>
              <p>
                Manage and track satellite offices, ensuring consistent
                performance and streamlined operations everywhere.
              </p>
            </article>
            <article>
              <div className="skill-icon">◕</div>
              <h3>Backend</h3>
              <p>
                Adapt to diverse markets with built-in localization for clear
                communication and enhanced user experience.
              </p>
            </article>
            <article>
              <div className="skill-icon">⌁</div>
              <h3>Tools &amp; Strengths</h3>
              <p>
                Generate precise, visually compelling reports that illustrate
                your growth trajectories across all regions.
              </p>
            </article>
          </div>

          <div className="influencer-story">
            <p className="eyebrow eyebrow-pink">Content &amp; Influence</p>
            <h3>Storytelling through audience, brand, and presence.</h3>
            <p>
              Alongside design and systems work, I create content as an
              influencer, shaping visual stories, building audience trust, and
              collaborating with brands through a more personal digital voice.
            </p>
            <div className="influencer-channels" aria-label="Content channels">
              <span>@naphattraa</span>
              <span>@bbydumproll</span>
              <span>@rubylunar_</span>
            </div>
          </div>

          <div className="brand-strip">
            <p>Brand Collaborations (content creator):</p>
            <div className="brand-logos" aria-label="Brand collaborations">
              <img className="brand-logo" src="/images/1.png" alt="Brand 1" />
              <img className="brand-logo" src="/images/2.png" alt="Brand 2" />
              <img className="brand-logo" src="/images/3.png" alt="Brand 3" />
              <img className="brand-logo" src="/images/4.png" alt="Brand 4" />
              <img className="brand-logo" src="/images/5.png" alt="Brand 5" />
              <img className="brand-logo" src="/images/6.png" alt="Brand 6" />
              <img className="brand-logo" src="/images/7.png" alt="Brand 7" />
              <img className="brand-logo" src="/images/8.png" alt="Brand 8" />
              <img className="brand-logo" src="/images/9.png" alt="Brand 9" />
            </div>
          </div>
        </section>

        <section className="contact-cta" id="contact">
          <div className="contact-orb">
            <img
              className="contact-orb-image"
              src="/images/IMG_5742.jpeg"
              alt="Naphattra portrait"
            />
          </div>
          <h2>Contact me for work</h2>
          <a
            className="ghost-button ghost-button-light"
            href="mailto:naphattra@email.com"
          >
            GMAIL
          </a>
        </section>

        <footer className="site-footer">
          <div className="footer-name">
            <h2>Naphattra P.</h2>
            <p>© 2026 Naphattra Phruksaphanrat</p>
          </div>
          <div className="footer-phone">+ (66) 952202141</div>
          <div className="footer-links">
            <p>Email: naphattra@email.com</p>
            <p>LinkedIn: linkedin.com/in/yourname</p>
            <p>GitHub: github.com/naphattraa</p>
          </div>
        </footer>
      </section>
    </main>
  );
}
