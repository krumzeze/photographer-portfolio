import type { Metadata } from 'next'
import CTA from '../../components/CTA'

export const metadata: Metadata = {
  title: 'Contact | Creative Hamd',
  description: 'Start a project with Creative Hamd.',
}

export default function ContactPage() {
  return (
    <main className="bg-black">
      <CTA />
    </main>
  )
}
