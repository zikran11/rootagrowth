'use client'

import { motion } from 'framer-motion'
import { FileText, Briefcase, Users, Rocket } from 'lucide-react'

const steps = [
  {
    icon: FileText,
    title: 'Define Your Needs',
    description: 'Share your project requirements, tech stack, and team culture preferences.'
  },
  {
    icon: Briefcase,
    title: 'Receive Candidates',
    description: 'We curate and present pre-vetted developers matched to your specifications.'
  },
  {
    icon: Users,
    title: 'Interview & Select',
    description: 'Meet candidates through our coordinated interviews and select your ideal match.'
  },
  {
    icon: Rocket,
    title: 'Onboard & Scale',
    description: 'Seamless integration with ongoing support to ensure project success.'
  }
]

export default function ProcessSection() {
  return (
    <section className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block text-xs font-medium text-foreground/60 tracking-widest uppercase mb-4">
            Our Process
          </span>
          <h2 className="text-4xl lg:text-5xl font-semibold text-white mb-6 text-balance">
            Simple & Streamlined
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-balance">
            From project brief to developer onboarding in days, not weeks
          </p>
        </motion.div>

        <div className="hidden md:block">
          <div className="relative">
            <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="flex justify-center mb-8">
                      <motion.div
                        whileHover={{ scale: 1.08 }}
                        className="relative z-10 w-16 h-16 bg-primary/10 border border-primary/30 rounded-full flex items-center justify-center hover:bg-primary/15 transition-all duration-300"
                      >
                        <Icon className="text-primary" size={28} />
                      </motion.div>
                    </div>

                    <div className="bg-background/50 border border-border/30 rounded-lg p-6 text-center hover:bg-background/80 transition-colors">
                      <h3 className="text-base font-semibold text-white mb-2.5">
                        {step.title}
                      </h3>
                      <p className="text-foreground/70 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="md:hidden space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-11 h-11 bg-primary/10 border border-primary/30 rounded-full flex items-center justify-center">
                    <Icon className="text-primary" size={22} />
                  </div>
                </div>
                <div className="flex-1 bg-background/50 border border-border/30 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-white mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-foreground/70 text-xs leading-relaxed">
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
