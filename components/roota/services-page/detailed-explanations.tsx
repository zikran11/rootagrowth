'use client'

import { motion } from 'framer-motion'

const serviceDetails = [
  {
    category: 'Frontend Development',
    title: 'Build beautiful, responsive interfaces',
    details: [
      'Modern React, Vue, and Angular expertise',
      'Mobile-first responsive design',
      'Accessibility (WCAG) compliance',
      'Performance optimization',
      'State management & API integration',
    ],
  },
  {
    category: 'Backend Development',
    title: 'Scalable server-side solutions',
    details: [
      'Node.js, Python, Java proficiency',
      'Database design and optimization',
      'RESTful & GraphQL APIs',
      'Authentication & security',
      'Microservices architecture',
    ],
  },
  {
    category: 'Fullstack Development',
    title: 'Complete end-to-end solutions',
    details: [
      'Full application lifecycle',
      'Frontend + Backend integration',
      'Database to UI continuity',
      'DevOps & deployment',
      'System architecture design',
    ],
  },
  {
    category: 'UI/UX Design',
    title: 'User-centered creative design',
    details: [
      'User research & personas',
      'Wireframing & prototyping',
      'Design system creation',
      'Interaction design',
      'Figma & design tools expertise',
    ],
  },
  {
    category: 'Maintenance & Support',
    title: 'Keep your applications running smoothly',
    details: [
      'Bug fixes & patch management',
      'Performance monitoring',
      'Code optimization',
      'Feature updates & enhancements',
      'Security updates & compliance',
    ],
  },
  {
    category: 'Graphic Design',
    title: 'Visual identity & creative assets',
    details: [
      'Brand identity development',
      'Marketing materials & collateral',
      'Social media assets',
      'Packaging & product design',
      'Print & digital design',
    ],
  },
]

export default function DetailedExplanations() {
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
                Detailed Services
              </span>
            </div>
          </motion.div>

          {/* TITLE */}
          <h2
            className="
              mb-6
              text-4xl
              font-semibold
              leading-tight
              tracking-tight
              text-black
              lg:text-5xl
            "
          >
            What's included
            <br />
            in each service
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
            Explore our comprehensive expertise across every development
            discipline with scalable, modern, and business-focused solutions.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

          {serviceDetails.map((service, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -4,
              }}
              className="
                group
                rounded-3xl
                border
                border-neutral-200
                bg-white
                p-8
                transition-all
                duration-300
                hover:border-neutral-300
                hover:bg-neutral-50
              "
            >

              {/* TOP */}
              <div className="mb-8">

                {/* CATEGORY */}
                <p
                  className="
                    mb-3
                    text-xs
                    font-medium
                    uppercase
                    tracking-[0.2em]
                    text-neutral-400
                  "
                >
                  {service.category}
                </p>

                {/* TITLE */}
                <h3
                  className="
                    text-2xl
                    font-semibold
                    leading-snug
                    text-black
                  "
                >
                  {service.title}
                </h3>
              </div>

              {/* LIST */}
              <ul className="space-y-4">

                {service.details.map((detail, i) => (
                  <li
                    key={i}
                    className="
                      flex
                      items-start
                      gap-4
                    "
                  >

                    {/* DOT */}
                    <div
                      className="
                        mt-[10px]
                        h-[5px]
                        w-[5px]
                        rounded-full
                        bg-black/40
                        flex-shrink-0
                      "
                    />

                    {/* TEXT */}
                    <span
                      className="
                        text-[15px]
                        leading-relaxed
                        text-neutral-600
                      "
                    >
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}