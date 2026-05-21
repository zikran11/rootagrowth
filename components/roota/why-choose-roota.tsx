'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

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

  return (
    <section className="relative py-24 bg-white overflow-hidden">

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >

          <h2 className="text-[34px] md:text-[47px] leading-[1.1] font-bold tracking-[-0.03em] text-orange-500">
            {t.whyChoose.title}
          </h2>

          <p className="mt-6 text-base md:text-xl text-black/60 max-w-2xl mx-auto">
            {t.whyChoose.description}
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">

          {t.whyChoose.cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-[28px] border border-black/10 h-[430px] shadow-lg"
            >

              {/* IMAGE */}
              <img
                src={images[index]}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-500" />

              {/* CONTENT */}
              <div className="absolute inset-0 flex flex-col justify-end p-7">

                {/* TITLE */}
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {card.title}
                </h3>

                {/* DESCRIPTION */}
                <div className="overflow-hidden">
                  <p className="text-white/80 text-base leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-[200px] transition-all duration-500">
                    {card.description}
                  </p>
                </div>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}