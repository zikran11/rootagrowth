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
    <section
      id="indonesia"
      className="bg-white py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">

        {/* HEADER + DESKRIPSI */}
        <motion.div
          initial={{
            opacity: 0,
            y: 16,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: '-50px',
          }}
          transition={{
            duration: 0.6,
            ease: 'easeOut',
          }}
          className="mb-16 text-center md:mb-20"
        >

          <p className="mb-3 text-sm font-medium text-orange-600">
            {t.whyIndonesia.badge}
          </p>

          <h2
            className="
              mb-5
              text-3xl
              font-bold
              tracking-tight
              text-stone-900
              md:text-4xl
              lg:text-5xl
            "
          >
            {t.whyIndonesia.title}
          </h2>

          <p
            className="
              mx-auto
              max-w-2xl
              text-base
              leading-relaxed
              text-stone-500
              md:text-lg
            "
          >
            {t.whyIndonesia.description}
          </p>

        </motion.div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2">

          {/* LEFT */}
          <div className="space-y-4">

            {t.whyIndonesia.advantages.map((item, i) => (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: '-30px',
                }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: 'easeOut',
                }}
                className="
                  group
                  rounded-xl
                  border
                  border-stone-200
                  bg-stone-50
                  p-5
                  transition-colors
                  duration-300
                  hover:border-orange-300/50
                "
              >

                <h3 className="mb-2 text-sm font-semibold text-stone-900">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-stone-500">
                  {item.description}
                </p>

              </motion.div>
            ))}

          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              y: 16,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: '-50px',
            }}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: 'easeOut',
            }}
            className="
              relative
              overflow-hidden
              rounded-2xl
              aspect-[4/5]
              lg:aspect-auto
              lg:h-full
              min-h-[320px]
              md:min-h-[420px]
              lg:min-h-[480px]
            "
          >

            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Indonesian tech team"
              loading="lazy"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
              "
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">

              <div
                className="
                  flex
                  flex-wrap
                  items-center
                  gap-2
                  text-xs
                  font-mono
                  text-stone-400
                "
              >

                <span>
                  {t.whyIndonesia.direction}
                </span>

                <span className="text-orange-400">
                  →
                </span>

                <span>
                  {t.whyIndonesia.execution}
                </span>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  )
}