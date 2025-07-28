'use client'

import React, { useState } from 'react'
import Header from '@/components/Header'
import { 
  HiUser, 
  HiHeart, 
  HiCalendar, 
  HiStar, 
  HiChartBar, 
  HiUserGroup, 
  HiGift,
  HiCog,
  HiLogout,
  HiAcademicCap
} from 'react-icons/hi'

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

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('dashboard')

  const menuItems = [
    {
      id: 'dashboard',
      name: 'Dashboard de Salud',
      icon: HiHeart,
      description: 'Estadísticas basadas en tus reservas y actividades'
    },
    {
      id: 'personal',
      name: 'Datos Personales',
      icon: HiUser,
      description: 'Información personal y preferencias'
    },
    {
      id: 'calendar',
      name: 'Calendario',
      icon: HiCalendar,
      description: 'Eventos deportivos y reservas'
    },
    {
      id: 'missions',
      name: 'Misiones Semanales',
      icon: HiAcademicCap,
      description: 'Retos y objetivos semanales'
    },
    {
      id: 'badges',
      name: 'Insignias',
      icon: HiStar,
      description: 'Logros y reconocimientos'
    },
    {
      id: 'ranking',
      name: 'Ranking',
      icon: HiChartBar,
      description: 'Tabla de líderes estilo Duolingo'
    },
    {
      id: 'collaborative',
      name: 'Retos Colaborativos',
      icon: HiUserGroup,
      description: 'Desafíos en equipo'
    },
    {
      id: 'rewards',
      name: 'Recompensas',
      icon: HiGift,
      description: 'Puntos y beneficios'
    }
  ]

  const mockUserData = {
    name: 'Usuario FitMatch',
    level: 15,
    xp: 1250,
    nextLevel: 2000,
    totalReservations: 47,
    totalActivities: 23,
    currentStreak: 7,
    badges: 12,
    ranking: 8
  }

  const mockHealthStats = {
    weeklyActivities: 4,
    monthlyActivities: 16,
    caloriesBurned: 2840,
    activeMinutes: 320,
    favoriteSport: 'Fútbol',
    improvement: '+15%'
  }

  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">{mockUserData.name}</h3>
          <div className="text-right">
            <div className="text-2xl font-bold">Nivel {mockUserData.level}</div>
            <div className="text-sm opacity-90">{mockUserData.xp}/{mockUserData.nextLevel} XP</div>
          </div>
        </div>
        <div className="w-full bg-white/20 rounded-full h-2 mb-4">
          <div 
            className="bg-white h-2 rounded-full transition-all duration-300"
            style={{ width: `${(mockUserData.xp / mockUserData.nextLevel) * 100}%` }}
          />
        </div>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold">{mockUserData.totalReservations}</div>
            <div className="text-xs opacity-90">Reservas</div>
          </div>
          <div>
            <div className="text-2xl font-bold">{mockUserData.currentStreak}</div>
            <div className="text-xs opacity-90">Días seguidos</div>
          </div>
          <div>
            <div className="text-2xl font-bold">{mockUserData.badges}</div>
            <div className="text-xs opacity-90">Insignias</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-gray-900">Actividades</h4>
            <span className="text-green-600 text-sm font-medium">{mockHealthStats.improvement}</span>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Esta semana:</span>
              <span className="font-medium">{mockHealthStats.weeklyActivities}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Este mes:</span>
              <span className="font-medium">{mockHealthStats.monthlyActivities}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Calorías quemadas:</span>
              <span className="font-medium">{mockHealthStats.caloriesBurned}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <h4 className="font-semibold text-gray-900 mb-4">Ranking</h4>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600">#{mockUserData.ranking}</div>
            <div className="text-sm text-gray-600">en tu distrito</div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderTabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return renderDashboard()
      case 'personal':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Datos Personales</h3>
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombre completo</label>
                  <input type="text" defaultValue="Usuario FitMatch" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" defaultValue="usuario@fitmatch.com" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Distrito</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                    <option>Miraflores</option>
                    <option>San Isidro</option>
                    <option>Lince</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Deporte favorito</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                    <option>Fútbol</option>
                    <option>Tennis</option>
                    <option>Básquet</option>
                    <option>Volley</option>
                  </select>
                </div>
                <button className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                  Guardar Cambios
                </button>
              </div>
            </div>
          </div>
        )
      case 'calendar':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Calendario de Eventos</h3>
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-primary-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">Torneo de Fútbol</div>
                    <div className="text-sm text-gray-600">15 de Marzo, 18:00</div>
                  </div>
                  <span className="px-3 py-1 bg-primary-600 text-white text-sm rounded-full">Confirmado</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">Clase de Yoga</div>
                    <div className="text-sm text-gray-600">18 de Marzo, 19:00</div>
                  </div>
                  <span className="px-3 py-1 bg-gray-600 text-white text-sm rounded-full">Pendiente</span>
                </div>
              </div>
            </div>
          </div>
        )
      case 'missions':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Misiones Semanales</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Completar 3 reservas', progress: 2, total: 3, reward: '50 XP' },
                { title: 'Probar un nuevo deporte', progress: 0, total: 1, reward: '100 XP' },
                { title: 'Invitar 2 amigos', progress: 1, total: 2, reward: '75 XP' },
                { title: 'Mantener racha de 7 días', progress: 5, total: 7, reward: '150 XP' }
              ].map((mission, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-medium text-gray-900">{mission.title}</h4>
                    <span className="text-sm font-medium text-primary-600">{mission.reward}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                    <div 
                      className="bg-primary-600 h-3 rounded-full transition-all duration-300"
                      style={{ width: `${(mission.progress / mission.total) * 100}%` }}
                    />
                  </div>
                  <div className="text-sm text-gray-600">
                    {mission.progress}/{mission.total} completado
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      case 'badges':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Insignias</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'Primera Reserva', icon: '🏆', earned: true },
                { name: 'Deportista Activo', icon: '💪', earned: true },
                { name: 'Líder del Equipo', icon: '👑', earned: true },
                { name: 'Maratón Completo', icon: '🏃', earned: false },
                { name: 'Yoga Master', icon: '🧘', earned: false },
                { name: 'Fútbol Pro', icon: '⚽', earned: true },
                { name: 'Amigo Social', icon: '🤝', earned: true },
                { name: 'Consistencia', icon: '📈', earned: false }
              ].map((badge, index) => (
                <div key={index} className={`text-center p-6 rounded-xl border ${badge.earned ? 'bg-white shadow-sm' : 'bg-gray-100 opacity-50'}`}>
                  <div className="text-4xl mb-3">{badge.icon}</div>
                  <div className="font-medium text-gray-900">{badge.name}</div>
                  {badge.earned && <div className="text-sm text-green-600 mt-2">¡Ganada!</div>}
                </div>
              ))}
            </div>
          </div>
        )
      case 'ranking':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Ranking - Tu Distrito</h3>
            <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
              {[
                { name: 'Carlos R.', level: 18, xp: 2100, position: 1 },
                { name: 'Ana M.', level: 16, xp: 1850, position: 2 },
                { name: 'Luis P.', level: 15, xp: 1700, position: 3 },
                { name: 'María S.', level: 14, xp: 1600, position: 4 },
                { name: 'Tú', level: 15, xp: 1250, position: 8 }
              ].map((user, index) => (
                <div key={index} className={`flex items-center justify-between p-4 ${user.name === 'Tú' ? 'bg-primary-50 border-primary-200' : 'border-b'} border-gray-100`}>
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                      user.position === 1 ? 'bg-yellow-500 text-white' :
                      user.position === 2 ? 'bg-gray-400 text-white' :
                      user.position === 3 ? 'bg-orange-500 text-white' :
                      'bg-gray-200 text-gray-700'
                    }`}>
                      {user.position}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{user.name}</div>
                      <div className="text-sm text-gray-600">Nivel {user.level}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-gray-900">{user.xp} XP</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      case 'collaborative':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Retos Colaborativos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Torneo de Fútbol', participants: 24, maxParticipants: 32, daysLeft: 3, prize: 'S/. 500' },
                { title: 'Maratón Urbana', participants: 156, maxParticipants: 200, daysLeft: 7, prize: 'S/. 1000' },
                { title: 'Clase de Yoga Masiva', participants: 89, maxParticipants: 100, daysLeft: 2, prize: 'S/. 200' },
                { title: 'Torneo de Tennis', participants: 12, maxParticipants: 16, daysLeft: 5, prize: 'S/. 300' }
              ].map((challenge, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-medium text-gray-900">{challenge.title}</h4>
                    <span className="text-sm font-medium text-primary-600">{challenge.daysLeft} días</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Participantes:</span>
                      <span>{challenge.participants}/{challenge.maxParticipants}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Premio:</span>
                      <span className="font-medium text-green-600">{challenge.prize}</span>
                    </div>
                    <button className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors">
                      Unirse al Reto
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      case 'rewards':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Recompensas</h3>
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-primary-600">1,250</div>
                <div className="text-lg text-gray-600">Puntos FitMatch</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center justify-between p-4 bg-primary-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">Descuento 20%</div>
                    <div className="text-sm text-gray-600">En tu próxima reserva</div>
                  </div>
                  <span className="text-sm font-medium text-primary-600">500 pts</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">Clase Gratuita</div>
                    <div className="text-sm text-gray-600">Cualquier deporte</div>
                  </div>
                  <span className="text-sm font-medium text-gray-600">1000 pts</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">VIP por 1 mes</div>
                    <div className="text-sm text-gray-600">Acceso prioritario</div>
                  </div>
                  <span className="text-sm font-medium text-gray-600">2000 pts</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">Entrenador Personal</div>
                    <div className="text-sm text-gray-600">1 sesión gratis</div>
                  </div>
                  <span className="text-sm font-medium text-gray-600">1500 pts</span>
                </div>
              </div>
            </div>
          </div>
        )
      default:
        return renderDashboard()
    }
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Mi Perfil</h1>
            <p className="text-gray-600 mt-2">Gestiona tu cuenta y revisa tu progreso</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <nav className="space-y-2">
                  {menuItems.map((item) => {
                    const Icon = item.icon
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full flex items-center p-3 rounded-lg text-left transition-colors ${
                          activeTab === item.id
                            ? 'bg-primary-600 text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <Icon className="h-5 w-5 mr-3" />
                        <div>
                          <div className="font-medium">{item.name}</div>
                          <div className="text-xs opacity-75">{item.description}</div>
                        </div>
                      </button>
                    )
                  })}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-sm border p-8">
                {renderTabContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 