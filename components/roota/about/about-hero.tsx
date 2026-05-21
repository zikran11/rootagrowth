'use client'

import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { translations } from '@/lib/translation'

export default function AboutHero() {
  const [animationData, setAnimationData] = useState<any>(null)

  const pathname = usePathname()
  const locale = pathname.split('/')[1] || 'en'

  const t =
    translations[locale as keyof typeof translations] ||
    translations.en

  useEffect(() => {
    const loadAnimation = async () => {
      const response = await fetch('/lottie/worker.json')
      const data = await response.json()
      setAnimationData(data)
    }

    loadAnimation()
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center bg-[#050816]">

      {/* Lottie Background */}
      <div className="absolute inset-0 flex items-center justify-center z-0 translate-y-3">
        {animationData && (
          <Lottie
            animationData={animationData}
            loop
            autoplay
            className="w-[1000px] h-[1000px] opacity-70"
          />
        )}
      </div>

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
<motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-5xl lg:text-7xl font-bold text-white leading-tight"
>
  {t.aboutHero.title.split(' ').slice(0, 3).join(' ')}
  <br />
  {t.aboutHero.title.split(' ').slice(3).join(' ')}
</motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          {t.aboutHero.description}
        </motion.p>

      </div>
    </section>
  )
}