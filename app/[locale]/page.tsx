'use client'

import Navbar from '@/components/roota/navbar'
import Hero from '@/components/roota/hero'
import WhyChooseRoota from '@/components/roota/why-choose-roota'
import TechStack from '@/components/roota/tech-stack'
import Services from '@/components/roota/services'
import HowItWorks from '@/components/roota/how-it-works'
import WhyIndonesia from '@/components/roota/why-indonesia'
import Pricing from '@/components/roota/pricing'
import Footer from '@/components/roota/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <WhyChooseRoota />
      <TechStack />
      <Services />
      <HowItWorks />
      <WhyIndonesia />
      <Pricing />
      <Footer />
    </main>
  )
}
