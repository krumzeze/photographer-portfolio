'use client'

import { contactEmail, siteNavItems, socialLinks } from './siteData'
import TransitionLink from './TransitionLink'

export default function Footer() {
  return (
    <footer className="bg-black px-7 pb-14 pt-16 md:px-12 md:pb-16 md:pt-20 xl:px-20 2xl:px-32">
      <div className="mx-auto max-w-[1900px]">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr] md:items-start">
          <TransitionLink
            href="/"
            className="block"
            aria-label="Creative Hamd home"
          >
            <img
              src="/logo.png"
              alt="Creative Hamd"
              className="block h-[3rem] w-auto md:h-[3.35rem]"
            />
          </TransitionLink>

          <a href={`mailto:${contactEmail}`} className="text-lg font-semibold text-white/[0.86] hover:text-white">
            {contactEmail}
          </a>

          <div className="grid gap-2 md:justify-self-end md:text-right">
            {siteNavItems.map((item) => (
              <TransitionLink
                key={item.id}
                href={item.href}
                className="text-lg font-semibold text-white/[0.84] hover:text-white"
              >
                {item.label}
              </TransitionLink>
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-6 border-t border-white/10 pt-8 text-sm font-semibold text-white/[0.4] md:grid-cols-3 md:items-center">
          <p>Copyright 2026 Creative Hamd</p>

          <div className="flex flex-wrap gap-4 md:justify-center">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white/[0.72]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <p className="md:text-right">All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
