'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { headerNavItems } from './siteData'
import TransitionLink from './TransitionLink'

const transparentHeaderRoutes = new Set(['/', '/contact', '/about', '/services'])

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const hasTransparentHeader = transparentHeaderRoutes.has(pathname)

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    const syncScrolledState = () => {
      setIsScrolled(window.scrollY > 24)
    }

    syncScrolledState()
    window.addEventListener('scroll', syncScrolledState, { passive: true })

    return () => window.removeEventListener('scroll', syncScrolledState)
  }, [])

  const navClassName =
    !hasTransparentHeader || isScrolled || isMenuOpen
      ? 'border-white/10 bg-black/[0.74] backdrop-blur-xl'
      : 'border-transparent bg-gradient-to-b from-black/58 via-black/16 to-transparent'

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className={`px-7 py-5 transition-all duration-500 md:px-12 md:py-6 xl:px-20 xl:py-7 2xl:px-32 ${navClassName}`}>
        <div className="mx-auto flex max-w-[1900px] items-center justify-between gap-8">
          <TransitionLink
            href="/"
            className="block shrink-0"
            aria-label="Creative Hamd home"
          >
            <img
              src="/logo.png"
              alt="Creative Hamd"
              className="block h-[2.7rem] w-auto md:h-[3rem] xl:h-[3.35rem]"
            />
          </TransitionLink>

          <div className="hidden items-center gap-6 text-[0.98rem] font-semibold tracking-[-0.04em] lg:flex xl:gap-8">
            {headerNavItems.map((item) => {
              const isActive = pathname === item.href

              return (
                <TransitionLink
                  key={item.id}
                  href={item.href}
                  className={isActive ? 'text-white' : 'text-white/[0.88] hover:text-white/[0.58]'}
                >
                  {item.label}
                </TransitionLink>
              )
            })}
          </div>

          <button
            type="button"
            className="rounded-full border border-white/16 bg-black/18 px-4 py-2 text-sm font-semibold text-white/[0.92] backdrop-blur-sm lg:hidden"
            onClick={() => setIsMenuOpen((value) => !value)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="border-b border-white/10 bg-black/[0.9] px-7 py-6 backdrop-blur-xl md:px-12 lg:hidden">
          <div className="mx-auto grid max-w-[1900px] gap-3">
            {headerNavItems.map((item) => {
              return (
                <TransitionLink
                  key={item.id}
                  href={item.href}
                  className="text-lg font-semibold text-white/[0.86] hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </TransitionLink>
              )
            })}
          </div>
        </div>
      )}
    </header>
  )
}
