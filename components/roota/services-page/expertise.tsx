'use client'

import { motion } from 'framer-motion'
import { CheckCircle, TrendingUp, Award, Zap } from 'lucide-react'

const expertise = [
  {
    icon: CheckCircle,
    title: 'Rigorously Vetted',
    description: 'Every developer passes comprehensive technical assessment and cultural alignment review.'
  },
  {
    icon: TrendingUp,
    title: 'Continuous Learning',
    description: 'Developers stay current with industry best practices and emerging technologies.'
  },
  {
    icon: Award,
    title: 'Experience & Credentials',
    description: 'Average 8+ years of professional experience with proven project track records.'
  },
  {
    icon: Zap,
    title: 'Quick Onboarding',
    description: 'Ready-to-deploy developers who integrate seamlessly with your existing teams.'
  }
]

export default function Expertise() {
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
            Quality Assurance
          </span>
          <h2 className="text-4xl lg:text-5xl font-semibold text-white mb-6 text-balance">
            Why choose Roota developers
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-balance">
            We ensure every developer meets our exacting standards for technical excellence and cultural fit
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {expertise.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -2 }}
                className="group bg-background/60 border border-border/50 rounded-lg p-8 hover:bg-background hover:border-primary/30 transition-all duration-300 hover:shadow-md hover:shadow-primary/10"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 group-hover:scale-105 transition-all duration-300">
                    <Icon className="text-primary" size={22} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
