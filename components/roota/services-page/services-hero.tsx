'use client'

import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

import servicesAnim from '@/public/lottie/team.json'
import { translations } from '@/lib/translation'

export default function ServicesHero() {
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
        relative min-h-screen
        flex items-center justify-center
        overflow-hidden
        bg-[#030817]
      "
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.16),transparent_45%)]" />

      {/* HERO WRAPPER */}
      <div className="relative w-full flex items-center justify-center">

        {/* LOTTIE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="
            relative flex items-center justify-center
            -translate-y-28 md:-translate-y-36
          "
        >
          <Lottie
            animationData={servicesAnim}
            loop
            className="
              w-[700px] h-[700px]
              md:w-[950px] md:h-[950px]
              opacity-75
            "
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/15" />

          {/* GLOW */}
          <div className="absolute w-[500px] h-[500px] bg-blue-500/15 blur-[140px]" />
        </motion.div>

        {/* TEXT */}
        <div
          className="
            absolute z-20
            text-center
            w-full
            top-[57%]
            -translate-y-1/2
            px-6
          "
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="
              text-[40px] md:text-[68px]
              font-bold
              text-white
              leading-[0.95]
              tracking-[-0.05em]
            "
          >
            {t.servicesHero.title1}
            <br />
            {t.servicesHero.title2}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="
              text-gray-400
              text-[15px] md:text-[22px]
              mt-7
              max-w-3xl
              mx-auto
              leading-relaxed
            "
          >
            {t.servicesHero.description}
          </motion.p>
        </div>
      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#030817] to-transparent" />
    </section>
  )
}