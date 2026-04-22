import { clientLogos, selectedClients } from './siteData'

export default function Clients() {
  const repeatedLogos = [...clientLogos, ...clientLogos]

  return (
    <section className="bg-black pl-6 pr-7 py-24 md:pl-11 md:pr-12 md:py-32 xl:pl-[4.75rem] xl:pr-20 2xl:pl-[7.75rem] 2xl:pr-32">
      <div className="mx-auto max-w-[1900px]">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/[0.72]">Selected Clients</p>

        <h2 className="mt-6 max-w-[1820px] text-[clamp(3rem,5.7vw,6.8rem)] font-semibold leading-[0.92] tracking-[-0.07em] text-white/[0.38]">
          {selectedClients.map((client, index) => (
            <span key={client}>
              {client}
              {index < selectedClients.length - 1 ? ', ' : ''}
            </span>
          ))}
        </h2>

        <div className="relative mt-16 overflow-hidden py-6">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-black to-transparent md:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-black to-transparent md:w-24" />

          <div className="client-marquee flex min-w-max items-center">
            {repeatedLogos.map((logo, index) => (
              <div
                key={`${logo.label}-${index}`}
                className={`mx-8 whitespace-nowrap font-semibold text-white/[0.92] ${logo.className}`}
              >
                {logo.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
