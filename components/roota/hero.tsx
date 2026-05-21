'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { Cormorant_Garamond } from 'next/font/google'

import { translations } from '@/lib/translation'

const serif = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export default function Hero() {
  const pathname = usePathname()

  const locale = pathname.split('/')[1] || 'en'

  const t =
    translations[locale as keyof typeof translations] ||
    translations.en

  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#f5f5f3]
        flex
        items-center
        justify-center
        px-6
        pt-32
        pb-20
      "
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden">

        {/* MAIN LIGHT */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.97)_0%,rgba(245,245,243,1)_72%)]
          "
        />

        {/* LEFT GLOW */}
        <div
          className="
            absolute
            left-[-10%]
            top-1/2
            -translate-y-1/2
            w-[450px]
            h-[450px]
            rounded-full
            bg-blue-200/20
            blur-3xl
          "
        />

        {/* RIGHT GLOW */}
        <div
          className="
            absolute
            right-[-10%]
            top-1/2
            -translate-y-1/2
            w-[450px]
            h-[450px]
            rounded-full
            bg-orange-200/20
            blur-3xl
          "
        />

        {/* CENTER GLOW */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.28, 0.42, 0.28],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            absolute
            left-1/2
            top-[47%]
            -translate-x-1/2
            -translate-y-1/2
            w-[620px]
            h-[620px]
            rounded-full
            bg-purple-300/20
            blur-3xl
          "
        />

        {/* ORB */}
        <motion.img
          src="/background.png"
          alt="background"
          animate={{
            rotate: [0, 360],
            y: [0, -15, 0],
            scale: [1, 1.03, 1],
          }}
          transition={{
            rotate: {
              duration: 42,
              repeat: Infinity,
              ease: 'linear',
            },
            y: {
              duration: 7,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            scale: {
              duration: 7,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
          className="
            absolute
            left-1/2
            top-[42%]
            -translate-x-1/2
            -translate-y-1/2
            w-[650px]
            md:w-[850px]
            lg:w-[950px]
            opacity-60
            blur-[1px]
            select-none
            pointer-events-none
          "
        />
      </div>

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          max-w-6xl
          text-center
          mt-8
          md:mt-14
        "
      >

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={`
            ${serif.className}
            font-medium
            tracking-[-0.05em]
            leading-[1]
          `}
        >

          <span className="block text-stone-900 text-[52px] sm:text-[76px] md:text-[108px]">
            {t.hero.title1}
          </span>

          <span className="block text-stone-900 text-[52px] sm:text-[76px] md:text-[108px]">
            {t.hero.title2}
          </span>

          <span className="block mt-2 text-orange-500 text-[62px] sm:text-[92px] md:text-[128px]">
            {t.hero.title3}
          </span>

        </motion.h1>

        {/* SUBTEXT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="
            mt-8
            max-w-2xl
            mx-auto
            text-[15px]
            sm:text-[17px]
            leading-relaxed
            text-stone-600
          "
        >

          <div className="space-y-2">

            <p>
              Managed in the Netherlands Built by top-tier Indonesian developers.
            </p>

          </div>

        </motion.div>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="
            mt-6
            flex
            flex-wrap
            items-center
            justify-center
            gap-4
          "
        >

          {/* PRIMARY BUTTON */}
          <button
            className="
              group
              flex
              items-center
              gap-2
              rounded-full
              bg-blue-600
              px-8
              py-4
              text-white
              font-medium
              shadow-xl
              shadow-blue-500/20
              transition-all
              duration-300
              hover:scale-[1.02]
              hover:bg-blue-700
            "
          >
            {t.hero.primaryBtn}

            <ArrowRight
              size={17}
              className="
                transition-transform
                group-hover:translate-x-1
              "
            />
          </button>

          {/* SECONDARY BUTTON */}
          <button
            className="
              rounded-full
              border
              border-stone-300/80
              bg-white/60
              backdrop-blur-xl
              px-8
              py-4
              text-stone-700
              shadow-md
              transition-all
              duration-300
              hover:scale-[1.02]
              hover:bg-white/90
              hover:shadow-lg
              hover:border-stone-400
            "
          >
            {t.hero.secondaryBtn}
          </button>

        </motion.div>

      </div>
    </section>
  )
}