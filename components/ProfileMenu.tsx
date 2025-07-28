'use client'

import React, { useState } from 'react'
import { 
  HiUser, 
  HiHeart, 
  HiCalendar, 
  HiStar, 
  HiChartBar, 
  HiUserGroup, 
  HiGift,
  HiX,
  HiCog,
  HiLogout
} from 'react-icons/hi'
import { HiAcademicCap } from 'react-icons/hi'

interface ProfileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function ProfileMenu({ isOpen, onClose }: ProfileMenuProps) {
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

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-xl p-4 shadow-sm border">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-gray-900">Actividades</h4>
            <span className="text-green-600 text-sm font-medium">{mockHealthStats.improvement}</span>
          </div>
          <div className="space-y-2">
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

        <div className="bg-white rounded-xl p-4 shadow-sm border">
          <h4 className="font-semibold text-gray-900 mb-2">Ranking</h4>
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
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Datos Personales</h3>
            <div className="bg-white rounded-xl p-4 shadow-sm border">
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nombre completo</label>
                  <input type="text" defaultValue="Usuario FitMatch" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" defaultValue="usuario@fitmatch.com" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Distrito</label>
                  <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500">
                    <option>Miraflores</option>
                    <option>San Isidro</option>
                    <option>Lince</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )
      case 'calendar':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Calendario de Eventos</h3>
            <div className="bg-white rounded-xl p-4 shadow-sm border">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-primary-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">Torneo de Fútbol</div>
                    <div className="text-sm text-gray-600">15 de Marzo, 18:00</div>
                  </div>
                  <span className="px-2 py-1 bg-primary-600 text-white text-xs rounded-full">Confirmado</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">Clase de Yoga</div>
                    <div className="text-sm text-gray-600">18 de Marzo, 19:00</div>
                  </div>
                  <span className="px-2 py-1 bg-gray-600 text-white text-xs rounded-full">Pendiente</span>
                </div>
              </div>
            </div>
          </div>
        )
      case 'missions':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Misiones Semanales</h3>
            <div className="space-y-3">
              {[
                { title: 'Completar 3 reservas', progress: 2, total: 3, reward: '50 XP' },
                { title: 'Probar un nuevo deporte', progress: 0, total: 1, reward: '100 XP' },
                { title: 'Invitar 2 amigos', progress: 1, total: 2, reward: '75 XP' }
              ].map((mission, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-sm border">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900">{mission.title}</h4>
                    <span className="text-sm font-medium text-primary-600">{mission.reward}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(mission.progress / mission.total) * 100}%` }}
                    />
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    {mission.progress}/{mission.total} completado
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      case 'badges':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Insignias</h3>
            <div className="grid grid-cols-3 gap-4">
              {[
                { name: 'Primera Reserva', icon: '🏆', earned: true },
                { name: 'Deportista Activo', icon: '💪', earned: true },
                { name: 'Líder del Equipo', icon: '👑', earned: true },
                { name: 'Maratón Completo', icon: '🏃', earned: false },
                { name: 'Yoga Master', icon: '🧘', earned: false },
                { name: 'Fútbol Pro', icon: '⚽', earned: true }
              ].map((badge, index) => (
                <div key={index} className={`text-center p-3 rounded-xl border ${badge.earned ? 'bg-white shadow-sm' : 'bg-gray-100 opacity-50'}`}>
                  <div className="text-3xl mb-2">{badge.icon}</div>
                  <div className="text-xs font-medium text-gray-900">{badge.name}</div>
                  {badge.earned && <div className="text-xs text-green-600 mt-1">¡Ganada!</div>}
                </div>
              ))}
            </div>
          </div>
        )
      case 'ranking':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Ranking - Tu Distrito</h3>
            <div className="space-y-2">
              {[
                { name: 'Carlos R.', level: 18, xp: 2100, position: 1 },
                { name: 'Ana M.', level: 16, xp: 1850, position: 2 },
                { name: 'Luis P.', level: 15, xp: 1700, position: 3 },
                { name: 'María S.', level: 14, xp: 1600, position: 4 },
                { name: 'Tú', level: 15, xp: 1250, position: 8 }
              ].map((user, index) => (
                <div key={index} className={`flex items-center justify-between p-3 rounded-lg ${user.name === 'Tú' ? 'bg-primary-100 border-primary-300' : 'bg-white'} border`}>
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      user.position === 1 ? 'bg-yellow-500 text-white' :
                      user.position === 2 ? 'bg-gray-400 text-white' :
                      user.position === 3 ? 'bg-orange-500 text-white' :
                      'bg-gray-200 text-gray-700'
                    }`}>
                      {user.position}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{user.name}</div>
                      <div className="text-xs text-gray-600">Nivel {user.level}</div>
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
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Retos Colaborativos</h3>
            <div className="space-y-3">
              {[
                { title: 'Torneo de Fútbol', participants: 24, maxParticipants: 32, daysLeft: 3 },
                { title: 'Maratón Urbana', participants: 156, maxParticipants: 200, daysLeft: 7 },
                { title: 'Clase de Yoga Masiva', participants: 89, maxParticipants: 100, daysLeft: 2 }
              ].map((challenge, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-sm border">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900">{challenge.title}</h4>
                    <span className="text-sm font-medium text-primary-600">{challenge.daysLeft} días</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{challenge.participants}/{challenge.maxParticipants} participantes</span>
                    <button className="px-3 py-1 bg-primary-600 text-white text-xs rounded-full hover:bg-primary-700">
                      Unirse
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      case 'rewards':
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Recompensas</h3>
            <div className="bg-white rounded-xl p-4 shadow-sm border">
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-primary-600">1,250</div>
                <div className="text-sm text-gray-600">Puntos FitMatch</div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-primary-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">Descuento 20%</div>
                    <div className="text-sm text-gray-600">En tu próxima reserva</div>
                  </div>
                  <span className="text-sm font-medium text-primary-600">500 pts</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">Clase Gratuita</div>
                    <div className="text-sm text-gray-600">Cualquier deporte</div>
                  </div>
                  <span className="text-sm font-medium text-gray-600">1000 pts</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">VIP por 1 mes</div>
                    <div className="text-sm text-gray-600">Acceso prioritario</div>
                  </div>
                  <span className="text-sm font-medium text-gray-600">2000 pts</span>
                </div>
              </div>
            </div>
          </div>
        )
      default:
        return renderDashboard()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50">
      <div 
        className="fixed inset-0 bg-black/20 backdrop-blur-sm" 
        aria-hidden="true" 
        onClick={onClose}
      />
      <div className="fixed top-0 right-0 z-50 w-96 max-w-full h-screen overflow-y-auto bg-gray-50 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between bg-primary-700 px-6 py-4">
          <h2 className="text-xl font-bold text-white">Mi Perfil</h2>
          <button
            type="button"
            className="rounded-md p-2 text-white hover:bg-primary-600"
            onClick={onClose}
          >
            <HiX className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white border-b">
          <div className="flex overflow-x-auto">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex-shrink-0 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === item.id
                      ? 'border-primary-600 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {item.name}
                </button>
              )
            })}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {renderTabContent()}
        </div>

        {/* Footer */}
        <div className="bg-white border-t p-4">
          <div className="flex items-center justify-between">
            <button className="flex items-center text-sm text-gray-600 hover:text-gray-900">
              <HiCog className="h-4 w-4 mr-2" />
              Configuración
            </button>
            <button className="flex items-center text-sm text-red-600 hover:text-red-700">
              <HiLogout className="h-4 w-4 mr-2" />
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 