import { useEffect, useRef, useState } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const CONTACT_INFO = [
  {
    id: 'email',
    labelKey: 'email',
    value: 'naimyouness91@gmail.com',
    href: 'mailto:naimyouness91@gmail.com',
    icon: Mail,
  },
  {
    id: 'phone',
    labelKey: 'phone',
    value: '+212 610-848-268',
    href: 'tel:+212610848268',
    icon: Phone,
  },
  {
    id: 'location',
    labelKey: 'location',
    value: 'Tit Mellil, Casablanca',
    href: null,
    icon: MapPin,
  },
]

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formStatus, setFormStatus] = useState(null)
  const sectionRef = useRef(null)
  const formRef = useRef(null)
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

  const handleSubmit = (event) => {
    event.preventDefault()
    setFormStatus({ type: 'info' })
    if (formRef.current) {
      formRef.current.reset()
    }
  }

  return (
    <section id="contact" className="section-spacing relative" ref={sectionRef}>
      <div className="container">
        <div
          className={`transition-all duration-500 ease-out will-change-transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <span className="text-sm font-medium uppercase tracking-wide text-[color:var(--accent-primary)]">
            {t.contact.eyebrow}
          </span>
          <h2 className="mt-4 font-semibold tracking-tight text-[color:var(--text-primary)]">
            {t.contact.title}
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-[color:var(--text-secondary)]">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-10">
          <div
            className={`space-y-6 transition-all delay-75 duration-500 ease-out will-change-transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            {CONTACT_INFO.map((item) => {
              const Icon = item.icon
              const content = (
                <div
                  key={item.id}
                  className="group flex items-start gap-4 rounded-lg border border-[color:var(--border-subtle)] bg-[color:var(--surface)]/90 p-4 transition-colors hover:border-[color:var(--border-default)] hover:bg-[color:var(--surface-hover)]"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[color:var(--border-subtle)] bg-[color:var(--bg-secondary)]/80 text-[color:var(--accent-primary)]">
                    <Icon size={18} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[color:var(--text-muted)]">
                      {t.contact.info[item.labelKey]}
                    </p>
                    <p className="mt-1 break-all text-base text-[color:var(--text-primary)]">
                      {item.value}
                    </p>
                  </div>
                </div>
              )

              if (item.href) {
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--bg-primary)] rounded-lg"
                  >
                    {content}
                  </a>
                )
              }

              return <div key={item.id}>{content}</div>
            })}
          </div>

          <div
            className={`transition-all delay-150 duration-500 ease-out will-change-transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="card space-y-5"
              noValidate
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[color:var(--text-primary)]"
                >
                  {t.contact.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  className="mt-2 w-full rounded-lg border border-[color:var(--border-subtle)] bg-[color:var(--bg-secondary)]/70 px-3 py-2 text-[color:var(--text-primary)] placeholder:text-[color:var(--text-muted)] shadow-sm transition-colors focus:border-[color:var(--accent-primary)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent-primary)]/20"
                  placeholder={t.contact.form.namePlaceholder}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[color:var(--text-primary)]"
                >
                  {t.contact.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete="email"
                  className="mt-2 w-full rounded-lg border border-[color:var(--border-subtle)] bg-[color:var(--bg-secondary)]/70 px-3 py-2 text-[color:var(--text-primary)] placeholder:text-[color:var(--text-muted)] shadow-sm transition-colors focus:border-[color:var(--accent-primary)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent-primary)]/20"
                  placeholder={t.contact.form.emailPlaceholder}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[color:var(--text-primary)]"
                >
                  {t.contact.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-2 w-full rounded-lg border border-[color:var(--border-subtle)] bg-[color:var(--bg-secondary)]/70 px-3 py-2 text-[color:var(--text-primary)] placeholder:text-[color:var(--text-muted)] shadow-sm transition-colors focus:border-[color:var(--accent-primary)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent-primary)]/20"
                  placeholder={t.contact.form.messagePlaceholder}
                />
              </div>

              {formStatus && (
                <div
                  role="status"
                  className={`rounded-lg border px-3 py-2 text-sm ${
                    formStatus.type === 'info'
                      ? 'border-[color:var(--border-subtle)] bg-[color:var(--surface)]/80 text-[color:var(--text-secondary)]'
                      : 'border-[color:var(--accent-border)] bg-[color:var(--accent-subtle)] text-[color:var(--accent-primary)]'
                  }`}
                >
                  {t.contact.form.status}
                </div>
              )}

              <button type="submit" className="btn btn-primary w-full justify-center">
                {t.contact.form.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
