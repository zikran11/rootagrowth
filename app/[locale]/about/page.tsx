'use client'

import Navbar from '@/components/roota/navbar'
import Footer from '@/components/roota/footer'
import AboutHero from '@/components/roota/about/about-hero'
import CompanyStory from '@/components/roota/about/company-story'
import GlobalCollaboration from '@/components/roota/about/global-collaboration'
export default function AboutPage() {
  return (
    <main className="w-full overflow-hidden">
      <Navbar />
      <AboutHero />
      <CompanyStory />
      <GlobalCollaboration />
      <Footer />
    </main>
  )
}
