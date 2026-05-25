'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { usePathname } from 'next/navigation'

import { translations } from '@/lib/translation'

export default function ServicesList() {
  const [openCard, setOpenCard] = useState<number | null>(null)

  const pathname = usePathname()
  const locale = pathname.split('/')[1] || 'en'

  const t =
    translations[locale as keyof typeof translations] ||
    translations.en

  const toggleCard = (index: number) => {
    if (window.innerWidth >= 1024) return

    setOpenCard((prev) =>
      prev === index ? null : index
    )
  }

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-24 lg:py-28">

      {/* GLOW */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -20, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="
          absolute
          left-1/2
          top-0
          h-[180px]
          w-[320px]
          sm:h-[220px]
          sm:w-[450px]
          md:h-[300px]
          md:w-[700px]
          -translate-x-1/2
          bg-[#2F5AA6]/10
          blur-[120px]
          md:blur-[160px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="mb-12 md:mb-20 text-center"
        >
          <motion.h2
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
              delay: 0.1,
            }}
            viewport={{
              once: true,
            }}
            className="
              mx-auto
              max-w-4xl
              text-2xl
              sm:text-3xl
              md:text-4xl
              lg:text-5xl
              font-extrabold
              leading-[1.1]
              text-black
            "
          >
            {t.servicesList.title1}
            <br />
          </motion.h2>
        </motion.div>

        {/* CARDS */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
            md:gap-8
          "
        >

          {t.servicesList.services.map(
            (service, index) => {

              const isOpen =
                openCard === index

              return (

                <motion.div
                  key={index}
                  onClick={() =>
                    toggleCard(index)
                  }
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 80,
                      scale: 0.92,
                      filter:
                        'blur(10px)',
                    },

                    show: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      filter:
                        'blur(0px)',

                      transition: {
                        duration: 0.9,
                      },
                    },
                  }}
                  whileHover={{
                    y: -12,
                    scale: 1.02,
                  }}
                  className="
                    group
                    cursor-pointer
                    overflow-hidden
                    rounded-[24px]
                    md:rounded-[32px]
                    border
                    border-[#2F5AA6]/10
                    bg-gradient-to-b
                    from-[#2F5AA6]/5
                    to-white
                    shadow-[0_10px_50px_rgba(47,90,166,0.10)]
                    transition-all
                    duration-500
                    hover:border-[#2F5AA6]/30
                    hover:shadow-[0_0_60px_rgba(47,90,166,0.18)]
                  "
                >

                  {/* IMAGE */}
                  <div className="relative h-[220px] sm:h-[240px] md:h-[280px] overflow-hidden">

                    <img
                      src={service.gif}
                      alt={service.title}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition
                        duration-700
                        group-hover:scale-105
                      "
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#2F5AA6]/25 to-transparent" />

                    <div
  className="
    absolute
    right-4
    top-4
    md:right-6
    md:top-6
    flex
    h-10
    w-10
    md:h-12
    md:w-12
    items-center
    justify-center
    rounded-full

    border
    border-[#2F5AA6]/20

    bg-[#2F5AA6]

    shadow-lg
    shadow-[#2F5AA6]/30

    backdrop-blur-md

    transition-all
    duration-300

    group-hover:scale-110
    group-hover:bg-[#274B8A]
  "
>

  <ArrowUpRight
    size={18}
    className="
      text-white
    "
  />

</div>

                  </div>

                  {/* CONTENT */}
                  <div className="p-5 sm:p-6 md:p-8">

                    <h3 className="text-xl md:text-2xl font-bold text-black">
                      {service.title}
                    </h3>

                    <div
  className={`
    overflow-hidden
    transition-all
    duration-500

    ${
      isOpen
        ? 'max-h-[800px] opacity-100 mt-6'
        : 'max-h-0 opacity-0'
    }

    lg:max-h-0
    lg:opacity-0
    lg:mt-0

    lg:group-hover:mt-6
    lg:group-hover:max-h-[800px]
    lg:group-hover:opacity-100
  `}
>

                      <p className="leading-relaxed text-sm md:text-base text-gray-600">
                        {service.description}
                      </p>

                      <div className="mt-6 space-y-3 md:space-y-4 border-t border-[#2F5AA6]/10 pt-6">

                        {service.features.map(
                          (
                            feature,
                            i
                          ) => (

                            <div
                              key={i}
                              className="
                                flex
                                items-center
                                gap-3
                                text-sm
                                text-gray-700
                              "
                            >

                              <div className="h-2 w-2 rounded-full bg-[#2F5AA6]" />

                              {feature}

                            </div>
                          )
                        )}

                      </div>

                      <p className="mt-6 font-medium text-[#2F5AA6]">
                        {service.bottomText}
                      </p>

                    </div>

                  </div>

                </motion.div>

              )
            }
          )}

        </motion.div>

      </div>

    </section>
  )
}