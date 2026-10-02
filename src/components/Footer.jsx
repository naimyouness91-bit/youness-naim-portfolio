import { Mail, MapPin, Phone } from 'lucide-react'

const NAV_LINKS = [
  { href: '#home', label: 'Accueil' },
  { href: '#about', label: 'À propos' },
  { href: '#skills', label: 'Compétences' },
  { href: '#projects', label: 'Projets' },
  { href: '#experience', label: 'Expérience' },
  { href: '#education', label: 'Formation' },
  { href: '#contact', label: 'Contact' },
]

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

export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--border-subtle)] bg-[color:var(--bg-primary)]">
      <div className="container section-spacing">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <h2 className="text-xl font-semibold text-[color:var(--text-primary)]">
              Youness Naim
            </h2>
            <p className="mt-2 text-base text-[color:var(--text-secondary)]">
              Full Stack Developer
            </p>
            <div className="mt-6 space-y-3">
              {CONTACT_LINKS.map((item) => {
                const Icon = item.icon
              if (item.href) {
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    className="group inline-flex items-center gap-3 rounded-md text-sm text-[color:var(--text-secondary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--bg-primary)] transition-colors hover:text-[color:var(--text-primary)]"
                  >
                    <Icon size={16} aria-hidden="true" />
                    <span>{item.label}</span>
                  </a>
                )
              }

              return (
                <div
                  key={item.id}
                  className="flex items-center gap-3 text-sm text-[color:var(--text-secondary)]"
                >
                  <Icon size={16} aria-hidden="true" />
                  <span>{item.label}</span>
                </div>
              )
              })}
            </div>
          </div>

          <div className="flex flex-col md:items-end">
            <nav aria-label="Footer navigation">
              <ul className="grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3 md:flex md:flex-wrap md:justify-end md:gap-4">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-[color:var(--text-secondary)] transition-colors hover:text-[color:var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--bg-primary)] rounded-md"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <a
              href="/CV_Youness_Naim_2026.pdf"
              download="CV_Youness_Naim_2026.pdf"
              className="btn mt-6 w-full justify-center sm:w-auto md:mt-4 md:self-end"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-[color:var(--border-subtle)] pt-6 text-center text-sm text-[color:var(--text-muted)] md:text-left">
          <p>© 2026 Youness Naim. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
