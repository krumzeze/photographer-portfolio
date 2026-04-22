import TransitionLink from './TransitionLink'
import { portfolioItems } from './siteData'

export default function Portfolio() {
  return (
    <section id="work" className="bg-black pl-6 pr-7 pb-24 pt-8 md:pl-11 md:pr-12 md:pb-32 xl:pl-[4.75rem] xl:pr-20 2xl:pl-[7.75rem] 2xl:pr-32">
      <div className="mx-auto max-w-[1900px]">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-[clamp(2.8rem,4.4vw,5.4rem)] font-semibold leading-none tracking-[-0.06em] text-white">
            Latest work
          </h2>

          <TransitionLink href="/work" className="text-sm font-semibold text-white/[0.78] hover:text-white">
            View All
          </TransitionLink>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-12 md:auto-rows-[170px] xl:auto-rows-[205px]">
          {portfolioItems.map((item) => (
            <TransitionLink
              key={item.id}
              href="/work"
              className={`group relative isolate min-h-[20rem] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] sm:min-h-[25rem] ${item.className}`}
            >
              <img
                src={item.image}
                alt={`${item.client} ${item.title}`}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/18 to-transparent" />

              <div className="relative flex h-full items-end p-5 md:p-6">
                <p className="text-lg leading-tight text-white/90 md:text-[1.75rem] md:tracking-[-0.04em]">
                  <span className="font-semibold text-white">{item.client}</span>{' '}
                  <span className="text-white/[0.62]">{item.title}</span>
                </p>
              </div>
            </TransitionLink>
          ))}
        </div>
      </div>
    </section>
  )
}
