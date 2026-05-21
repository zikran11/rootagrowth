'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

import { translations } from '@/lib/translation'

const images = [
  '/rapat.png',
  '/planning.png',
  '/coding.png',
  '/monitoring.png',
]

export default function HowItWorks() {
  const pathname = usePathname()

  const locale = pathname.split('/')[1] || 'en'

  const t =
    translations[locale as keyof typeof translations] ||
    translations.en

  return (
    <section className="relative overflow-hidden bg-white py-24">

      {/* GLOW */}
      <div className="absolute left-1/2 top-0 h-[300px] w-[700px] -translate-x-1/2 bg-blue-500/10 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >

          {/* GLASS BADGE */}
          <div className="mb-6 flex justify-center">
            <div
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                border
                border-white/30
                bg-white/20
                px-6
                py-3
                backdrop-blur-xl
                shadow-[0_8px_32px_rgba(31,38,135,0.12)]
              "
            >
              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.3em]
                  text-orange-600
                  md:text-sm
                "
              >
                {t.howItWorks.badge}
              </p>
            </div>
          </div>

          {/* TITLE */}
          <h2 className="mx-auto max-w-4xl text-3xl font-black leading-tight text-black sm:text-4xl md:text-5xl">
            {t.howItWorks.title1}
            <br />
            {t.howItWorks.title2}
          </h2>
        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">

          {t.howItWorks.steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-blue-100
                bg-gradient-to-b
                from-blue-50
                to-white
                p-8
                shadow-[0_10px_50px_rgba(59,130,246,0.10)]
                transition-all
                duration-500
                hover:border-blue-300
                hover:shadow-[0_0_60px_rgba(59,130,246,0.16)]
              "
            >

              {/* IMAGE */}
              <div className="relative mb-8 overflow-hidden rounded-2xl">

                <img
                  src={images[index]}
                  alt={step.title}
                  className="
                    h-[220px]
                    w-full
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-105
                  "
                />
              </div>

              {/* STEP */}
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-blue-500">
                {step.step}
              </p>

              {/* TITLE */}
              <h3 className="text-3xl font-black text-black">
                {step.title}
              </h3>

              {/* DESCRIPTION */}
              <div
                className="
                  max-h-0
                  overflow-hidden
                  opacity-0
                  transition-all
                  duration-500
                  group-hover:mt-6
                  group-hover:max-h-[500px]
                  group-hover:opacity-100
                "
              >
                <p className="leading-relaxed text-gray-600">
                  {step.description}
                </p>
              </div>

              {/* BLUE GLOW */}
              <div
                className="
                  absolute
                  -right-20
                  -top-20
                  h-40
                  w-40
                  rounded-full
                  bg-blue-500/10
                  blur-3xl
                "
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}