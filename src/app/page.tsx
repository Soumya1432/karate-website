"use client"
import AboutusSection from '@/components/home/AboutusSection'
import AffiliationProcess from '@/components/home/AffiliationProcess'
import AffiliationsBenefit from '@/components/home/AffiliationsBenefit'
import DedicatedHiringSecion from '@/components/home/DedicatedHiringSecion'
import HeroSection from '@/components/home/HeroSection'
import HomeFaq from '@/components/home/HomeFaq'
import HomePageBanner from '@/components/home/HomePageBanner'
import Header from '@/components/layout/Header'
import React from 'react'

const Homepage = () => {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <AboutusSection/>
      <AffiliationsBenefit/>
      <AffiliationProcess/>
      <HomePageBanner/>
      <DedicatedHiringSecion/>
      <HomeFaq/>
      
    </div>
  )
}

export default Homepage
