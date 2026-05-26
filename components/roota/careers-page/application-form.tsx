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
  otherFile: FileState
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
  otherFile: null,
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
      data.append(
        'personalityRating',
        formData.personalityRating
      )
      data.append(
        'portfolioUrl',
        formData.portfolioUrl
      )

      if (formData.cvFile) {
        data.append('cvFile', formData.cvFile)
      }

      if (formData.portfolioFile) {
        data.append(
          'portfolioFile',
          formData.portfolioFile
        )
      }

      if (formData.coverLetterFile) {
        data.append(
          'coverLetterFile',
          formData.coverLetterFile
        )
      }
if (formData.otherFile) {
  data.append(
    'otherFile',
    formData.otherFile
  )
}
      const response = await fetch(
        '/api/application',
        {
          method: 'POST',
          body: data,
        }
      )

      if (!response.ok) {
        throw new Error(
          'Failed to send application'
        )
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
  otherFile: null,
})
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white">

      <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: '-50px',
          }}
          transition={{
            duration: 0.6,
            ease: 'easeOut',
          }}
          className="mb-10 md:mb-12 text-center"
        >

          <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-white/40 backdrop-blur-md border border-white/50 shadow-md mb-4">

            <p className="text-xs sm:text-sm font-medium text-orange-500">
              {t.applicationForm.badge}
            </p>

          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight mb-4">
            {t.applicationForm.title}
          </h2>

          <p className="text-sm sm:text-base text-stone-500 leading-relaxed max-w-xl mx-auto">
            {t.applicationForm.description}
          </p>

        </motion.div>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: '-50px',
          }}
          transition={{
            duration: 0.6,
            delay: 0.1,
            ease: 'easeOut',
          }}
          className="bg-stone-50 border border-stone-200 rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10"
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
                {
                  t.applicationForm
                    .successDescription
                }
              </p>

            </div>

          ) : (

            <form
              onSubmit={handleSubmit}
              className="space-y-5 md:space-y-6"
            >

              {/* NAME + EMAIL */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div className="space-y-2">

                  <label className="text-sm font-medium text-stone-700">
                    {
                      t.applicationForm
                        .fullNameLabel
                    }
                  </label>

                  <input
                    type="text"
                    name="fullName"
                    value={
                      formData.fullName
                    }
                    onChange={
                      handleInputChange
                    }
                    placeholder={
                      t.applicationForm
                        .fullNamePlaceholder
                    }
                    required
                    className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl text-sm"
                  />

                </div>

                <div className="space-y-2">

                  <label className="text-sm font-medium text-stone-700">
                    {
                      t.applicationForm
                        .emailLabel
                    }
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={
                      formData.email
                    }
                    onChange={
                      handleInputChange
                    }
                    placeholder={
                      t.applicationForm
                        .emailPlaceholder
                    }
                    required
                    className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl text-sm"
                  />

                </div>

              </div>

              {/* PHONE + POSITION */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div className="space-y-2">

                  <label className="text-sm font-medium text-stone-700">
                    {
                      t.applicationForm
                        .phoneLabel
                    }
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={
                      formData.phone
                    }
                    onChange={
                      handleInputChange
                    }
                    placeholder={
                      t.applicationForm
                        .phonePlaceholder
                    }
                    required
                    className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl text-sm"
                  />

                </div>

                <div className="space-y-2">

                  <label className="text-sm font-medium text-stone-700">
                    {
                      t.applicationForm
                        .positionLabel
                    }
                  </label>

                  <select
                    name="position"
                    value={
                      formData.position
                    }
                    onChange={
                      handleInputChange
                    }
                    required
                    className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl text-sm"
                  >

                    <option
                      value=""
                      disabled
                    >
                      {
                        t.applicationForm
                          .positionPlaceholder
                      }
                    </option>

                    <option value="ai-automation">
                      {
                        t
                          .applicationForm
                          .positions
                          .aiAutomation
                      }
                    </option>

                    <option value="application">
                      {
                        t
                          .applicationForm
                          .positions
                          .application
                      }
                    </option>

                    <option value="fullstack">
                      {
                        t
                          .applicationForm
                          .positions
                          .fullstack
                      }
                    </option>

                    <option value="backend">
                      {
                        t
                          .applicationForm
                          .positions
                          .backend
                      }
                    </option>

                    <option value="frontend">
                      {
                        t
                          .applicationForm
                          .positions
                          .frontend
                      }
                    </option>

                    <option value="uiux">
                      {
                        t
                          .applicationForm
                          .positions
                          .uiux
                      }
                    </option>

                  </select>

                </div>

              </div>

              {/* EXPERIENCE */}
              <div className="space-y-2">

                <label className="text-sm font-medium text-stone-700">
                  {
                    t.applicationForm
                      .experienceLabel
                  }
                </label>

                <select
                  name="experienceLevel"
                  value={
                    formData
                      .experienceLevel
                  }
                  onChange={
                    handleInputChange
                  }
                  required
                  className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl text-sm"
                >

                  <option
                    value=""
                    disabled
                  >
                    {
                      t.applicationForm
                        .experiencePlaceholder
                    }
                  </option>

                  <option value="junior">
                    {
                      t
                        .applicationForm
                        .experienceLevels
                        .junior
                    }
                  </option>

                  <option value="mid">
                    {
                      t
                        .applicationForm
                        .experienceLevels
                        .mid
                    }
                  </option>

                  <option value="senior">
                    {
                      t
                        .applicationForm
                        .experienceLevels
                        .senior
                    }
                  </option>

                </select>

              </div>

              {/* PERSONALITY */}
              <div className="space-y-2">

                <label className="text-sm font-medium text-stone-700">
                  {
                    t.applicationForm
                      .personalityLabel
                  }
                </label>

                <p className="text-xs text-stone-400">
                  {
                    t.applicationForm
                      .personalityDescription
                  }
                </p>

                <input
                  type="text"
                  name="personalityRating"
                  value={
                    formData
                      .personalityRating
                  }
                  onChange={
                    handleInputChange
                  }
                  placeholder={
                    t.applicationForm
                      .personalityPlaceholder
                  }
                  required
                  className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl text-sm"
                />

              </div>

              {/* PORTFOLIO URL */}
              <div className="space-y-2">

                <label className="text-sm font-medium text-stone-700">
                  {
                    t.applicationForm
                      .portfolioUrlLabel
                  }
                </label>

                <input
                  type="url"
                  name="portfolioUrl"
                  value={
                    formData.portfolioUrl
                  }
                  onChange={
                    handleInputChange
                  }
                  placeholder={
                    t.applicationForm
                      .portfolioUrlPlaceholder
                  }
                  className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl text-sm"
                />

              </div>

              {/* FILES */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">

                {[
  {
    label:
      t.applicationForm
        .cvLabel,
    file:
      formData.cvFile,
    text:
      t.applicationForm
        .uploadCv,
    accept:
      '.pdf,.doc,.docx',
    key: 'cvFile',
  },

  {
    label:
      t.applicationForm
        .portfolioLabel,
    file:
      formData
        .portfolioFile,
    text:
      t.applicationForm
        .uploadPortfolio,
    accept:
      '.zip,.pdf,.jpg,.png',
    key:
      'portfolioFile',
  },

  {
    label:
      t.applicationForm
        .coverLetterLabel,
    file:
      formData
        .coverLetterFile,
    text:
      t.applicationForm
        .uploadCoverLetter,
    accept:
      '.pdf,.doc,.docx',
    key:
      'coverLetterFile',
  },

  {
    label:
  t.applicationForm
    .otherSupportingDocuments,

    file:
      formData
        .otherFile,

    text:
      'Upload Others',

    accept:
      '.pdf,.doc,.docx,.zip,.jpg,.png',

    key:
      'otherFile',
  },

                ].map(item => (
  <div
    key={item.key}
    className="
      space-y-2
      flex
      flex-col
    "
  >

    <label
  className="
    text-sm
    font-medium
    text-stone-700

    min-h-[72px]

    flex
    items-start

    leading-relaxed
  "
>
      {item.label}
    </label>

    <label
      className="
        flex
        flex-col
        items-center
        justify-center

        min-h-[140px]

        px-4
        py-5

        bg-white

        border-2
        border-dashed
        border-stone-200

        rounded-xl

        cursor-pointer

        text-center
      "
    >

      <Upload
        size={18}
        className="mb-2 text-stone-400"
      />

      <span className="text-xs text-stone-500 break-all">
        {item.file
          ? item.file.name
          : item.text}
      </span>

      <input
        type="file"
        accept={item.accept}
        onChange={e =>
          handleFileChange(
            e,
            item.key
          )
        }
        className="hidden"
      />

    </label>

  </div>
))}

              </div>

              <button
                type="submit"
                disabled={loading}
  className="w-full py-3 md:py-4 bg-[#2F5AA6] text-white rounded-xl text-sm font-semibold hover:bg-[#274B8A] transition flex items-center justify-center gap-2"
              >

                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    {
                      t.applicationForm
                        .sending
                    }
                  </>
                ) : (
                  <>
                    {
                      t.applicationForm
                        .submit
                    }
                    <ArrowRight
                      size={16}
                    />
                  </>
                )}

              </button>

              <p className="text-xs text-stone-400 text-center">
                {
                  t.applicationForm
                    .footerText
                }
              </p>

            </form>

          )}

        </motion.div>

      </div>

    </section>
  )
}