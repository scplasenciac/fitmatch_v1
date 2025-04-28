import React from 'react'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import HowItWorks from '@/components/HowItWorks'
import HealthTips from '@/components/HealthTips'
import AboutUs from '@/components/AboutUs'
import SportSuggestion from '@/components/SportSuggestion'
import Testimonials from '@/components/Testimonials'
import CallToAction from '@/components/CallToAction'
import PricingPlans from '@/components/PricingPlans'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <HowItWorks />
      <HealthTips />
      <AboutUs />
      <SportSuggestion />
      <PricingPlans />
      <Testimonials />
      <CallToAction />
    </main>
  )
} 