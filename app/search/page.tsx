'use client'

import React, { useState } from 'react'
import Header from '@/components/Header'
import { useSearchParams } from 'next/navigation'

interface Activity {
  id: string
  name: string
  description: string
  price: number
  available: boolean
  instructor?: string
  date?: string
  location?: string
}

export default function SearchPage() {
  const searchParams = useSearchParams()
  const type = searchParams.get('type')
  const tags = searchParams.get('tags')
  const sort = searchParams.get('sort')

  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedTime, setSelectedTime] = useState('')
  const [searchResults, setSearchResults] = useState<Activity[]>([])
  const [isSearching, setIsSearching] = useState(false)

  const categories = {
    clases: [
      { id: 'crossfit', name: 'CrossFit' },
      { id: 'crosstraining', name: 'CrossTraining' },
      { id: 'futbol', name: 'Entrenamiento de Fútbol' },
      { id: 'tennis', name: 'Entrenamiento de Tennis' },
      { id: 'yoga', name: 'Yoga' },
      { id: 'natacion', name: 'Natación' }
    ],
    eventos: [
      { id: 'maraton', name: 'Maratón' },
      { id: 'zumba', name: 'Zumba' },
      { id: 'torneo-futbol', name: 'Torneo de Fútbol' },
      { id: 'torneo-tennis', name: 'Torneo de Tennis' },
      { id: 'torneo-volley', name: 'Torneo de Volley' }
    ]
  }

  const timeSlots = [
    '08:00', '09:00', '10:00', '11:00', '12:00',
    '13:00', '14:00', '15:00', '16:00', '17:00',
    '18:00', '19:00', '20:00', '21:00'
  ]

  const getTitle = () => {
    switch (type) {
      case 'clases':
        return 'Clases Deportivas'
      case 'eventos':
        return 'Eventos Deportivos'
      default:
        return 'Alquiler de Canchas'
    }
  }

  const handleSearch = () => {
    if (!selectedDate || !selectedTime) {
      alert('Por favor selecciona una fecha y hora')
      return
    }

    setIsSearching(true)
    
    // Simulate API call with timeout
    setTimeout(() => {
      let mockResults: Activity[] = []

      if (type === 'clases') {
        mockResults = [
          {
            id: '1',
            name: `Clase de ${selectedCategory}`,
            description: 'Clase profesional con instructor certificado',
            price: 30,
            available: true,
            instructor: 'Juan Pérez',
            location: 'Centro Deportivo Principal'
          },
          {
            id: '2',
            name: `Clase premium de ${selectedCategory}`,
            description: 'Clase en grupo reducido con atención personalizada',
            price: 45,
            available: true,
            instructor: 'María García',
            location: 'Centro Deportivo Premium'
          }
        ]
      } else if (type === 'eventos') {
        mockResults = [
          {
            id: '1',
            name: `Evento: ${selectedCategory}`,
            description: 'Evento deportivo con premios y reconocimientos',
            price: 50,
            available: true,
            date: selectedDate.toLocaleDateString(),
            location: 'Estadio Municipal'
          },
          {
            id: '2',
            name: `Torneo: ${selectedCategory}`,
            description: 'Torneo oficial con árbitros certificados',
            price: 75,
            available: true,
            date: selectedDate.toLocaleDateString(),
            location: 'Complejo Deportivo Central'
          }
        ]
      }
      
      setSearchResults(mockResults)
      setIsSearching(false)
    }, 1000)
  }

  const handleReserve = (activityId: string) => {
    alert(`Reservando ${type === 'clases' ? 'clase' : 'evento'} ${activityId} para ${selectedDate.toLocaleDateString()} a las ${selectedTime}`)
  }

  return (
    <main className="min-h-screen">
      <div className="pt-24">
        <section className="section-padding">
          <div className="container">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                {getTitle()}
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {type === 'clases' 
                  ? 'Encuentra la clase perfecta para mejorar tus habilidades'
                  : type === 'eventos'
                  ? 'Participa en emocionantes eventos deportivos'
                  : 'Selecciona tu deporte y horario preferido'}
              </p>
            </div>

            <div className="mt-16 max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="space-y-8">
                  {/* Category Selection */}
                  {(type === 'clases' || type === 'eventos') && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-4">
                        {type === 'clases' ? 'Seleccionar Clase' : 'Seleccionar Evento'}
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        {categories[type as keyof typeof categories].map((category) => (
                          <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                              selectedCategory === category.id
                                ? 'bg-primary-600 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            {category.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Date Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Fecha
                    </label>
                    <input
                      type="date"
                      value={selectedDate.toISOString().split('T')[0]}
                      onChange={(e) => setSelectedDate(new Date(e.target.value))}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>

                  {/* Time Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Hora
                    </label>
                    <div className="mt-2 grid grid-cols-4 gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`px-4 py-2 rounded-md text-sm font-medium ${
                            selectedTime === time
                              ? 'bg-primary-600 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Search Button */}
                  <div>
                    <button
                      type="button"
                      onClick={handleSearch}
                      disabled={isSearching}
                      className="w-full rounded-full bg-primary-700 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSearching ? 'Buscando...' : 'Buscar disponibilidad'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Results Section */}
              {searchResults.length > 0 && (
                <div className="mt-16">
                  <h2 className="text-2xl font-bold text-gray-900 mb-8">
                    {type === 'clases' ? 'Clases disponibles' : 'Eventos disponibles'}
                  </h2>
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {searchResults.map((activity) => (
                      <div key={activity.id} className="rounded-2xl bg-white p-8 shadow-lg">
                        <h3 className="text-xl font-semibold text-gray-900">{activity.name}</h3>
                        <p className="mt-4 text-gray-600">{activity.description}</p>
                        {activity.instructor && (
                          <p className="mt-2 text-sm text-gray-500">Instructor: {activity.instructor}</p>
                        )}
                        {activity.date && (
                          <p className="mt-2 text-sm text-gray-500">Fecha: {activity.date}</p>
                        )}
                        {activity.location && (
                          <p className="mt-2 text-sm text-gray-500">Ubicación: {activity.location}</p>
                        )}
                        <div className="mt-4 flex items-center justify-between">
                          <span className="text-primary-700 font-semibold">${activity.price}</span>
                          <button 
                            onClick={() => handleReserve(activity.id)}
                            className="rounded-full bg-primary-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-600"
                          >
                            {type === 'clases' ? 'Reservar clase' : 'Inscribirse'}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
} 