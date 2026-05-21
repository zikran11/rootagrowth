'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { usePathname } from 'next/navigation'

import { translations } from '@/lib/translation'

export default function CareersOpenings() {
  const [activeCard, setActiveCard] = useState<
    number | null
  >(null)

  const pathname = usePathname()

  const locale =
    pathname.split('/')[1] || 'en'

  const t =
    translations[
      locale as keyof typeof translations
    ] || translations.en

  const openings =
    t.careersOpenings.jobs

  return (
    <section className="bg-white py-20 md:py-28 lg:py-32">

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

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
          className="mb-14 md:mb-20 text-center"
        >

          <h2
            className="
            mb-5

            text-3xl
            sm:text-4xl
            lg:text-5xl

            font-bold

            leading-tight
            tracking-tight

            text-black
          "
          >

            {t.careersOpenings.title}

          </h2>

          <p
            className="
            mx-auto

            max-w-2xl

            text-base
            md:text-lg

            leading-relaxed

            text-neutral-500
          "
          >

            {
              t.careersOpenings
                .description
            }

          </p>

        </motion.div>

        {/* CARDS */}
        <div className="space-y-4 md:space-y-5">

          {openings.map(
            (job, index) => {
              const active =
                activeCard === index

              return (
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
                    delay:
                      index * 0.08,
                  }}
                  viewport={{
                    once: true,
                  }}

                  whileHover={{
                    y: -5,
                  }}

                  whileTap={{
                    scale: 0.985,
                  }}

                  animate={
                    active
                      ? {
                          y: -5,
                        }
                      : {
                          y: 0,
                        }
                  }

                  onClick={() =>
                    setActiveCard(
                      active
                        ? null
                        : index
                    )
                  }

                  className={`
                    group

                    cursor-pointer

                    rounded-2xl
                    md:rounded-3xl

                    border

                    bg-white

                    p-5
                    md:p-8

                    shadow-[0_10px_40px_rgba(0,0,0,0.04)]

                    transition-all
                    duration-300

                    ${
                      active
                        ? `
                        border-orange-200

                        shadow-[0_15px_60px_rgba(0,0,0,0.08)]
                      `
                        : `
                        border-neutral-200

                        hover:border-orange-200

                        hover:shadow-[0_15px_60px_rgba(0,0,0,0.08)]
                      `
                    }
                  `}
                >

                  <div
                    className="
                    flex

                    flex-col
                    md:flex-row

                    md:items-center

                    justify-between

                    gap-5
                    md:gap-6
                  "
                  >

                    {/* LEFT */}
                    <div className="flex-1">

                      <h3
                        className={`
                          mb-3

                          text-lg
                          md:text-xl

                          font-semibold

                          transition-colors
                          duration-300

                          ${
                            active
                              ? 'text-orange-600'
                              : `
                              text-black

                              group-hover:text-orange-600
                            `
                          }
                        `}
                      >

                        {job.title}

                      </h3>

                      <p
                        className="
                        max-w-3xl

                        text-sm
                        md:text-base

                        leading-relaxed

                        text-neutral-600
                      "
                      >

                        {
                          job.description
                        }

                      </p>

                    </div>

                    {/* ICON */}
                    <div
                      className={`
                        flex

                        h-11
                        w-11

                        md:h-12
                        md:w-12

                        shrink-0

                        items-center
                        justify-center

                        rounded-full

                        transition-all
                        duration-300

                        ${
                          active
                            ? `
                            bg-blue-100
                            scale-110
                          `
                            : `
                            bg-blue-50

                            group-hover:scale-110
                          `
                        }
                      `}
                    >

                      <ArrowRight
                        size={20}
                        className="text-blue-600"
                      />

                    </div>

                  </div>

                </motion.div>
              )
            }
          )}

        </div>

      </div>

    </section>
  )
}