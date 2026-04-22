import type { Metadata } from 'next'
import Capabilities from '../../components/Capabilities'

export const metadata: Metadata = {
  title: 'Services | Creative Hamd',
  description: 'Creative Hamd services across creative, production, post, podcasts, and motion.',
}

export default function ServicesPage() {
  return (
    <main className="bg-black">
      <Capabilities />
    </main>
  )
}
