import React from 'react';

const plans = [
  {
    name: 'Jugador Casual',
    price: 'Free',
    features: [
      { text: 'Reserva de canchas manual', included: true },
      { text: 'Exploración de centros deportivos', included: true },
      { text: 'Alertas personalizadas', included: false },
      { text: 'Acceso anticipado a nuevas canchas', included: false },
      { text: 'Ofertas exclusivas mensuales', included: false },
      { text: 'Prioridad en eventos y torneos', included: false },
      { text: 'Sorteos y eventos privados', included: false },
      { text: 'Ahorro por pago anticipado', included: false },
    ],
    buttonText: 'Elegir Jugador Casual',
    buttonClass: 'bg-[#dfe6e9] text-[#2d3436]',
  },
  {
    name: 'Atleta Activo',
    price: 'S/14.99/mes',
    features: [
      { text: 'Reserva de canchas manual', included: true },
      { text: 'Exploración de centros deportivos', included: true },
      { text: 'Alertas personalizadas', included: true },
      { text: 'Acceso anticipado a nuevas canchas', included: true },
      { text: 'Ofertas exclusivas mensuales', included: true },
      { text: 'Prioridad en eventos y torneos', included: false },
      { text: 'Sorteos y eventos privados', included: false },
      { text: 'Ahorro por pago anticipado', included: false },
    ],
    buttonText: 'Suscribirme como Atleta Activo',
    buttonClass: 'bg-[#ff7675] text-white',
  },
  {
    name: 'FitChampion',
    price: 'S/59.99/6 meses',
    features: [
      { text: 'Reserva de canchas manual', included: true },
      { text: 'Exploración de centros deportivos', included: true },
      { text: 'Alertas personalizadas', included: true },
      { text: 'Acceso anticipado a nuevas canchas', included: true },
      { text: 'Ofertas exclusivas mensuales', included: true },
      { text: 'Prioridad en eventos y torneos', included: true },
      { text: 'Sorteos y eventos privados', included: true },
      { text: 'Ahorro por pago anticipado', included: true },
    ],
    buttonText: 'Suscribirme como FitChampion',
    buttonClass: 'bg-[#fab1a0] text-white',
    highlighted: true,
  },
];

const PricingPlans = () => {
  return (
    <section id="planes" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Planes y Precios</h2>
        
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`rounded-2xl p-6 border-2 border-black ${
                plan.highlighted 
                  ? 'bg-[#ffeaa7] shadow-lg scale-105' 
                  : 'bg-white shadow'
              }`}
            >
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-2xl font-bold mb-6">{plan.price}</p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">
                      {feature.included ? '✓' : '✗'}
                    </span>
                    <span className={feature.included ? 'text-gray-900' : 'text-gray-500'}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <a 
                href={`#suscripcion-${plan.name.toLowerCase().replace(' ', '-')}`}
                className={`block w-full text-center px-5 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity ${plan.buttonClass}`}
              >
                {plan.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans; 