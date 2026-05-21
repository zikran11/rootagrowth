'use client'

import { motion } from 'framer-motion'
import { Shield, Award, Users, Zap } from 'lucide-react'

export default function WhyClientsTrust() {
  const trustFactors = [
    {
      icon: Shield,
      title: 'Rigorous Vetting',
      description: 'Every developer undergoes comprehensive technical assessments, background checks, and cultural fit evaluation before placement.'
    },
    {
      icon: Award,
      title: 'Quality Guarantee',
      description: '95% client satisfaction rate backed by our performance-based model and continuous support throughout the engagement.'
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'Our team provides ongoing mentoring, onboarding assistance, and responsive support to ensure smooth integrations and long-term success.'
    },
    {
      icon: Zap,
      title: 'Quick Placement',
      description: 'Our streamlined process connects you with vetted talent quickly—from initial consultation to developer onboarding in weeks, not months.'
    }
  ]

  return (
    <section className="py-24 bg-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-medium text-foreground/60 tracking-widest uppercase mb-4">
            Why Partner With Roota
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            Why Clients Trust Us
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto text-balance">
            We&apos;ve built trust through transparency, consistency, and delivering exceptional results year after year
          </p>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {trustFactors.map((factor, index) => {
            const Icon = factor.icon
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -5 }}
                className="group bg-background border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      {factor.title}
                    </h3>
                    <p className="text-foreground leading-relaxed">
                      {factor.description}
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
