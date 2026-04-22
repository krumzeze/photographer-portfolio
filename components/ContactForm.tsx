'use client'

import { type ChangeEvent, type FormEvent, useState } from 'react'
import { contactEmail } from './siteData'

const budgetOptions = [
  'Under $5K',
  '$5K - $10K',
  '$10K - $25K',
  '$25K - $50K',
  '$50K+',
] as const

const initialFormData = {
  brandName: '',
  contactName: '',
  email: '',
  phone: '',
  webSocial: '',
  budget: '',
  message: '',
}

type FormData = typeof initialFormData

const fieldClassName =
  'w-full rounded-[1.5rem] border border-white/10 bg-white/[0.06] px-5 py-4 text-[1rem] text-white outline-none shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur placeholder:text-white/38 transition focus:border-white/20 focus:bg-white/[0.1] focus:ring-2 focus:ring-white/10'

function buildMailtoUrl(formData: FormData) {
  const subject = formData.brandName.trim()
    ? `Project inquiry from ${formData.brandName.trim()}`
    : 'Project inquiry'

  const body = [
    `Brand Name: ${formData.brandName || '-'}`,
    `Contact Name: ${formData.contactName || '-'}`,
    `Email: ${formData.email || '-'}`,
    `Phone: ${formData.phone || '-'}`,
    `Web/Social: ${formData.webSocial || '-'}`,
    `Estimated Budget Range: ${formData.budget || '-'}`,
    '',
    'Message:',
    formData.message || '-',
  ].join('\n')

  return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData)

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target
    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    window.location.assign(buildMailtoUrl(formData))
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/[0.64] p-5 shadow-[0_35px_90px_rgba(0,0,0,0.48)] backdrop-blur-2xl sm:p-6 xl:p-7"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_34%)] opacity-80" />
      <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

      <div className="relative z-10">
        <div className="mb-6">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-[#cbb892]/80">
            Project Brief
          </p>
          <h3 className="mt-3 text-[clamp(1.8rem,3vw,2.55rem)] font-semibold leading-[0.95] tracking-[-0.06em] text-white">
            Tell us what you&apos;re building.
          </h3>
          <p className="mt-3 max-w-[28rem] text-sm leading-6 text-white/[0.58]">
            Fill this out and we&apos;ll open a prefilled email draft so you can send the brief in one step.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="brandName" className="mb-2 block text-sm font-medium text-[#d6c4a0]/90">
              Brand Name
            </label>
            <input
              id="brandName"
              name="brandName"
              type="text"
              required
              value={formData.brandName}
              onChange={handleChange}
              placeholder="Nike"
              className={fieldClassName}
            />
          </div>

          <div>
            <label htmlFor="contactName" className="mb-2 block text-sm font-medium text-[#d6c4a0]/90">
              Contact Name
            </label>
            <input
              id="contactName"
              name="contactName"
              type="text"
              required
              value={formData.contactName}
              onChange={handleChange}
              placeholder="John Doe"
              className={fieldClassName}
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#d6c4a0]/90">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="jane@nike.com"
              className={fieldClassName}
            />
          </div>

          <div>
            <label htmlFor="phone" className="mb-2 block text-sm font-medium text-[#d6c4a0]/90">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="1234567980"
              className={fieldClassName}
            />
          </div>

          <div>
            <label htmlFor="webSocial" className="mb-2 block text-sm font-medium text-[#d6c4a0]/90">
              Web/Social
            </label>
            <input
              id="webSocial"
              name="webSocial"
              type="text"
              value={formData.webSocial}
              onChange={handleChange}
              placeholder="nike.com"
              className={fieldClassName}
            />
          </div>

          <div className="relative">
            <label htmlFor="budget" className="mb-2 block text-sm font-medium text-[#d6c4a0]/90">
              Estimated Budget Range
            </label>
            <select
              id="budget"
              name="budget"
              required
              value={formData.budget}
              onChange={handleChange}
              className={`${fieldClassName} contact-select appearance-none pr-14`}
            >
              <option value="">Select...</option>
              {budgetOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-5 top-[3.35rem] text-white/42">&#9662;</span>
          </div>

          <div className="md:col-span-2">
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-[#d6c4a0]/90">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Launch timing, deliverables, campaign goals, or anything else that helps us understand the ask."
              rows={4}
              className={`${fieldClassName} min-h-[8.5rem] resize-y rounded-[1.65rem]`}
            />
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            className="glow-button inline-flex items-center justify-center rounded-full border border-white/10 bg-white px-6 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-black hover:scale-[1.01] hover:bg-[#f2eee7]"
          >
            Send Inquiry
          </button>

          <p className="max-w-[18rem] text-sm leading-5 text-white/[0.45]">
            Direct inbox:
            {' '}
            <a href={`mailto:${contactEmail}`} className="text-white/[0.7] hover:text-white">
              {contactEmail}
            </a>
          </p>
        </div>
      </div>
    </form>
  )
}
