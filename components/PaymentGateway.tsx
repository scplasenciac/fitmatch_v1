'use client'

import React, { useState } from 'react'
import { HiX, HiCreditCard, HiLockClosed, HiCheck, HiShieldCheck, HiPhone, HiMail } from 'react-icons/hi'
import { FaWhatsapp, FaFacebookMessenger } from 'react-icons/fa'

interface PaymentGatewayProps {
  isOpen: boolean
  onClose: () => void
  reservationData: {
    courtName: string
    date: string
    time: string
    price: number
    location: string
  } | null
}

export default function PaymentGateway({ isOpen, onClose, reservationData }: PaymentGatewayProps) {
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [cardNumber, setCardNumber] = useState('')
  const [cardHolder, setCardHolder] = useState('')
  const [expiryDate, setExpiryDate] = useState('')
  const [cvv, setCvv] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const paymentMethods = [
    { 
      id: 'yape', 
      name: 'Yape', 
      icon: HiCreditCard,
      description: 'Pago instantáneo con Yape',
      color: 'bg-green-500',
      popular: true
    },
    { 
      id: 'plin', 
      name: 'Plin', 
      icon: HiCreditCard,
      description: 'Pago móvil con Plin',
      color: 'bg-blue-500'
    },
    { 
      id: 'card', 
      name: 'Tarjeta de Crédito/Débito', 
      icon: HiCreditCard,
      description: 'Visa, Mastercard, American Express',
      color: 'bg-purple-500'
    },
    { 
      id: 'transfer', 
      name: 'Transferencia Bancaria', 
      icon: HiCreditCard,
      description: 'BBVA, BCP, Interbank',
      color: 'bg-gray-500'
    }
  ]

  const handleCardNumberChange = (value: string) => {
    // Formatear número de tarjeta con espacios
    const formatted = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim()
    setCardNumber(formatted)
  }

  const handleExpiryChange = (value: string) => {
    // Formatear fecha de expiración
    const formatted = value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2')
    setExpiryDate(formatted)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    
    // Simular procesamiento de pago
    setTimeout(() => {
      setIsProcessing(false)
      setIsSuccess(true)
      // Aquí se integraría con una pasarela real como Stripe, PayPal, etc.
    }, 2000)
  }

  const handleSuccess = () => {
    onClose()
    setIsSuccess(false)
    // Reset form
    setCardNumber('')
    setCardHolder('')
    setExpiryDate('')
    setCvv('')
  }

  if (!isOpen || !reservationData) return null

  return (
    <div className="fixed inset-0 z-50">
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm" 
        aria-hidden="true" 
        onClick={onClose}
      />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-xl font-bold text-gray-900">Confirmar Reserva</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <HiX className="h-6 w-6" />
            </button>
          </div>

          {!isSuccess ? (
            <>
                        {/* Reservation Summary */}
          <div className="p-6 border-b bg-gradient-to-r from-primary-600 to-primary-700 text-white">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-lg">Resumen de Compra</h3>
              <div className="text-right">
                <div className="text-2xl font-bold">S/. {reservationData.price}</div>
                <div className="text-sm opacity-90">Precio final</div>
              </div>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <span className="opacity-90">Cancha:</span>
                <span className="font-medium">{reservationData.courtName}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="opacity-90">Fecha:</span>
                <span className="font-medium">{reservationData.date}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="opacity-90">Hora:</span>
                <span className="font-medium">{reservationData.time}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="opacity-90">Ubicación:</span>
                <span className="font-medium">{reservationData.location}</span>
              </div>
            </div>
          </div>

              {/* Payment Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {/* Payment Methods */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Selecciona tu método de pago
                    </label>
                    <span className="text-xs text-gray-500">Pago 100% seguro</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {paymentMethods.map((method) => {
                      const Icon = method.icon
                      return (
                        <button
                          key={method.id}
                          type="button"
                          onClick={() => setPaymentMethod(method.id)}
                          className={`relative p-4 rounded-xl border-2 transition-all duration-200 ${
                            paymentMethod === method.id
                              ? 'border-primary-600 bg-primary-50 shadow-lg scale-105'
                              : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                          }`}
                        >
                          {method.popular && (
                            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                              Popular
                            </span>
                          )}
                          <div className="text-center">
                            <div className={`w-12 h-12 ${method.color} rounded-full flex items-center justify-center mx-auto mb-2`}>
                              <Icon className="h-6 w-6 text-white" />
                            </div>
                            <div className="font-semibold text-gray-900 text-sm">{method.name}</div>
                            <div className="text-xs text-gray-500 mt-1">{method.description}</div>
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Card Details */}
                {paymentMethod === 'card' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Número de Tarjeta
                      </label>
                      <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => handleCardNumberChange(e.target.value)}
                        placeholder="1234 5678 9012 3456"
                        maxLength={19}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Titular
                        </label>
                        <input
                          type="text"
                          value={cardHolder}
                          onChange={(e) => setCardHolder(e.target.value)}
                          placeholder="NOMBRE APELLIDO"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Vencimiento
                        </label>
                        <input
                          type="text"
                          value={expiryDate}
                          onChange={(e) => handleExpiryChange(e.target.value)}
                          placeholder="MM/YY"
                          maxLength={5}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value.replace(/\D/g, ''))}
                        placeholder="123"
                        maxLength={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                )}

                {/* Security and Support */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-600">
                      <HiLockClosed className="h-4 w-4 mr-2 text-green-600" />
                      <span>Pago 100% seguro</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <HiShieldCheck className="h-4 w-4 mr-2 text-blue-600" />
                      <span>Certificado SSL</span>
                    </div>
                  </div>
                  
                  {/* Support Options */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-3">¿Necesitas ayuda?</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <button type="button" className="flex items-center justify-center p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                        <FaWhatsapp className="h-4 w-4 mr-2" />
                        <span className="text-sm">WhatsApp</span>
                      </button>
                      <button type="button" className="flex items-center justify-center p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                        <FaFacebookMessenger className="h-4 w-4 mr-2" />
                        <span className="text-sm">Messenger</span>
                      </button>
                    </div>
                    <div className="mt-3 text-center">
                      <button type="button" className="flex items-center justify-center mx-auto text-sm text-gray-600 hover:text-gray-800">
                        <HiPhone className="h-4 w-4 mr-1" />
                        <span>Llamar al +51 999 888 777</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-primary-700 hover:to-primary-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg"
                >
                  {isProcessing ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Procesando pago...
                    </div>
                  ) : (
                    `Pagar S/. ${reservationData.price}`
                  )}
                </button>
              </form>
            </>
          ) : (
            /* Success State */
            <div className="p-6 text-center">
              <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-r from-green-400 to-green-600 mb-6">
                <HiCheck className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">¡Pago Exitoso!</h3>
              <p className="text-gray-600 mb-6">
                Tu reserva ha sido confirmada. Recibirás un email con los detalles.
              </p>
              
              {/* Reservation Details */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 mb-6 border border-green-200">
                <h4 className="font-semibold text-gray-900 mb-4">Detalles de tu reserva</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Cancha:</span>
                    <span className="font-medium">{reservationData.courtName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Fecha:</span>
                    <span className="font-medium">{reservationData.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Hora:</span>
                    <span className="font-medium">{reservationData.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Código:</span>
                    <span className="font-mono bg-white px-3 py-1 rounded-lg border">FM-{Date.now().toString().slice(-6)}</span>
                  </div>
                </div>
              </div>

              {/* Next Steps */}
              <div className="bg-blue-50 rounded-xl p-4 mb-6">
                <h4 className="font-medium text-blue-900 mb-2">Próximos pasos:</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Llega 10 minutos antes de tu hora</li>
                  <li>• Presenta tu código de reserva</li>
                  <li>• ¡Disfruta tu partido!</li>
                </ul>
              </div>

              <button
                onClick={handleSuccess}
                className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-200 shadow-lg"
              >
                Continuar
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 