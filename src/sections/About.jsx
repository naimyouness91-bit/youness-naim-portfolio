import { useEffect, useRef, useState } from 'react'

const INFO_ITEMS = [
  {
    label: 'Location',
    value: 'Tit Mellil, Casablanca',
  },
  {
    label: 'Current formation',
    value: 'Diplôme de Technicien Spécialisé en Développement Digital – Full Stack',
  },
  {
    label: 'Institution',
    value: 'OFPPT – CFPMS Tit Mellil – Casablanca',
  },
  {
    label: 'Period',
    value: '2024 - 2026',
  },
]

export default function About() {
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
    <section id="about" className="section-spacing relative" ref={sectionRef}>
      <div className="container">
        <div
          className={`transition-all duration-500 ease-out will-change-transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <span className="text-sm font-medium uppercase tracking-wide text-[color:var(--accent-primary)]">
            About Me
          </span>
          <h2 className="mt-4 font-semibold tracking-tight text-[color:var(--text-primary)]">
            Je transforme des idées en applications web modernes.
          </h2>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-12">
          <div
            className={`space-y-6 transition-all delay-75 duration-500 ease-out will-change-transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <p className="text-lg leading-relaxed text-[color:var(--text-secondary)]">
              Développeur Full Stack en formation, spécialisé dans la conception
              et le développement d'applications web avec React.js, Laravel,
              Node.js et Express.js, et dans la gestion des bases de données
              MySQL.
            </p>
            <p className="text-lg leading-relaxed text-[color:var(--text-secondary)]">
              Rigoureux et orienté résolution de problèmes, avec un intérêt
              marqué pour les technologies web et l'apprentissage continu. Mon
              objectif est de créer des applications web fiables, structurées et
              accessibles, en privilégiant un code propre et maintenable.
            </p>
          </div>

          <div
            className={`transition-all delay-150 duration-500 ease-out will-change-transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <div className="card h-full">
              <h3 className="text-lg font-semibold text-[color:var(--text-primary)]">
                Informations
              </h3>
              <dl className="mt-6 space-y-4">
                {INFO_ITEMS.map((item) => (
                  <div key={item.label}>
                    <dt className="text-sm font-medium text-[color:var(--text-muted)]">
                      {item.label}
                    </dt>
                    <dd className="mt-1 text-base text-[color:var(--text-secondary)]">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
