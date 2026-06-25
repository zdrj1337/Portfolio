import { projects } from '../data/projects.js'

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Projects</div>
          <h2>Things I've built and shipped</h2>
        </div>
        <div className="projects-grid">
          {projects.map((p) => (
            <article className="card" key={p.id}>
              <div className="num">{p.id}</div>
              <h3>{p.name}</h3>
              <div className="role">{p.role}</div>
              <p className="desc">{p.description}</p>
              <div className="tags">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
              <div className="card-links">
                <a href={p.demo} className="link-btn link-primary" target="_blank" rel="noopener">Live demo <span className="arr">↗</span></a>
                <a href={p.code} className="link-btn link-ghost" target="_blank" rel="noopener">Code <span className="arr">↗</span></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
