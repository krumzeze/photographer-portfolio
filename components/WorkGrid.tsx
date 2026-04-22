'use client'

import { motion } from 'framer-motion'
import { workProjects } from './siteData'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: 'blur(12px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function WorkGrid() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
      className="grid gap-px bg-black/10 sm:grid-cols-2 xl:grid-cols-4"
    >
      {workProjects.map((project) => (
        <motion.a
          key={project.id}
          variants={itemVariants}
          href="/contact"
          className="group relative isolate overflow-hidden bg-black text-white"
        >
          <img
            src={project.image}
            alt={`${project.client} campaign still`}
            className="aspect-[1.36/1] w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12)_0%,rgba(0,0,0,0.32)_42%,rgba(0,0,0,0.72)_100%)] transition-opacity duration-500 group-hover:opacity-95" />

          <div className="absolute inset-x-5 bottom-5 top-5 flex flex-col justify-between md:inset-x-6 md:bottom-6 md:top-6">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-white/60">
              {project.category}
            </p>

            <div>
              <p className="max-w-[10ch] text-[clamp(2rem,2.4vw,2.9rem)] font-semibold leading-[0.92] tracking-[-0.07em] text-white">
                {project.client}
              </p>
              <p className="mt-4 max-w-[28ch] translate-y-3 text-sm leading-6 text-white/70 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {project.title}
              </p>
            </div>
          </div>
        </motion.a>
      ))}
    </motion.div>
  )
}
