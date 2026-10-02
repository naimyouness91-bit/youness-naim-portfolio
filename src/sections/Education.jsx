import { useEffect, useRef, useState } from 'react'
import { EDUCATION } from '../data/education'

export default function Education() {
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
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="education" className="section-spacing relative" ref={sectionRef}>
      <div className="container">
        <div
          className={`transition-all duration-500 ease-out will-change-transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <span className="text-sm font-medium uppercase tracking-wide text-[color:var(--accent-primary)]">
            FORMATION
          </span>
          <h2 className="mt-4 font-semibold tracking-tight text-[color:var(--text-primary)]">
            Parcours académique
          </h2>
        </div>

        <div className="mt-10 space-y-6">
          {EDUCATION.map((item, index) => (
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
                    {item.period}
                  </span>
                </div>

                <div className="relative flex-1">
                  <div className="absolute -left-4 top-0 hidden h-full w-px bg-gradient-to-b from-[color:var(--accent-primary)]/40 via-[color:var(--border-subtle)] to-transparent md:block" />
                  <div className="absolute -left-5 top-2 hidden h-2 w-2 rounded-full border border-[color:var(--accent-primary)] bg-[color:var(--bg-primary)] md:block" />

                  <div className="card">
                    <h3 className="text-lg font-semibold text-[color:var(--text-primary)] sm:text-xl">
                      {item.diploma}
                    </h3>
                    <p className="mt-2 text-base text-[color:var(--text-secondary)]">
                      {item.institution}
                    </p>
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
