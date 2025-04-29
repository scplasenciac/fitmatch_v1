import React from 'react'

export default function AboutUs() {
  const activities = [
    {
      id: 1,
      src: 'https://scplasenciac.github.io/fitmatch_v1/images/soccer.jpg',
      alt: 'Fútbol en equipo',
    },
    {
      id: 2,
      src: 'https://scplasenciac.github.io/fitmatch_v1/images/yoga.jpg',
      alt: 'Yoga al atardecer',
    },
    {
      id: 3,
      src: 'https://scplasenciac.github.io/fitmatch_v1/images/paddleboard.jpg',
      alt: 'Paddle board',
    },
    {
      id: 4,
      src: 'https://scplasenciac.github.io/fitmatch_v1/images/sandboard.jpg',
      alt: 'Sandboard en dunas',
    },
    {
      id: 5,
      src: 'https://scplasenciac.github.io/fitmatch_v1/images/kayak.jpg',
      alt: 'Kayak en grupo',
    }
  ]

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

        {/* Grid de imágenes */}
        <div className="mt-16 flex flex-nowrap gap-4 overflow-x-auto pb-4 px-4">
          {activities.map((activity) => (
            <div key={activity.id} className="relative flex-none w-80 h-60 overflow-hidden rounded-xl shadow-lg">
              <img
                src={activity.src}
                alt={activity.alt}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 