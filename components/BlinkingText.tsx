'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const phrases = [
  'canchas',
  'clases',
  'eventos deportivos',
  'comunidad',
  'experiencias'
]

export default function BlinkingText() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length)
    }, 2000) // Change phrase every 2 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-[1.5em] flex items-center">
      <motion.span
        key={currentPhraseIndex}
        className="text-red-600 inline-block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        {phrases[currentPhraseIndex]}
      </motion.span>
    </div>
  )
} 