'use client'

import { useState } from 'react'
import { capabilities } from './siteData'

export default function Capabilities() {
  const [activeIndex, setActiveIndex] = useState(3)
  const activeCapability = capabilities[activeIndex]

  return (
    <section id="services" className="relative isolate min-h-[100svh] overflow-hidden bg-black md:h-[100dvh] md:min-h-0">
      <img
        src={activeCapability.image}
        alt={activeCapability.name}
        className="absolute inset-0 h-full w-full object-cover brightness-[0.58] transition-all duration-700"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.84)_0%,rgba(0,0,0,0.34)_48%,rgba(0,0,0,0.66)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1900px] flex-col justify-between pl-6 pr-7 pb-6 pt-[6.4rem] md:h-full md:min-h-0 md:pl-11 md:pr-12 md:pb-8 md:pt-[6.9rem] xl:pl-[4.75rem] xl:pr-20 2xl:pl-[7.75rem] 2xl:pr-32">
        <div className="max-w-[780px]">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/[0.78]">Capabilities</p>

          <div className="mt-7 flex flex-col items-start gap-1 md:gap-2">
            {capabilities.map((capability, index) => (
              <button
                key={capability.name}
                type="button"
                className={`text-left text-[clamp(2.95rem,5.7vw,6.25rem)] font-semibold leading-[0.9] tracking-[-0.08em] ${
                  activeIndex === index ? 'text-white' : 'text-white/[0.28] hover:text-white/[0.56]'
                }`}
                onClick={() => setActiveIndex(index)}
              >
                {capability.name}
              </button>
            ))}
          </div>
        </div>

        <div className="ml-auto max-w-md rounded-[1.75rem] border border-white/10 bg-black/[0.35] p-6 backdrop-blur md:p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/[0.58]">
            {activeCapability.eyebrow}
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-[-0.05em] text-white md:text-[2rem]">
            {activeCapability.name}
          </h3>
          <p className="mt-4 text-sm leading-6 text-white/[0.72] md:text-base">{activeCapability.description}</p>
        </div>
      </div>
    </section>
  )
}
