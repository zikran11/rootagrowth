'use client'

import { motion } from 'framer-motion'
import {
  Mail,
  MapPin,
  Phone,
  Globe,
  Check,
  MessageSquareMore
} from 'lucide-react'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

import { translations } from '@/lib/translation'

export default function ContactSection() {
  const pathname = usePathname()

  const locale = pathname.split('/')[1] || 'en'

  const t =
    translations[locale as keyof typeof translations] ||
    translations.en

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Development',
    message: ''
  })

  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target

    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault()

    setIsLoading(true)

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    if (!response.ok) {
      throw new Error('Failed to send message')
    }

    setIsLoading(false)
    setIsSubmitted(true)

    setFormData({
      name: '',
      email: '',
      company: '',
      service: 'Development',
      message: ''
    })

    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  return (
    <section className="min-h-screen bg-white text-black">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-16 sm:py-20 md:py-24">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.7
          }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-20"
        >

          <div className="flex justify-center mb-6 md:mb-8">

            <div className="w-16 h-16 rounded-2xl bg-[#2F5AA6] flex items-center justify-center">
  <MessageSquareMore className="w-8 h-8 text-white" />


            </div>

          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-5 md:mb-6 tracking-tight">

            {t.contactSection.title}

            <br />

          </h1>

          <p className="text-base md:text-lg lg:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">

            {t.contactSection.description}

          </p>

        </motion.div>

        {/* SUCCESS MESSAGE */}
        {isSubmitted && (

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            className="bg-blue-50 border border-blue-200 rounded-3xl p-5 md:p-6 mb-8 md:mb-10 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >

            <div className="w-12 h-12 rounded-full bg-[#2F5AA6] flex items-center justify-center shrink-0">

              <Check className="text-white" />

            </div>

            <div>

              <h3 className="font-semibold text-lg md:text-xl text-black">

                {t.contactSection.successTitle}

              </h3>

              <p className="text-sm md:text-base text-gray-600">

                {t.contactSection.successDescription}

              </p>

            </div>

          </motion.div>

        )}

        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{
            opacity: 0,
            y: 30
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.7
          }}
          viewport={{ once: true }}
          className="space-y-6 md:space-y-8"
        >

          {/* ROW 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">

            <div>

              <label className="block mb-3 text-sm font-medium text-gray-700">

                {t.contactSection.fullNameLabel}

              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={
                  t.contactSection.fullNamePlaceholder
                }
                required
                className="w-full bg-white border border-gray-200 rounded-2xl px-4 md:px-5 py-3 md:py-4 text-base md:text-lg text-black placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition"
              />

            </div>

            <div>

              <label className="block mb-3 text-sm font-medium text-gray-700">

                {t.contactSection.emailLabel}

              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={
                  t.contactSection.emailPlaceholder
                }
                required
                className="w-full bg-white border border-gray-200 rounded-2xl px-4 md:px-5 py-3 md:py-4 text-base md:text-lg text-black placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition"
              />

            </div>

          </div>

          {/* ROW 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">

            <div>

              <label className="block mb-3 text-sm font-medium text-gray-700">

                {t.contactSection.companyLabel}

              </label>

              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder={
                  t.contactSection.companyPlaceholder
                }
                className="w-full bg-white border border-gray-200 rounded-2xl px-4 md:px-5 py-3 md:py-4 text-base md:text-lg text-black placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition"
              />

            </div>

            <div>

              <label className="block mb-3 text-sm font-medium text-gray-700">

                {t.contactSection.serviceLabel}

              </label>

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-white border border-gray-200 rounded-2xl px-4 md:px-5 py-3 md:py-4 text-base md:text-lg text-black focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition"
              >

                <option>
  {t.contactSection.services.aiAutomation}
</option>

<option>
  {t.contactSection.services.application}
</option>

<option>
  {t.contactSection.services.fullstack}
</option>

<option>
  {t.contactSection.services.backend}
</option>

<option>
  {t.contactSection.services.frontend}
</option>

<option>
  {t.contactSection.services.uiux}
</option>

<option>
  {t.contactSection.services.dedicatedDeveloper}
</option>

<option>
  {t.contactSection.services.others}
</option>
              </select>

            </div>

          </div>

          {/* MESSAGE */}
          <div>

            <label className="block mb-3 text-sm font-medium text-gray-700">

              {t.contactSection.messageLabel}

            </label>

            <textarea
              rows={6}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={
                t.contactSection.messagePlaceholder
              }
              required
              className="w-full bg-white border border-gray-200 rounded-2xl px-4 md:px-5 py-3 md:py-4 text-base md:text-lg text-black placeholder:text-gray-400 resize-none focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition"
            />

          </div>

          {/* BUTTON */}
          <div className="flex justify-center md:justify-end">

            <motion.button
              whileHover={{
                scale: 1.03
              }}
              whileTap={{
                scale: 0.97
              }}
              type="submit"
              disabled={isLoading}
className="w-full md:w-auto justify-center bg-[#2F5AA6] text-white px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-[#274B8A] transition-all duration-300 shadow-lg shadow-[#2F5AA6]/20 flex items-center gap-3"            >

              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  {t.contactSection.sending}
                </>
              ) : (
                <>
                  {t.contactSection.send}
                </>
              )}

            </motion.button>

          </div>

        </motion.form>

        {/* CONTACT INFO */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.7
          }}
          viewport={{ once: true }}
          className="bg-gray-50 border border-gray-200 rounded-[32px] p-6 sm:p-8 md:p-12 mt-16 md:mt-24"
        >

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

            <div className="flex gap-4 md:gap-5">

<div className="w-14 h-14 rounded-2xl bg-[#2F5AA6] flex items-center justify-center shrink-0">
  <Mail className="w-6 h-6 text-white" />

              </div>

              <div>

                <h3 className="text-xl md:text-2xl font-semibold mb-2">

                  {t.contactSection.emailTitle}

                </h3>

                <p className="text-base md:text-lg text-gray-700">
                  info@roota.nl
                </p>

                <p className="text-gray-500 mt-1">
                  {t.contactSection.emailDescription}
                </p>

              </div>

            </div>

            <div className="flex gap-4 md:gap-5">

<div className="w-14 h-14 rounded-2xl bg-[#2F5AA6] flex items-center justify-center shrink-0">
  <MapPin className="w-6 h-6 text-white" />

              </div>

              <div>

                <h3 className="text-xl md:text-2xl font-semibold mb-2">

                  {t.contactSection.addressTitle}

                </h3>

                <p className="text-base md:text-lg text-gray-700">

                  Galvanistraat 265, 3029AD Rotterdam

                </p>

                <p className="text-gray-500 mt-1">

                  {t.contactSection.addressDescription}

                </p>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  )
}