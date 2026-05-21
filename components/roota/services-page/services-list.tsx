'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { usePathname } from 'next/navigation'

import { translations } from '@/lib/translation'

export default function ServicesList() {
  const pathname = usePathname()
  const locale = pathname.split('/')[1] || 'en'

  const t =
    translations[locale as keyof typeof translations] ||
    translations.en

  return (
    <section className="relative overflow-hidden bg-white py-28">

      {/* ANIMATED GLOW */}
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
          h-[300px]
          w-[700px]
          -translate-x-1/2
          bg-blue-500/10
          blur-[160px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-20 text-center"
        >


          {/* TITLE */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="
              mx-auto max-w-4xl
              text-3xl font-extrabold leading-[1.1]
              text-black sm:text-4xl md:text-5xl
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
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >

          {t.servicesList.services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 80,
                  scale: 0.92,
                  filter: 'blur(10px)',
                },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: 'blur(0px)',
                  transition: {
                    duration: 0.9,
                  },
                },
              }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="
                group overflow-hidden
                rounded-[32px]
                border border-blue-100
                bg-gradient-to-b from-blue-50 to-white
                shadow-[0_10px_50px_rgba(59,130,246,0.10)]
                transition-all duration-500
                hover:border-blue-300
                hover:shadow-[0_0_60px_rgba(59,130,246,0.18)]
              "
            >

              {/* GIF tetap dari original component */}
              <div className="relative h-[280px] overflow-hidden">
                <img
                  src={service.gif}
                  alt={service.title}
                  className="
    h-full w-full object-cover
    transition duration-700
    group-hover:scale-105
  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent" />

                <div className="
                  absolute right-6 top-6
                  flex h-12 w-12 items-center justify-center
                  rounded-full border border-white/20
                  bg-white/90 backdrop-blur-md
                  group-hover:bg-blue-500
                ">
                  <ArrowUpRight
                    size={20}
                    className="text-blue-600 group-hover:text-white"
                  />
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-8">

                <h3 className="text-2xl font-bold text-black">
                  {service.title}
                </h3>

                <div className="
                  max-h-0 overflow-hidden opacity-0
                  transition-all duration-500
                  group-hover:mt-6
                  group-hover:max-h-[500px]
                  group-hover:opacity-100
                ">

                  <p className="leading-relaxed text-gray-600">
                    {service.description}
                  </p>

                  <div className="mt-6 space-y-4 border-t border-blue-100 pt-6">
                    {service.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 text-sm text-gray-700"
                      >
                        <div className="h-2 w-2 rounded-full bg-blue-500" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <p className="mt-6 text-sm font-medium text-blue-600">
                    👉 {service.bottomText}
                  </p>

                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}