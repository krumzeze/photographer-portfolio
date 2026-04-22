import TransitionLink from './TransitionLink'
import { aboutCopy } from './siteData'

export default function About() {
  return (
    <section id="about" className="bg-black md:h-[100dvh] md:min-h-0">
      <div className="mx-auto grid min-h-[100svh] max-w-[1900px] content-center gap-10 px-6 pb-6 pt-[6.4rem] md:h-full md:min-h-0 md:px-11 md:pb-8 md:pt-[6.9rem] xl:grid-cols-[180px_minmax(0,1fr)] xl:px-[4.75rem] 2xl:px-[7.75rem]">
        <p className="pt-2 text-sm font-semibold uppercase tracking-[0.16em] text-white/[0.72] md:pt-0">About</p>

        <div className="justify-self-end">
          <p className="max-w-[1200px] text-[clamp(3rem,5.3vw,6.15rem)] font-semibold leading-[0.92] tracking-[-0.07em] text-white/[0.4]">
            <span className="text-white/[0.54]">Creative Hamd:</span> {aboutCopy}
          </p>

          <TransitionLink
            href="/services"
            className="mt-8 inline-flex rounded-full border border-white/[0.14] px-6 py-3 text-sm font-semibold text-white/[0.78] hover:border-white/[0.34] hover:text-white"
          >
            Learn more
          </TransitionLink>
        </div>
      </div>
    </section>
  )
}
