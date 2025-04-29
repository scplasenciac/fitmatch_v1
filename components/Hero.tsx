'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import BlinkingText from './BlinkingText'
import { getImagePath } from '@/utils/imagePath'

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-8">
      <div className="container mx-auto px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
        {/* Text Content */}
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto lg:shrink-0 lg:pt-8">
          <motion.h1 
            className="mt-4 max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Encuentra
            <br />
            <span className="text-primary-700">
              <BlinkingText />
            </span>
            <span className="mt-1 block">
              y mejora tu salud
            </span>
          </motion.h1>
          <motion.p 
            className="mt-6 text-lg leading-8 text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Reducimos tus tiempos de búsqueda y reserva para que disfrutes de lo que realmente importa
          </motion.p>
          <motion.div 
            className="mt-10 flex items-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="#planes"
              className="rounded-full bg-primary-700 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700"
            >
              Únete a nuestra comunidad
            </Link>
          </motion.div>
        </div>

        {/* Image Section */}
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:mx-0 lg:mt-0 lg:max-w-none lg:flex-none">
          <motion.div 
            className="w-full max-w-3xl flex-none sm:max-w-5xl lg:max-w-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <img
              src={getImagePath('sports-collage.jpg')}
              alt="Collage de deportes"
              className="w-full h-auto object-contain rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
