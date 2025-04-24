import React from 'react'

const steps = [
  {
    id: 1,
    title: 'Busca',
    description: 'Desde canchas de fútbol, clases de baile hasta deportes de aventura, encontrarás una amplia gama de opciones para disfrutar y mantenerte activo.',
    icon: '🔍',
  },
  {
    id: 2,
    title: 'Personaliza',
    description: 'Tu día, ubicación y horario, para disfrutar con amigos o practicar tus habilidades.',
    icon: '⚙️',
  },
  {
    id: 3,
    title: 'Reserva',
    description: 'Realiza tus reservas de manera rápida y sencilla, sin preocuparte por comisiones adicionales. Solo diversión, sin complicaciones.',
    icon: '✅',
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="section-padding">
      <div className="container">
        <div className="text-center animate-fade-in-up">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Cómo funciona…
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            En sólo 3 pasos
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative flex flex-col items-center animate-fade-in-up"
              style={{ animationDelay: `${step.id * 0.2}s` }}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-700 text-2xl text-white">
                {step.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {step.title}
              </h3>
              <p className="mt-4 text-center text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 