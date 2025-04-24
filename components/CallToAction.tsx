import React from 'react'
import Link from 'next/link'

export default function CallToAction() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="relative isolate overflow-hidden bg-primary-700 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16 animate-fade-in-up">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            ¡No te quedes sin participar!
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-100">
            Explora nuestras opciones deportivas y reserva tu lugar en la actividad que más te apasione hoy mismo.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="https://scplasenciac.github.io/fitmatch_v1/search"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary-700 shadow-sm hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              ¡Busca ahora!
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 