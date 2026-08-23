import {
  education,
  experience,
  layers,
  profile,
  projects,
  services,
} from "../data/content";
import MotionCard from "./MotionCard";
import Reveal from "./Reveal";

export function Stack() {
  return (
    <section className="section" id="stack">
      <div className="shell">
        <Reveal className="section__head">
          <p className="eyebrow">The stack</p>
          <h2 className="section__title">Four layers, one owner</h2>
          <p className="section__lede">
            Most projects stall at the seams between layers. I work across all
            four, so the handoffs don't exist.
          </p>
        </Reveal>

        <Reveal>
          <div className="layers">
            {layers.map((layer) => (
              <div className="layer" key={layer.id}>
                <span className="layer__index">{layer.index}</span>
                <div>
                  <h3 className="layer__name">{layer.name}</h3>
                  <p className="layer__blurb">{layer.blurb}</p>
                </div>
                <div className="layer__tech">
                  {layer.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Work() {
  return (
    <section className="section" id="work">
      <div className="shell">
        <Reveal className="section__head">
          <p className="eyebrow">Experience</p>
          <h2 className="section__title">Where I've built</h2>
        </Reveal>

        <div className="timeline">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 80}>
              <MotionCard tilt={4} className="job-card">
                <div className="job__head">
                  <h3 className="job__company">{job.company}</h3>
                  <span className="job__period" data-current={job.current}>
                    {job.period}
                  </span>
                </div>
                <p className="job__role">{job.role}</p>
                <ul className="job__points">
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </MotionCard>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="edu">
            {education.map((e) => (
              <div className="edu__item" key={e.title}>
                <h3 className="edu__title">{e.title}</h3>
                <p className="edu__org">{e.org}</p>
                <p className="edu__meta">{e.meta}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section className="section" id="projects">
      <div className="shell">
        <Reveal className="section__head">
          <p className="eyebrow">Projects</p>
          <h2 className="section__title">Things I've shipped</h2>
          <p className="section__lede">
            Public work on GitHub. Client and enterprise work is under NDA —
            happy to talk through it directly.
          </p>
        </Reveal>

        <div className="project-grid">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 70}>
              <MotionCard
                href={p.href}
                className="project"
                marquee="View on GitHub"
              >
                <div className="project__head">
                  <h3 className="project__name">{p.name}</h3>
                  <span className="project__arrow" aria-hidden="true">
                    ↗
                  </span>
                </div>
                <p className="project__desc">{p.desc}</p>
                <div className="project__tech">
                  {p.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </MotionCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section className="section" id="services">
      <div className="shell">
        <Reveal className="section__head">
          <p className="eyebrow">Services</p>
          <h2 className="section__title">How I can help</h2>
        </Reveal>

        <div className="service-grid">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 55}>
              <MotionCard tilt={5} className="service">
                <p className="service__num">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="service__title">{s.title}</h3>
                <p className="service__desc">{s.desc}</p>
              </MotionCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="shell">
        <Reveal>
          <p className="eyebrow" style={{ justifyContent: "center" }}>
            Contact
          </p>
          <h2 className="contact__title">Let's build something.</h2>
          <p className="contact__lede">
            Tell me what you're working on and what's in the way. I'll tell you
            honestly whether I'm the right fit.
          </p>

          <div className="contact__actions">
            <a href={`mailto:${profile.email}`} className="btn btn--primary">
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              className="btn btn--ghost"
              target="_blank"
              rel="noreferrer noopener"
            >
              LinkedIn
            </a>
          </div>

          <div className="contact__links">
            <a href={profile.github} target="_blank" rel="noreferrer noopener">
              github.com/dilanrushal
            </a>
            <span>{profile.location}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__inner">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>React 19 · TypeScript · Vite</span>
      </div>
    </footer>
  );
}
