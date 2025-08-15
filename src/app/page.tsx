import AboutusSection from '@/components/home/AboutusSection'
import HeroSection from '@/components/home/HeroSection'
import Header from '@/components/layout/Header'
import React from 'react'

const Homepage = () => {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <AboutusSection/>
    </div>
  )
}

export default Homepage
