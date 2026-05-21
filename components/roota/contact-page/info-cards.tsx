'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Globe } from 'lucide-react'

const info = [
  {
    icon: Mail,
    title: 'Email',
    value: 'info@roota.nl',
    description: 'We typically respond within 24 hours'
  },
  {
    icon: MapPin,
    title: 'Address',
    value: 'Galvanistraat 265',
    description: '3029AD Rotterdam, Netherlands'
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+31 (0)6 XXXX XXXX',
    description: 'Available Mon-Fri, 9am-5pm CET'
  },
  {
    icon: Globe,
    title: 'Locations',
    value: 'Rotterdam & Jakarta',
    description: 'Serving European and Indonesian markets'
  }
]

export default function InfoCards() {
  return (
    <motion.div className="space-y-6">
      {info.map((item, index) => {
        const Icon = item.icon
        return (
          <motion.div key={index}>
            <div>
              <Icon />
              <h3>{item.title}</h3>
              <p>{item.value}</p>
              <p>{item.description}</p>
            </div>
          </motion.div>
        )
      })}
    </motion.div>
  )
}