'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function FitMatchIntro() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
            ¿Qué es FitMatch y cómo funciona?
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
            Somos la app de actividades deportivas más potente y fácil de usar, diseñada para que personas de Latinoamérica reserven canchas, clases y eventos deportivos rápido, fácil y seguro. ¡Descarga la app!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-48 h-16 bg-black rounded-lg flex items-center justify-center"
            >
              <img
                src="https://play.google.com/intl/es-419/badges/static/images/badges/es-419_badge_web_generic.png"
                alt="Disponible en Google Play"
                className="h-12 w-auto"
              />
            </Link>
            <Link
              href="https://apps.apple.com/app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-48 h-16 bg-black rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              <div className="flex items-center text-white">
                <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Descargar en</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 