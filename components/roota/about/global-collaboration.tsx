'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

import { translations } from '@/lib/translation'

type Item = {
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
      type: 'gif',
      animation: '/Collab (1).gif',
      reverse: false,
    },
    {
      type: 'gif',
      animation: '/working.gif',
      reverse: true,
    },
    {
      type: 'gif',
      animation: '/world.gif',
      reverse: false,
    },
  ]

  if (!mounted) return null

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24 lg:mb-28"
        >
          <div className="flex justify-center">
            <p className="text-xs tracking-[0.35em] uppercase text-orange-500 mb-4 px-5 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-xl shadow-black/20 w-fit text-center">
              {t.globalCollaboration.badge}
            </p>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
            {t.globalCollaboration.title}
          </h2>

          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t.globalCollaboration.description}
          </p>
        </motion.div>

        {/* ITEMS */}
        <div className="space-y-20 md:space-y-28 lg:space-y-40">

          {t.globalCollaboration.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`
                flex flex-col md:flex-row items-center
                gap-10 md:gap-16 lg:gap-24
                ${index === 1 ? 'md:flex-row-reverse' : ''}
              `}
            >

              {/* TEXT */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6">
                  {item.title}
                </h3>

                <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto md:mx-0">
                  {item.description}
                </p>
              </div>

              {/* VISUAL (GIF FIXED) */}
              <div className="w-full md:w-1/2 flex justify-center items-center">

                <motion.img
                  src={items[index].animation}
                  alt={item.title}
                  draggable={false}
                  animate={{
                    y: [0, -10, 0],
                    scale: [1, 1, 1], // ❌ penting: matikan scale biar tidak blur
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="
                    object-contain

                    w-[280px]
                    h-[280px]

                    sm:w-[320px]
                    sm:h-[320px]

                    md:w-[380px]
                    md:h-[380px]

                    lg:w-[450px]
                    lg:h-[450px] /* ✅ max mendekati 500px asli GIF */
                  "
                />

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}