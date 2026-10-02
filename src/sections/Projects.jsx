import { useEffect, useRef, useState } from 'react'
import { PROJECTS } from '../data/projects'

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="section-spacing relative" ref={sectionRef}>
      <div className="container">
        <div
          className={`transition-all duration-500 ease-out will-change-transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <span className="text-sm font-medium uppercase tracking-wide text-[color:var(--accent-primary)]">
            PROJETS
          </span>
          <h2 className="mt-4 font-semibold tracking-tight text-[color:var(--text-primary)]">
            Mes projets
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-[color:var(--text-secondary)]">
            Quelques projets réalisés dans le cadre de ma formation et de mes
            expériences de développement.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <article
              key={project.id}
              className={`card group flex h-full flex-col transition-all duration-500 ease-out will-change-transform hover:-translate-y-0.5 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 75}ms` }}
            >
              <div className="flex flex-1 flex-col">
                <h3 className="text-xl font-semibold text-[color:var(--text-primary)]">
                  {project.title}
                </h3>
                <p className="mt-3 leading-relaxed text-[color:var(--text-secondary)]">
                  {project.description}
                </p>

                {project.features && project.features.length > 0 && (
                  <div className="mt-4">
                    <ul className="space-y-2 text-sm text-[color:var(--text-secondary)]">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[color:var(--accent-primary)] opacity-70" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-md border border-[color:var(--border-subtle)] bg-[color:var(--bg-secondary)]/70 px-2.5 py-1 text-xs text-[color:var(--text-secondary)] transition-colors group-hover:border-[color:var(--border-default)] group-hover:text-[color:var(--text-primary)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {(project.github || project.demo) && (
                <div className="mt-6 flex flex-wrap gap-3 border-t border-[color:var(--border-subtle)] pt-6">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
