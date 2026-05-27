'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { translations } from '@/lib/translation'



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
        min-h-[100svh]
        overflow-hidden
        bg-[#f5f5f3]

        flex
        items-center
        justify-center

        px-4
        sm:px-6

        pt-24
        sm:pt-28
        md:pt-32

        pb-16
        sm:pb-20
      "
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.97)_0%,rgba(245,245,243,1)_72%)]" />

        {/* LEFT GLOW */}
        <div
          className="
            absolute
            left-[-20%]
            top-1/2
            -translate-y-1/2

            w-[220px]
            h-[220px]

            sm:w-[300px]
            sm:h-[300px]

            md:w-[450px]
            md:h-[450px]

            rounded-full
            bg-blue-200/20
            blur-3xl
          "
        />

        {/* RIGHT GLOW */}
        <div
          className="
            absolute
            right-[-20%]
            top-1/2
            -translate-y-1/2

            w-[220px]
            h-[220px]

            sm:w-[300px]
            sm:h-[300px]

            md:w-[450px]
            md:h-[450px]

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

            w-[260px]
            h-[260px]

            sm:w-[420px]
            sm:h-[420px]

            md:w-[620px]
            md:h-[620px]

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

            w-[300px]

            sm:w-[500px]

            md:w-[700px]

            lg:w-[850px]

            xl:w-[950px]

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

          mt-4
          sm:mt-8
          md:mt-14
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
    duration: 1,
  }}
  className="
    font-bold
    leading-tight
    tracking-[-0.03em]
  "
>
<span
  className="
    block
    mb-3

    text-stone-900
    text-4xl
    sm:text-5xl
    md:text-6xl
    lg:text-7xl
  "
>
  {t.hero.title1}
</span>

<span
  className="
    block

    text-stone-900
    text-4xl
    sm:text-5xl
    md:text-6xl
    lg:text-7xl
  "
>
  {t.hero.title2}
</span>

  <span className="
    block
    mt-2

    text-orange-500

    text-5xl
    sm:text-6xl
    md:text-7xl
    lg:text-8xl
  ">
    {t.hero.title3}
  </span>

</motion.h1>

        {/* SUBTEXT */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
            duration: 1,
          }}
          className="
            mt-6
            sm:mt-8

            max-w-xs
            sm:max-w-lg
            md:max-w-2xl

            mx-auto

            text-sm
            sm:text-[15px]
            md:text-[17px]

            leading-relaxed
            text-stone-600
          "
        >

          <p>

            Managed in the Netherlands Built by top-tier Indonesian developers.

          </p>

        </motion.div>

        {/* BUTTONS */}
        {/* BUTTONS */}
<motion.div
  initial={{
    opacity: 0,
    y: 15,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    delay: 0.3,
    duration: 1,
  }}
  className="
    mt-6

    flex
    flex-col

    sm:flex-row

    items-center
    justify-center

    gap-3
    sm:gap-4
  "
>

  <Link
    href={`/${locale}/contact`}
    className="
      group

      w-full
      sm:w-auto

      flex
      items-center
      justify-center

      gap-2

      rounded-full

      bg-[#2F5AA6]

      px-6
      sm:px-8

      py-3
      sm:py-4

      text-white
      font-medium

      shadow-xl
      shadow-[#2F5AA6]/20

      transition-all
      duration-300

      hover:scale-[1.02]
      hover:bg-[#274B8A]
    "
  >

    {t.hero.primaryBtn}

    <ArrowRight
      size={17}
      className="group-hover:translate-x-1 transition-transform"
    />

  </Link>

  <Link
    href={`/${locale}/services`}
    className="
      w-full
      sm:w-auto

      rounded-full

      border
      border-stone-300/80

      bg-white/60

      backdrop-blur-xl

      px-6
      sm:px-8

      py-3
      sm:py-4

      text-stone-700

      shadow-md

      transition-all
      duration-300

      hover:scale-[1.02]
      hover:bg-white/90
      hover:shadow-lg
      hover:border-stone-400

      flex
      items-center
      justify-center
    "
  >
    {t.hero.secondaryBtn}
  </Link>

</motion.div>

      </div>

    </section>
  )
}