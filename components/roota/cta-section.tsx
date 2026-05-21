'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-24 md:py-32 bg-[#0a1628] relative overflow-hidden">
      {/* Warm glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-orange-500/[0.04] blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-10 text-center relative">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-6"
        >
          Let&apos;s Build Something{' '}
          <span className="text-stone-500">Great Together</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="text-base md:text-lg text-stone-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Work with a trusted Dutch-managed development partner built for long-term business growth. No commitments required — start with a free consultation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-orange-500 text-stone-950 font-semibold text-sm hover:bg-orange-400 transition-colors duration-200"
          >
            Schedule Consultation
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/10 text-sm font-medium text-stone-300 hover:text-white hover:border-white/20 transition-colors duration-200"
          >
            <Mail size={15} strokeWidth={1.5} />
            Contact Us
          </Link>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-stone-500"
        >
          <span>🇳🇱 Dutch-managed team</span>
          <span>📋 Free initial consultation</span>
          <span>⚡ Response within 24 hours</span>
          <span>🔒 NDA available on request</span>
        </motion.div>
      </div>
    </section>
  )
}