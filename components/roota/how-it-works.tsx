'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Image from 'next/image'
import { translations } from '@/lib/translation'

const images = [
  '/rapat1.png',
  '/planning1.png',
  '/coding1 (2).png',
  '/monitoring1.png',
]

export default function HowItWorks() {
  const pathname = usePathname()

  const locale = pathname.split('/')[1] || 'en'

  const t =
    translations[locale as keyof typeof translations] ||
    translations.en

  const [activeCard, setActiveCard] = useState<number | null>(null)

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-24">

      {/* GLOW */}
      <div
        className="
          absolute
          left-1/2
          top-0

          h-[180px]
          w-[320px]

          sm:h-[220px]
          sm:w-[450px]

          md:h-[300px]
          md:w-[700px]

          -translate-x-1/2

          bg-blue-500/10
          blur-[120px]
          md:blur-[160px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">

        {/* HEADER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="mb-12 md:mb-20 text-center"
        >

          {/* BADGE */}
          <div className="mb-5 md:mb-6 flex justify-center">

            <div
              className="
                inline-flex
                items-center
                justify-center

                rounded-full

                border
                border-white/30

                bg-white/20

                px-4
                sm:px-6

                py-2
                sm:py-3

                backdrop-blur-xl

                shadow-[0_8px_32px_rgba(31,38,135,0.12)]
              "
            >

              <p
                className="
                  text-[10px]
                  sm:text-xs
                  md:text-sm

                  uppercase

                  tracking-[0.25em]
                  sm:tracking-[0.3em]

                  text-orange-600
                "
              >

                {t.howItWorks.badge}

              </p>

            </div>

          </div>

          {/* TITLE */}
          <h2
            className="
              mx-auto
              max-w-4xl

              text-2xl
              sm:text-3xl
              md:text-4xl
              lg:text-5xl

              font-black

              leading-tight

              text-black
            "
          >

            {t.howItWorks.title1}

            <br />

            {t.howItWorks.title2}

          </h2>

        </motion.div>

        {/* CARDS */}
        <div
          className="
            grid
            grid-cols-1

            gap-6
            md:gap-8

            md:grid-cols-2
            xl:grid-cols-4
          "
        >

          {t.howItWorks.steps.map(
            (step, index) => (

              <motion.div
  key={index}
  onClick={() =>
    setActiveCard(
      activeCard === index ? null : index
    )
  }
  initial={{
    opacity: 0,
    y: 40,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: 0.3,
    delay: index * 0.1,
    ease: 'easeOut',
  }}
  viewport={{
    once: true,
  }}
  whileHover={{
    scale: 1.02,
  }}
  className="
    group
    relative
    overflow-hidden
    rounded-[24px]
    md:rounded-[32px]
    border
    border-blue-100
    bg-gradient-to-b
    from-blue-50
    to-white
    p-5
    sm:p-6
    md:p-8
    shadow-[0_10px_50px_rgba(59,130,246,0.10)]
    transition-all
    duration-500
    hover:border-blue-300
    hover:shadow-[0_0_60px_rgba(59,130,246,0.16)]
    cursor-pointer
    md:cursor-default
  "
>

                {/* IMAGE */}
                {/* IMAGE */}
<div className="relative mb-6 md:mb-8 overflow-hidden rounded-2xl bg-blue-50 h-[220px] sm:h-[250px] md:h-[280px]">

  <Image
    src={images[index]}
    alt={step.title}
    fill
    quality={100}
    priority={index === 0}
    className={`
  object-contain
  transition
  duration-700
  ${
    index === 2
      ? 'scale-[1.22] group-hover:scale-[1.28]'
      : 'scale-110 group-hover:scale-[1.16]'
  }
`}
  />

</div>

                {/* STEP */}
                <p
                  className="
                    mb-3

                    text-[10px]
                    sm:text-xs

                    uppercase

                    tracking-[0.25em]
                    sm:tracking-[0.3em]

                    text-blue-500
                  "
                >

                  {step.step}

                </p>

                {/* TITLE */}
                <h3
                  className="
                    text-xl
                    sm:text-2xl
                    md:text-3xl

                    font-black

                    text-black
                  "
                >

                  {step.title}

                </h3>

                {/* DESCRIPTION */}
                <div
                  className={`
                    overflow-hidden
                    transition-all
                    duration-500

                    ${
                      activeCard === index
                        ? 'mt-6 max-h-[500px] opacity-100'
                        : 'max-h-0 opacity-0'
                    }

                    md:mt-0
                    md:max-h-0
                    md:opacity-0

                    md:group-hover:mt-6
                    md:group-hover:max-h-[500px]
                    md:group-hover:opacity-100
                  `}
                >

                  <p className="leading-relaxed text-sm md:text-base text-gray-600">

                    {step.description}

                  </p>

                </div>

                {/* BLUE GLOW */}
                <div
                  className="
                    absolute

                    -right-12
                    -top-12

                    md:-right-20
                    md:-top-20

                    h-28
                    w-28

                    md:h-40
                    md:w-40

                    rounded-full

                    bg-blue-500/10

                    blur-3xl
                  "
                />

              </motion.div>

            )
          )}

        </div>

      </div>

    </section>
  )
}