'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { HiMenu, HiX } from 'react-icons/hi'

const navigation = [
  { name: 'Inicio', href: 'https://scplasenciac.github.io/fitmatch_v1' },
  { name: 'Servicios', href: 'https://scplasenciac.github.io/fitmatch_v1#servicios' },
  { name: 'Cómo funciona', href: 'https://scplasenciac.github.io/fitmatch_v1#como-funciona' },
  { name: 'Tips saludables', href: 'https://scplasenciac.github.io/fitmatch_v1#tips' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    window.location.href = href
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-sm">
      <nav className="container mx-auto flex items-center justify-between py-6 px-4" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="https://scplasenciac.github.io/fitmatch_v1" className="-m-1.5 p-1.5 text-2xl font-bold text-primary-700">
            FitMatch
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menú principal</span>
            <HiMenu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavigation(e, item.href)}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary-700"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="https://scplasenciac.github.io/fitmatch_v1/contact"
            className="rounded-full bg-primary-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-600"
          >
            Únete como partner
          </Link>
        </div>
      </nav>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50">
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm" 
            aria-hidden="true" 
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="https://scplasenciac.github.io/fitmatch_v1" className="-m-1.5 p-1.5 text-2xl font-bold text-primary-700">
                FitMatch
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Cerrar menú</span>
                <HiX className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6">
              <div className="space-y-2 py-6">
                <Link
                  href="https://scplasenciac.github.io/fitmatch_v1"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 rounded-lg"
                >
                  Inicio
                </Link>
                <Link
                  href="https://scplasenciac.github.io/fitmatch_v1#servicios"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 rounded-lg"
                >
                  Servicios
                </Link>
                <Link
                  href="https://scplasenciac.github.io/fitmatch_v1#como-funciona"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 rounded-lg"
                >
                  Cómo funciona
                </Link>
                <Link
                  href="https://scplasenciac.github.io/fitmatch_v1#tips"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 rounded-lg"
                >
                  Tips saludables
                </Link>
              </div>
              <div className="py-6">
                <Link
                  href="https://scplasenciac.github.io/fitmatch_v1/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full rounded-full bg-primary-700 px-4 py-2.5 text-center text-base font-semibold text-white shadow-sm hover:bg-primary-600"
                >
                  Únete como partner
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
} 