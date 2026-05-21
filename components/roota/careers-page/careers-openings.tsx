'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { usePathname } from 'next/navigation'

import { translations } from '@/lib/translation'

export default function CareersOpenings() {
  const pathname = usePathname()
  const locale = pathname.split('/')[1] || 'en'

  const t =
    translations[locale as keyof typeof translations] ||
    translations.en

  const openings = t.careersOpenings.jobs

  return (
    <section className="bg-white py-32">

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        {/* HEADER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="mb-20 text-center"
        >

          {/* TITLE */}
          <h2
            className="
              mb-6
              text-4xl
              font-bold
              leading-tight
              tracking-tight
              text-black
              lg:text-5xl
            "
          >
            {t.careersOpenings.title}
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mx-auto
              max-w-2xl
              text-lg
              leading-relaxed
              text-neutral-500
            "
          >
            {t.careersOpenings.description}
          </p>
        </motion.div>

        {/* OPENINGS */}
        <div className="space-y-5">

          {openings.map((job, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -3,
              }}
              className="
                group
                cursor-pointer
                rounded-3xl
                border
                border-neutral-200
                bg-white
                p-8
                shadow-[0_10px_40px_rgba(0,0,0,0.04)]
                transition-all
                duration-300
                hover:border-orange-200
                hover:shadow-[0_15px_60px_rgba(0,0,0,0.08)]
              "
            >

              <div className="flex items-center justify-between gap-6">

                {/* LEFT */}
                <div className="flex-1">

                  {/* TITLE */}
                  <h3
                    className="
                      mb-3
                      text-xl
                      font-semibold
                      text-black
                      transition-colors
                      duration-300
                      group-hover:text-orange-600
                    "
                  >
                    {job.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p
                    className="
                      max-w-3xl
                      leading-relaxed
                      text-neutral-600
                    "
                  >
                    {job.description}
                  </p>
                </div>

                {/* ICON */}
                <div
                  className="
                    hidden
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    bg-blue-50
                    transition-all
                    duration-300
                    group-hover:scale-110
                    md:flex
                  "
                >
                  <ArrowRight
                    size={20}
                    className="text-blue-600"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}