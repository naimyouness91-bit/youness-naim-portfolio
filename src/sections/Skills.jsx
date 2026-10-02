import { useEffect, useRef, useState } from 'react'
import { SKILL_CATEGORIES } from '../data/skills'

export default function Skills() {
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
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="section-spacing relative" ref={sectionRef}>
      <div className="container">
        <div
          className={`transition-all duration-500 ease-out will-change-transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <span className="text-sm font-medium uppercase tracking-wide text-[color:var(--accent-primary)]">
            COMPÉTENCES
          </span>
          <h2 className="mt-4 font-semibold tracking-tight text-[color:var(--text-primary)]">
            Technologies & outils
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-[color:var(--text-secondary)]">
            Un ensemble de technologies utilisées pour concevoir, développer et
            structurer des applications web modernes.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={category.title}
                className={`card flex h-full flex-col transition-all duration-500 ease-out will-change-transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 75}ms` }}
              >
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[color:var(--border-subtle)] bg-[color:var(--surface-hover)] text-[color:var(--accent-primary)]">
                    <Icon size={18} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-[color:var(--text-primary)]">
                    {category.title}
                  </h3>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-md border border-[color:var(--border-subtle)] bg-[color:var(--bg-secondary)]/70 px-2.5 py-1 text-sm text-[color:var(--text-secondary)] transition-colors hover:border-[color:var(--border-default)] hover:text-[color:var(--text-primary)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
