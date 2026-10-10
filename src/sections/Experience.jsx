import { useEffect, useRef, useState } from 'react'
import { EXPERIENCE } from '../data/experience'
import { useLanguage } from '../context/LanguageContext'

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  const { t, localize } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="section-spacing relative" ref={sectionRef}>
      <div className="container">
        <div
          className={`transition-all duration-500 ease-out will-change-transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <span className="text-sm font-medium uppercase tracking-wide text-[color:var(--accent-primary)]">
            {t.experience.eyebrow}
          </span>
          <h2 className="mt-4 font-semibold tracking-tight text-[color:var(--text-primary)]">
            {t.experience.title}
          </h2>
        </div>

        <div className="mt-10">
          {EXPERIENCE.map((item, index) => (
            <div
              key={item.id}
              className={`relative transition-all duration-500 ease-out will-change-transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 75}ms` }}
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-start">
                <div className="md:w-48 md:flex-shrink-0">
                  <span className="inline-flex rounded-md border border-[color:var(--border-subtle)] bg-[color:var(--surface)]/80 px-2.5 py-1 text-sm text-[color:var(--text-secondary)] backdrop-blur-sm">
                    {localize(item.period)}
                  </span>
                </div>

                <div className="relative flex-1">
                  <div className="absolute -left-4 top-0 hidden h-full w-px bg-gradient-to-b from-[color:var(--accent-primary)]/40 via-[color:var(--border-subtle)] to-transparent md:block" />
                  <div className="absolute -left-5 top-2 hidden h-2 w-2 rounded-full border border-[color:var(--accent-primary)] bg-[color:var(--bg-primary)] md:block" />

                  <div className="card">
                    <h3 className="text-xl font-semibold text-[color:var(--text-primary)]">
                      {localize(item.role)}
                    </h3>
                    <div className="mt-2 flex flex-wrap items-center gap-2 text-base text-[color:var(--text-secondary)]">
                      <span className="font-medium">{item.company}</span>
                      <span aria-hidden="true">•</span>
                      <span>{item.location}</span>
                    </div>

                    {item.responsibilities.length > 0 && (
                      <ul className="mt-4 space-y-2 text-base leading-relaxed text-[color:var(--text-secondary)]">
                        {item.responsibilities.map((responsibility) => (
                          <li key={localize(responsibility)} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[color:var(--accent-primary)] opacity-70" />
                            <span>{localize(responsibility)}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {item.technologies.length > 0 && (
                      <div className="mt-6 flex flex-wrap gap-2">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="badge"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
