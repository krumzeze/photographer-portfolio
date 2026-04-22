'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import TransitionLink from './TransitionLink'
import { heroBackground } from './siteData'

const heroTransition = {
  duration: 0.92,
  ease: [0.16, 1, 0.3, 1],
}

const videoSrc = '/showreel.mp4'

export default function Hero() {
  const [hasHeroVideoStarted, setHasHeroVideoStarted] = useState(false)
  const heroVideoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const video = heroVideoRef.current

    if (!video) {
      return
    }

    const tryStartPlayback = () => {
      void video.play().catch(() => {})
    }

    tryStartPlayback()
    video.addEventListener('canplay', tryStartPlayback)

    return () => video.removeEventListener('canplay', tryStartPlayback)
  }, [])

  return (
    <section id="studio" className="relative isolate min-h-[100svh] overflow-hidden bg-black md:h-[100dvh] md:min-h-0">
      <img
        src={heroBackground}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        loading="eager"
        decoding="async"
        className={`pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
          hasHeroVideoStarted ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <video
        ref={heroVideoRef}
        src={videoSrc}
        poster={heroBackground}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        tabIndex={-1}
        onPlaying={() => setHasHeroVideoStarted(true)}
        className={`pointer-events-none absolute inset-0 h-full w-full object-cover brightness-[0.72] contrast-110 saturate-110 transition-opacity duration-700 ${
          hasHeroVideoStarted ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_32%,rgba(255,255,255,0.18),transparent_26%),linear-gradient(90deg,rgba(0,0,0,0.58)_0%,rgba(0,0,0,0.24)_42%,rgba(0,0,0,0.5)_100%)]" />

      <div className="relative z-10 mx-auto h-full max-w-[1900px] pl-6 pr-7 pb-6 pt-10 md:pl-11 md:pr-12 md:pb-8 md:pt-14 xl:pl-[4.75rem] xl:pr-20 2xl:pl-[7.75rem] 2xl:pr-32">
        <HomeHeroContent />
      </div>
    </section>
  )
}

function HomeHeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: 'blur(14px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -16, filter: 'blur(12px)' }}
      transition={heroTransition}
      className="flex min-h-[100svh] flex-col justify-between pb-2 pt-[5.2rem] md:h-full md:min-h-0 md:pb-4 md:pt-[5.8rem]"
    >
      <div className="max-w-[860px] pt-[16vh]">
        <h1 className="max-w-[840px] text-[clamp(3.4rem,6.2vw,7rem)] font-semibold leading-[0.9] tracking-[-0.075em] text-white">
          Bending minds to your brands will.
        </h1>

        <TransitionLink
          href="/contact"
          className="glow-button mt-8 inline-flex items-center justify-center rounded-full border border-white/10 bg-black/70 px-8 py-4 text-lg font-semibold text-white backdrop-blur"
        >
          <span className="glow-button__label">Work with us</span>
        </TransitionLink>
      </div>

      <div className="flex justify-end">
        <TransitionLink href="/work" className="text-sm font-semibold text-white/[0.78] md:text-base">
          View work
        </TransitionLink>
      </div>
    </motion.div>
  )
}
