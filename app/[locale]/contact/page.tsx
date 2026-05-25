import Navbar from '@/components/roota/navbar'
import ContactForm from '@/components/roota/contact-page/contact-form'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-black relative">

      <Navbar />

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <ContactForm />
        </div>
      </section>

    </main>
  )
}