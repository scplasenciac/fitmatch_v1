'use client'

import React, { useState, Suspense } from 'react'
import Header from '@/components/Header'
import PaymentGateway from '@/components/PaymentGateway'
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
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchContent />
    </Suspense>
  )
}

function SearchContent() {
  const searchParams = useSearchParams()
  const type = searchParams.get('type')
  const tags = searchParams.get('tags')
  const sort = searchParams.get('sort')

  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedTime, setSelectedTime] = useState('')
  const [selectedDistrict, setSelectedDistrict] = useState('')
  const [selectedSport, setSelectedSport] = useState('')
  const [searchResults, setSearchResults] = useState<Activity[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [selectedCourt, setSelectedCourt] = useState<Activity | null>(null)
  const [showAvailability, setShowAvailability] = useState(false)
  const [showPayment, setShowPayment] = useState(false)
  const [reservationData, setReservationData] = useState<{
    courtName: string
    date: string
    time: string
    price: number
    location: string
  } | null>(null)

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
    ],
    alquileres: [
      { id: 'futbol', name: 'Fútbol' },
      { id: 'tennis', name: 'Tennis' },
      { id: 'volley', name: 'Volley' },
      { id: 'basquet', name: 'Básquet' },
      { id: 'paddle', name: 'Paddle' },
      { id: 'futbol-sala', name: 'Fútbol Sala' }
    ]
  }

  const limaDistricts = [
    'Ancón', 'Ate', 'Barranco', 'Bellavista', 'Breña', 'Callao', 'Carmen de la Legua',
    'Carabayllo', 'Cercado de Lima', 'Chaclacayo', 'Chorrillos', 'Cieneguilla',
    'Comas', 'El Agustino', 'Jesús María', 'La Molina', 'La Perla', 'La Punta',
    'La Victoria', 'Lince', 'Los Olivos', 'Magdalena del Mar', 'Miraflores',
    'Pueblo Libre', 'Puente Piedra', 'San Borja', 'San Isidro', 'San Juan de Miraflores',
    'San Luis', 'San Martín de Porres', 'San Miguel', 'Santa Anita', 'Santa Rosa',
    'Santiago de Surco', 'Surco', 'Ventanilla', 'Villa El Salvador', 'Villa María del Triunfo'
  ]

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
    if (!selectedDistrict || !selectedSport) {
      alert('Por favor selecciona un distrito y un deporte')
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
            location: `Centro Deportivo Principal - ${selectedDistrict}`
          },
          {
            id: '2',
            name: `Clase premium de ${selectedCategory}`,
            description: 'Clase en grupo reducido con atención personalizada',
            price: 45,
            available: true,
            instructor: 'María García',
            location: `Centro Deportivo Premium - ${selectedDistrict}`
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
            location: `Estadio Municipal - ${selectedDistrict}`
          },
          {
            id: '2',
            name: `Torneo: ${selectedCategory}`,
            description: 'Torneo oficial con árbitros certificados',
            price: 75,
            available: true,
            date: selectedDate.toLocaleDateString(),
            location: `Complejo Deportivo Central - ${selectedDistrict}`
          }
        ]
      } else {
        // Default case for alquileres (court rentals)
        const courtNames = [
          `Cancha de ${selectedSport} - Complejo A`,
          `Cancha de ${selectedSport} - Complejo B`,
          `Cancha de ${selectedSport} - Centro Deportivo`,
          `Cancha de ${selectedSport} - Club Deportivo`
        ]
        
        mockResults = courtNames.map((courtName, index) => ({
          id: `${index + 1}`,
          name: courtName,
          description: `Cancha profesional de ${selectedSport.toLowerCase()} con medidas oficiales`,
          price: 100, // Fixed price of S/. 100
          available: true,
          date: '',
          location: `${courtName} - ${selectedDistrict}`
        }))
      }
      
      setSearchResults(mockResults)
      setIsSearching(false)
      
      // Scroll to results section after a short delay
      setTimeout(() => {
        const resultsSection = document.getElementById('results-section')
        if (resultsSection) {
          resultsSection.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          })
        }
      }, 100)
    }, 1000)
  }

  const handleCourtSelection = (court: Activity) => {
    setSelectedCourt(court)
    setShowAvailability(true)
    
    // Scroll to availability section after a short delay to ensure it's rendered
    setTimeout(() => {
      const availabilitySection = document.getElementById('availability-section')
      if (availabilitySection) {
        availabilitySection.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        })
      }
    }, 100)
  }

  const handleReserve = () => {
    if (!selectedCourt || !selectedDate || !selectedTime) {
      alert('Por favor selecciona una fecha y hora')
      return
    }
    
    // Preparar datos de la reserva para la pasarela de pago
    setReservationData({
      courtName: selectedCourt.name,
      date: selectedDate.toLocaleDateString(),
      time: selectedTime,
      price: selectedCourt.price,
      location: selectedCourt.location || 'Ubicación no especificada'
    })
    
    // Abrir pasarela de pago
    setShowPayment(true)
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
                  {/* District Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Distrito
                    </label>
                    <select
                      value={selectedDistrict}
                      onChange={(e) => setSelectedDistrict(e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    >
                      <option value="">Selecciona un distrito</option>
                      {limaDistricts.map((district) => (
                        <option key={district} value={district}>
                          {district}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Sport Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Deporte
                    </label>
                    <div className="mt-2 grid grid-cols-2 gap-3">
                      {categories.alquileres.map((sport) => (
                        <button
                          key={sport.id}
                          onClick={() => setSelectedSport(sport.id)}
                          className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                            selectedSport === sport.id
                              ? 'bg-primary-600 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {sport.name}
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
                      {isSearching ? 'Buscando...' : 'Buscar canchas'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Results Section */}
              {searchResults.length > 0 && (
                <div id="results-section" className="mt-16">
                  <h2 className="text-2xl font-bold text-gray-900 mb-8">
                    Canchas de {selectedSport} en {selectedDistrict}
                  </h2>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Courts List - Left Side */}
                    <div className="space-y-4 max-h-[600px] overflow-y-auto pr-4">
                      {searchResults.map((activity) => (
                        <div key={activity.id} className="rounded-xl bg-white p-4 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                          <div className="flex flex-col h-full">
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-gray-900 mb-2">{activity.name}</h3>
                              <p className="text-sm text-gray-600 mb-3">{activity.description}</p>
                              {activity.location && (
                                <p className="text-xs text-gray-500 mb-3">📍 {activity.location}</p>
                              )}
                              <div className="flex items-center justify-between">
                                <span className="text-lg font-bold text-primary-700">S/. {activity.price}</span>
                                <button 
                                  onClick={() => handleCourtSelection(activity)}
                                  className="rounded-full bg-primary-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-600 transition-colors"
                                >
                                  Seleccionar cancha
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Map - Right Side */}
                    <div className="bg-gray-100 rounded-2xl p-6 h-[600px] flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-4">🗺️</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Mapa de Canchas</h3>
                        <p className="text-gray-600">
                          Aquí se mostrará el mapa interactivo con las ubicaciones de las canchas en {selectedDistrict}
                        </p>
                        <div className="mt-4 p-3 bg-white rounded-lg shadow-sm">
                          <p className="text-sm text-gray-700">
                            <strong>Canchas encontradas:</strong> {searchResults.length}
                          </p>
                          <p className="text-sm text-gray-700">
                            <strong>Distrito:</strong> {selectedDistrict}
                          </p>
                          <p className="text-sm text-gray-700">
                            <strong>Deporte:</strong> {selectedSport}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Availability Section */}
              {showAvailability && selectedCourt && (
                <div id="availability-section" className="mt-16">
                  <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">Verificar disponibilidad</h2>
                        <p className="text-gray-600 mt-2">{selectedCourt.name}</p>
                      </div>
                      <button
                        onClick={() => setShowAvailability(false)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        ✕
                      </button>
                    </div>
                    
                    <div className="space-y-6">
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

                      {/* Reserve Button */}
                      <div>
                        <button
                          type="button"
                          onClick={handleReserve}
                          disabled={!selectedDate || !selectedTime}
                          className="w-full rounded-full bg-primary-700 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Reservar cancha - S/. {selectedCourt.price}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
      
      {/* Payment Gateway */}
      <PaymentGateway 
        isOpen={showPayment}
        onClose={() => setShowPayment(false)}
        reservationData={reservationData}
      />
    </main>
  )
} 