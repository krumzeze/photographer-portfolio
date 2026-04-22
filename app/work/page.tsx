import type { Metadata } from 'next'
import WorkGrid from '../../components/WorkGrid'
import { workedWithWordmarks } from '../../components/siteData'

export const metadata: Metadata = {
  title: 'Work | Creative Hamd',
  description: 'Selected campaigns, product stories, and performance-focused brand work from Creative Hamd.',
}

export default function WorkPage() {
  return (
    <main className="bg-[#f3efe8] pt-[5.5rem] text-[#12110f]">
      <section className="pl-6 pr-7 pb-6 pt-6 md:pl-11 md:pr-12 md:pb-8 md:pt-8 xl:pl-[4.75rem] xl:pr-20 2xl:pl-[7.75rem] 2xl:pr-32">
        <div className="mx-auto max-w-[1900px]">
          <WorkGrid />
        </div>
      </section>

      <section className="pl-6 pr-7 py-24 md:pl-11 md:pr-12 md:py-28 xl:pl-[4.75rem] xl:pr-20 2xl:pl-[7.75rem] 2xl:pr-32">
        <div className="mx-auto max-w-[1900px]">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.22em] text-black/42">Worked With</p>

          <div className="mt-14 grid gap-x-10 gap-y-8 text-center text-black/30 sm:grid-cols-2 lg:grid-cols-5">
            {workedWithWordmarks.map((brand) => (
              <p
                key={brand.label}
                className={`font-semibold transition-colors duration-300 hover:text-black/48 ${brand.className}`}
              >
                {brand.label}
              </p>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
