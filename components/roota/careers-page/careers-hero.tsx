'use client'

import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

import servicesAnim from '@/public/lottie/recruitment.json'
import { translations } from '@/lib/translation'

export default function CareersHero() {
  const [mounted, setMounted] = useState(false)

  const pathname = usePathname()
  const locale = pathname.split('/')[1] || 'en'

  const t =
    translations[locale as keyof typeof translations] ||
    translations.en

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
      "
    >

      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.14),transparent_45%)]
        "
      />

      {/* HERO WRAPPER */}
      <div
        className="
          relative
          flex
          w-full
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
            -translate-y-8
            md:-translate-y-12
          "
        >
          <Lottie
            animationData={servicesAnim}
            loop
            className="
              h-[520px]
              w-[520px]
              opacity-75
              md:h-[720px]
              md:w-[720px]
            "
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/15" />

          {/* GLOW */}
          <div
            className="
              absolute
              h-[380px]
              w-[380px]
              bg-white/10
              blur-[120px]
            "
          />
        </motion.div>

        {/* TEXT */}
        <div
          className="
            absolute
            top-[74%]
            z-20
            w-full
            -translate-y-1/2
            px-6
            text-center
          "
        >

          {/* TITLE */}
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
              text-[26px]
              font-bold
              leading-[1]
              tracking-[-0.05em]
              text-white
              md:text-[44px]
            "
          >
            {t.careersHero.title}
          </motion.h1>

          {/* DESCRIPTION */}
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
              mx-auto
              mt-5
              max-w-xl
              text-[13px]
              leading-relaxed
              text-gray-400
              md:text-[15px]
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
          h-32
          w-full
          bg-gradient-to-t
          from-[#030817]
          to-transparent
        "
      />
    </section>
  )
}