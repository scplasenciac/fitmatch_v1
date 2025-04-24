'use client'

import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    id: 1,
    name: 'Juan Pérez',
    role: 'Usuario',
    content: 'FitMatch ha cambiado la forma en que me relaciono con el deporte. Las actividades son variadas y siempre encuentro algo que me gusta.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Carlos Ramos',
    role: 'Usuario',
    content: 'Desde que uso FitMatch, he descubierto clases increíbles que nunca hubiera considerado. ¡La mejor decisión que he tomado para mi bienestar!',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Lo que dicen nuestros usuarios
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="relative flex flex-col rounded-2xl bg-white p-8 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: testimonial.id * 0.2 }}
            >
              <div className="flex items-center gap-x-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
                <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="mt-4 text-gray-600">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 