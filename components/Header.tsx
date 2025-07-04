'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { HiMenu, HiX, HiHome, HiBriefcase, HiLightBulb, HiHeart } from 'react-icons/hi'

const navigation = [
  { 
    name: 'Inicio', 
    href: process.env.NODE_ENV === 'development' ? '/' : 'https://scplasenciac.github.io/fitmatch_v1', 
    icon: HiHome 
  },
  { 
    name: 'Servicios', 
    href: process.env.NODE_ENV === 'development' ? '/#servicios' : 'https://scplasenciac.github.io/fitmatch_v1#servicios', 
    icon: HiBriefcase 
  },
  { 
    name: 'Cómo funciona', 
    href: process.env.NODE_ENV === 'development' ? '/#como-funciona' : 'https://scplasenciac.github.io/fitmatch_v1#como-funciona', 
    icon: HiLightBulb 
  },
  { 
    name: 'Tips saludables', 
    href: process.env.NODE_ENV === 'development' ? '/#tips' : 'https://scplasenciac.github.io/fitmatch_v1#tips', 
    icon: HiHeart 
  },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    window.location.href = href
  }

  const homeLink = process.env.NODE_ENV === 'development' ? '/' : 'https://scplasenciac.github.io/fitmatch_v1'
  const contactLink = process.env.NODE_ENV === 'development' ? '/contact' : 'https://scplasenciac.github.io/fitmatch_v1/contact'

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-sm">
      <nav className="container mx-auto flex items-center justify-between py-6 px-4" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href={homeLink} className="-m-1.5 p-1.5 text-2xl font-bold text-primary-700">
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
            href={contactLink}
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
          <div className="fixed top-0 right-0 z-50 w-72 max-w-full h-screen overflow-y-auto bg-white p-0 sm:ring-1 sm:ring-gray-900/10 shadow-2xl">
            {/* Encabezado del menú */}
            <div className="flex items-center justify-between bg-primary-700 px-4 py-3">
              <span className="text-xl font-bold text-white">Menú</span>
              <button
                type="button"
                className="rounded-md p-2 text-white hover:bg-primary-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Cerrar menú</span>
                <HiX className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            {/* Opciones */}
            <nav className="bg-primary-900 divide-y divide-primary-700 h-full">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      handleNavigation(e, item.href);
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center px-4 py-3 text-base font-semibold text-white hover:bg-primary-700 transition-colors"
                  >
                    <Icon className="mr-3 text-lg" />
                    {item.name}
                  </Link>
                );
              })}
              <Link
                href={contactLink}
                onClick={(e) => {
                  handleNavigation(e, contactLink);
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-center px-4 py-3 text-base font-semibold text-white bg-primary-700 hover:bg-primary-600 transition-colors"
              >
                Únete como partner
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
} 