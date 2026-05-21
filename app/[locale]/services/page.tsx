import Navbar from '@/components/roota/navbar'
import Footer from '@/components/roota/footer'
import ServicesHero from '@/components/roota/services-page/services-hero'
import ServicesList from '@/components/roota/services-page/services-list'
import DetailedExplanations from '@/components/roota/services-page/detailed-explanations'

export const metadata = {
  title: 'Services - Roota | Developer Staffing Solutions',
  description: 'Explore our comprehensive developer staffing services. From frontend to backend, design to deployment—find specialized developers for every project need.',
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ServicesHero />
      <ServicesList />
      <Footer />
    </main>
  )
}
