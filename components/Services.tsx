'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const services = [
  {
    id: 1,
    title: 'Alquiler de canchas',
    description: 'Encuentra y reserva canchas deportivas cerca de ti para practicar tus deportes favoritos.',
    icon: '🏟️',
    href: '/search?type=alquileres&tags=functional-training-musculacion-pesas&sort=latest',
  },
  {
    id: 2,
    title: 'Clases deportivas',
    description: 'Accede a clases personalizadas con instructores profesionales en diversos deportes.',
    icon: '🏋️‍♂️',
    href: '/search?type=clases',
  },
  {
    id: 3,
    title: 'Eventos deportivos',
    description: 'Participa en torneos y eventos deportivos organizados por nuestra comunidad.',
    icon: '🏆',
    href: '/search?type=eventos',
  },
]

export default function Services() {
  return (
    <section id="servicios" className="section-padding bg-gray-50">
      <div className="container">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nuestros servicios
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="block"
            >
              <motion.div
                className="relative flex flex-col items-center rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: service.id * 0.2 }}
              >
                <span className="text-4xl">{service.icon}</span>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-4 text-center text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
} 