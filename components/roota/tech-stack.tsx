'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

import { translations } from '@/lib/translation'

const techs = [
  { image: '/next.png' },
  { image: '/react.png' },
  { image: '/typescript.png' },
  { image: '/node.png' },
  { image: '/aws.jpeg' },
  { image: '/postgresql.jpg' },
  { image: '/docker.jpeg' },
  { image: '/pinecone.png' },

  { image: '/figma.png' },
  { image: '/tailwind.jpeg' },
  { image: '/rediss.png' },
  { image: '/graph.png' },
  { image: '/vercel.png' },
  { image: '/github.png' },
  { image: '/supabase.png' },
  { image: '/langchain.png' },
  { image: '/n8n.png' },
]

const firstRow = techs.slice(0, 7)
const secondRow = techs.slice(7)

export default function TechStack() {
  const pathname = usePathname()

  const locale = pathname.split('/')[1] || 'en'

  const t =
    translations[locale as keyof typeof translations] ||
    translations.en

  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">

      {/* GLOW */}
      <div className="absolute left-1/2 top-0 h-[250px] w-[500px] -translate-x-1/2 bg-blue-500/10 blur-[120px] md:h-[350px] md:w-[700px] md:blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">

        {/* BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-6 flex justify-center"
        >
          <div className="
            inline-flex
            items-center
            justify-center
            rounded-full
            border
            border-white/20
            bg-white/10
            px-6
            py-3
            backdrop-blur-xl
            shadow-[0_8px_32px_rgba(31,38,135,0.12)]
          ">
            <p className="
              text-[10px]
              uppercase
              tracking-[0.35em]
              text-orange-500
              md:text-sm
            ">
              {t.techStack.badge}
            </p>
          </div>
        </motion.div>

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            mx-auto
            max-w-4xl
            text-center
            text-2xl
            font-black
            leading-tight
            text-black
            sm:text-3xl
            md:text-5xl
          "
        >
          {t.techStack.title}
        </motion.h2>

        {/* STACK */}
        <div className="mt-16 flex flex-col items-center gap-8 md:mt-28 md:gap-16">

           <div className="flex flex-wrap justify-center px-2 sm:px-6">

    {firstRow.map((tech, index) => (
      <motion.div
        key={index}
        initial={{
          opacity: 0,
          y: 40,
          rotate: 10,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          rotate: 10,
        }}
        transition={{
          duration: 0.1,
          ease: 'easeOut',
          delay: index * 0.03,
        }}
        viewport={{ once: true }}
        whileHover={{
          y: -8,
          scale: 1.08,
          rotate: 8,
        }}
        className="
          relative
          -mr-2
          mb-4

          h-[72px]
          w-[72px]

          rotate-[10deg]

          overflow-hidden
          rounded-[20px]
          border
          border-gray-200
          bg-white

          shadow-[0_10px_40px_rgba(0,0,0,0.08)]

          will-change-transform
          transform-gpu

          sm:-mr-6
          sm:h-[105px]
          sm:w-[105px]

          md:-mr-6
          md:h-[160px]
          md:w-[160px]
          md:rotate-[18deg]
          md:rounded-[38px]
        "
      >
        <div className="relative h-full w-full">
          <Image
            src={tech.image}
            alt="tech"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>
    ))}

  </div>
          {/* ROW 2 */}
          <div className="flex flex-wrap justify-center">

            {secondRow.map((tech, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 40,
                  rotate: 10,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotate: 10,
                }}
                transition={{
  duration: 0.1,
  ease: 'easeOut',
  delay: index * 0.03,
}}
                viewport={{ once: true }}
                whileHover={{
  y: -8,
  scale: 1.08,
  rotate: 8,
}}

                className="
                  relative
                  -mr-2
                  mb-4

                  h-[72px]
                  w-[72px]

                  rotate-[10deg]

                  overflow-hidden
                  rounded-[20px]
                  border
                  border-gray-200
                  bg-white

                  shadow-[0_10px_40px_rgba(0,0,0,0.08)]

                  sm:-mr-6
                  sm:h-[105px]
                  sm:w-[105px]

                  md:-mr-12
                  md:h-[160px]
                  md:w-[160px]
                  md:rotate-[18deg]
                  md:rounded-[38px]
                "
              >
                <div className="relative h-full w-full">
                  <Image
                    src={tech.image}
                    alt="tech"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            ))}

          </div>

        </div>

      </div>

    </section>
  )
}