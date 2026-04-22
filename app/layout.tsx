import type { Metadata } from 'next'
import './globals.css'
import Header from '../components/Header'
import RouteTransitionOverlay from '../components/RouteTransitionOverlay'

export const metadata: Metadata = {
  title: 'Creative Hamd',
  description: 'Creative Hamd builds strategy, production, post, podcasts, and motion for ambitious brands.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <RouteTransitionOverlay />
      </body>
    </html>
  )
}
