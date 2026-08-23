import { layers, profile } from "../data/content";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden="true" />
      <div className="shell hero__grid">
        <div>
          <span className="hero__status">
            <span className="hero__pulse" aria-hidden="true" />
            Available for work
          </span>

          <h1 className="hero__name">{profile.name}</h1>
          <p className="hero__tagline">{profile.tagline}</p>
          <p className="hero__intro">{profile.intro}</p>

          <div className="hero__actions">
            <a href="#contact" className="btn btn--primary">
              Start a project
            </a>
            <a href="#projects" className="btn btn--ghost">
              See the work
            </a>
          </div>

          <div className="hero__meta">
            <span>{profile.role}</span>
            <span>{profile.location}</span>
            <span>5+ years</span>
          </div>
        </div>

        <div className="slabs" aria-label="Technology stack">
          {layers.map((layer) => (
            <article className="slab" key={layer.id} tabIndex={0}>
              <div className="slab__top">
                <span className="slab__index">{layer.index}</span>
                <h2 className="slab__name">{layer.name}</h2>
              </div>
              <div className="slab__tech">
                {layer.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
