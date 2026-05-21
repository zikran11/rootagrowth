'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

import { translations } from '@/lib/translation'

export default function WhyIndonesia() {
  const pathname = usePathname()

  const locale = pathname.split('/')[1] || 'en'

  const t =
    translations[locale as keyof typeof translations] ||
    translations.en

  return (
    <section id="indonesia" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* HEADER + DESKRIPSI */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-16 md:mb-20 text-center"
        >
          <p className="text-sm font-medium text-orange-600 mb-3">
            {t.whyIndonesia.badge}
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight mb-5">
            {t.whyIndonesia.title}
          </h2>

          <p className="mx-auto text-base md:text-lg text-stone-500 max-w-2xl leading-relaxed">            {t.whyIndonesia.description}
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">

          {/* LEFT: 3 Advantage Cards */}
          <div className="space-y-4">

            {t.whyIndonesia.advantages.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: 'easeOut'
                }}
                className="
                  group
                  p-5
                  rounded-xl
                  bg-stone-50
                  border
                  border-stone-200
                  hover:border-orange-300/50
                  transition-colors
                  duration-300
                "
              >

                <h3 className="font-semibold text-stone-900 text-sm mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-stone-500 leading-relaxed">
                  {item.description}
                </p>

              </motion.div>
            ))}
          </div>

          {/* RIGHT: Image + Quote Overlay */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: 'easeOut'
            }}
            className="
              relative
              rounded-2xl
              overflow-hidden
              aspect-[4/5]
              lg:aspect-auto
              lg:h-full
              min-h-[480px]
            "
          >

            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Indonesian tech team"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">

              <div className="flex items-center gap-2 text-xs font-mono text-stone-400">
                <span>{t.whyIndonesia.direction}</span>

                <span className="text-orange-400">→</span>

                <span>{t.whyIndonesia.execution}</span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}