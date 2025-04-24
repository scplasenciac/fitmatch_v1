'use client'

import React from 'react'
import Link from 'next/link'

const navigation = [
  { name: 'Inicio', href: 'https://scplasenciac.github.io/fitmatch_v1' },
  { name: 'Servicios', href: 'https://scplasenciac.github.io/fitmatch_v1/services' },
  { name: 'Cómo funciona', href: 'https://scplasenciac.github.io/fitmatch_v1/how-it-works' },
  { name: 'Tips saludables', href: 'https://scplasenciac.github.io/fitmatch_v1/health-tips' },
]

export default function Footer() {
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    window.location.href = href
  }

  return (
    <footer className="bg-white">
      <div className="container py-12 md:flex md:items-center md:justify-between">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavigation(e, item.href)}
              className="text-gray-400 hover:text-gray-500"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <Link 
            href="https://scplasenciac.github.io/fitmatch_v1" 
            onClick={(e) => handleNavigation(e, 'https://scplasenciac.github.io/fitmatch_v1')}
            className="text-xl font-bold text-primary-700"
          >
            FitMatch
          </Link>
          <p className="mt-2 text-center text-sm text-gray-400 md:text-left">
            &copy; {new Date().getFullYear()} FitMatch. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
} 