'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-[#14263F] text-white">

      {/* GLOW */}
      <div
        className="
          absolute
          -top-32 md:-top-40
          right-0

          w-[220px]
          h-[220px]

          sm:w-[300px]
          sm:h-[300px]

          md:w-[400px]
          md:h-[400px]

          bg-orange-500/10
          blur-3xl
          rounded-full
        "
      />

      <div
        className="
          absolute
          bottom-0
          left-0

          w-[180px]
          h-[180px]

          sm:w-[220px]
          sm:h-[220px]

          md:w-[300px]
          md:h-[300px]

          bg-blue-400/10
          blur-3xl
          rounded-full
        "
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">

        {/* TOP */}
        <div className="py-14 sm:py-16 md:py-20 flex flex-col lg:flex-row justify-between gap-12 md:gap-16">

          {/* LEFT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.7
            }}
            className="max-w-xl"
          >

            {/* LOGO */}
            <img
              src="/logo3.png"
              alt="Roota Growth"
              className="
                h-15
sm:h-17
md:h-22
lg:h-30

                w-auto
                object-contain

                -ml-4
    md:-ml-6
    
                mb-6
                md:mb-8
              "
            />

            {/* OFFICE */}
            <div className="space-y-6 md:space-y-7 text-white/70 text-sm md:text-[15px] leading-relaxed">

              <div>

                <p className="font-semibold text-white mb-3">

                  Office Location

                </p>

                <p>

                  Roota Growth

                  <br />

                  Galvanistraat 265

                  <br />

                  3029 AD

                  <br />

                  Rotterdam, The Netherlands

                </p>

              </div>

              <div className="space-y-1">

                <p>

                  Chamber of Commerce: 42052592

                </p>

                <p>

                  VAT Number: NL005458566B84

                </p>

              </div>

            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.7,
              delay: 0.1
            }}
            className="
              flex
              flex-col

              items-start
              lg:items-end

              justify-start

              gap-5
              md:gap-6
            "
          >

            {/* EMAIL */}
            <a
              href="mailto:info@roota.nl"
              className="
                group

                inline-flex
                items-center

                gap-3

                text-base
                sm:text-lg
                md:text-xl

                font-medium

                hover:text-orange-400

                transition
              "
            >

              info@roota.nl

              <ArrowUpRight
                size={18}
                className="
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                  transition
                "
              />

            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/company/linkedin.com.in.rootagrowth/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center

                gap-3

                text-sm
                md:text-base

                text-white/60

                hover:text-orange-400

                transition
              "
            >

              <div
                className="
                  w-10
                  h-10

                  md:w-11
                  md:h-11

                  rounded-full

                  border
                  border-white/10

                  bg-white/5

                  flex
                  items-center
                  justify-center
                "
              >

                <img
                  src="/linkedin.png"
                  alt="LinkedIn"
                  className="w-5 h-5 object-contain"
                />

              </div>

              <span>

                LinkedIn

              </span>

            </a>

          </motion.div>

        </div>

        {/* BOTTOM */}
        <div
          className="
            border-t
            border-white/10

            py-5
            md:py-6

            flex
            flex-col

            md:flex-row

            items-center

            justify-between

            gap-4
          "
        >

          <p className="text-xs sm:text-sm text-white/40 text-center md:text-left">

            © {year} Roota Growth. All rights reserved.

          </p>

          

        </div>

      </div>

    </footer>
  )
}