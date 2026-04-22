'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { ROUTE_TRANSITION_START_EVENT } from './routeTransitionEvents'

export default function RouteTransitionOverlay() {
  const pathname = usePathname()
  const previousPathname = useRef(pathname)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleTransitionStart = () => {
      setIsVisible(true)
    }

    window.addEventListener(ROUTE_TRANSITION_START_EVENT, handleTransitionStart)

    return () => {
      window.removeEventListener(ROUTE_TRANSITION_START_EVENT, handleTransitionStart)
    }
  }, [])

  useEffect(() => {
    if (previousPathname.current === pathname) {
      return
    }

    previousPathname.current = pathname

    if (!isVisible) {
      return
    }

    const timeoutId = window.setTimeout(() => {
      setIsVisible(false)
    }, 140)

    return () => window.clearTimeout(timeoutId)
  }, [isVisible, pathname])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="route-transition-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none fixed inset-0 z-[55] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_42%),linear-gradient(180deg,rgba(0,0,0,0.28)_0%,rgba(0,0,0,0.16)_38%,rgba(0,0,0,0.34)_100%)] backdrop-blur-[2px]"
        />
      )}
    </AnimatePresence>
  )
}
