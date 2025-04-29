'use client'

import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { getImagePath } from '@/utils/imagePath';

export default function SportSuggestion() {
  return (
    <section className="w-full relative py-16 flex justify-center items-center min-h-[350px]">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={getImagePath('deportes.jpg')}
          alt="Deportes fondo"
          className="w-full h-full object-cover object-center md:object-cover sm:object-contain"
        />
        {/* Overlay blanco translúcido */}
        <div className="absolute inset-0 bg-white opacity-70" />
      </div>
      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Icono de diana */}
        <div className="mb-6">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="30" fill="#fff"/>
            <circle cx="32" cy="32" r="22" fill="#FFA726" stroke="#388E3C" strokeWidth="4"/>
            <circle cx="32" cy="32" r="10" fill="#fff" stroke="#388E3C" strokeWidth="4"/>
            <circle cx="32" cy="32" r="4" fill="#388E3C"/>
            <rect x="30" y="6" width="4" height="20" rx="2" fill="#388E3C"/>
            <rect x="38" y="32" width="20" height="4" rx="2" fill="#388E3C"/>
          </svg>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-primary-700 mb-2 uppercase leading-tight">¿NO SABÉS QUÉ<br/>DEPORTE ELEGIR?</h2>
        <p className="text-primary-700 text-base sm:text-lg mb-6 opacity-90">Te ayudamos a encontrar el ideal según tu objetivo</p>
        <button className="mt-2 bg-primary-700 rounded-full p-3 shadow hover:bg-red-800 transition">
          <HiArrowNarrowRight className="text-white text-2xl" />
        </button>
      </div>
    </section>
  );
} 