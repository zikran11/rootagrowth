import Navbar from '@/components/roota/navbar'
import Footer from '@/components/roota/footer'
import CareersHero from '@/components/roota/careers-page/careers-hero'
import CareersOpenings from '@/components/roota/careers-page/careers-openings'
import ApplicationForm from '@/components/roota/careers-page/application-form'

export const metadata = {
  title: 'Careers - Roota | Join Our Team',
  description: 'Join Roota and build a global developer network. We&apos;re hiring talented people passionate about connecting European businesses with Indonesian developers.',
}

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <CareersHero />
      <CareersOpenings />
      <ApplicationForm />
      <Footer />
    </main>
  )
}
