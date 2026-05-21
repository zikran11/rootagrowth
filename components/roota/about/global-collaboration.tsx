'use client'

import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

import teamworkAnim from '@/public/lottie/teamwork.json'
import { translations } from '@/lib/translation'

type Item =
  | {
    type: 'lottie'
    animation: any
    reverse: boolean
  }
  | {
    type: 'gif'
    animation: string
    reverse: boolean
  }

export default function GlobalCollaboration() {
  const [mounted, setMounted] = useState(false)

  const pathname = usePathname()
  const locale = pathname.split('/')[1] || 'en'

  const t =
    translations[locale as keyof typeof translations] ||
    translations.en

  useEffect(() => {
    setMounted(true)
  }, [])

  const items: Item[] = [
    {
      type: 'lottie',
      animation: teamworkAnim,
      reverse: false,
    },
    {
      type: 'gif',
      animation: '/programming.gif',
      reverse: true,
    },
    {
      type: 'gif',
      animation: '/timezone.gif',
      reverse: false,
    },
  ]

  if (!mounted) return null

  return (
    <section className="py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-28"
        >
          <div className="flex justify-center">
            <p className="text-xs tracking-[0.35em] uppercase text-orange-500 mb-4 px-5 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-xl shadow-black/20 w-fit text-center">
              {t.globalCollaboration.badge}
            </p>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-black mb-6">
            {t.globalCollaboration.title}
          </h2>

          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            {t.globalCollaboration.description}
          </p>
        </motion.div>

        {/* ITEMS */}
        <div className="space-y-40">

          {t.globalCollaboration.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col md:flex-row items-center gap-16 lg:gap-24 ${index === 1 ? 'md:flex-row-reverse' : ''
                }`}
            >

              {/* TEXT */}
              <div className="md:w-1/2">
                <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                  {item.description}
                </p>
              </div>

              {/* VISUAL */}
              <div className="md:w-1/2 flex justify-center items-center">
                {items[index].type === 'lottie' ? (
                  <Lottie
                    animationData={items[index].animation}
                    loop
                    className="w-[520px] h-[520px] md:w-[580px] md:h-[580px]"
                  />
                ) : (
                  <img
                    src={items[index].animation}
                    alt={item.title}
                    className="w-[520px] h-[520px] md:w-[580px] md:h-[580px] object-contain"
                  />
                )}
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}