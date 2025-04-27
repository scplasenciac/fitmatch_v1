import React from 'react';

const PricingPlans = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Planes y Precios</h2>
        
        {/* Pricing Table */}
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse text-center">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-4 border">Beneficios</th>
                <th className="p-4 border">Jugador Casual<br/>(Free)</th>
                <th className="p-4 border">Atleta Activo<br/>(S/14.99/mes)</th>
                <th className="p-4 border bg-[#ffeaa7]">FitChampion<br/>(S/59.99/6 meses)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border">Reserva de canchas manual</td>
                <td className="p-4 border">✓</td>
                <td className="p-4 border">✓</td>
                <td className="p-4 border">✓</td>
              </tr>
              <tr>
                <td className="p-4 border">Exploración de centros deportivos</td>
                <td className="p-4 border">✓</td>
                <td className="p-4 border">✓</td>
                <td className="p-4 border">✓</td>
              </tr>
              <tr>
                <td className="p-4 border">Alertas personalizadas</td>
                <td className="p-4 border">✗</td>
                <td className="p-4 border">✓</td>
                <td className="p-4 border">✓</td>
              </tr>
              <tr>
                <td className="p-4 border">Acceso anticipado a nuevas canchas</td>
                <td className="p-4 border">✗</td>
                <td className="p-4 border">✓</td>
                <td className="p-4 border">✓</td>
              </tr>
              <tr>
                <td className="p-4 border">Ofertas exclusivas mensuales</td>
                <td className="p-4 border">✗</td>
                <td className="p-4 border">✓</td>
                <td className="p-4 border">✓</td>
              </tr>
              <tr>
                <td className="p-4 border">Prioridad en eventos y torneos</td>
                <td className="p-4 border">✗</td>
                <td className="p-4 border">✗</td>
                <td className="p-4 border">✓</td>
              </tr>
              <tr>
                <td className="p-4 border">Sorteos y eventos privados</td>
                <td className="p-4 border">✗</td>
                <td className="p-4 border">✗</td>
                <td className="p-4 border">✓</td>
              </tr>
              <tr>
                <td className="p-4 border">Ahorro por pago anticipado</td>
                <td className="p-4 border">✗</td>
                <td className="p-4 border">✗</td>
                <td className="p-4 border">✓ (más de 30%)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Subscription Buttons */}
        <div className="flex justify-center gap-5 mt-8 flex-wrap">
          <a 
            href="#suscripcion-free" 
            className="bg-[#dfe6e9] text-[#2d3436] px-5 py-3 rounded-lg no-underline font-bold hover:opacity-90 transition-opacity"
          >
            Elegir Jugador Casual
          </a>

          <a 
            href="#suscripcion-activo" 
            className="bg-[#ff7675] text-white px-5 py-3 rounded-lg no-underline font-bold hover:opacity-90 transition-opacity"
          >
            Suscribirme como Atleta Activo
          </a>

          <a 
            href="#suscripcion-champion" 
            className="bg-[#fab1a0] text-white px-5 py-3 rounded-lg no-underline font-bold hover:opacity-90 transition-opacity"
          >
            Suscribirme como FitChampion
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans; 