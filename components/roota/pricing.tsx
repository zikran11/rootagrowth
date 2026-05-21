'use client'

import { motion } from 'framer-motion'
import {
  FileText,
  CalendarCheck,
  Users,
  Bot
} from 'lucide-react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { translations } from '@/lib/translation'

export default function Pricing() {
  const pathname = usePathname()

  const locale =
    pathname.split('/')[1] || 'en'

  const t =
    translations[
      locale as keyof typeof translations
    ] || translations.en

  const plans = [
    {
      icon: FileText,
      title:
        t.pricing.plans[0]
          .title,
      tag:
        t.pricing.plans[0]
          .tag,
      ideal:
        t.pricing.plans[0]
          .ideal,
      description:
        t.pricing.plans[0]
          .description,
      cta:
        t.pricing.plans[0]
          .cta,
      href: `/${locale}/contact`,
    },

    {
      icon:
        CalendarCheck,
      title:
        t.pricing.plans[1]
          .title,
      tag:
        t.pricing.plans[1]
          .tag,
      ideal:
        t.pricing.plans[1]
          .ideal,
      description:
        t.pricing.plans[1]
          .description,
      cta:
        t.pricing.plans[1]
          .cta,
      href: `/${locale}/contact`,
    },

    {
      icon: Users,
      title:
        t.pricing.plans[2]
          .title,
      tag:
        t.pricing.plans[2]
          .tag,
      ideal:
        t.pricing.plans[2]
          .ideal,
      description:
        t.pricing.plans[2]
          .description,
      cta:
        t.pricing.plans[2]
          .cta,
      href: `/${locale}/contact`,
    },

    {
      icon: Bot,
      title:
        t.pricing.plans[3]
          .title,
      tag:
        t.pricing.plans[3]
          .tag,
      ideal:
        t.pricing.plans[3]
          .ideal,
      description:
        t.pricing.plans[3]
          .description,
      cta:
        t.pricing.plans[3]
          .cta,
      href: `/${locale}/contact`,
    },
  ]

  return (
    <section className="py-16 sm:py-20 md:py-32 bg-white">

      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">

        {/* HEADER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 16,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
            margin: '-50px',
          }}

          transition={{
            duration: 0.6,
            ease: 'easeOut',
          }}

          className="text-center mb-12 md:mb-16"
        >

          <div className="flex justify-center">

            <p
              className="
                text-xs
                sm:text-sm

                font-medium

                text-orange-600

                mb-4

                px-4
                sm:px-5

                py-1.5

                rounded-full

                bg-white/30

                backdrop-blur-md

                border border-white/40

                shadow-lg shadow-black/10
              "
            >

              {t.pricing.badge}

            </p>

          </div>

          <h2
            className="
              text-2xl
              sm:text-3xl
              md:text-4xl
              lg:text-5xl

              font-bold

              text-stone-900

              tracking-tight

              mb-4
              md:mb-5
            "
          >

            {t.pricing.title1}

            <br className="hidden md:block" />

            <span className="text-stone-400">

              {t.pricing.title2}

            </span>

          </h2>

          <p
            className="
              text-sm
              sm:text-base
              md:text-lg

              text-stone-500

              max-w-3xl

              mx-auto

              leading-relaxed

              whitespace-pre-line
            "
          >

            {t.pricing.description}

          </p>

        </motion.div>

        {/* CARDS */}
        <div
          className="
            grid

            grid-cols-1

            md:grid-cols-2

            gap-4
            sm:gap-5
            md:gap-6
          "
        >

          {plans.map(
            (plan, i) => {

              const Icon =
                plan.icon

              return (

                <motion.div
                  key={i}

                  initial={{
                    opacity: 0,
                    y: 20,
                  }}

                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}

                  viewport={{
                    once: true,
                    margin: '-50px',
                  }}

                  transition={{
                    duration: 0.5,
                    delay:
                      i * 0.1,

                    ease:
                      'easeOut',
                  }}

                  className="
                    rounded-2xl

                    border
                    border-stone-200

                    bg-stone-50

                    p-4
                    sm:p-5
                    md:p-6

                    flex
                    flex-col

                    h-full

                    hover:border-orange-300/50

                    hover:shadow-lg

                    transition-all
                    duration-300
                  "
                >

                  {/* TOP */}
                  <div
                    className="
                      flex

                      items-start

                      justify-between

                      mb-5
                      md:mb-6
                    "
                  >

                    <div
                      className="
                        w-10
                        h-10

                        rounded-lg

                        bg-stone-200

                        flex

                        items-center

                        justify-center
                      "
                    >

                      <Icon
                        size={20}
                        className="text-stone-600"
                        strokeWidth={
                          1.5
                        }
                      />

                    </div>

                    <span
                      className="
                        text-[10px]
                        sm:text-xs

                        font-mono

                        text-stone-500

                        border
                        border-stone-200

                        rounded-full

                        px-3

                        py-1
                      "
                    >

                      {plan.tag}

                    </span>

                  </div>

                  {/* TITLE */}
                  <h3
                    className="
                      text-lg
                      sm:text-xl

                      font-bold

                      text-stone-900

                      mb-3
                    "
                  >

                    {plan.title}

                  </h3>

                  {/* IDEAL */}
                  <div className="mb-4">

                    <p
                      className="
                        text-[10px]
                        sm:text-xs

                        font-semibold

                        text-stone-400

                        uppercase

                        tracking-wide

                        mb-1
                      "
                    >

                      {t.pricing.idealFor}

                    </p>

                    <p
                      className="
                        text-sm

                        text-stone-600
                      "
                    >

                      {plan.ideal}

                    </p>

                  </div>

                  {/* DESCRIPTION */}
                  <p
                    className="
                      text-sm

                      text-stone-500

                      leading-relaxed

                      whitespace-pre-line

                      mb-6

                      flex-1
                    "
                  >

                    {plan.description}

                  </p>

                  {/* BUTTON */}
                  <Link
                    href={plan.href}
                    className="
                      block

                      w-full

                      text-center

                      py-3

                      px-5

                      rounded-xl

                      text-sm

                      font-semibold

                      bg-stone-200

                      text-stone-800

                      hover:bg-orange-500

                      hover:text-white

                      transition-all
                      duration-200
                    "
                  >

                    {plan.cta}

                  </Link>

                </motion.div>

              )
            }
          )}

        </div>

      </div>

    </section>
  )
}