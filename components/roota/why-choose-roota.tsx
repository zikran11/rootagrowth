'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

import { translations } from '@/lib/translation'

const images = [
  '/gambar1.png',
  '/cuan.png',
  '/meeting.png',
]

export default function WhyChooseRoota() {
  const pathname = usePathname()

  const locale = pathname.split('/')[1] || 'en'

  const t =
    translations[locale as keyof typeof translations] ||
    translations.en

  const [openCard, setOpenCard] = useState<number | null>(null)

  const toggleCard = (index: number) => {
    setOpenCard(openCard === index ? null : index)
  }

  return (
    <section className="relative overflow-hidden bg-white py-24">

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >

          <h2 className="text-[34px] md:text-[47px] leading-[1.1] font-bold tracking-[-0.03em] text-orange-500">
            {t.whyChoose.title}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base text-black/60 md:text-xl">
            {t.whyChoose.description}
          </p>

        </motion.div>

        {/* CARDS */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">

          {t.whyChoose.cards.map((card, index) => {
            const isOpen = openCard === index

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                onClick={() => toggleCard(index)}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-black/10
                  h-[430px]
                  shadow-lg
                  cursor-pointer
                "
              >

                {/* IMAGE */}
                <img
                  src={images[index]}
                  alt={card.title}
                  className="
                    absolute inset-0
                    h-full w-full
                    object-cover
                    transition-transform duration-700
                    group-hover:scale-110
                  "
                />

                {/* OVERLAY */}
                <div
                  className={`
                    absolute inset-0
                    transition duration-500

                    ${
                      isOpen
                        ? 'bg-black/45'
                        : 'bg-black/20 md:group-hover:bg-black/40'
                    }
                  `}
                />

                {/* CONTENT */}
                <div className="absolute inset-0 flex flex-col justify-end p-7">

                  {/* TITLE */}
                  <h3 className="mb-3 text-2xl font-semibold text-white">
                    {card.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <div className="overflow-hidden">

                    <p
                      className={`
                        text-base leading-relaxed text-white/80
                        transition-all duration-500

                        ${
                          isOpen
                            ? 'opacity-100 max-h-[200px]'
                            : `
                              opacity-100 max-h-[200px]
                              md:opacity-0 md:max-h-0
                              md:group-hover:opacity-100
                              md:group-hover:max-h-[200px]
                            `
                        }
                      `}
                    >
                      {card.description}
                    </p>

                  </div>

                </div>

              </motion.div>
            )
          })}

        </div>

      </div>
    </section>
  )
}