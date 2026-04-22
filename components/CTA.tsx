import ContactForm from './ContactForm'
import { contactEmail, ctaBackground } from './siteData'

export default function CTA() {
  return (
    <section id="contact" className="relative isolate min-h-[100svh] overflow-hidden bg-black md:h-[100dvh] md:min-h-0">
      <img
        src={ctaBackground}
        alt=""
        className="absolute inset-0 h-full w-full object-cover brightness-[0.34] saturate-[0.86]"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.12),transparent_24%),linear-gradient(110deg,rgba(0,0,0,0.84)_0%,rgba(0,0,0,0.52)_42%,rgba(0,0,0,0.88)_100%)]" />

      <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-[1900px] items-center gap-10 px-6 pb-6 pt-[6.4rem] md:h-full md:min-h-0 md:px-11 md:pb-8 md:pt-[6.9rem] xl:grid-cols-[minmax(0,1fr)_minmax(22rem,31rem)] xl:gap-8 xl:px-[4.75rem] 2xl:px-[7.75rem]">
        <div className="max-w-[760px]">
          <p className="inline-flex rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-white/[0.62] backdrop-blur">
            Contact
          </p>

          <h2 className="mt-5 text-[clamp(3.1rem,5.7vw,6.4rem)] font-semibold leading-[0.9] tracking-[-0.075em] text-white/[0.88]">
            Bring the brief. We&apos;ll shape the obsession.
          </h2>

          <p className="mt-5 max-w-[39rem] text-base leading-7 text-white/[0.62] md:text-lg">
            If you&apos;re building a launch, campaign, product story, or a world people should want to step into,
            send us the essentials here. The form is tuned to feel clean, fast, and on-brand with the rest of the site.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-5 backdrop-blur">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-white/[0.45]">
                Email
              </p>
              <a
                href={`mailto:${contactEmail}`}
                className="mt-3 block text-lg font-semibold tracking-[-0.04em] text-white/[0.86] hover:text-white"
              >
                {contactEmail}
              </a>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-5 backdrop-blur">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-white/[0.45]">
                Pace
              </p>
              <p className="mt-3 text-lg font-semibold tracking-[-0.04em] text-white/[0.86]">
                Usually back within 48 hours.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:w-full xl:max-w-[31rem] xl:justify-self-end">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
