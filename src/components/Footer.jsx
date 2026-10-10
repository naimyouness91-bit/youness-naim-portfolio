import { Mail, MapPin, Phone } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const NAV_LINK_IDS = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact']

const CV_PATH = '/CV_Youness_Naim_2026.pdf'

const CONTACT_LINKS = [
  {
    id: 'email',
    label: 'naimyouness91@gmail.com',
    href: 'mailto:naimyouness91@gmail.com',
    icon: Mail,
  },
  {
    id: 'phone',
    label: '+212 610-848-268',
    href: 'tel:+212610848268',
    icon: Phone,
  },
  {
    id: 'location',
    label: 'Tit Mellil, Casablanca',
    href: null,
    icon: MapPin,
  },
]

const CONTACT_ARIA = {
  email: 'emailAria',
  phone: 'phoneAria',
}

export default function Footer() {
  const { t } = useLanguage()

  const navLinks = NAV_LINK_IDS.map((id) => ({
    href: `#${id}`,
    label: t.nav.links[id],
  }))

  return (
    <footer className="border-t border-subtle bg-[color:var(--bg-secondary)]">
      <div className="container section-spacing">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <h2 className="text-2xl font-semibold text-primary">
              Youness Naim
            </h2>
            <p className="mt-1 font-medium text-accent">{t.footer.role}</p>
            <p className="mt-4 max-w-sm text-sm text-muted">
              {t.about.title}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              {t.footer.navigation}
            </p>
            <nav aria-label={t.nav.footerNavAria} className="mt-4">
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="rounded-md text-sm text-secondary transition-colors hover:text-[color:var(--accent-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--bg-secondary)]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              {t.footer.contact}
            </p>
            <ul className="mt-4 space-y-3">
              {CONTACT_LINKS.map((item) => {
                const Icon = item.icon
                const aria = CONTACT_ARIA[item.id]
                  ? t.footer[CONTACT_ARIA[item.id]]
                  : undefined

                if (item.href) {
                  return (
                    <li key={item.id}>
                      <a
                        href={item.href}
                        aria-label={aria}
                        className="group inline-flex items-center gap-3 rounded-md text-sm text-secondary transition-colors hover:text-[color:var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--bg-secondary)]"
                      >
                        <Icon size={16} aria-hidden="true" />
                        <span>{item.label}</span>
                      </a>
                    </li>
                  )
                }

                return (
                  <li key={item.id} className="flex items-center gap-3 text-sm text-secondary">
                    <Icon size={16} aria-hidden="true" />
                    <span>{item.label}</span>
                  </li>
                )
              })}
            </ul>
            <a
              href={CV_PATH}
              download
              className="btn btn-primary mt-6 w-full sm:w-auto"
              aria-label={t.footer.downloadCv}
            >
              {t.footer.downloadCv}
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-default pt-6">
          <p className="text-center text-sm text-muted">
            {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
