'use client'

import { motion } from 'framer-motion'
import { DollarSign, Zap, MapPin, Users } from 'lucide-react'

const benefits = [
  {
    icon: DollarSign,
    title: 'Competitive Compensation',
    description: 'Industry-leading salaries and equity packages for our growing team.'
  },
  {
    icon: Zap,
    title: 'Remote & Flexible',
    description: 'Work from anywhere. We embrace flexible schedules and remote-first culture.'
  },
  {
    icon: MapPin,
    title: 'Global Opportunities',
    description: 'Grow your career while collaborating with teams across Europe and Indonesia.'
  },
  {
    icon: Users,
    title: 'Professional Development',
    description: 'Training budget, conferences, and mentorship from industry experts.'
  }
]

export default function BenefitsSection() {
  return (
    <section className="py-32 bg-card/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block text-xs font-medium text-foreground/60 tracking-widest uppercase mb-4">
            Benefits
          </span>
          <h2 className="text-4xl lg:text-5xl font-semibold text-white mb-6 text-balance">
            Why Join Roota
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-balance">
            We invest in our team because great people create great outcomes
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -2 }}
                className="group bg-background/60 border border-border/50 rounded-lg p-8 hover:bg-background hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                    <Icon className="text-primary" size={22} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
