'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

import { translations } from '@/lib/translation'

export default function CompanyStory() {
  const pathname = usePathname()

  const locale = pathname.split('/')[1] || 'en'

  const t =
    translations[locale as keyof typeof translations] ||
    translations.en

  return (
    <section className="py-20 md:py-28 lg:py-32 bg-white">

      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            margin: '-50px',
          }}
          transition={{
            duration: 0.6,
            ease: 'easeOut',
          }}
          className="mb-12 md:mb-20"
        >

          <p className="text-sm md:text-base font-medium text-orange-600 mb-3">
            {t.companyStory.badge}
          </p>

          <h2
            className="
              text-3xl
              sm:text-4xl
              lg:text-5xl

              font-bold
              text-stone-900
              tracking-tight
              leading-tight
            "
          >
            {t.companyStory.title1}{' '}

            <span className="text-stone-400">
              {t.companyStory.title2}
            </span>
          </h2>

        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
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
            max-w-full
            md:max-w-4xl
          "
        >

          <div className="space-y-5 md:space-y-6">

            {t.companyStory.paragraphs.map(
              (
                text: string,
                i: number
              ) => (
                <p
                  key={i}
                  className="
                    text-base
                    md:text-lg

                    text-stone-600

                    leading-8
                    md:leading-relaxed

                    text-left
                    md:text-justify
                  "
                >
                  {text}
                </p>
              )
            )}

          </div>

        </motion.div>

      </div>

    </section>
  )
}