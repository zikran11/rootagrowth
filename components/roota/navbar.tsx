'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import { translations } from '@/lib/translation'

/* LANGUAGE SWITCHER */
function LanguageSwitcher() {
  const [open, setOpen] = useState(false)

  const pathname = usePathname()
  const segments = pathname.split('/')

  const currentLocale = segments[1] || 'en'

  const languages = [
    {
      code: 'en',
      flag: '/en.png',
    },
    {
      code: 'nl',
      flag: '/nl.png',
    },
    {
      code: 'fr',
      flag: '/fr.png',
    },
    {
      code: 'de',
      flag: '/de.png',
    },
  ]

  const current =
    languages.find((lang) => lang.code === currentLocale) ||
    languages[0]

  const changeLocale = (locale: string) => {
    const newPath = [...segments]
    newPath[1] = locale
    return newPath.join('/')
  }

  return (
    <div className="relative">

      {/* BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="
          flex items-center gap-2
          px-3 py-2
          rounded-full
          border border-white/10
          bg-white/5
          backdrop-blur
        "
      >
        <Image
          src={current.flag}
          alt={current.code}
          width={26}
          height={18}
          className="rounded-sm"
        />

        <ChevronDown
          size={16}
          className={`
            text-white transition
            ${open ? 'rotate-180' : ''}
          `}
        />
      </button>

      {/* DROPDOWN */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="
              absolute
              right-0
              top-14
              w-20
              bg-white
              rounded-2xl
              p-3
              shadow-2xl
              flex flex-col gap-3
            "
          >
            {languages.map((lang) => (
              <Link
                key={lang.code}
                href={changeLocale(lang.code)}
                onClick={() => setOpen(false)}
                className="
                  flex justify-center
                  hover:scale-110
                  transition
                "
              >
                <Image
                  src={lang.flag}
                  alt={lang.code}
                  width={34}
                  height={24}
                  className="rounded-sm"
                />
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}

/* NAVBAR */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const pathname = usePathname()

  const locale = pathname.split('/')[1] || 'en'

  const t =
    translations[locale as keyof typeof translations] ||
    translations.en

  const navItems = [
    { label: t.navbar.home, href: `/${locale}` },
    { label: t.navbar.about, href: `/${locale}/about` },
    { label: t.navbar.services, href: `/${locale}/services` },
    { label: t.navbar.careers, href: `/${locale}/careers` },
    { label: t.navbar.contact, href: `/${locale}/contact` },
  ]

  return (
    <div className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4">

      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="
          w-full
          max-w-6xl
          rounded-full
          border border-white/[0.06]
          bg-[#081120]/50
          backdrop-blur-2xl
          shadow-[0_8px_40px_rgba(37,99,235,0.15)]
        "
      >
        <div className="px-6 lg:px-8">

          <div className="flex items-center justify-between h-20">

            {/* LOGO */}
            <Link
              href={`/${locale}`}
              className="flex items-center"
            >
              <Image
                src="/logo.png"
                alt="Roota"
                width={220}
                height={100}
                className="
                  object-contain
                  w-[180px]
                  md:w-[220px]
                "
                priority
              />
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center gap-1">

              {navItems.map((item) => {
                const isActive = pathname === item.href

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`
                      px-4 lg:px-5
                      py-2.5
                      whitespace-nowrap
                      text-sm
                      font-bold
                      rounded-full
                      transition-all

                      ${
                        isActive
                          ? `
                            text-white
                            bg-white/10
                            border border-white/10
                          `
                          : `
                            text-white/75
                            hover:text-white
                            hover:bg-white/5
                          `
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                )
              })}

            </div>

            {/* RIGHT */}
            <div className="hidden md:flex items-center gap-3">

              <LanguageSwitcher />

              <Link
                href={`/${locale}/contact`}
                className="
                  px-5 py-2.5
                  rounded-full
                  bg-blue-600
                  text-white
                  text-sm
                  font-medium
                  hover:bg-blue-500
                  transition
                "
              >
                {t.navbar.getStarted}
              </Link>

            </div>

            {/* MOBILE */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="
                md:hidden
                text-white
              "
            >
              {isOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>

          </div>

        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>

          {isOpen && (

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="
                md:hidden
                border-t
                border-white/10
              "
            >
              <div className="p-6 space-y-3">

                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="
                      block
                      p-3
                      rounded-xl
                      text-white/80
                      hover:bg-white/10
                    "
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="flex justify-center pt-2">
                  <LanguageSwitcher />
                </div>

              </div>
            </motion.div>

          )}

        </AnimatePresence>

      </motion.nav>

    </div>
  )
}