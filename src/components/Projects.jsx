import { projects } from '../data/projects'
import { useStaggerReveal } from '../hooks/useReveal'
import './Projects.css'

function CaseStudyCard({ project, index }) {
  return (
    <article data-reveal-item className="mission-card reveal">
      <div className="mission-card__image">
        {project.image ? (
          <img src={project.image} alt={project.title} />
        ) : (
          <span className="mono">Loyiha rasmi</span>
        )}
        <span className="mono mission-card__codename">
          CASE {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <div className="mission-card__body">
        <h3>{project.title}</h3>

        <dl className="mission-card__log">
          <div>
            <dt className="mono">Muammo</dt>
            <dd>{project.objective}</dd>
          </div>
          <div>
            <dt className="mono">Yondashuv</dt>
            <dd>{project.description}</dd>
          </div>
          <div>
            <dt className="mono">Arxitektura</dt>
            <dd>{project.architecture}</dd>
          </div>
          <div>
            <dt className="mono">Natija</dt>
            <dd>{project.result}</dd>
          </div>
          <div>
            <dt className="mono">Qiyinchilik</dt>
            <dd>{project.challenges}</dd>
          </div>
          <div>
            <dt className="mono">Keyingi qadam</dt>
            <dd>{project.future}</dd>
          </div>
        </dl>

        <div className="mission-card__tech">
          {project.tech.map((t) => (
            <span key={t} className="mono">
              {t}
            </span>
          ))}
        </div>

        <div className="mission-card__links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
              Manba kod
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-primary">
              Jonli namoyish
            </a>
          )}
          {!project.github && !project.demo && (
            <span className="mission-card__placeholder-note mono">
              Havolalar keyinroq qo'shiladi
            </span>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const containerRef = useStaggerReveal()

  return (
    <section id="projects" className="projects">
      <div className="container">
        <p className="eyebrow">Loyihalar</p>
        <h2 className="section-title">Amaliyotda ishlab chiqqan tizimlarim</h2>
        <p className="section-sub">
          Har bir loyiha - alohida keys: aniq muammo, qabul qilingan
          arxitektura qarori, natija va undan olingan saboq bilan.
        </p>

        <div ref={containerRef} className="projects__grid">
          {projects.map((project, i) => (
            <CaseStudyCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
