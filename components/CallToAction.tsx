import React from 'react'
import Link from 'next/link'

export default function CallToAction() {
  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 w-full h-full bg-[url('/listoparacomenzar.jpg')] bg-cover bg-center z-0" />
      <div className="absolute inset-0 w-full h-full bg-white/80 z-10" />
      <div className="container relative z-20">
        <div className="relative isolate overflow-hidden px-6 py-16 shadow-2xl sm:rounded-3xl sm:px-16 animate-fade-in-up text-center">
          <h2 className="text-3xl font-bold text-primary-900 mb-6">¿Listo para comenzar?</h2>
          <p className="text-lg text-primary-800 mb-8">
            Únete a nuestra comunidad deportiva y descubre todas las oportunidades que tenemos para ti.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-primary-700 px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700 transition-colors"
          >
            Contáctanos ahora
          </Link>
        </div>
      </div>
    </section>
  )
} 