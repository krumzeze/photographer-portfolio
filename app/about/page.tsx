import type { Metadata } from 'next'
import AboutSection from '../../components/About'

export const metadata: Metadata = {
  title: 'About | Creative Hamd',
  description: 'Learn more about Creative Hamd and the kind of brand work the studio creates.',
}

export default function AboutPage() {
  return (
    <main className="bg-black">
      <AboutSection />
    </main>
  )
}
