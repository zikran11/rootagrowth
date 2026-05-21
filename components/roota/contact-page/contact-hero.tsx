'use client'

import { motion } from 'framer-motion'

export default function ContactHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <p className="text-sm font-medium text-orange-600 mb-4">
            Contact
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-stone-900 leading-[1.1] tracking-tight mb-6">
            Let&apos;s Build Something{' '}
            <span className="text-stone-400">Great Together</span>
          </h1>

          <p className="text-base md:text-lg text-stone-500 leading-relaxed max-w-xl">
            Whether you need custom development, dedicated developers, scalable remote teams, or AI automation solutions, Roota helps businesses grow through reliable technology and long-term collaboration.
          </p>
        </motion.div>

      </div>
    </section>
  )
}