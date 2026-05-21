'use client'

import { motion } from 'framer-motion'
import { Target, Compass } from 'lucide-react'

export default function MissionVision() {
  return (
    <section className="py-24 bg-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-background border border-border rounded-xl p-12 hover:border-primary/30 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Target className="text-primary" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Our Mission</h3>
            </div>
            <p className="text-foreground leading-relaxed text-lg">
              To empower exceptional Indonesian developers and European businesses to collaborate seamlessly, creating opportunities for career growth and business success across continents.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-background border border-border rounded-xl p-12 hover:border-primary/30 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Compass className="text-primary" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Our Vision</h3>
            </div>
            <p className="text-foreground leading-relaxed text-lg">
              A world where geography is no barrier to opportunity—where talent flows freely, teams are built on merit and trust, and remote work enables global prosperity.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 rounded-xl p-12"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-primary font-bold text-5xl mb-3">🌍</div>
              <h4 className="text-lg font-semibold text-white mb-2">Trust</h4>
              <p className="text-foreground text-sm">Built on transparency, integrity, and consistent delivery across all partnerships.</p>
            </div>
            <div className="text-center">
              <div className="text-primary font-bold text-5xl mb-3">🚀</div>
              <h4 className="text-lg font-semibold text-white mb-2">Excellence</h4>
              <p className="text-foreground text-sm">Rigorous vetting and continuous support ensure exceptional talent and outcomes.</p>
            </div>
            <div className="text-center">
              <div className="text-primary font-bold text-5xl mb-3">🤝</div>
              <h4 className="text-lg font-semibold text-white mb-2">Partnership</h4>
              <p className="text-foreground text-sm">We succeed when our developers and clients succeed—aligned incentives, shared growth.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
