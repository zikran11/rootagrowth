'use client'

import { motion } from 'framer-motion'
import { FileText, Users, Video, CheckCircle } from 'lucide-react'

const steps = [
  {
    icon: FileText,
    title: 'Application Review',
    description:
      'Submit your application with CV and relevant materials. We review all submissions carefully.',
  },
  {
    icon: Video,
    title: 'Initial Interview',
    description:
      'Schedule a video call with our team to discuss your background, skills, and career aspirations.',
  },
  {
    icon: Users,
    title: 'Team Conversation',
    description:
      'Meet with relevant team members to explore the role deeper and discuss how you can contribute.',
  },
  {
    icon: CheckCircle,
    title: 'Offer & Onboarding',
    description:
      'If it&apos;s a great fit, we&apos;ll extend an offer and get you started with a smooth onboarding experience.',
  },
]

export default function ApplicationProcess() {
  return (
    <section className="bg-white py-32">

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

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
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="mb-20 text-center"
        >

          {/* LABEL */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{
              once: true,
            }}
            className="mb-6 flex justify-center"
          >
            <div
              className="
                relative
                inline-flex
                items-center
                justify-center
                overflow-hidden
                rounded-full
                border
                border-white/30
                bg-white/20
                px-6
                py-3
                backdrop-blur-xl
                shadow-[0_8px_32px_rgba(31,38,135,0.12)]
              "
            >

              {/* GLOW */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-orange-100/40
                  via-transparent
                  to-orange-100/40
                "
              />

              {/* TEXT */}
              <span
                className="
                  relative
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.3em]
                  text-orange-600
                  md:text-sm
                "
              >
                Our Process
              </span>
            </div>
          </motion.div>

          {/* TITLE */}
          <h2
            className="
              mb-6
              text-4xl
              font-bold
              leading-tight
              tracking-tight
              text-black
              lg:text-5xl
            "
          >
            How we hire
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mx-auto
              max-w-2xl
              text-lg
              leading-relaxed
              text-neutral-500
            "
          >
            Our hiring process is designed to be fair, efficient, and
            collaborative. Here&apos;s what to expect.
          </p>
        </motion.div>

        {/* DESKTOP */}
        <div className="hidden md:block">

          <div className="relative">

            {/* LINE */}
            <div
              className="
                absolute
                left-0
                right-0
                top-1/3
                h-px
                bg-gradient-to-r
                from-transparent
                via-neutral-200
                to-transparent
              "
            />

            <div className="grid grid-cols-4 gap-8">

              {steps.map((step, index) => {
                const Icon = step.icon

                return (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className="relative"
                  >

                    {/* ICON */}
                    <div className="mb-8 flex justify-center">
                      <motion.div
                        whileHover={{
                          scale: 1.08,
                        }}
                        className="
                          relative
                          z-10
                          flex
                          h-16
                          w-16
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-orange-200
                          bg-orange-50
                          transition-all
                          duration-300
                        "
                      >
                        <Icon
                          className="text-orange-500"
                          size={28}
                        />
                      </motion.div>
                    </div>

                    {/* CONTENT */}
                    <div
                      className="
                        rounded-3xl
                        border
                        border-neutral-200
                        bg-white
                        p-6
                        text-center
                        shadow-[0_10px_40px_rgba(0,0,0,0.04)]
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:shadow-[0_15px_60px_rgba(0,0,0,0.08)]
                      "
                    >
                      <h3
                        className="
                          mb-3
                          text-base
                          font-semibold
                          text-black
                        "
                      >
                        {step.title}
                      </h3>

                      <p
                        className="
                          text-sm
                          leading-relaxed
                          text-neutral-500
                        "
                      >
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>

        {/* MOBILE */}
        <div className="space-y-6 md:hidden">

          {steps.map((step, index) => {
            const Icon = step.icon

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{
                  once: true,
                }}
                className="flex gap-4"
              >

                {/* ICON */}
                <div className="flex-shrink-0">
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-orange-200
                      bg-orange-50
                    "
                  >
                    <Icon
                      className="text-orange-500"
                      size={22}
                    />
                  </div>
                </div>

                {/* CONTENT */}
                <div
                  className="
                    flex-1
                    rounded-2xl
                    border
                    border-neutral-200
                    bg-white
                    p-4
                    shadow-[0_10px_30px_rgba(0,0,0,0.04)]
                  "
                >
                  <h3
                    className="
                      mb-2
                      text-sm
                      font-semibold
                      text-black
                    "
                  >
                    {step.title}
                  </h3>

                  <p
                    className="
                      text-xs
                      leading-relaxed
                      text-neutral-500
                    "
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}