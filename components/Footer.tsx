'use client'

import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="container py-12 md:flex md:items-center md:justify-between">
        <div className="mt-8 md:order-1 md:mt-0">
          <Link 
            href="https://scplasenciac.github.io/fitmatch_v1" 
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