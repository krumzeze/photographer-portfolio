'use client'

import Link, { type LinkProps } from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { type MouseEvent, type ReactNode } from 'react'
import { ROUTE_TRANSITION_START_EVENT } from './routeTransitionEvents'

type TransitionLinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> &
  LinkProps & {
    children: ReactNode
    href: string
  }

function isPlainLeftClick(event: MouseEvent<HTMLAnchorElement>) {
  return !(
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  )
}

function easeInOutCubic(value: number) {
  return value < 0.5 ? 4 * value * value * value : 1 - Math.pow(-2 * value + 2, 3) / 2
}

function wait(milliseconds: number) {
  return new Promise<void>((resolve) => {
    window.setTimeout(resolve, milliseconds)
  })
}

function animateScrollToTop(duration = 980) {
  if (typeof window === 'undefined') {
    return Promise.resolve()
  }

  const startY = window.scrollY

  if (startY < 8) {
    window.scrollTo(0, 0)
    return Promise.resolve()
  }

  return new Promise<void>((resolve) => {
    const startTime = window.performance.now()

    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = easeInOutCubic(progress)
      window.scrollTo(0, startY * (1 - eased))

      if (progress < 1) {
        window.requestAnimationFrame(tick)
        return
      }

      window.scrollTo(0, 0)
      resolve()
    }

    window.requestAnimationFrame(tick)
  })
}

function parseHref(href: string) {
  const [path, hash] = href.split('#')

  return {
    path: path || '',
    hash: hash ? `#${hash}` : '',
  }
}

export default function TransitionLink({
  href,
  children,
  onClick,
  prefetch,
  replace,
  scroll,
  ...rest
}: TransitionLinkProps) {
  const router = useRouter()
  const pathname = usePathname()
  const { path, hash } = parseHref(href)
  const isSamePageHash = href.startsWith('#')
  const isPlainRoute = !isSamePageHash && path !== '' && hash === ''
  const targetPath = path === '' ? pathname : path
  const shouldSmoothRoute = isPlainRoute && targetPath !== pathname

  const handleClick = async (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event)

    if (!isPlainLeftClick(event) || !shouldSmoothRoute) {
      return
    }

    event.preventDefault()
    window.dispatchEvent(new CustomEvent(ROUTE_TRANSITION_START_EVENT))

    if (window.scrollY < 8) {
      await wait(150)
    } else {
      await animateScrollToTop()
    }

    router.push(href, { scroll: false })
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      prefetch={prefetch}
      replace={replace}
      scroll={shouldSmoothRoute ? false : scroll}
      {...rest}
    >
      {children}
    </Link>
  )
}
