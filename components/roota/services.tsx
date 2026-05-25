'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

import { translations } from '@/lib/translation'

const gifs = [
  '/app.gif',
  '/backend.gif',
  '/frontend.gif',
]

export default function Services() {
  const pathname = usePathname()

  const locale = pathname.split('/')[1] || 'en'

  const t =
    translations[locale as keyof typeof translations] ||
    translations.en

  const [openCard, setOpenCard] = useState<number | null>(null)

  return (
    <section className="relative overflow-hidden bg-white py-24">

      {/* GLOW */}
      <div className="absolute left-1/2 top-0 h-[300px] w-[700px] -translate-x-1/2 bg-[#2F5AA6]/10 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >

          {/* GLASS LABEL */}
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
                {t.servicesSection.badge}
              </p>
            </div>
          </div>

          {/* TITLE */}
          <h2 className="mx-auto max-w-3xl text-3xl font-extrabold leading-[1.1] text-black sm:text-4xl md:text-5xl">
            {t.servicesSection.title1}
            <br />
            {t.servicesSection.title2}
          </h2>

        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

          {t.servicesSection.services.map((service, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onClick={() =>
                setOpenCard(
                  openCard === index
                    ? null
                    : index
                )
              }
              className="
                group
                overflow-hidden
                rounded-[32px]
                border
                border-[#2F5AA6]/10
                bg-gradient-to-b
                from-blue-50
                to-white
                shadow-[0_10px_50px_rgba(47,90,166,0.10)]
                transition-all
                duration-500
                hover:border-[#2F5AA6]/30
                hover:shadow-[0_0_60px_rgba(47,90,166,0.18)]
                cursor-pointer
              "
            >

              {/* IMAGE */}
              <div className="relative h-[300px] overflow-hidden">

                <img
                  src={gifs[index]}
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

                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />

              </div>

              <div className="h-px w-full bg-gradient-to-r from-transparent via-[#2F5AA6]/20 to-transparent" />

              {/* CONTENT */}
              <div className="p-7">

                <div className="flex items-start justify-between gap-4">

                  <h3 className="text-2xl font-bold text-black">
                    {service.title}
                  </h3>

                  <div
  className="
    flex
    h-12
    w-12
    shrink-0
    items-center
    justify-center
    rounded-full

    border
    border-[#2F5AA6]/20

    bg-[#2F5AA6]

    shadow-lg
    shadow-[#2F5AA6]/30

    transition-all
    duration-300

    group-hover:scale-110
    group-hover:bg-[#274B8A]
  "
>
  <ArrowUpRight
    size={20}
    className="text-white"
  />
</div>

                </div>

                {/* MOBILE TAP + DESKTOP HOVER */}
                <div
                  className={`
                    overflow-hidden
                    transition-all
                    duration-500
                    
                    ${
                      openCard === index
                        ? `
                          mt-6
                          max-h-[800px]
                          opacity-100
                          lg:mt-0
                          lg:max-h-0
                          lg:opacity-0
                        `
                        : `
                          max-h-0
                          opacity-0
                        `
                    }

                    lg:group-hover:mt-6
                    lg:group-hover:max-h-[800px]
                    lg:group-hover:opacity-100
                  `}
                >

                  {/* DESCRIPTION */}
                  <p className="leading-relaxed text-gray-600">
                    {service.description}
                  </p>

                  {/* FEATURES */}
                  <div className="mt-6 space-y-3 border-t border-blue-100 pt-6">

                    {service.features.map((feature, i) => (
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
))}

                  </div>

                  {/* BOTTOM TEXT */}
                 <p className="mt-6 font-medium text-[#2F5AA6]">
  {service.bottomText}
</p>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

        {/* BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <Link href={`/${locale}/services`}>
            <button
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-[#2F5AA6]
                px-8
                py-4
                text-sm
                font-semibold
                text-white
                shadow-lg
                shadow-[#2F5AA6]/30
                transition-all
                duration-300
                hover:scale-105
                hover:bg-blue-700
              "
            >
              {t.servicesSection.button}

              <ArrowUpRight
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </button>
          </Link>
        </motion.div>

      </div>

    </section>
  )
}