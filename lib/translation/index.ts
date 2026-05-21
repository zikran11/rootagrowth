import en from './en'
import de from './de'
import fr from './fr'
import nl from './nl'

export const translations = {
    en,
    de,
    fr,
    nl,
} as const

export type Language = keyof typeof translations