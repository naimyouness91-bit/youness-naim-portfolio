import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

const CV_PATH = '/CV_Youness_Naim_2026.pdf'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

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
      aria-label="Main navigation"
      className={`fixed top-0 left-0 z-50 w-full transition-colors duration-150 ${
        isScrolled
          ? 'bg-[color:var(--bg-primary)]/95 border-b border-[color:var(--border-subtle)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <a
          href="#home"
          className="text-lg font-semibold text-[color:var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--bg-primary)] rounded-md"
          onClick={closeMenu}
        >
          Youness Naim
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <div className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[color:var(--text-secondary)] transition-colors hover:text-[color:var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--bg-primary)] rounded-md px-1"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href={CV_PATH}
            download
            className="btn btn-primary"
            aria-label="Download CV"
          >
            Download CV
          </a>
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-md p-2 text-[color:var(--text-secondary)] transition-colors hover:text-[color:var(--text-primary)] hover:bg-[color:var(--surface-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--bg-primary)] md:hidden"
        >
          {isMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[color:var(--bg-primary)]/80 backdrop-blur-sm md:hidden" onClick={closeMenu} aria-hidden="true" />
      )}

      <div
        className={`fixed right-0 top-0 z-50 h-full w-4/5 max-w-sm border-l border-[color:var(--border-subtle)] bg-[color:var(--bg-primary)] p-6 shadow-lg transition-transform duration-150 ease-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between">
          <span className="text-base font-semibold text-[color:var(--text-primary)]">
            Youness Naim
          </span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={closeMenu}
            className="inline-flex items-center justify-center rounded-md p-2 text-[color:var(--text-secondary)] transition-colors hover:text-[color:var(--text-primary)] hover:bg-[color:var(--surface-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--bg-primary)]"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Mobile navigation links" className="mt-8 flex flex-col gap-6">
          {NAV_LINKS.map((link) => (
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
            aria-label="Download CV"
          >
            Download CV
          </a>
        </nav>
      </div>
    </nav>
  )
}
