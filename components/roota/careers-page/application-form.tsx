'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Upload, ArrowRight } from 'lucide-react'
import { usePathname } from 'next/navigation'

import { translations } from '@/lib/translation'

type FileState = File | null

type FormState = {
  fullName: string
  email: string
  phone: string
  position: string
  experienceLevel: string
  personalityRating: string
  portfolioUrl: string
  cvFile: FileState
  portfolioFile: FileState
  coverLetterFile: FileState
}

export default function ApplicationForm() {
  const pathname = usePathname()
  const locale = pathname.split('/')[1] || 'en'

  const t =
    translations[locale as keyof typeof translations] ||
    translations.en

  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experienceLevel: '',
    personalityRating: '',
    portfolioUrl: '',
    cvFile: null,
    portfolioFile: null,
    coverLetterFile: null,
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => {
    const file = e.target.files?.[0]

    if (file) {
      setFormData(prev => ({ ...prev, [fieldName]: file }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setLoading(true)

    try {
      const data = new FormData()

      data.append('fullName', formData.fullName)
      data.append('email', formData.email)
      data.append('phone', formData.phone)
      data.append('position', formData.position)
      data.append('experienceLevel', formData.experienceLevel)
      data.append('personalityRating', formData.personalityRating)
      data.append('portfolioUrl', formData.portfolioUrl)

      if (formData.cvFile) {
        data.append('cvFile', formData.cvFile)
      }

      if (formData.portfolioFile) {
        data.append('portfolioFile', formData.portfolioFile)
      }

      if (formData.coverLetterFile) {
        data.append('coverLetterFile', formData.coverLetterFile)
      }

      const response = await fetch('/api/application', {
        method: 'POST',
        body: data,
      })

      if (!response.ok) {
        throw new Error('Failed to send application')
      }

      setSubmitted(true)

      setFormData({
        fullName: '',
        email: '',
        phone: '',
        position: '',
        experienceLevel: '',
        personalityRating: '',
        portfolioUrl: '',
        cvFile: null,
        portfolioFile: null,
        coverLetterFile: null,
      })
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-6 md:px-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-12 text-center"
        >

          {/* GLASS CAREER BADGE */}
          <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-white/40 backdrop-blur-md border border-white/50 shadow-md mb-4">
            <p className="text-sm font-medium text-orange-500">
              {t.applicationForm.badge}
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 tracking-tight mb-4">
            {t.applicationForm.title}
          </h2>

          <p className="text-base text-stone-500 leading-relaxed max-w-xl mx-auto">
            {t.applicationForm.description}
          </p>
        </motion.div>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="bg-stone-50 border border-stone-200 rounded-2xl p-8 md:p-10"
        >
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight
                  className="text-orange-500 rotate-45"
                  size={24}
                  strokeWidth={1.5}
                />
              </div>

              <h3 className="text-xl font-semibold text-stone-900 mb-2">
                {t.applicationForm.successTitle}
              </h3>

              <p className="text-sm text-stone-500">
                {t.applicationForm.successDescription}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* NAME + EMAIL */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div className="space-y-2">
                  <label className="text-sm font-medium text-stone-700">
                    {t.applicationForm.fullNameLabel}
                  </label>

                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder={t.applicationForm.fullNamePlaceholder}
                    required
                    className="w-full px-4 py-3 bg-white border border-stone-200 rounded-lg text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-orange-300 transition-colors text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-stone-700">
                    {t.applicationForm.emailLabel}
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t.applicationForm.emailPlaceholder}
                    required
                    className="w-full px-4 py-3 bg-white border border-stone-200 rounded-lg text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-orange-300 transition-colors text-sm"
                  />
                </div>
              </div>

              {/* PHONE + POSITION */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div className="space-y-2">
                  <label className="text-sm font-medium text-stone-700">
                    {t.applicationForm.phoneLabel}
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder={t.applicationForm.phonePlaceholder}
                    required
                    className="w-full px-4 py-3 bg-white border border-stone-200 rounded-lg text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-orange-300 transition-colors text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-stone-700">
                    {t.applicationForm.positionLabel}
                  </label>

                 <select
  name="position"
  value={formData.position}
  onChange={handleInputChange}
  required
  className="w-full px-4 py-3 bg-white border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:border-orange-300 transition-colors text-sm"
>
  <option value="" disabled>
    {t.applicationForm.positionPlaceholder}
  </option>

  {/* 1. AI AUTOMATION */}
  <option value="ai-automation">
    {t.applicationForm.positions.aiAutomation}
  </option>

  {/* 2. APPLICATION DEVELOPMENT */}
  <option value="application">
    {t.applicationForm.positions.application}
  </option>

  {/* 3. FULLSTACK */}
  <option value="fullstack">
    {t.applicationForm.positions.fullstack}
  </option>

  {/* 4. BACKEND */}
  <option value="backend">
    {t.applicationForm.positions.backend}
  </option>

  {/* 5. FRONTEND */}
  <option value="frontend">
    {t.applicationForm.positions.frontend}
  </option>

  {/* 6. UI/UX */}
  <option value="uiux">
    {t.applicationForm.positions.uiux}
  </option>
</select>
                </div>
              </div>

              {/* EXPERIENCE */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-stone-700">
                  {t.applicationForm.experienceLabel}
                </label>

                <select
                  name="experienceLevel"
                  value={formData.experienceLevel}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:border-orange-300 transition-colors text-sm"
                >
                  <option value="" disabled>
                    {t.applicationForm.experiencePlaceholder}
                  </option>

                  <option value="junior">
                    {t.applicationForm.experienceLevels.junior}
                  </option>

                  <option value="mid">
                    {t.applicationForm.experienceLevels.mid}
                  </option>

                  <option value="senior">
                    {t.applicationForm.experienceLevels.senior}
                  </option>
                </select>
              </div>

              {/* PERSONALITY */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-stone-700">
                  {t.applicationForm.personalityLabel}
                </label>

                <p className="text-xs text-stone-400">
                  {t.applicationForm.personalityDescription}
                </p>

                <input
                  type="text"
                  name="personalityRating"
                  value={formData.personalityRating}
                  onChange={handleInputChange}
                  placeholder={t.applicationForm.personalityPlaceholder}
                  required
                  className="w-full px-4 py-3 bg-white border border-stone-200 rounded-lg text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-orange-300 transition-colors text-sm"
                />
              </div>

              {/* PORTFOLIO URL */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-stone-700">
                  {t.applicationForm.portfolioUrlLabel}
                </label>

                <input
                  type="url"
                  name="portfolioUrl"
                  value={formData.portfolioUrl}
                  onChange={handleInputChange}
                  placeholder={t.applicationForm.portfolioUrlPlaceholder}
                  className="w-full px-4 py-3 bg-white border border-stone-200 rounded-lg text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-orange-300 transition-colors text-sm"
                />
              </div>

              {/* FILES */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                {/* CV */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-stone-700">
                    {t.applicationForm.cvLabel}
                  </label>

                  <label className="block px-4 py-6 bg-white border-2 border-dashed border-stone-200 rounded-lg cursor-pointer text-center">
                    <Upload
                      size={18}
                      className="mx-auto mb-2 text-stone-400"
                    />

                    <span className="text-xs text-stone-500">
                      {formData.cvFile
                        ? formData.cvFile.name
                        : t.applicationForm.uploadCv}
                    </span>

                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => handleFileChange(e, 'cvFile')}
                      className="hidden"
                      required
                    />
                  </label>
                </div>

                {/* PORTFOLIO */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-stone-700">
                    {t.applicationForm.portfolioLabel}
                  </label>

                  <label className="block px-4 py-6 bg-white border-2 border-dashed border-stone-200 rounded-lg cursor-pointer text-center">
                    <Upload
                      size={18}
                      className="mx-auto mb-2 text-stone-400"
                    />

                    <span className="text-xs text-stone-500">
                      {formData.portfolioFile
                        ? formData.portfolioFile.name
                        : t.applicationForm.uploadPortfolio}
                    </span>

                    <input
                      type="file"
                      accept=".zip,.pdf,.jpg,.png"
                      onChange={(e) =>
                        handleFileChange(e, 'portfolioFile')
                      }
                      className="hidden"
                    />
                  </label>
                </div>

                {/* COVER LETTER */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-stone-700">
                    {t.applicationForm.coverLetterLabel}
                  </label>

                  <label className="block px-4 py-6 bg-white border-2 border-dashed border-stone-200 rounded-lg cursor-pointer text-center">
                    <Upload
                      size={18}
                      className="mx-auto mb-2 text-stone-400"
                    />

                    <span className="text-xs text-stone-500">
                      {formData.coverLetterFile
                        ? formData.coverLetterFile.name
                        : t.applicationForm.uploadCoverLetter}
                    </span>

                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) =>
                        handleFileChange(e, 'coverLetterFile')
                      }
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={loading}
                className="w-full px-8 py-3.5 bg-blue-500 text-white font-semibold text-sm rounded-xl hover:bg-blue-400 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-stone-950 border-t-transparent rounded-full animate-spin" />
                    {t.applicationForm.sending}
                  </>
                ) : (
                  <>
                    {t.applicationForm.submit}
                    <ArrowRight size={16} />
                  </>
                )}
              </button>

              <p className="text-xs text-stone-400 text-center">
                {t.applicationForm.footerText}
              </p>

            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}