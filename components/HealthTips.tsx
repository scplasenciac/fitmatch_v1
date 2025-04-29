import React from 'react'

const tips = [
  {
    id: 1,
    title: 'Entrena 3 veces por semana',
    description: 'Reduce el riesgo de enfermarte',
    icon: '💪',
  },
  {
    id: 2,
    title: '¿Sabes cuál es tu peso saludable?',
    description: 'Calcula tu IMC',
    icon: '⚖️',
  },
  {
    id: 3,
    title: 'Recetas saludables',
    description: 'Descubre opciones nutritivas y deliciosas',
    icon: '🥗',
  },
]

export default function HealthTips() {
  return (
    <section id="tips" className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center animate-fade-in-up">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Tips saludables
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tips.map((tip) => (
            <div
              key={tip.id}
              className="relative flex flex-col items-center rounded-2xl bg-white p-8 shadow-lg animate-fade-in-up"
              style={{ animationDelay: `${tip.id * 0.2}s` }}
            >
              <span className="text-4xl">{tip.icon}</span>
              <h3 className="mt-6 text-xl font-semibold text-gray-900 text-center">
                {tip.title}
              </h3>
              <p className="mt-4 text-center text-gray-600">
                {tip.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 