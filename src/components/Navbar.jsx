import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'
import ThemeToggle from './ThemeToggle'

const NAV_LINK_IDS = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact']

const CV_PATH = '/CV_Youness_Naim_2026.pdf'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { t } = useLanguage()

  const navLinks = NAV_LINK_IDS.map((id) => ({
    href: `#${id}`,
    label: t.nav.links[id],
  }))

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const handleLinkClick = () => {
    closeMenu()
  }

  return (
    <nav
      aria-label={t.nav.mainNavAria}
      className={`fixed top-0 left-0 z-50 w-full transition-colors duration-150 ${
        isScrolled
          ? 'bg-[color:var(--bg-primary)]/95 border-b border-[color:var(--border-subtle)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1152px] items-center justify-between gap-4 px-[var(--padding-x)]">
        <a
          href="#home"
          className="shrink-0 whitespace-nowrap text-lg font-semibold text-[color:var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--bg-primary)] rounded-md"
          onClick={closeMenu}
        >
          Youness Naim
        </a>

        <div className="hidden items-center gap-5 xl:flex">
          <div className="flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap px-1 text-[14px] font-medium text-[color:var(--text-secondary)] transition-colors hover:text-[color:var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--bg-primary)] rounded-md"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <ThemeToggle />
            <a
              href={CV_PATH}
              download
              className="btn btn-primary"
              aria-label={t.nav.downloadCv}
            >
              {t.nav.downloadCv}
            </a>
          </div>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={isMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-md p-2 text-[color:var(--text-secondary)] transition-colors hover:text-[color:var(--text-primary)] hover:bg-[color:var(--surface-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--bg-primary)]"
          >
            {isMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[color:var(--bg-primary)]/80 backdrop-blur-sm xl:hidden" onClick={closeMenu} aria-hidden="true" />
      )}

      <div
        className={`fixed right-0 top-0 z-50 h-full w-4/5 max-w-sm border-l border-[color:var(--border-subtle)] bg-[color:var(--bg-primary)] p-6 shadow-lg transition-transform duration-150 ease-out xl:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label={t.nav.mobileNavAria}
      >
        <div className="flex items-center justify-between">
          <span className="whitespace-nowrap text-base font-semibold text-[color:var(--text-primary)]">
            Youness Naim
          </span>
          <button
            type="button"
            aria-label={t.nav.closeMenu}
            onClick={closeMenu}
            className="inline-flex items-center justify-center rounded-md p-2 text-[color:var(--text-secondary)] transition-colors hover:text-[color:var(--text-primary)] hover:bg-[color:var(--surface-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--bg-primary)]"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>

        <nav aria-label={t.nav.mobileLinksAria} className="mt-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="text-base font-medium text-[color:var(--text-secondary)] transition-colors hover:text-[color:var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--bg-primary)] rounded-md py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href={CV_PATH}
            download
            onClick={closeMenu}
            className="btn btn-primary mt-4 w-full"
            aria-label={t.nav.downloadCv}
          >
            {t.nav.downloadCv}
          </a>
        </nav>
      </div>
    </nav>
  )
}
