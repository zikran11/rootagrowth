import Link from 'next/link'
import { X } from 'lucide-react'
import ContactForm from '@/components/roota/contact-page/contact-form'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-black relative">

      {/* CLOSE BUTTON */}
      <Link
        href="/"
        className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition shadow-lg shadow-blue-200"
      >
        <X size={22} />
      </Link>

      {/* CONTACT SECTION */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <ContactForm />
        </div>
      </section>

    </main>
  )
}