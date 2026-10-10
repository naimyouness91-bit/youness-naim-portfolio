import { useEffect, useState } from 'react'
import profileImg from '../assets/profile.jpg'
import { useLanguage } from '../context/LanguageContext'

const TECH_STACK = [
  'React.js',
  'Laravel',
  'Node.js',
  'Express.js',
  'MySQL',
]

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const animationFrame = requestAnimationFrame(() => setIsVisible(true))
    return () => cancelAnimationFrame(animationFrame)
  }, [])

  return (
    <section id="home" className="section-spacing relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(ellipse_at_top,var(--accent-subtle),transparent_70%)] opacity-60" />
        <div className="absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,var(--accent-subtle),transparent_70%)] opacity-40" />
      </div>

      <div className="container relative z-10 grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <div className="flex flex-col">
          <div
            className={`transition-all duration-500 ease-out will-change-transform ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-4 opacity-0'
            }`}
          >
            <span className="inline-flex items-center rounded-full border border-[color:var(--accent-border)] bg-[color:var(--accent-subtle)] px-3 py-1 text-xs font-medium text-[color:var(--accent-primary)] shadow-sm backdrop-blur-sm">
              {t.hero.badge}
            </span>
          </div>

          <h1
            className={`mt-6 font-semibold tracking-tight text-[color:var(--text-primary)] transition-all delay-75 duration-500 ease-out will-change-transform ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-4 opacity-0'
            }`}
          >
            Youness Naim
          </h1>

          <h2
            className={`mt-2 text-2xl font-medium tracking-tight text-[color:var(--text-secondary)] transition-all delay-100 duration-500 ease-out sm:text-3xl ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-4 opacity-0'
            }`}
          >
            {t.hero.title}
          </h2>

          <p
            className={`mt-4 max-w-2xl text-lg leading-relaxed text-[color:var(--text-secondary)] transition-all delay-150 duration-500 ease-out md:text-xl ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-4 opacity-0'
            }`}
          >
            {t.hero.description}
          </p>

          <div
            className={`mt-6 flex flex-wrap items-center gap-3 text-sm text-[color:var(--text-muted)] transition-all delay-200 duration-500 ease-out ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-4 opacity-0'
            }`}
          >
            {TECH_STACK.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-md border border-[color:var(--border-subtle)] bg-[color:var(--surface)]/80 px-2.5 py-1 backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <div
            className={`mt-8 flex flex-col gap-4 sm:flex-row sm:items-center transition-all delay-250 duration-500 ease-out ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-4 opacity-0'
            }`}
          >
            <a
              href="#projects"
              className="btn btn-primary justify-center sm:justify-start"
              aria-label={t.hero.ctaProjects}
            >
              {t.hero.ctaProjects}
            </a>
            <a
              href="/CV_Youness_Naim_2026.pdf"
              download
              className="btn justify-center sm:justify-start"
              aria-label={t.hero.ctaCv}
            >
              {t.hero.ctaCv}
            </a>
          </div>
        </div>

        <div
          className={`relative order-first md:order-last transition-all delay-300 duration-500 ease-out will-change-transform ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-4 opacity-0'
          }`}
        >
          <div className="relative mx-auto flex max-w-sm items-center justify-center md:max-w-md lg:max-w-lg">
            <div className="absolute -inset-4 rounded-3xl bg-[radial-gradient(circle,rgba(167,139,250,0.12),transparent_70%)] blur-2xl" />

            <div className="relative overflow-hidden rounded-2xl border border-[color:var(--border-default)] bg-[color:var(--surface)]/90 p-1.5 shadow-sm backdrop-blur-sm">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                <img
                  src={profileImg}
                  alt={t.hero.imageAlt}
                  className="h-full w-full object-cover object-center"
                  loading="eager"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[color:var(--bg-primary)]/30 via-transparent to-transparent" />
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[color:var(--accent-primary)]/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-[color:var(--border-subtle)] to-transparent opacity-40" />
    </section>
  )
}
