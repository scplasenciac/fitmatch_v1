import React from 'react'
import Link from 'next/link'

export default function CallToAction() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="relative isolate overflow-hidden bg-primary-100 px-6 py-16 shadow-2xl sm:rounded-3xl sm:px-16 animate-fade-in-up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* USUARIOS */}
            <div>
              <h2 className="text-2xl font-bold text-primary-900 mb-4 text-center md:text-left">USUARIOS</h2>
              <ul className="text-primary-900 text-base space-y-2">
                <li><span className="font-bold">• FREE</span><br /><span className="ml-4">✓ Búsqueda y reserva en directorio</span></li>
                <li><span className="font-bold">• MENSUAL S/9.99</span></li>
                <li className="ml-4">✓ Funciones Plan Freemium</li>
                <li className="ml-4">✓ Recomendaciones avanzadas: <br className="md:hidden"/>Personalización mejorada basada en intereses más detallados.</li>
                <li className="ml-4">✓ Entradas con descuento: <br className="md:hidden"/>Acceso a descuentos exclusivos en eventos seleccionados.</li>
                <li className="ml-4">✓ Comunidad</li>
              </ul>
            </div>
            {/* DUEÑOS DE NEGOCIO */}
            <div>
              <h2 className="text-2xl font-bold text-primary-900 mb-4 text-center md:text-left">DUEÑOS DE NEGOCIO</h2>
              <ul className="text-primary-900 text-base space-y-2">
                <li><span className="font-bold">• FREE</span><br /><span className="ml-4">✓ Registro y visibilidad en directorio</span></li>
                <li className="ml-4">✓ Acceso completo a publicación de eventos</li>
                <li><span className="font-bold">• FEE</span><br /><span className="ml-4">✓ 10% comisión por reserva</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 