import React from 'react'

export default function AboutUs() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="text-center animate-fade-in-up">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Sobre nosotros
          </h2>
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-2xl font-semibold text-gray-900">
            Conectando a personas con experiencias deportivas inolvidables
          </h3>
          <p className="mt-6 text-lg text-gray-600">
            En FitMatch, promovemos un estilo de vida saludable facilitando el acceso a clases y actividades deportivas para todos los gustos y niveles.
          </p>
        </div>
      </div>
    </section>
  )
} 