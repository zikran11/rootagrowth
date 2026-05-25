'use client'

import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

import servicesAnim from '@/public/lottie/work.json'
import { translations } from '@/lib/translation'

export default function CareersHero() {
  const [mounted, setMounted] = useState(false)

  const pathname = usePathname()
  const locale = pathname.split('/')[1] || 'en'

  const t =
    translations[
      locale as keyof typeof translations
    ] || translations.en

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section
      className="
        relative

        min-h-screen

        flex
        items-center
        justify-center

        overflow-hidden

        bg-[#030817]

        px-5
      "
    >

      {/* BG GLOW */}
      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.14),transparent_45%)]
        "
      />

      <div
        className="
          relative

          w-full

          flex
          flex-col
          items-center
          justify-center
        "
      >

        {/* LOTTIE */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.92,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="
  relative

  flex
  items-center
  justify-center

  -translate-y-16
  md:-translate-y-24
"
        >

          <Lottie
            animationData={servicesAnim}
            loop
            initialSegment={[40, 120]}
            className="
  w-[360px]
  h-[360px]

  sm:w-[500px]
  sm:h-[500px]

  md:w-[760px]
  md:h-[760px]

  lg:w-[860px]
  lg:h-[860px]

  opacity-75
"
          />

          <div className="absolute inset-0 bg-black/15" />

          <div
            className="
              absolute

              w-[220px]
              h-[220px]

              md:w-[380px]
              md:h-[380px]

              bg-white/10

              blur-[120px]
            "
          />

        </motion.div>

        {/* TEXT */}
        <div
          className="
            relative

            z-20

            -mt-64
md:-mt-96
            text-center

            max-w-3xl

            mx-auto
          "
        >

          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="
              text-[30px]

              sm:text-[38px]

              md:text-[52px]

              font-bold

              leading-[1.05]

              tracking-[-0.05em]

              text-white
            "
          >

            {t.careersHero.title}

          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            className="
              mt-5

              mx-auto

              max-w-xl

              text-sm
              md:text-base

              leading-relaxed

              text-gray-400
            "
          >

            {t.careersHero.description}

          </motion.p>

        </div>

      </div>

      {/* BOTTOM FADE */}
      <div
        className="
          absolute

          bottom-0
          left-0

          h-24
          md:h-32

          w-full

          bg-gradient-to-t

          from-[#030817]

          to-transparent
        "
      />

    </section>
  )
}