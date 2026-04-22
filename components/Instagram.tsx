import { instagramCards } from './siteData'

export default function Instagram() {
  return (
    <section id="store" className="bg-black pl-6 pr-7 py-24 md:pl-11 md:pr-12 md:py-32 xl:pl-[4.75rem] xl:pr-20 2xl:pl-[7.75rem] 2xl:pr-32">
      <div className="mx-auto max-w-[1900px]">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-[clamp(2.8rem,4.4vw,5.2rem)] font-semibold leading-none tracking-[-0.06em] text-white">
            Follow us
          </h2>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-white/[0.78] hover:text-white"
          >
            Instagram
          </a>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
          {instagramCards.map((card) => (
            <a
              key={card.id}
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className={`group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] ${card.className}`}
            >
              {card.images.length === 1 ? (
                <>
                  <img
                    src={card.images[0].src}
                    alt={card.images[0].alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                </>
              ) : (
                <div
                  className="grid h-full gap-px bg-white/10"
                  style={{ gridTemplateRows: `repeat(${card.images.length}, minmax(0, 1fr))` }}
                >
                  {card.images.map((image) => (
                    <div key={image.src} className="relative overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              )}

              {card.label && (
                <p className="absolute bottom-5 left-5 right-5 text-lg font-semibold leading-tight tracking-[-0.04em] text-white">
                  {card.label}
                </p>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
