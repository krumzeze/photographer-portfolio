'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Tagline() {
  const wordsRef = useRef<HTMLSpanElement[]>([])
  const buttonRef = useRef<HTMLButtonElement>(null)
  const setWordRef = (index: number) => (el: HTMLSpanElement | null) => {
    if (el) {
      wordsRef.current[index] = el
    }
  }

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.tagline-section',
        start: 'top 80%',
      }
    })

    wordsRef.current.forEach((word, index) => {
      tl.fromTo(word, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.6 }, index * 0.1)
    })

    tl.fromTo(buttonRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.3')
  }, [])

  return (
    <section className="tagline-section py-32 px-8 bg-dark text-center">
      <h1 className="text-4xl md:text-6xl font-serif mb-8">
        <span ref={setWordRef(0)} className="inline-block">Bending</span>{' '}
        <span ref={setWordRef(1)} className="inline-block">minds</span>{' '}
        <span ref={setWordRef(2)} className="inline-block">to</span>{' '}
        <span ref={setWordRef(3)} className="inline-block">your</span>{' '}
        <span ref={setWordRef(4)} className="inline-block">brands</span>{' '}
        <span ref={setWordRef(5)} className="inline-block">will.</span>
      </h1>
      <button ref={buttonRef} className="border border-white text-white px-8 py-4 hover:bg-white hover:text-black transition-colors">
        Work with us
      </button>
    </section>
  )
}
