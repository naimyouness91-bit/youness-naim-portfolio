import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

const INFO_ITEMS = [
  {
    key: 'location',
    value: 'Tit Mellil, Casablanca',
  },
  {
    key: 'formation',
    value: 'Diplôme de Technicien Spécialisé en Développement Digital – Full Stack',
  },
  {
    key: 'institution',
    value: 'OFPPT – CFPMS Tit Mellil – Casablanca',
  },
  {
    key: 'period',
    value: '2024 - 2026',
  },
]

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  const { t } = useLanguage()

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
            {t.about.eyebrow}
          </span>
          <h2 className="mt-4 font-semibold tracking-tight text-[color:var(--text-primary)]">
            {t.about.title}
          </h2>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-12">
          <div
            className={`space-y-6 transition-all delay-75 duration-500 ease-out will-change-transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <p className="text-lg leading-relaxed text-[color:var(--text-secondary)]">
              {t.about.paragraph1}
            </p>
            <p className="text-lg leading-relaxed text-[color:var(--text-secondary)]">
              {t.about.paragraph2}
            </p>
          </div>

          <div
            className={`transition-all delay-150 duration-500 ease-out will-change-transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <div className="card h-full">
              <h3 className="text-lg font-semibold text-[color:var(--text-primary)]">
                {t.about.infoTitle}
              </h3>
              <dl className="mt-6 space-y-4">
                {INFO_ITEMS.map((item) => (
                  <div key={item.key}>
                    <dt className="text-sm font-medium text-[color:var(--text-muted)]">
                      {t.about.info[item.key]}
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
